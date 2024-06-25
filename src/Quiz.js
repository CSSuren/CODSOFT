import React, { useState, useEffect } from "react";
import ScoreDisplay from "./ScoreDisplay";
import Question from "./Question";
import "./Quiz.css";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (currentQuestion === questions.length) {
      setShowScore(true);
    }
  }, [currentQuestion, questions.length]);

  const handleSelectAnswer = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="quiz">
      {showScore ? (
        <ScoreDisplay
          score={calculateScore()}
          totalQuestions={questions.length}
        />
      ) : (
        <>
          <Question
            question={questions[currentQuestion].text}
            options={questions[currentQuestion].options}
            onSelectAnswer={handleSelectAnswer}
          />
          <button onClick={handleNextQuestion}>Next Question</button>
        </>
      )}
    </div>
  );
};

export default Quiz;

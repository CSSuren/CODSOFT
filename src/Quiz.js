import React, { useState, useEffect } from "react";
import ScoreDisplay from "./ScoreDisplay";
import Question from "./Question";
import "./Quiz.css";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setShowScore(true);
      setTimerRunning(false);
    }
  }, [timerRunning, timeLeft]);

  useEffect(() => {
    setTimerRunning(true);

    return () => {
      setTimerRunning(false);
    };
  }, []);

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
      setTimerRunning(false);
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

  const correctAnswers = calculateScore();
  const incorrectAnswers = questions.length - correctAnswers;

  return (
    <div className="quiz">
      <div className="timer-box">
        <div className="timer">Time Left: {timeLeft} seconds</div>
      </div>
      {showScore ? (
        <ScoreDisplay
          score={correctAnswers}
          totalQuestions={questions.length}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
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

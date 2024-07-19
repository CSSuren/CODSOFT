import React from "react";
import "./ScoreDisplay.css";

const ScoreDisplay = ({
  score,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
}) => {
  const percentageScore = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="score-container">
      <h2>Quiz Results</h2>
      <p>Your Score: {percentageScore}%</p>
      <div className="summary">
        <p>Summary</p>
        <p>Correct Answers: {correctAnswers}</p>
        <p>Incorrect Answers: {incorrectAnswers}</p>
      </div>
    </div>
  );
};

export default ScoreDisplay;

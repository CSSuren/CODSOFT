import React from "react";
import "./ScoreDisplay.css";

const ScoreDisplay = ({ score, totalQuestions }) => {
  return (
    <div className="score-display">
      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>
    </div>
  );
};

export default ScoreDisplay;

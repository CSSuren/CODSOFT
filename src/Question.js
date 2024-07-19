import React, { useState } from "react";
import "./Question.css";

const Question = ({ question, options, onSelectAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onSelectAnswer(event.target.value);
  };

  return (
    <div className="question">
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

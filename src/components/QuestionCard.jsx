import React from "react";

const QuestionCard = ({ question, onSelect }) => (
  <div className="question-card">
    <h3>{question.question}</h3>
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option.effect)}
          className="option-btn"
        >
          {option.text}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;

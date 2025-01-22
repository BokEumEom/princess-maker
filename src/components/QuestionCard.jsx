import React from "react";

const QuestionCard = ({ question, onSelect, triggerRandomEvent }) => (
  <div className="question-card">
    <h3>{question.question}</h3>
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            onSelect(option.effect, option); // 옵션 전달
            if (option.triggerEvent) {
              triggerRandomEvent(); // 랜덤 이벤트 발생
            }
          }}
          className="option-btn"
        >
          {option.text}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;
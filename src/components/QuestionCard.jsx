const QuestionCard = ({ question, onSelect, triggerRandomEvent }) => {
  const handleClick = (effect, option) => {
    onSelect(effect, option);

    // 랜덤 이벤트 트리거
    if (option.triggerEvent) {
      triggerRandomEvent();
    }
  };

  return (
    <div className="question-card">
      <h3 className="question-text">{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => handleClick(option.effect, option)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
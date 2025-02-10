/* QuestionCard.jsx */
import Avatar from "./Avatar";

const QuestionCard = ({ question, onSelect, triggerRandomEvent, avatar }) => {
  const handleClick = (effect, option) => {
    onSelect(effect, option);
    if (option.triggerEvent) {
      triggerRandomEvent();
    }
  };

  return (
    <div className="full-screen-card">
      {/* 배경 이미지 */}
      {question.image && (
        <div className="background-image">
          <img src={question.image} alt="질문 이미지" />
        </div>
      )}

      {/* 아바타 오버레이 */}
      <div className="avatar-overlay">
        <Avatar avatar={avatar} />
      </div>

      {/* 질문 및 선택지 */}
      <div className="overlay-content">
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
    </div>
  );
};

export default QuestionCard;

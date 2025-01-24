// src/components/QuestionCard.jsx
import Avatar from './Avatar';

const QuestionCard = ({ question, onSelect, triggerRandomEvent, avatar }) => {
  const handleClick = (effect, option) => {
    onSelect(effect, option);

    // 랜덤 이벤트 트리거
    if (option.triggerEvent) {
      triggerRandomEvent();
    }
  };

  return (
    <div className="question-card">
      {/* 질문 이미지와 아바타 오버레이 */}
      {question.image && (
        <div className="question-image-wrapper">
          <img
            src={question.image}
            alt="질문 이미지"
            className="question-image"
          />
          {/* 아바타 오버레이 */}
          <div className="avatar-overlay">
            <Avatar avatar={avatar} />
          </div>
        </div>
      )}

      {/* 질문 텍스트 */}
      <h3 className="question-text">{question.question}</h3>

      {/* 선택지 버튼 */}
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
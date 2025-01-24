// src/components/QuestionSection.jsx
import QuestionCard from './QuestionCard';
import StoryProgress from './StoryProgress';

const QuestionSection = ({
  currentQuestion,
  onSelect,
  newStory,
  acquiredItem,
  navigateToSummary,
  avatar, // avatar prop 추가
}) => {
  return (
    <div className="question-section">
      {currentQuestion ? (
        <>
          {/* QuestionCard에 avatar prop 전달 */}
          <QuestionCard
            question={currentQuestion}
            onSelect={onSelect}
            avatar={avatar} // avatar prop 추가
          />
          {newStory && (
            <div className="new-story">
              <div className="new-story-header">
                <i className="fas fa-scroll"></i>
                <span>새로운 스토리 이벤트</span>
              </div>
              <p className="new-story-text">{newStory}</p>
            </div>
          )}
          {acquiredItem && (
            <div className="item-notification">
              <div className="item-notification-header">
                <img
                  src={acquiredItem.image}
                  alt={acquiredItem.name}
                  className="item-image"
                />
                <div>
                  <span>새로운 아이템 획득!</span>
                  <p className="item-notification-text">
                    {acquiredItem.name}: {acquiredItem.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div>
          <StoryProgress storyProgress={currentQuestion.storyProgress} />
          <button onClick={navigateToSummary} className="summary-btn">
            결과 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionSection;
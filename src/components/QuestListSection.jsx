import QuestList from './QuestList';

const QuestListSection = ({ isVisible, toggle, quests, onComplete }) => {
  return (
    <>
      <button className="quest-list-toggle-button" onClick={toggle}>
        {isVisible ? '퀘스트 숨기기' : '퀘스트 보기'}
      </button>
      {isVisible && (
        <div className="quest-list-container">
          <QuestList quests={quests} onComplete={onComplete} />
        </div>
      )}
    </>
  );
};

export default QuestListSection;

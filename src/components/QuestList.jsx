import React from "react";
import PropTypes from "prop-types";

const QuestList = ({ quests, onComplete }) => {
  return (
    <div className="quest-list">
      <h3>퀘스트 목록</h3>
      {quests.length === 0 ? (
        <p className="no-quests-message">현재 진행 중인 퀘스트가 없습니다.</p>
      ) : (
        quests.map((quest) => (
          <div key={quest.id} className="quest-item">
            <div className="quest-header">
              <h4>{quest.title}</h4>
              <p
                className={`quest-status ${
                  quest.isCompleted ? "completed" : "in-progress"
                }`}
              >
                {quest.isCompleted ? "✅ 완료" : "⌛ 진행 중"}
              </p>
            </div>
            <p className="quest-description">{quest.description}</p>
            {!quest.isCompleted && (
              <div className="quest-progress">
                <div
                  className="quest-progress-bar"
                  style={{ width: `${quest.progress}%` }}
                ></div>
              </div>
            )}
            {quest.isCompleted && (
              <button
                className="quest-reward-button"
                onClick={() => onComplete(quest.id)}
              >
                보상 받기
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

QuestList.propTypes = {
  quests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      progress: PropTypes.number, // 추가: 진행률
    })
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default QuestList;

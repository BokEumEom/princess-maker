import { useState } from "react";
import PropTypes from "prop-types";
import RewardPopup from "./RewardPopup"; // 보상 팝업 컴포넌트 추가

const QuestList = ({ quests, onComplete }) => {
  const [showRewardPopup, setShowRewardPopup] = useState(false);
  const [currentReward, setCurrentReward] = useState(null);

  const handleComplete = (questId) => {
    const quest = quests.find((q) => q.id === questId);
    if (quest && quest.isCompleted) {
      setCurrentReward(quest.reward); // 보상 저장
      setShowRewardPopup(true); // 팝업 표시
      onComplete(questId); // 퀘스트 완료 처리
    }
  };

  const closeRewardPopup = () => {
    setShowRewardPopup(false);
    setCurrentReward(null);
  };

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
              <p className={`quest-status ${quest.isCompleted ? "completed" : "in-progress"}`}>
                {quest.isCompleted ? "✅ 완료" : "⌛ 진행 중"}
              </p>
            </div>
            <p className="quest-description">{quest.description}</p>
            {!quest.isCompleted && (
              <div className="quest-progress">
                <div
                  className="quest-progress-bar"
                  style={{ width: `${quest.progress || 0}%` }}
                ></div>
              </div>
            )}
            {quest.isCompleted && (
              <button className="quest-reward-button" onClick={() => handleComplete(quest.id)}>
                보상 받기
              </button>
            )}
          </div>
        ))
      )}
      {showRewardPopup && currentReward && (
        <RewardPopup reward={currentReward} onClose={closeRewardPopup} />
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
      progress: PropTypes.number,
    })
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default QuestList;
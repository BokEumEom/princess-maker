import PropTypes from "prop-types";
import items from "../data/items"; // 아이템 데이터 가져오기

const RewardPopup = ({ reward, onClose }) => {
  // 아이템 데이터에서 보상 아이템 정보 가져오기
  const rewardItem = items.find((item) => item.id === reward.item);

  return (
    <div className="reward-popup-overlay">
      <div className="reward-popup">
        <h3>🎉 퀘스트 보상 🎉</h3>
        <div className="reward-content">
          {rewardItem && (
            <div className="reward-item">
              <img
                src={rewardItem.image} // 아이템 이미지 표시
                alt={rewardItem.name}
                className="reward-item-image"
              />
              <span>{rewardItem.name}</span>
              <p>{rewardItem.description}</p>
            </div>
          )}
          {reward.stats && (
            <div className="reward-stats">
              {Object.entries(reward.stats).map(([key, value]) => (
                <span key={key}>
                  {key}: +{value}
                </span>
              ))}
            </div>
          )}
        </div>
        <button className="reward-close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

RewardPopup.propTypes = {
  reward: PropTypes.shape({
    item: PropTypes.string,
    stats: PropTypes.object,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RewardPopup;
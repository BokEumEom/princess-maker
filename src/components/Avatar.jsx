import { useState } from "react";

const Avatar = ({ avatar }) => {
  const [isStatsVisible, setStatsVisible] = useState(false); // 상태 관리

  if (!avatar) return <div>Loading...</div>;

  const { stats } = avatar;
  const avatarImage = avatar.image || "/assets/images/balanced_life_ending.jpg";

  return (
    <div className="avatar-wrapper">
      {/* Avatar Image */}
      <div className="avatar-container">
        <img src={avatarImage} alt="Avatar" className="avatar-image" />
      </div>

      {/* Toggle Button */}
      <button
        className="toggle-stats-btn"
        onClick={() => setStatsVisible((prev) => !prev)}
      >
        {isStatsVisible ? "Hide Stats" : "Show Stats"}
      </button>

      {/* Stats */}
      {isStatsVisible && (
        <div className="stats-container">
          {Object.entries(stats).map(([stat, value]) => (
            <div className="stat-bar" key={stat}>
              <span className="stat-label">
                {stat.charAt(0).toUpperCase() + stat.slice(1)}:
              </span>
              <div className="progress-bar">
                <div
                  className={`progress-fill ${stat}`}
                  style={{ width: `${value}%` }}
                ></div>
              </div>
              <span className="stat-value">{value}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Avatar;

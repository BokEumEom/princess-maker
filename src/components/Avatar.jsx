import React from "react";

const Avatar = ({ avatar }) => {
  if (!avatar) return <div>Loading...</div>;

  const { stats } = avatar;
  const avatarImage = `/assets/images/princess01.png`;

  return (
    <div className="avatar-wrapper">
      {/* 아바타 이미지 */}
      <div className="avatar-container">
        <img src={avatarImage} alt="Avatar" className="avatar-image" />
      </div>

      {/* 능력치 표시 */}
      <div className="stats-container">
        <div className="stat-bar">
          <span className="stat-label">Charm:</span>
          <div className="progress-bar">
            <div
              className="progress-fill charm"
              style={{ width: `${stats.charm}%` }}
            ></div>
          </div>
        </div>
        <div className="stat-bar">
          <span className="stat-label">Health:</span>
          <div className="progress-bar">
            <div
              className="progress-fill health"
              style={{ width: `${stats.health}%` }}
            ></div>
          </div>
        </div>
        <div className="stat-bar">
          <span className="stat-label">Intelligence:</span>
          <div className="progress-bar">
            <div
              className="progress-fill intelligence"
              style={{ width: `${stats.intelligence}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;

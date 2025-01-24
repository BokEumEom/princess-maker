import { useState } from "react";
import { HeartIcon, SunIcon, LightBulbIcon } from "@heroicons/react/24/outline"; // 아이콘 import

const STAT_KEYS_MAP = {
  health: "건강",
  charm: "매력",
  intelligence: "지능",
};

const Avatar = ({ avatar }) => {
  const [isStatsVisible, setStatsVisible] = useState(false); // 탭 상태 관리

  if (!avatar) return <div>Loading...</div>;

  const { stats } = avatar;
  const avatarImage = avatar.image || "/assets/images/balanced_life_ending.jpg";

  // 능력치별 아이콘 매핑
  const statIcons = {
    health: <HeartIcon className="stat-icon" />, // 체력
    charm: <SunIcon className="stat-icon" />, // 매력
    intelligence: <LightBulbIcon className="stat-icon" />, // 지능
  };

  return (
    <div
      className="avatar-wrapper"
      onClick={() => setStatsVisible((prev) => !prev)} // 탭 시 상태 토글
    >
      {/* Avatar Image */}
      <div className="avatar-container">
        <img src={avatarImage} alt="Avatar" className="avatar-image" />
      </div>

      {/* Stats (탭 시 표시) */}
      {isStatsVisible && (
        <div className="stats-container">
          {Object.entries(stats).map(([stat, value]) => (
            <div className="stat-bar" key={stat}>
              {/* 아이콘 표시 */}
              <span>{statIcons[stat]}</span>
              {/* 라벨 및 진행 바 */}
              <span className="stat-label">
                {STAT_KEYS_MAP[stat]}: {/* 한글로 변환 */}
              </span>
              <div className="progress-bar">
                <div
                  className={`progress-fill ${stat}`}
                  style={{ width: `${value}%` }}
                ></div>
              </div>
              {/* 능력치 값 */}
              <span className="stat-value">{value}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Avatar;
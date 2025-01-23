// src/pages/SummaryPage.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import StoryProgress from "../components/StoryProgress";
import endings from "../data/endings";

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const avatar = location.state?.avatar;

  useEffect(() => {
    if (!avatar) {
      navigate("/");
    }
  }, [avatar, navigate]);

  if (!avatar) {
    return null;
  }

  const getEnding = (stats) => {
    for (const ending of endings) {
      if (ending.condition(stats)) {
        return ending;
      }
    }
    return {
      message: "당신의 이야기는 아직 끝나지 않았습니다.",
      image: "/assets/images/balanced_life_ending.jpg",
    };
  };

  const ending = getEnding(avatar.stats);

  return (
    <div className="summary-page">
      <h2 className="summary-title">결과 요약</h2>

      {/* 아바타 */}
      <div className="summary-avatar">
        <Avatar avatar={avatar} />
        <div className="avatar-name">{avatar.name}</div> {/* 아바타 이름 추가 */}
      </div>

      {/* 스토리 진행 */}
      <div className="story-progress-container">
        <StoryProgress storyProgress={avatar.storyProgress} />
      </div>

      {/* 최종 엔딩 */}
      <div className="ending-card">
        <h3 className="ending-title">최종 엔딩</h3>
        <p className="ending-message">{ending.message}</p>
        <img
          src={ending.image}
          alt="Ending Illustration"
          className="ending-image"
        />
      </div>

      {/* 다시 시작 버튼 */}
      <button className="restart-btn" onClick={() => navigate("/")}>
        다시 시작하기
      </button>
    </div>
  );
};

export default SummaryPage;
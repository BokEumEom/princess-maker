// src/pages/SummaryPage.jsx
import { useEffect } from "react";
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




      {/* 최종 엔딩 */}
      <div className="ending-card">
        <h3 className="ending-title">PrincessMaker</h3>
        <p className="ending-message">{ending.message}</p>
        <img
          src={ending.image}
          alt="Ending Illustration"
          className="ending-image"
        />
      </div>
      {/* 스토리 진행 */}
      <h2 className="summary-title">결과 요약</h2>
      <div className="story-progress-container">
        <StoryProgress storyProgress={avatar.storyProgress} />
      </div>


      {/* 다시 시작 버튼 */}
      <button className="restart-btn" onClick={() => navigate("/")}>
        다시 시작하기
      </button>
    </div>
  );
};


export default SummaryPage;
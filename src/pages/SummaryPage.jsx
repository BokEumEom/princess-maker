import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import StoryProgress from "../components/StoryProgress";
import endings from "../data/endings";

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const avatar = location.state?.avatar;

  // 데이터가 없을 경우 홈으로 리다이렉션
  if (!avatar) {
    navigate("/");
    return null;
  }

  // 엔딩 결정 함수
  const getEnding = (stats) => {
    for (const ending of endings) {
      if (ending.condition(stats)) {
        return ending;
      }
    }
    // 기본 엔딩 반환 (조건을 충족하지 못할 경우)
    return {
      message: "당신의 이야기는 아직 끝나지 않았습니다. 앞으로도 더 많은 선택이 기다리고 있습니다.",
      image: "/assets/images/princess01.png",
    };
  };

  // 선택된 엔딩 가져오기
  const ending = getEnding(avatar.stats);

  return (
    <div className="summary-page">
      <h2>결과 요약</h2>

      {/* 아바타 상태 표시 */}
      <Avatar avatar={avatar} />

      {/* 스토리 진행 표시 */}
      <StoryProgress storyProgress={avatar.storyProgress} />

      {/* 최종 엔딩 표시 */}
      <div className="ending-container">
        <h3>최종 엔딩</h3>
        <p className="ending-message">{ending.message}</p>
        <img
          src={ending.image}
          alt="Ending Illustration"
          className="ending-image"
        />
      </div>

      {/* 다시 시작 버튼 */}
      <button
        onClick={() => navigate("/")}
        className="restart-btn"
      >
        다시 시작하기
      </button>
    </div>
  );
};

export default SummaryPage;

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import StoryProgress from "../components/StoryProgress";
import endings from "../data/endings";

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // location.state에서 avatar 가져오기
  const avatar = location.state?.avatar;

  // 데이터가 없으면 홈으로 리다이렉트
  useEffect(() => {
    if (!avatar) {
      console.log("No avatar data. Redirecting to Home...");
      navigate("/");
    }
  }, [avatar, navigate]);

  if (!avatar) {
    return null; // 리다이렉트 대기 중
  }

  const getEnding = (stats) => {
    for (const ending of endings) {
      if (ending.condition(stats)) {
        return ending;
      }
    }
    return {
      message: "당신의 이야기는 아직 끝나지 않았습니다.",
      image: "/assets/images/princess01.png",
    };
  };

  const ending = getEnding(avatar.stats);

  return (
    <div className="summary-page">
      <h2>결과 요약</h2>
      <Avatar avatar={avatar} />
      <StoryProgress storyProgress={avatar.storyProgress} />
      <div className="ending-container">
        <h3>최종 엔딩</h3>
        <p>{ending.message}</p>
        <img src={ending.image} alt="Ending Illustration" />
      </div>
      <button onClick={() => navigate("/")}>다시 시작하기</button>
    </div>
  );
};

export default SummaryPage;

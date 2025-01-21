import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import storyEvents from "../data/storyEvents";
import useAvatar from "../hooks/useAvatar";
import Avatar from "../components/Avatar";
import QuestionCard from "../components/QuestionCard";
import StoryProgress from "../components/StoryProgress";

const Home = () => {
  const navigate = useNavigate();
  const { avatar, updateAvatar, updateStoryProgress } = useAvatar();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newStory, setNewStory] = useState(null); // 새롭게 발생한 스토리 이벤트를 관리

  // 스토리 조건 확인 및 업데이트
  useEffect(() => {
    const triggeredEvents = new Set(avatar.storyProgress.map((e) => e.id));

    storyEvents.forEach((event) => {
      const isTriggered = triggeredEvents.has(event.id);
      const isConditionMet = event.condition(avatar.stats);

      if (!isTriggered && isConditionMet) {
        console.log("Triggered Story Event:", event.text);
        updateStoryProgress(event);
        setNewStory(event.text); // 새롭게 트리거된 스토리 저장
        triggeredEvents.add(event.id);
      }
    });
  }, [avatar.stats, avatar.storyProgress, updateStoryProgress]);

  // 질문 선택 핸들러
  const handleSelect = (effect) => {
    // 아바타 상태 업데이트
    updateAvatar(effect);

    // 다음 질문으로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      console.log("All questions completed.");
    }

    // 새 스토리 초기화
    setNewStory(null);
  };

  // 결과 페이지로 이동
  const handleNavigateToSummary = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar));
    navigate("/summary");
  };

  if (!questions || questions.length === 0) {
    return <div>질문 데이터가 없습니다. 나중에 다시 시도해주세요.</div>;
  }

  return (
    <div className="home-container">
      {/* 아바타 상태 표시 */}
      <Avatar avatar={avatar} />

      {/* 질문 카드 또는 결과 화면 */}
      {currentQuestionIndex < questions.length ? (
        <>
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onSelect={handleSelect}
          />

          {/* 새 스토리 이벤트 표시 */}
          {newStory && (
            <div className="new-story">
              <p>새로운 스토리: {newStory}</p>
            </div>
          )}
        </>
      ) : (
        <div>
          {/* 스토리 진행 표시 */}
          <StoryProgress storyProgress={avatar.storyProgress} />

          {/* 결과 보기 버튼 */}
          <button
            onClick={handleNavigateToSummary}
            className="summary-btn"
            disabled={currentQuestionIndex < questions.length}
          >
            결과 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

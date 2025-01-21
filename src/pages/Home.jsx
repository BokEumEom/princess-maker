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
  const [newStory, setNewStory] = useState(null);

  useEffect(() => {
    const triggeredEvents = new Set(avatar.storyProgress.map((e) => e.id));

    storyEvents.forEach((event) => {
      const isTriggered = triggeredEvents.has(event.id);
      const isConditionMet = event.condition(avatar.stats);

      if (!isTriggered && isConditionMet) {
        console.log("Triggered Story Event:", event.text);
        updateStoryProgress(event);
        setNewStory(event.text);
        triggeredEvents.add(event.id);
      }
    });
  }, [avatar.stats, avatar.storyProgress, updateStoryProgress]);

  const handleSelect = (effect) => {
    updateAvatar(effect);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      console.log("All questions completed.");
      navigateToSummary();
    }

    setNewStory(null);
  };

  const navigateToSummary = () => {
    // 복제 가능한 avatar 데이터만 추출
    const safeAvatar = {
      ...avatar,
      storyProgress: avatar.storyProgress.map(({ id, text }) => ({ id, text })), // 함수 제거
    };
  
    navigate("/summary", { state: { avatar: safeAvatar } });
  };  

  if (!questions || questions.length === 0) {
    return <div>질문 데이터가 없습니다. 나중에 다시 시도해주세요.</div>;
  }

  return (
    <div className="home-container">
      <Avatar avatar={avatar} />

      {currentQuestionIndex < questions.length ? (
        <>
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onSelect={handleSelect}
          />
          {newStory && (
            <div className="new-story">
              <p>새로운 스토리: {newStory}</p>
            </div>
          )}
        </>
      ) : (
        <div>
          <StoryProgress storyProgress={avatar.storyProgress} />
          <button onClick={navigateToSummary} className="summary-btn">
            결과 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

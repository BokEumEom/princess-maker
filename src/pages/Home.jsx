import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import storyEvents from "../data/storyEvents";
import useAvatar from "../hooks/useAvatar";
import Avatar from "../components/Avatar";
import QuestionCard from "../components/QuestionCard";
import StoryProgress from "../components/StoryProgress";
import NPCDialogue from "../components/NPCDialogue";
import RandomEventModal from "../components/RandomEventModal"; // 랜덤 이벤트 모달 추가
import npcs from "../data/npcs";
import randomEvents from "../data/randomEvents"; // 랜덤 이벤트 데이터 가져오기

const Home = () => {
  const navigate = useNavigate();
  const { avatar, updateAvatar, updateStoryProgress, acquireItem, interactWithNPC, triggerRandomEvent } = useAvatar();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newStory, setNewStory] = useState(null);
  const [acquiredItem, setAcquiredItem] = useState(null);
  const [currentNPC, setCurrentNPC] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null); // 현재 발생한 랜덤 이벤트 상태

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

  const handleSelect = (effect, option) => {
    updateAvatar(effect);

    // 아이템 획득
    if (option.acquireItem) {
      const item = acquireItem(option.acquireItem);
      setAcquiredItem(item);
      setTimeout(() => setAcquiredItem(null), 3000);
    }

    // NPC와 상호작용
    if (option.interactWithNPC) {
      const npc = npcs.find((n) => n.id === option.interactWithNPC);
      if (npc) {
        setCurrentNPC(npc);
        interactWithNPC(npc.id);
      }
    }

    // 랜덤 이벤트 발생
    if (option.triggerEvent) {
      const event = randomEvents.find((e) => e.condition());
      if (event) {
        setCurrentEvent(event); // 랜덤 이벤트 설정
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      console.log("All questions completed.");
      navigateToSummary();
    }

    setNewStory(null);
  };

  const handleEventSelect = (option) => {
    updateAvatar(option.effect); // 선택지 효과 적용
    setNewStory(option.resultText); // 결과 텍스트 표시
    setCurrentEvent(null); // 이벤트 모달 닫기
  };

  const navigateToSummary = () => {
    const safeAvatar = {
      ...avatar,
      storyProgress: avatar.storyProgress.map(({ id, text }) => ({ id, text })),
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
            onSelect={(effect, option) => handleSelect(effect, option)}
            triggerRandomEvent={triggerRandomEvent}
          />
          {newStory && (
            <div className="new-story">
              <div className="new-story-header">
                <i className="fas fa-scroll"></i>
                <span>새로운 스토리 이벤트</span>
              </div>
              <p className="new-story-text">{newStory}</p>
            </div>
          )}
          {acquiredItem && (
            <div className="item-notification">
              <div className="item-notification-header">
                <img src={acquiredItem.image} alt={acquiredItem.name} className="item-image" />
                <div>
                  <span>새로운 아이템 획득!</span>
                  <p className="item-notification-text">
                    {acquiredItem.name}: {acquiredItem.description}
                  </p>
                </div>
              </div>
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

      {/* NPC 대화창 표시 */}
      {currentNPC && (
        <NPCDialogue
          npc={currentNPC}
          onClose={() => setCurrentNPC(null)}
        />
      )}

      {/* 랜덤 이벤트 모달 표시 */}
      {currentEvent && (
        <RandomEventModal
          event={currentEvent}
          onSelect={(option) => handleEventSelect(option)}
          onClose={() => setCurrentEvent(null)}
        />
      )}
    </div>
  );
};

export default Home;
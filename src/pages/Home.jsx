import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import storyQuestions from "../data/storyQuestions";
import storyEvents from "../data/storyEvents";
import useAvatar from "../hooks/useAvatar";
import Avatar from "../components/Avatar";
import QuestionCard from "../components/QuestionCard";
import StoryProgress from "../components/StoryProgress";
import NPCDialogue from "../components/NPCDialogue";
import RandomEventModal from "../components/RandomEventModal";
import npcs from "../data/npcs";
import randomEvents from "../data/randomEvents";
import useTemporaryState from "../hooks/useTemporaryState";
import QuestList from "../components/QuestList";
import quests from "../data/quests";
import useQuests from "../hooks/useQuests"; // useQuests 훅 추가

const Home = () => {
  const navigate = useNavigate();
  const { avatar, updateAvatar, updateStoryProgress, acquireItem, interactWithNPC, triggerRandomEvent } = useAvatar();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newStory, setNewStory] = useTemporaryState(null, 3000);
  const [acquiredItem, setAcquiredItem] = useTemporaryState(null, 3000);
  const [currentNPC, setCurrentNPC] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isQuestListVisible, setIsQuestListVisible] = useState(true);

  const toggleQuestList = () => {
    setIsQuestListVisible((prev) => !prev);
  };

  // useQuests 훅 사용
  const { currentQuests, completeQuest } = useQuests(avatar, quests, acquireItem, updateAvatar);

  // 스토리 이벤트 트리거
  useEffect(() => {
    const triggeredEvents = new Set(avatar.storyProgress.map((e) => e.id));
    storyEvents.forEach((event) => {
      if (!triggeredEvents.has(event.id) && event.condition(avatar.stats)) {
        updateStoryProgress(event);
        setNewStory(event.text);
        triggeredEvents.add(event.id);
      }
    });
  }, [avatar.stats, avatar.storyProgress, updateStoryProgress, setNewStory]);

  // 질문 선택 처리
  const handleSelect = (effect, option) => {
    updateAvatar(effect);

    if (option.acquireItem) {
      const item = acquireItem(option.acquireItem);
      setAcquiredItem(item);
    }

    if (option.interactWithNPC) {
      const npc = npcs.find((n) => n.id === option.interactWithNPC);
      if (npc) {
        setCurrentNPC(npc);
        interactWithNPC(npc.id);
      }
    }

    if (option.triggerEvent) {
      const event = randomEvents.find((e) => e.condition());
      if (event) {
        setCurrentEvent(event);
      }
    }

    if (currentQuestionIndex < storyQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigateToSummary();
    }
  };

  // 랜덤 이벤트 처리
  const handleEventSelect = (option) => {
    updateAvatar(option.effect);
    setNewStory(option.resultText);
    setCurrentEvent(null);
  };

  // 요약 페이지 이동
  const navigateToSummary = () => {
    const safeAvatar = {
      ...avatar,
      storyProgress: avatar.storyProgress.map(({ id, text }) => ({ id, text })),
    };
    navigate("/summary", { state: { avatar: safeAvatar } });
  };

  if (!storyQuestions || storyQuestions.length === 0) {
    return <div>질문 데이터가 없습니다. 나중에 다시 시도해주세요.</div>;
  }

  return (
    <div className="home-container">
      <button className="quest-list-toggle-button" onClick={toggleQuestList}>
        {isQuestListVisible ? "퀘스트 숨기기" : "퀘스트 보기"}
      </button>
      {isQuestListVisible && (
        <div className="quest-list-container">
          <QuestList quests={currentQuests} onComplete={completeQuest} />
        </div>
      )}
      <Avatar avatar={avatar} />
      {currentQuestionIndex < storyQuestions.length ? (
        <>
          <QuestionCard
            question={storyQuestions[currentQuestionIndex]}
            onSelect={handleSelect}
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
      {currentNPC && <NPCDialogue npc={currentNPC} onClose={() => setCurrentNPC(null)} />}
      {currentEvent && (
        <RandomEventModal
          event={currentEvent}
          onSelect={handleEventSelect}
          onClose={() => setCurrentEvent(null)}
        />
      )}
    </div>
  );
};

export default Home;
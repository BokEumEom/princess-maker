import React from 'react';
import { useNavigate } from "react-router-dom";
import useAvatar from "../hooks/useAvatar";
import useTemporaryState from "../hooks/useTemporaryState";
import useQuests from "../hooks/useQuests";
import QuestListSection from "../components/QuestListSection";
import QuestionSection from "../components/QuestionSection";
import NPCDialogue from "../components/NPCDialogue";
import RandomEventModal from "../components/RandomEventModal";
import storyQuestions from "../data/storyQuestions";
import storyEvents from "../data/storyEvents";
import npcs from "../data/npcs";
import randomEvents from "../data/randomEvents";
import quests from "../data/quests";

const Home = () => {
  const navigate = useNavigate();
  const {
    avatar,
    updateAvatar,
    updateStoryProgress,
    acquireItem,
    interactWithNPC,
  } = useAvatar();
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [newStory, setNewStory] = useTemporaryState(null, 3000);
  const [acquiredItem, setAcquiredItem] = useTemporaryState(null, 3000);
  const [currentNPC, setCurrentNPC] = React.useState(null);
  const [currentEvent, setCurrentEvent] = React.useState(null);
  const [isQuestListVisible, setIsQuestListVisible] = React.useState(false);

  // useQuests hook
  const { currentQuests, completeQuest } = useQuests(
    avatar,
    quests,
    acquireItem,
    updateAvatar
  );

  // Trigger story events
  React.useEffect(() => {
    const triggeredEvents = new Set(avatar.storyProgress.map((e) => e.id));
    storyEvents.forEach((event) => {
      if (!triggeredEvents.has(event.id) && event.condition(avatar.stats)) {
        updateStoryProgress(event);
        setNewStory(event.text);
        triggeredEvents.add(event.id);
      }
    });
  }, [avatar.stats, avatar.storyProgress, updateStoryProgress, setNewStory]);

  // Handle question selection
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

  // Handle random event selection
  const handleEventSelect = (option) => {
    updateAvatar(option.effect);
    setNewStory(option.resultText);
    setCurrentEvent(null);
  };

  // Navigate to summary page
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
      <QuestListSection
        isVisible={isQuestListVisible}
        toggle={() => setIsQuestListVisible((prev) => !prev)}
        quests={currentQuests}
        onComplete={completeQuest}
      />
      <QuestionSection
        currentQuestion={storyQuestions[currentQuestionIndex]}
        onSelect={handleSelect}
        newStory={newStory}
        acquiredItem={acquiredItem}
        navigateToSummary={navigateToSummary}
        avatar={avatar}
      />
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

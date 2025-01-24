import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAvatar from "./useAvatar";
import useTemporaryState from "./useTemporaryState";
import useQuests from "./useQuests";
import storyQuestions from "../data/storyQuestions";
import storyEvents from "../data/storyEvents";
import npcs from "../data/npcs";
import randomEvents from "../data/randomEvents";
import quests from "../data/quests";

const useHomeLogic = () => {
  const navigate = useNavigate();
  const {
    avatar,
    updateAvatar,
    updateStoryProgress,
    acquireItem,
    interactWithNPC,
  } = useAvatar();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newStory, setNewStory] = useTemporaryState(null, 3000);
  const [acquiredItem, setAcquiredItem] = useTemporaryState(null, 3000);
  const [currentNPC, setCurrentNPC] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isQuestListVisible, setIsQuestListVisible] = useState(true);

  const { currentQuests, completeQuest } = useQuests(
    avatar,
    quests,
    acquireItem,
    updateAvatar
  );

  useEffect(() => {
    if (!storyQuestions || storyQuestions.length === 0) return;
  
    const triggeredEvents = new Set(avatar.storyProgress.map((e) => e.id));
    storyEvents.forEach((event) => {
      if (!triggeredEvents.has(event.id) && event.condition(avatar.stats)) {
        updateStoryProgress(event);
        setNewStory(event.text);
        triggeredEvents.add(event.id);
      }
    });
  }, [avatar.stats, avatar.storyProgress, updateStoryProgress, setNewStory]);  

  const handleSelect = (effect, option) => {
    if (!option) return;

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

  const handleEventSelect = (option) => {
    updateAvatar(option.effect);
    setNewStory(option.resultText);
    setCurrentEvent(null);
  };

  const navigateToSummary = useCallback(() => {
    const safeAvatar = {
      ...avatar,
      storyProgress: avatar.storyProgress.map(({ id, text }) => ({ id, text })),
    };
    navigate("/summary", { state: { avatar: safeAvatar } });
  }, [avatar, navigate]);

  const toggleQuestList = useCallback(() => {
    setIsQuestListVisible((prev) => !prev);
  }, []);

  return {
    avatar,
    currentQuestion: storyQuestions[currentQuestionIndex],
    currentQuests,
    isQuestListVisible,
    toggleQuestList,
    newStory,
    acquiredItem,
    currentNPC,
    currentEvent,
    setCurrentNPC,
    setCurrentEvent,
    handleSelect,
    handleEventSelect,
    completeQuest,
    navigateToSummary,
  };
};

export default useHomeLogic;

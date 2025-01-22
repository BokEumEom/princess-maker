import { useEffect, useState } from "react";

const useQuests = (avatar, initialQuests, acquireItem, updateAvatar) => {
  const [currentQuests, setCurrentQuests] = useState(initialQuests);

  // 퀘스트 완료 조건 및 진행률 확인
  useEffect(() => {
    setCurrentQuests((prevQuests) =>
      prevQuests.map((quest) => {
        if (!quest.isCompleted) {
          let conditionInput;
          switch (quest.conditionType) {
            case "stats":
              conditionInput = avatar.stats || {};
              break;
            case "items":
              conditionInput = avatar.items || [];
              break;
            case "npcs":
              conditionInput = avatar.npcs || [];
              break;
            default:
              conditionInput = null;
          }
          const { isCompleted, progress } = quest.condition(conditionInput);
          return { ...quest, isCompleted, progress };
        }
        return quest;
      })
    );
  }, [avatar.stats, avatar.items, avatar.npcs]);

  // 퀘스트 완료 처리
  const completeQuest = (questId) => {
    const quest = currentQuests.find((q) => q.id === questId);
    if (quest && quest.isCompleted) {
      // 보상 처리
      if (quest.reward.item) {
        acquireItem(quest.reward.item);
      }
      if (quest.reward.stats) {
        updateAvatar(quest.reward.stats);
      }

      // 퀘스트 목록에서 제거
      setCurrentQuests((prevQuests) => prevQuests.filter((q) => q.id !== questId));
    }
  };

  return { currentQuests, completeQuest };
};

export default useQuests;
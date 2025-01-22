import { useEffect, useState } from "react";

const useQuests = (avatar, initialQuests, acquireItem, updateAvatar) => {
  const [currentQuests, setCurrentQuests] = useState(initialQuests);

  // 퀘스트 완료 조건 확인
  useEffect(() => {
    setCurrentQuests((prevQuests) =>
      prevQuests.map((quest) => {
        if (!quest.isCompleted) {
          const isCompleted = quest.condition(quest.reward.item ? avatar.items : avatar.stats);
          return { ...quest, isCompleted };
        }
        return quest;
      })
    );
  }, [avatar.stats, avatar.items]); // currentQuests 제거

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
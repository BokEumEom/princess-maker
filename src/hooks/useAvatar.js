import { useState } from "react";

const initialAvatar = {
  stats: { charm: 15, health: 15, intelligence: 15 },
  storyProgress: [], // 스토리 진행 상태
};

const useAvatar = () => {
  const [avatar, setAvatar] = useState(initialAvatar);

  // 아바타 능력치 업데이트
  const updateAvatar = (effect) => {
    setAvatar((prev) => {
      const updatedStats = { ...prev.stats };
      Object.keys(effect).forEach((key) => {
        updatedStats[key] = Math.max(0, (updatedStats[key] || 0) + effect[key]); // 음수 방지
      });
      console.log("Updated Avatar Stats:", updatedStats); // 디버깅 로그
      return { ...prev, stats: updatedStats };
    });
  };

  // 새로운 스토리 이벤트 추가
  const updateStoryProgress = (newEvent) => {
    setAvatar((prev) => {
      if (!prev.storyProgress.some((e) => e.id === newEvent.id)) {
        console.log("Adding new story event:", newEvent.text); // 디버깅 로그
        return {
          ...prev,
          storyProgress: [...prev.storyProgress, newEvent],
        };
      }
      return prev;
    });
  };

  return { avatar, updateAvatar, updateStoryProgress };
};

export default useAvatar;

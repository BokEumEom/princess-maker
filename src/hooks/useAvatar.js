import { useState } from "react";

const initialAvatar = {
  stats: { charm: 15, health: 15, intelligence: 15 },
  storyProgress: [],
};

const useAvatar = () => {
  const [avatar, setAvatar] = useState(initialAvatar);

  const updateAvatar = (effect) => {
    setAvatar((prev) => {
      const updatedStats = { ...prev.stats };
      Object.keys(effect).forEach((key) => {
        updatedStats[key] = Math.max(0, (updatedStats[key] || 0) + effect[key]); // 음수 방지
      });
      console.log("Updated Avatar Stats:", updatedStats);
      return { ...prev, stats: updatedStats };
    });
  };

  const updateStoryProgress = (newEvent) => {
    setAvatar((prev) => {
      if (!prev.storyProgress.some((e) => e.id === newEvent.id)) {
        console.log("Adding new story event:", newEvent.text);
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

import { useState } from "react";
import npcs from "../data/npcs"; // npcs 데이터 가져오기
import items from "../data/items";
import randomEvents from "../data/randomEvents";

const STAT_KEYS_MAP = {
  charm: "매력",
  health: "건강",
  intelligence: "지능",
};

const initialAvatar = {
  stats: { 매력: 15, 건강: 15, 지능: 15 }, // 한글로 변경
  storyProgress: [], // 스토리 진행 상태
  items: [], // 아이템 목록
  npcs: [], // NPC 목록
};

const useAvatar = () => {
  const [avatar, setAvatar] = useState(initialAvatar);

  // 아바타 능력치 업데이트
  const updateAvatar = (effect) => {
    setAvatar((prev) => {
      const updatedStats = { ...prev.stats };
      Object.keys(effect).forEach((key) => {
        const koreanKey = STAT_KEYS_MAP[key] || key; // 영어 키를 한글로 변환
        updatedStats[koreanKey] = Math.max(0, Math.min(100, (updatedStats[koreanKey] || 0) + effect[key])); // 0~100 사이로 제한
      });
      return { ...prev, stats: updatedStats };
    });
  };

  // 새로운 스토리 이벤트 추가
  const updateStoryProgress = (newEvent) => {
    setAvatar((prev) => {
      if (!prev.storyProgress.some((e) => e.id === newEvent.id)) {
        return {
          ...prev,
          storyProgress: [...prev.storyProgress, newEvent],
        };
      }
      return prev;
    });
  };

  // 아이템 획득
  const acquireItem = (itemId) => {
    const item = items.find((i) => i.id === itemId);
    if (item) {
      setAvatar((prev) => ({
        ...prev,
        items: [...prev.items, item],
      }));
      console.log(`${item.name}을(를) 획득했습니다: ${item.description}`);
      return item; // 획득한 아이템 반환
    }
    return null;
  };

  // NPC와 상호작용
  const interactWithNPC = (npcId) => {
    const npc = npcs.find((n) => n.id === npcId);
    if (npc) {
      console.log(`${npc.name}: "${npc.dialogue}"`);
      updateAvatar(npc.effect);

      // NPC를 avatar.npcs에 추가
      setAvatar((prev) => ({
        ...prev,
        npcs: [...prev.npcs, npc],
      }));
    }
  };

  // 랜덤 이벤트 발생
  const triggerRandomEvent = () => {
    const event = randomEvents.find((e) => e.condition());
    if (event) {
      console.log(`[랜덤 이벤트] ${event.name}`);
      console.log(event.description);

      // 랜덤 이벤트 옵션 처리
      const selectedOption = event.options[Math.floor(Math.random() * event.options.length)];
      console.log(`선택: ${selectedOption.text}`);
      updateAvatar(selectedOption.effect);
      console.log(selectedOption.resultText);
    } else {
      console.log("이번에는 랜덤 이벤트가 발생하지 않았습니다.");
    }
  };

  return { avatar, updateAvatar, updateStoryProgress, acquireItem, interactWithNPC, triggerRandomEvent };
};

export default useAvatar;

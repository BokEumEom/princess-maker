const quests = [
  {
    id: "quest1",
    title: "초보자의 첫 걸음",
    description: "캐릭터의 매력을 20 이상으로 올리세요.",
    conditionType: "stats",
    condition: (stats = { charm: 0 }) => {
      const progress = Math.min((stats.charm / 20) * 100, 100);
      return { isCompleted: stats.charm >= 20, progress };
    },
    reward: { item: "charm_amulet", stats: { charm: 5 } },
    isCompleted: false,
  },
  {
    id: "quest2",
    title: "전설의 무기 찾기",
    description: "마법의 지팡이를 획득하세요.",
    conditionType: "items",
    condition: (items = []) => {
      const hasMagicWand = items.some((item) => item.id === "magic_wand");
      const progress = hasMagicWand ? 100 : 0;
      return { isCompleted: hasMagicWand, progress };
    },
    reward: { stats: { intelligence: 10 } },
    isCompleted: false,
  },
  {
    id: "quest3",
    title: "신비한 노인과의 대화",
    description: "신비한 노인과 대화하세요.",
    conditionType: "npcs",
    condition: (npcs = []) => {
      const hasMysticOldMan = npcs.some((npc) => npc.id === "mystic_old_man");
      const progress = hasMysticOldMan ? 100 : 0;
      return { isCompleted: hasMysticOldMan, progress };
    },
    reward: { item: "wisdom_book" },
    isCompleted: false,
  },
];

export default quests;
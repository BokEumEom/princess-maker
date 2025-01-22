const quests = [
  {
    id: "quest1",
    title: "초보자의 첫 걸음",
    description: "캐릭터의 매력을 20 이상으로 올리세요.",
    condition: (stats) => stats.charm >= 20,
    reward: { item: "charm_amulet", stats: { charm: 5 } },
    isCompleted: false,
  },
  {
    id: "quest2",
    title: "전설의 무기 찾기",
    description: "마법의 지팡이를 획득하세요.",
    condition: (items) => (Array.isArray(items) ? items.some((item) => item.id === "magic_wand") : false),
    reward: { stats: { intelligence: 10 } },
    isCompleted: false,
  },
  {
    id: "quest3",
    title: "신비한 노인과의 대화",
    description: "신비한 노인과 대화하세요.",
    condition: (npcs) => (Array.isArray(npcs) ? npcs.some((npc) => npc.id === "mystic_old_man") : false),
    reward: { item: "wisdom_book" },
    isCompleted: false,
  },
];

export default quests;
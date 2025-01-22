const npcs = [
  {
    id: "mystic_old_man",
    name: "신비한 노인",
    description: "숲 속에서 만난 신비로운 노인. 당신에게 조언을 해줍니다.",
    dialogue: "숲을 빠져나가려면 동쪽으로 가세요. 그곳에 마을이 있습니다.",
    effect: { intelligence: 5, charm: 3 },
    image: "/assets/images/mystic_old_man.webp",
  },
  {
    id: "friendly_villager",
    name: "친절한 마을 사람",
    description: "마을에서 만난 친절한 사람. 당신에게 도움을 줍니다.",
    dialogue: "여기서 멀지 않은 곳에 마을이 있습니다. 제가 안내해 드릴게요.",
    effect: { charm: 5, health: 2 },
    image: "/assets/images/friendly_villager.webp",
  },
  {
    id: "wise_wizard",
    name: "현명한 마법사",
    description: "마법의 힘을 가진 현명한 마법사. 당신에게 지혜를 전수합니다.",
    dialogue: "마법의 힘은 마음에서 나옵니다. 당신의 내면을 믿으세요.",
    effect: { intelligence: 10, health: -5 }, // 지혜를 얻지만 체력이 소모됨
    image: "/assets/images/wise_wizard.webp",
  },
  {
    id: "wandering_merchant",
    name: "방랑 상인",
    description: "여행 중인 상인. 희귀한 아이템을 판매합니다.",
    dialogue: "이 아이템은 당신에게 큰 도움이 될 겁니다. 관심 있으신가요?",
    effect: {}, // 아이템을 구매하는 로직 추가 가능
    image: "/assets/images/wandering_merchant.webp",
  },
  {
    id: "diplomatic_advisor",
    name: "외교 고문",
    description: "외교적 문제를 해결하는 데 도움을 주는 전문가.",
    dialogue: "외교적 문제는 신중함이 필요합니다. 제가 도와드리겠습니다.",
    effect: { intelligence: 5, charm: 5 }, // 외교적 문제 해결 능력 향상
    image: "/assets/images/diplomatic_advisor.webp",
  },
  {
    id: "fire_chief",
    name: "소방대장",
    description: "화재 진압을 책임지는 소방대장. 위기 상황에서 냉철한 판단을 내립니다.",
    dialogue: "화재는 신속한 대응이 중요합니다. 제가 지휘하겠습니다.",
    effect: { health: 10, hope: 5 }, // 체력과 희망 증가
    image: "/assets/images/fire_chief.webp",
  },
];

export default npcs;
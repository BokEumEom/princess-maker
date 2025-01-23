const items = [
  {
    id: "magic_wand",
    name: "마법의 지팡이",
    description: "마법의 힘으로 체력과 지능을 증가시킵니다.",
    effect: { health: 10, intelligence: 5 },
    image: "/assets/images/items/magic_wand.webp",
  },
  {
    id: "healing_potion",
    name: "치유 물약",
    description: "체력을 크게 회복시킵니다.",
    effect: { health: 20 },
    image: "/assets/images/items/healing_potion.webp",
  },
  {
    id: "charm_amulet",
    name: "매력의 부적",
    description: "매력을 크게 증가시킵니다.",
    effect: { charm: 15 },
    image: "/assets/images/items/charm_amulet.webp",
  },
  {
    id: "wisdom_book",
    name: "지혜의 책",
    description: "지능을 크게 증가시킵니다.",
    effect: { intelligence: 15 },
    image: "/assets/images/items/wisdom_book.webp",
  },
  {
    id: "lucky_coin",
    name: "행운의 동전",
    description: "랜덤 이벤트에서 유리한 결과를 얻을 확률을 높입니다.",
    effect: { luck: 10 },
    image: "/assets/images/items/lucky_coin.webp",
  },
  {
    id: "elegant_gown",
    name: "우아한 드레스",
    description: "가장 화려한 옷을 입고 행사에 참석하여 매력을 높입니다.",
    effect: { charm: 10 },
    image: "/assets/images/items/elegant_gown.webp",
  },
  {
    id: "inspiring_speech",
    name: "감동적인 연설문",
    description: "연설을 통해 백성들의 신뢰와 지지를 얻습니다.",
    effect: { charm: 10, hope: 5 },
    image: "/assets/images/items/inspiring_speech.webp",
  },
  {
    id: "royal_treasure",
    name: "왕실 보물",
    description: "왕국의 재정을 강화하고 백성들의 안정을 도모합니다.",
    effect: { wealth: 20 },
    image: "/assets/images/items/royal_treasure.webp",
  },
];

export default items;
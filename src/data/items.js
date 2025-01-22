const items = [
  {
    id: "magic_wand",
    name: "마법의 지팡이",
    description: "마법의 힘으로 체력과 지능을 증가시킵니다.",
    effect: { health: 10, intelligence: 5 },
    image: "/assets/images/magic_wand.webp",
  },
  {
    id: "healing_potion",
    name: "치유 물약",
    description: "체력을 크게 회복시킵니다.",
    effect: { health: 20 },
    image: "/assets/images/healing_potion.webp",
  },
  {
    id: "charm_amulet",
    name: "매력의 부적",
    description: "매력을 크게 증가시킵니다.",
    effect: { charm: 15 },
    image: "/assets/images/charm_amulet.webp",
  },
  {
    id: "wisdom_book",
    name: "지혜의 책",
    description: "지능을 크게 증가시킵니다.",
    effect: { intelligence: 15 },
    image: "/assets/images/wisdom_book.webp",
  },
  {
    id: "lucky_coin",
    name: "행운의 동전",
    description: "랜덤 이벤트에서 유리한 결과를 얻을 확률을 높입니다.",
    effect: { luck: 10 },
    image: "/assets/images/lucky_coin.webp",
  },
];

export default items;
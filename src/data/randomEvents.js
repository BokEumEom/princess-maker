const randomEvents = [
  {
    id: "storm",
    name: "갑자기 폭풍우가 몰아칩니다.",
    description: "하늘이 어두워지며 폭풍우가 몰아칩니다. 어떻게 하시겠습니까?",
    options: [
      {
        text: "동굴로 피신한다.",
        effect: { health: 5, intelligence: 3 },
        resultText: "동굴에서 안전하게 지낼 수 있었습니다. 체력과 지능이 증가했습니다.",
      },
      {
        text: "폭풍우를 견딘다.",
        effect: { health: -10, charm: 5 },
        resultText: "폭풍우를 견뎌냈지만 체력이 크게 감소했습니다. 그러나 매력이 증가했습니다.",
      },
    ],
    condition: () => Math.random() < 0.3, // 30% 확률로 발생
    image: "/assets/images/storm.png",
  },
  {
    id: "treasure_chest",
    name: "보물 상자를 발견했습니다.",
    description: "숲 속에서 보물 상자를 발견했습니다. 어떻게 하시겠습니까?",
    options: [
      {
        text: "상자를 연다.",
        effect: { health: 10, charm: 5 },
        resultText: "상자에서 치유 물약과 보석을 발견했습니다. 체력과 매력이 증가했습니다.",
      },
      {
        text: "상자를 무시한다.",
        effect: { intelligence: 5 },
        resultText: "상자를 무시하고 지나쳤습니다. 지능이 약간 증가했습니다.",
      },
    ],
    condition: () => Math.random() < 0.2, // 20% 확률로 발생
    image: "/assets/images/treasure_chest.png",
  },
  {
    id: "mysterious_figure",
    name: "신비로운 인물을 만났습니다.",
    description: "숲 속에서 신비로운 인물이 나타났습니다. 어떻게 하시겠습니까?",
    options: [
      {
        text: "대화를 시도한다.",
        effect: { intelligence: 10, charm: -3 },
        resultText: "신비로운 인물과 대화하여 지능이 크게 증가했지만, 매력이 약간 감소했습니다.",
      },
      {
        text: "무시하고 지나간다.",
        effect: { health: -5 },
        resultText: "신비로운 인물을 무시하고 지나쳤습니다. 체력이 약간 감소했습니다.",
      },
    ],
    condition: () => Math.random() < 0.25, // 25% 확률로 발생
    image: "/assets/images/mysterious_figure.png",
  },
  {
    id: "wild_animal",
    name: "야생 동물을 만났습니다.",
    description: "숲 속에서 야생 동물이 나타났습니다. 어떻게 하시겠습니까?",
    options: [
      {
        text: "동물과 맞선다.",
        effect: { health: -10, intelligence: 5 },
        resultText: "동물과 맞서 싸웠지만 체력이 크게 감소했습니다. 그러나 지능이 증가했습니다.",
      },
      {
        text: "도망친다.",
        effect: { health: -5, charm: 3 },
        resultText: "도망치는 데 성공했지만 체력이 약간 감소했습니다. 매력이 증가했습니다.",
      },
    ],
    condition: () => Math.random() < 0.15, // 15% 확률로 발생
    image: "/assets/images/wild_animal.png",
  },
];

export default randomEvents;
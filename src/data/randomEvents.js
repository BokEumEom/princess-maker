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
    image: "/assets/images/storm.webp",
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
    image: "/assets/images/treasure_chest.webp",
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
    image: "/assets/images/mysterious_figure.webp",
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
    image: "/assets/images/wild_animal.webp",
  },
  {
    id: "royal_banquet",
    name: "왕실 연회 초대",
    description: "이웃 왕국에서 왕실 연회에 초대받았습니다. 어떻게 하시겠습니까?",
    options: [
      {
        text: "연회에 참석하여 외교적 관계를 강화한다.",
        effect: { charm: 10, hope: 5 },
        resultText: "연회에서 좋은 인상을 남겼습니다. 매력과 희망이 증가했습니다.",
      },
      {
        text: "연회를 거절하고 왕국 문제에 집중한다.",
        effect: { intelligence: 5 },
        resultText: "연회를 거절하고 왕국 문제를 해결했습니다. 지능이 증가했습니다.",
      },
    ],
    condition: () => Math.random() < 0.2, // 20% 확률로 발생
    image: "/assets/images/royal_banquet.webp",
  },
  {
    id: "forest_fire",
    name: "숲 속에서 화재가 발생했습니다.",
    description: "숲 속에서 화재가 발생했습니다. 어떻게 하시겠습니까?",
    options: [
      {
        text: "화재 진압을 위해 병사를 보낸다.",
        effect: { health: -5, intelligence: 5 },
        resultText: "화재를 진압했지만 병사들이 다쳤습니다. 체력이 감소했지만 지능이 증가했습니다.",
      },
      {
        text: "화재를 피해 마을로 돌아간다.",
        effect: { health: 5, charm: 3 },
        resultText: "화재를 피해 안전하게 마을로 돌아왔습니다. 체력과 매력이 증가했습니다.",
      },
    ],
    condition: () => Math.random() < 0.15, // 15% 확률로 발생
    image: "/assets/images/forest_fire.webp",
  },
  {
    id: "bandit_attack",
    name: "산적의 습격",
    description: "여행 중 산적의 습격을 받았습니다. 어떻게 하시겠습니까?",
    options: [
      {
        text: "산적과 맞서 싸운다.",
        effect: { health: -10, intelligence: 5 },
        resultText: "산적과 싸워 이겼지만 체력이 크게 감소했습니다. 지능이 증가했습니다.",
      },
      {
        text: "산적에게 돈을 주고 지나간다.",
        effect: { wealth: -20, charm: 5 },
        resultText: "산적에게 돈을 주고 지나갔습니다. 재정이 감소했지만 매력이 증가했습니다.",
      },
    ],
    condition: () => Math.random() < 0.1, // 10% 확률로 발생
    image: "/assets/images/bandit_attack.webp",
  },
  {
    id: "mystic_ritual",
    name: "신비로운 의식",
    description: "숲 속에서 신비로운 의식을 발견했습니다. 어떻게 하시겠습니까?",
    options: [
      {
        text: "의식에 참여한다.",
        effect: { intelligence: 10, health: -5 },
        resultText: "의식에 참여하여 지능이 크게 증가했지만 체력이 감소했습니다.",
      },
      {
        text: "의식을 무시하고 지나간다.",
        effect: { charm: 5 },
        resultText: "의식을 무시하고 지나갔습니다. 매력이 증가했습니다.",
      },
    ],
    condition: () => Math.random() < 0.15, // 15% 확률로 발생
    image: "/assets/images/mystic_ritual.webp",
  },
  {
    id: "drop_magic_wand",
    name: "마법의 지팡이 획득",
    description: "마법의 지팡이를 획득했습니다. 어떻게 사용하시겠습니까?",
    options: [
      {
        text: "지팡이의 힘을 시험해본다.",
        effect: { intelligence: 10, health: -5 },
        resultText: "지팡이의 힘을 시험하여 지능이 증가했지만 체력이 감소했습니다.",
      },
      {
        text: "지팡이를 안전하게 보관한다.",
        effect: { charm: 5 },
        resultText: "지팡이를 안전하게 보관했습니다. 매력이 증가했습니다.",
      },
    ],
    condition: () => Math.random() < 0.2, // 20% 확률로 발생
    image: "/assets/images/drop_magic_wand.webp",
  }
];

export default randomEvents;
const storyEvents = [
  {
    id: 1,
    condition: (stats) => stats.charm >= 15,
    text: "당신의 매력은 모두를 사로잡았고, 마을 사람들이 당신을 존경합니다.",
  },
  {
    id: 2,
    condition: (stats) => stats.intelligence >= 15,
    text: "지능이 뛰어난 당신은 왕국의 전략가로 인정받았습니다.",
  },
  {
    id: 3,
    condition: (stats) => stats.health < 5,
    text: "건강이 나빠져 잠시 쉬어야 했습니다. 더 많은 휴식이 필요합니다.",
  },
  {
    id: 4,
    condition: (stats) => stats.charm >= 20 && stats.intelligence >= 10,
    text: "당신의 매력과 지능이 조화를 이루어 왕국의 귀빈이 되었습니다.",
  },
  {
    id: 5,
    condition: (stats) => stats.health >= 20,
    text: "당신은 놀라운 체력을 자랑하며 모든 도전을 거뜬히 이겨냈습니다.",
  },
  {
    id: 6,
    condition: (stats) => stats.intelligence >= 20,
    text: "당신의 학문적 업적이 왕국 전역에 알려졌습니다.",
  },
  {
    id: 7,
    condition: (stats) => stats.charm >= 10 && stats.health >= 10,
    text: "당신은 매력적이고 건강한 삶을 살며 모두의 모범이 되고 있습니다.",
  },
  {
    id: 8,
    condition: (stats) => stats.intelligence < 5,
    text: "지능이 낮아 공부에 어려움을 겪었지만, 포기하지 않았습니다.",
  },
  {
    id: 9,
    condition: (stats) => stats.charm < 5,
    text: "매력 부족으로 사람들에게 외면받았지만, 당신은 내면의 가치를 믿고 있습니다.",
  },
  {
    id: 10,
    condition: (stats) => stats.health >= 15 && stats.intelligence >= 15,
    text: "당신은 건강과 지능 모두에서 우수한 능력을 보여주며, 전설적인 지도자가 되었습니다.",
  },
  {
    id: 11,
    condition: (stats) => stats.charm >= 25,
    text: "당신의 매력은 신화에 나오는 인물처럼 모두를 매료시켰습니다.",
  },
  {
    id: 12,
    condition: (stats) => stats.health < 3,
    text: "극도로 약한 건강 상태로 인해 회복에 오랜 시간이 걸렸습니다.",
  },
  {
    id: 13,
    condition: (stats) => stats.intelligence >= 25,
    text: "당신은 천재적인 능력을 발휘해 왕국의 문제를 해결했습니다.",
  },
  {
    id: 14,
    condition: (stats) => stats.charm >= 10 && stats.intelligence >= 10 && stats.health >= 10,
    text: "모든 능력을 고르게 갖춘 당신은 전설 속 영웅으로 추앙받습니다.",
  },
];

export default storyEvents;

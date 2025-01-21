const endings = [
  {
    id: "hero",
    condition: (stats) => stats.charm >= 20 && stats.health >= 15,
    message: "당신은 전설적인 영웅으로 추앙받습니다! 모든 이들이 당신의 용기와 매력을 기억할 것입니다.",
    image: "/assets/images/princess01.png",
  },
  {
    id: "scholar",
    condition: (stats) => stats.intelligence >= 25,
    message: "당신은 학문적 업적으로 세계적으로 인정받는 학자가 되었습니다. 당신의 연구는 모두에게 영감을 줍니다.",
    image: "/assets/images/princess01.png",
  },
  {
    id: "villager",
    condition: (stats) => stats.charm < 10 && stats.health < 10,
    message: "당신은 조용한 마을에서 평온한 삶을 살았습니다. 작은 행복이 가장 큰 보상이었습니다.",
    image: "/assets/images/princess01.png",
  },
  {
    id: "leader",
    condition: (stats) =>
      stats.charm >= 15 && stats.intelligence >= 15 && stats.health >= 15,
    message: "당신은 건강과 매력을 겸비한 리더로서 모두를 이끌었습니다. 왕국은 당신의 지도력을 기억할 것입니다.",
    image: "/assets/images/princess01.png",
  },
  {
    id: "genius",
    condition: (stats) => stats.intelligence >= 30,
    message: "당신은 천재적인 능력을 발휘하여 인류의 미래를 변화시켰습니다. 모든 이들이 당신을 존경합니다.",
    image: "/assets/images/princess01.png",
  },
  {
    id: "fallen_hero",
    condition: (stats) => stats.charm >= 20 && stats.health < 5,
    message: "당신은 매력적인 영웅이었지만 건강이 악화되어 모든 영광을 뒤로하고 은퇴해야 했습니다.",
    image: "/assets/images/princess01.png",
  },
  {
    id: "mystic",
    condition: (stats) => stats.intelligence >= 20 && stats.charm >= 20,
    message: "당신은 지혜와 매력을 모두 가진 신비로운 존재로 기억됩니다. 당신의 이야기는 전설이 되었습니다.",
    image: "/assets/images/princess01.png",
  },
  {
    id: "balanced_life",
    condition: (stats) =>
      stats.charm >= 10 && stats.health >= 10 && stats.intelligence >= 10,
    message: "당신은 모든 것을 균형 있게 관리하며 만족스러운 삶을 살았습니다. 당신의 조화로운 삶은 모두의 귀감이 됩니다.",
    image: "/assets/images/princess01.png",
  },
  {
    id: "unfinished_story",
    condition: () => true, // 기본 엔딩: 아무 조건도 만족하지 않을 경우
    message: "당신의 이야기는 아직 끝나지 않았습니다. 앞으로도 더 많은 선택이 기다리고 있습니다.",
    image: "/assets/images/princess01.png",
  },
];

export default endings;

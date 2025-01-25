const endings = [
  // 긍정적 중심
  {
    id: "heroic_leader",
    condition: (stats) => stats.긍정적 >= 18 && stats.희망적 >= 18,
    message: "당신은 영웅적인 지도자 공주입니다. 뛰어난 리더십으로 왕국을 번영으로 이끕니다.",
    image: "/assets/images/end_1_heroic_leader.webp",
  },
  {
    id: "optimistic_leader",
    condition: (stats) => stats.긍정적 >= 14 && stats.희망적 >= 14,
    message: "당신은 낙천적이고 꿈 많은 지도자 공주입니다. 리더십을 발휘하여 왕국을 번영으로 이끕니다.",
    image: "/assets/images/end_2_optimistic_leader_2.webp",
  },
  {
    id: "gentle_ruler",
    condition: (stats) => stats.긍정적 >= 14 && stats.회피적 >= 14,
    message: "당신은 배려심 많고 조화를 이루는 공주입니다. 평화를 중시하는 리더십을 발휘합니다.",
    image: "/assets/images/end_3_gentle_ruler.webp",
  },

  // 희망적 중심
  {
    id: "visionary_innovator",
    condition: (stats) => stats.희망적 >= 18 && stats.열정적 >= 14,
    message: "당신은 꿈과 비전을 가진 혁신가 공주입니다. 새로운 아이디어로 왕국을 변화시킵니다.",
    image: "/assets/images/end_4_visionary_innovator.webp",
  },
  {
    id: "hopeful_dreamer",
    condition: (stats) => stats.희망적 >= 18 && stats.긍정적 >= 10,
    message: "당신은 희망찬 이상주의 공주입니다. 꿈을 이루기 위해 끊임없이 노력합니다.",
    image: "/assets/images/end_5_hopeful_dreamer.webp",
  },

  // 열정적 중심
  {
    id: "courageous_warrior",
    condition: (stats) => stats.열정적 >= 18 && stats.긍정적 >= 14,
    message: "당신은 용감한 전사 공주입니다. 도전을 두려워하지 않고 왕국을 지킵니다.",
    image: "/assets/images/end_6_courageous_warrior.webp",
  },
  {
    id: "brave_explorer",
    condition: (stats) => stats.열정적 >= 18 && stats.희망적 >= 14,
    message: "당신은 모험을 즐기는 공주입니다. 새로운 세계를 탐험하며 왕국의 경계를 넓힙니다.",
    image: "/assets/images/end_7_brave_explorer.webp",
  },

  // 부정적 중심
  {
    id: "realistic_strategist",
    condition: (stats) => stats.부정적 >= 14 && stats.회피적 >= 10,
    message: "당신은 냉철하고 현실적인 전략가 공주입니다. 현실적인 판단으로 왕국을 위기에서 구합니다.",
    image: "/assets/images/end_8_realistic_strategist.webp",
  },
  {
    id: "coldhearted_ruler",
    condition: (stats) => stats.부정적 >= 18 && stats.긍정적 <= 6,
    message: "당신은 냉소적이고 고립된 공주입니다. 왕국의 질서를 유지하기 위해 철권을 휘두릅니다.",
    image: "/assets/images/end_9_coldhearted_ruler.webp",
  },

  // 회피적 중심
  {
    id: "avoidant_princess",
    condition: (stats) => stats.회피적 >= 18 && stats.부정적 >= 14,
    message: "당신은 소극적이고 의존적인 공주입니다. 중요한 결정을 내리지 못하고 주변의 도움에 의존합니다.",
    image: "/assets/images/end_10_avoidant_princess.webp",
  },
  {
    id: "peaceful_mediator",
    condition: (stats) => stats.회피적 >= 14 && stats.희망적 >= 14,
    message: "당신은 평화를 중시하는 공주입니다. 갈등을 피하고 조화를 이루는 데 집중합니다.",
    image: "/assets/images/end_11_peaceful_mediator.webp",
  },

  // 지적 중심
  {
    id: "intellectual_princess",
    condition: (stats) => stats.지적 >= 18 && stats.희망적 >= 10,
    message: "당신은 분석적이고 지적인 공주입니다. 왕국을 지혜롭게 이끕니다.",
    image: "/assets/images/end_12_intellectual_princess.webp",
  },
  {
    id: "scholarly_ruler",
    condition: (stats) => stats.지적 >= 14 && stats.긍정적 >= 10,
    message: "당신은 학문적 성과를 통해 왕국의 번영을 추구하는 공주입니다.",
    image: "/assets/images/end_13_scholarly_ruler.webp",
  },

  // 균형 있는 상태
  {
    id: "balanced_princess",
    condition: (stats) =>
      stats.긍정적 >= 14 &&
      stats.희망적 >= 14 &&
      stats.열정적 >= 10 &&
      stats.부정적 <= 6 &&
      stats.회피적 <= 6,
    message: "당신은 조화를 이루는 현실주의 공주입니다. 현실적인 판단과 낙천적 의지로 왕국을 이끕니다.",
    image: "/assets/images/end_14_balanced_princess.webp",
  },

  // 극단적 상태
  {
    id: "fallen_princess",
    condition: (stats) =>
      stats.부정적 >= 18 &&
      stats.긍정적 <= 6 &&
      stats.희망적 <= 6 &&
      stats.열정적 <= 6,
    message: "당신은 추락한 공주입니다. 왕국을 위기에 빠뜨리고 추방되었습니다.",
    image: "/assets/images/end_15_fallen_princess.webp",
  },
  {
    id: "hero_in_darkness",
    condition: (stats) =>
      stats.부정적 >= 18 && stats.열정적 >= 14 && stats.희망적 >= 10,
    message: "당신은 고난 속에서 일어선 공주입니다. 어둠 속에서도 희망을 찾습니다.",
    image: "/assets/images/end_end_16_hero_in_darkness.webp",
  },

  // 특별 조합
  {
    id: "compromising_leader",
    condition: (stats) => stats.긍정적 >= 14 && stats.부정적 >= 14,
    message: "당신은 현실과 이상 사이에서 균형을 찾는 공주입니다. 협력과 타협의 중요성을 압니다.",
    image: "/assets/images/end_17_compromising_leader.webp",
  },
  {
    id: "reckless_dreamer",
    condition: (stats) => stats.희망적 >= 18 && stats.부정적 >= 14,
    message: "당신은 비현실적인 꿈을 쫓는 공주입니다. 종종 현실과 충돌하지만 열정을 멈추지 않습니다.",
    image: "/assets/images/end_end_18_reckless_dreamer.webp",
  },

  // 독립적 상태
  {
    id: "independent_princess",
    condition: (stats) =>
      stats.긍정적 >= 14 && stats.회피적 <= 6 && stats.지적 >= 14,
    message: "당신은 독립적이고 이성적인 공주입니다. 스스로의 힘으로 왕국을 이끕니다.",
    image: "/assets/images/end_19_independent_princess.webp",
  },

  // 기본 엔딩
  {
    id: "unfinished_story",
    condition: () => true,
    message: "당신의 이야기는 아직 끝나지 않았습니다. 앞으로도 더 많은 선택이 기다리고 있습니다.",
    image: "/assets/images/end_20_unfinished_story.webp",
  },
];

export default endings;

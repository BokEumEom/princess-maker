const endings = [
  {
    id: "optimistic_leader",
    condition: (stats) => stats.긍정적 >= 10 && stats.희망적 >= 10,
    message: "당신은 낙천적이고 꿈 많은 지도자 공주입니다. 리더십을 발휘하여 왕국을 번영으로 이끕니다.",
    image: "/assets/images/endings/optimistic_leader.webp",
  },
  {
    id: "realistic_strategist",
    condition: (stats) => stats.부정적 <= -5 && stats.회피적 < 8,
    message: "당신은 냉철하고 현실적인 전략가 공주입니다. 현실적인 판단으로 왕국을 위기에서 구합니다.",
    image: "/assets/images/endings/realistic_strategist.webp",
  },
  {
    id: "peaceful_mediator",
    condition: (stats) => stats.회피적 >= 8 && stats.부정적 < 10,
    message: "당신은 평화를 중시하는 평화주의 공주입니다. 갈등을 해결하고 조화를 이루는 조력자 역할을 합니다.",
    image: "/assets/images/endings/peaceful_mediator.webp",
  },
  {
    id: "visionary_innovator",
    condition: (stats) => stats.희망적 >= 10 && stats.열정적 >= 10,
    message: "당신은 꿈과 비전을 가진 혁신가 공주입니다. 새로운 아이디어로 왕국을 변화시킵니다.",
    image: "/assets/images/endings/visionary_innovator.webp",
  },
  {
    id: "courageous_warrior",
    condition: (stats) => stats.열정적 >= 10 && stats.긍정적 >= 5,
    message: "당신은 용감한 전사 공주입니다. 도전을 두려워하지 않고 왕국을 지킵니다.",
    image: "/assets/images/endings/courageous_warrior.webp",
  },
  {
    id: "isolated_princess",
    condition: (stats) => stats.부정적 >= 10 && stats.긍정적 <= 5 && stats.회피적 <= 5,
    message: "당신은 고립된 공주입니다. 주변 사람들과의 갈등 속에서 혼자 고립되며 신뢰를 잃습니다.",
    image: "/assets/images/endings/isolated_princess.webp",
  },
  {
    id: "dependent_princess",
    condition: (stats) => stats.부정적 >= 10 && stats.회피적 >= 10,
    message: "당신은 소극적인 의존형 공주입니다. 중요한 결정을 내리지 못하고 타인에게만 의존합니다.",
    image: "/assets/images/endings/dependent_princess.webp",
  },
  {
    id: "idealistic_princess",
    condition: (stats) => stats.부정적 >= 10 && stats.희망적 >= 10,
    message: "당신은 비현실적인 이상주의 공주입니다. 이상만을 추구하지만 현실적 어려움을 극복하지 못합니다.",
    image: "/assets/images/endings/idealistic_princess.webp",
  },
  {
    id: "fallen_princess",
    condition: (stats) =>
      stats.부정적 >= 15 && stats.긍정적 <= 5 && stats.희망적 <= 5 && stats.열정적 <= 5,
    message: "당신은 추락한 공주입니다. 왕국을 위기에 빠뜨리고 추방되었습니다.",
    image: "/assets/images/endings/fallen_princess.webp",
  },
  {
    id: "balanced_princess",
    condition: (stats) =>
      stats.긍정적 >= 10 && stats.부정적 >= 5 && stats.희망적 >= 5 && stats.열정적 >= 5,
    message: "당신은 조화를 이루는 현실주의 공주입니다. 현실적인 판단과 낙천적 의지로 왕국을 이끕니다.",
    image: "/assets/images/endings/balanced_princess.webp",
  },
  {
    id: "unfinished_story",
    condition: () => true, // 기본 엔딩: 아무 조건도 만족하지 않을 경우
    message: "당신의 이야기는 아직 끝나지 않았습니다. 앞으로도 더 많은 선택이 기다리고 있습니다.",
    image: "/assets/images/endings/unfinished_story_ending.png",
  },
];

export default endings;
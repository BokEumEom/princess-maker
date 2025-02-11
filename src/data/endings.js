// src/data/endings.js
const endings = [
  {
    id: "optimistic_leader",
    // 예: health >= 25, charm >= 25 면 낙천적 / 희망적 리더
    condition: (stats) => stats.health >= 25 && stats.charm >= 25,
    message: "당신은 낙천적이고 꿈 많은 지도자 공주입니다. 리더십을 발휘하여 왕국을 번영으로 이끕니다.",
    image: "/assets/images/endings/end_2_optimistic_leader.webp"
  },
  {
    id: "realistic_strategist",
    // 예: health가 낮고(int <some threshold), intelligence가 중간 이상이면 냉철한 전략가
    condition: (stats) => stats.health <= 5 && stats.intelligence >= 15,
    message: "당신은 냉철하고 현실적인 전략가 공주입니다. 위기에도 흔들리지 않는 판단력을 지녔습니다.",
    image: "/assets/images/endings/end_8_realistic_strategist.webp",
  },
  {
    id: "peaceful_mediator",
    // charm이 꽤 높고 health가 적당히 유지되고 있으면 평화주의
    condition: (stats) => stats.charm >= 30 && stats.health >= 10,
    message: "당신은 평화를 중시하는 평화주의 공주입니다. 갈등을 해결하고 조화를 이루는 조력자 역할을 합니다.",
    image: "/assets/images/endings/end_3_gentle_ruler.webp",
  },
  {
    id: "visionary_innovator",
    // charm & intelligence 모두 높은 경우 = 혁신가
    condition: (stats) => stats.charm >= 20 && stats.intelligence >= 20,
    message: "당신은 꿈과 비전을 가진 혁신가 공주입니다. 새로운 아이디어로 왕국을 변화시킵니다.",
    image: "/assets/images/endings/end_4_visionary_innovator.webp",
  },
  {
    id: "courageous_warrior",
    // health & intelligence 모두 높은 경우 = 용감한 전사
    condition: (stats) => stats.health >= 20 && stats.intelligence >= 20,
    message: "당신은 용감한 전사 공주입니다. 도전을 두려워하지 않고 왕국을 지킵니다.",
    image: "/assets/images/endings/courageous_warrior.webp",
  },
  {
    id: "isolated_princess",
    // health, charm 모두 낮으면 고립
    condition: (stats) => stats.health <= 4 && stats.charm <= 5,
    message: "당신은 고립된 공주입니다. 주변 사람들과의 갈등 속에서 혼자 고립되며 신뢰를 잃습니다.",
    image: "/assets/images/endings/end_9_coldhearted_ruler.webp",
  },
  {
    id: "dependent_princess",
    // health & intelligence 모두 낮으면 의존적
    condition: (stats) => stats.health <= 8 && stats.intelligence <= 8,
    message: "당신은 소극적인 의존형 공주입니다. 중요한 결정을 내리지 못하고 타인에게만 의존합니다.",
    image: "/assets/images/endings/end_10_avoidant_princess.webp",
  },
  {
    id: "idealistic_princess",
    // health은 낮지만 charm이 꽤 높으면 이상주의
    condition: (stats) => stats.health <= 5 && stats.charm >= 25,
    message: "당신은 이상만을 추구하는 공주입니다. 현실적 어려움을 직면하기 어려워합니다.",
    image: "/assets/images/endings/idealistic_princess.webp",
  },
  {
    id: "fallen_princess",
    // 세 스탯 모두 낮으면 몰락
    condition: (stats) => stats.health <= 5 && stats.charm <= 5 && stats.intelligence <= 5,
    message: "당신은 추락한 공주입니다. 왕국을 위기에 빠뜨리고 추방되었습니다.",
    image: "/assets/images/endings/end_15_fallen_princess.webp",
  },
  {
    id: "balanced_princess",
    // 세 스탯 모두 일정 기준 이상이면 조화로운 리더
    condition: (stats) => 
      stats.health >= 20 && stats.charm >= 20 && stats.intelligence >= 20,
    message: "당신은 조화를 이루는 현실주의 공주입니다. 균형 잡힌 판단으로 왕국을 이끕니다.",
    image: "/assets/images/endings/end_14_balanced_princess.webp",
  },
  {
    id: "unfinished_story",
    condition: () => true,
    message: "당신의 이야기는 아직 끝나지 않았습니다. 앞으로 더 많은 선택이 기다리고 있습니다.",
    image: "/assets/images/endings/unfinished_story_ending.png",
  },
];

export default endings;

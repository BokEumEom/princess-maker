const storyQuestions = [
  {
    id: 1,
    question: "궁전 앞에 낯선 방문자가 찾아와 중요한 소식이 있다며 공주를 찾습니다. 어떻게 반응하시겠어요?",
    image: "/assets/images/questions/palace_visitor.webp",
    options: [
      {
        text: "방문자를 바로 만나 이야기를 듣는다.",
        effect: { 긍정적: 2, 희망적: 1 },
        result: "친절한 지도자",
        interactWithNPC: "mystic_old_man", // 신비한 노인과 상호작용
      },
      {
        text: "신뢰할 수 없으니 경호병을 시켜 조사하게 한다.",
        effect: { 부정적: 2 },
        result: "현실적 전략가",
        triggerEvent: "storm", // 폭풍우 이벤트 발생
      },
      {
        text: "상황을 주시하며 만남을 보류한다.",
        effect: { 회피적: 2 },
        result: "신중한 평화주의자",
      },
      {
        text: "그가 왕국에 위협이 될 것이라 믿고 쫓아낸다.",
        effect: { 열정적: 1, 부정적: 1 },
        result: "충동적 전사",
        acquireItem: "magic_wand", // 마법의 지팡이 획득
      },
    ],
  },
  {
    id: 2,
    question: "여행 중 만난 상인이 신비로운 물건을 제안합니다. 어떻게 하시겠어요?",
    image: "/assets/images/questions/mysterious_merchant.webp",
    options: [
      {
        text: "물건을 구입하고 왕국에 가져간다.",
        effect: { 긍정적: 2, 희망적: 1 },
        result: "모험적이고 낙관적인 결정",
        acquireItem: "healing_potion", // 치유 물약 획득
      },
      {
        text: "정확히 검증하지 않고는 구입하지 않는다.",
        effect: { 부정적: 2, 회피적: 1 },
        result: "냉철하고 조심스러운 성격",
        interactWithNPC: "wandering_merchant", // 방랑 상인과 상호작용
      },
      {
        text: "상인의 제안에 의문을 품고 떠난다.",
        effect: { 회피적: 2, 부정적: 1 },
        result: "신뢰가 부족한 판단",
        triggerEvent: "treasure_chest", // 보물 상자 이벤트 발생
      },
      {
        text: "가격을 낮추기 위해 상인과 협상한다.",
        effect: { 열정적: 2 },
        result: "교섭 능력이 뛰어난 공주",
        acquireItem: "lucky_coin", // 행운의 동전 획득
      },
    ],
  },
  {
    id: 3,
    question: "왕국이 위협을 받고 있다는 소식이 전해집니다. 공주의 다음 행동은요?",
    image: "/assets/images/questions/kingdom_threat.webp",
    options: [
      {
        text: "즉시 군대를 소집해 전쟁 준비를 한다.",
        effect: { 열정적: 3 },
        result: "용감한 전사",
        triggerEvent: "wild_animal", // 야생 동물 이벤트 발생
      },
      {
        text: "동맹국과 협상해 도움을 요청한다.",
        effect: { 희망적: 2, 긍정적: 1 },
        result: "협력적 리더",
        interactWithNPC: "wise_wizard", // 현명한 마법사와 상호작용
      },
      {
        text: "시간을 벌기 위해 침묵하며 전략을 짠다.",
        effect: { 회피적: 2, 부정적: 1 },
        result: "신중한 평화주의자",
      },
      {
        text: "왕국의 일부를 내어주고 적과 협상한다.",
        effect: { 부정적: 3 },
        result: "현실적인 판단",
        acquireItem: "wisdom_book", // 지혜의 책 획득
      },
    ],
  },
  {
    id: 4,
    question: "백성들이 반란을 일으켰습니다. 공주는 어떤 선택을 할까요?",
    image: "/assets/images/questions/kingdom_rebellion.webp",
    options: [
      {
        text: "직접 반란의 원인을 듣고 문제를 해결한다.",
        effect: { 긍정적: 3 },
        result: "이해심 많은 지도자",
        interactWithNPC: "friendly_villager", // 친절한 마을 사람과 상호작용
      },
      {
        text: "군사력을 동원해 반란을 진압한다.",
        effect: { 열정적: 2, 부정적: 1 },
        result: "강압적인 리더",
        triggerEvent: "mysterious_figure", // 신비로운 인물 이벤트 발생
      },
      {
        text: "중재자를 보내 문제를 해결한다.",
        effect: { 회피적: 2 },
        result: "갈등을 피하는 성격",
      },
      {
        text: "백성들의 요구를 무시하고 자신의 길을 간다.",
        effect: { 부정적: 3 },
        result: "냉소적인 공주",
        acquireItem: "charm_amulet", // 매력의 부적 획득
      },
    ],
  },
  {
    id: 5,
    question: "이웃 왕국에서 외교 행사에 초대했습니다. 공주는 어떤 선택을 할까요?",
    image: "/assets/images/questions/diplomatic_event.webp",
    options: [
      {
        text: "가장 화려한 옷을 입고 행사에 참석한다.",
        effect: { 긍정적: 3 },
        result: "외향적 지도자",
        acquireItem: "elegant_gown", // 우아한 드레스 획득
      },
      {
        text: "행사의 의도를 조사하고 신중하게 참석한다.",
        effect: { 회피적: 2, 부정적: 1 },
        result: "신중한 전략가",
        interactWithNPC: "diplomatic_advisor", // 외교 고문과 상호작용
      },
      {
        text: "참석을 거부하고 다른 문제에 집중한다.",
        effect: { 부정적: 2 },
        result: "고립적 성격",
        triggerEvent: "mystic_ritual", // 신비로운 의식 이벤트 발생
      },
      {
        text: "참석하며 연설을 준비해 자신의 입지를 높인다.",
        effect: { 열정적: 2, 희망적: 1 },
        result: "도전적인 지도자",
        acquireItem: "inspiring_speech", // 감동적인 연설문 획득
      },
    ],
  },
  {
    id: 6,
    question: "어느 날 밤, 궁전의 한쪽에서 화재가 발생했습니다. 공주는 무엇을 우선적으로 해야할까요?",
    image: "/assets/images/questions/palace_fire.webp",
    options: [
      {
        text: "화재 진압을 위해 신속히 명령을 내린다.",
        effect: { 열정적: 3 },
        result: "긴급 대응 능력이 뛰어난 공주",
        triggerEvent: "forest_fire", // 숲 화재 이벤트 발생
      },
      {
        text: "백성을 대피시키는 데 집중한다.",
        effect: { 긍정적: 2, 희망적: 1 },
        result: "배려심 많은 지도자",
        interactWithNPC: "fire_chief", // 소방대장과 상호작용
      },
      {
        text: "상황을 분석하고 후속 조치를 계획한다.",
        effect: { 회피적: 2, 지적: 1 },
        result: "전략가적 성향",
      },
      {
        text: "귀중한 보물을 먼저 구출하도록 명령한다.",
        effect: { 부정적: 2, 열정적: 1 },
        result: "현실적인 판단",
        acquireItem: "royal_treasure", // 왕실 보물 획득
      },
    ],
  },
  {
    id: 7,
    question: "전쟁에서 적국의 고위 장군이 포로로 잡혔습니다. 공주는 이 포로를 어떻게 대해야 할까요?",
    image: "/assets/images/questions/war_prisoner.webp",
    options: [
      {
        text: "적국과 협상을 위해 포로를 이용한다.",
        effect: { 희망적: 2, 지적: 1 },
        result: "협상 능력이 뛰어난 공주",
        interactWithNPC: "diplomatic_advisor", // 외교 고문과 상호작용
      },
      {
        text: "포로를 석방하여 평화를 시도한다.",
        effect: { 긍정적: 3 },
        result: "인도주의적인 지도자",
        acquireItem: "peace_treaty", // 평화 조약 획득
      },
      {
        text: "처형을 명령하여 적들에게 경고한다.",
        effect: { 부정적: 3 },
        result: "단호한 전사",
        triggerEvent: "bandit_attack", // 산적 습격 이벤트 발생
      },
      {
        text: "포로를 심문해 정보를 얻는다.",
        effect: { 부정적: 2, 회피적: 1 },
        result: "신중한 전략가",
      },
    ],
  },
  {
    id: 8,
    question: "공주는 왕국 근처 신비로운 숲에 대한 소문을 듣습니다. 이 숲은 위험하지만, 큰 보물이 숨겨져 있다는 이야기가 있습니다.",
    image: "/assets/images/questions/mysterious_forest.webp",
    options: [
      {
        text: "숲을 탐험하여 소문의 진위를 확인한다.",
        effect: { 열정적: 3 },
        result: "모험적인 성격",
        triggerEvent: "forest_fire", // 숲 화재 이벤트 발생
      },
      {
        text: "병사를 보내 대신 조사하도록 한다.",
        effect: { 회피적: 2, 부정적: 1 },
        result: "신중한 접근",
        interactWithNPC: "wandering_merchant", // 방랑 상인과 상호작용
      },
      {
        text: "소문을 무시하고 왕국 문제에 집중한다.",
        effect: { 부정적: 2 },
        result: "실용적인 리더",
      },
      {
        text: "마을 사람들과 소문을 조사해 계획을 세운다.",
        effect: { 희망적: 2, 긍정적: 1 },
        result: "협력적 지도자",
        acquireItem: "lucky_coin", // 행운의 동전 획득
      },
    ],
  },
  {
    id: 9,
    question: "왕국에 전염병이 퍼지기 시작했습니다. 공주는 어떻게 대처할까요?",
    image: "/assets/images/questions/kingdom_plague.webp",
    options: [
      {
        text: "병자들을 위한 격리 구역을 즉시 만든다.",
        effect: { 긍정적: 2, 희망적: 1 },
        result: "민첩한 대응",
        interactWithNPC: "wise_wizard", // 현명한 마법사와 상호작용
      },
      {
        text: "전염병의 원인을 조사하기 위해 과학자들을 고용한다.",
        effect: { 지적: 3 },
        result: "분석적 리더",
        acquireItem: "wisdom_book", // 지혜의 책 획득
      },
      {
        text: "외부 지원을 요청하여 자원을 확보한다.",
        effect: { 회피적: 2, 희망적: 1 },
        result: "협력적 성격",
        triggerEvent: "royal_banquet", // 왕실 연회 이벤트 발생
      },
      {
        text: "병자들을 외곽으로 추방하여 확산을 막는다.",
        effect: { 부정적: 3 },
        result: "단호한 현실주의자",
      },
    ],
  },
  {
    id: 10,
    question: "공주는 오래된 왕가의 보물을 발견합니다. 하지만, 그 보물은 무거운 저주를 동반한다고 전해집니다.",
    image: "/assets/images/questions/cursed_treasure.webp",
    options: [
      {
        text: "저주를 두려워하지 않고 보물을 사용한다.",
        effect: { 열정적: 3 },
        result: "대담한 전사",
        triggerEvent: "drop_magic_wand", // 마법의 지팡이 획득 이벤트 발생
      },
      {
        text: "보물을 안전하게 봉인하도록 명령한다.",
        effect: { 회피적: 3 },
        result: "신중한 지도자",
        interactWithNPC: "mystic_old_man", // 신비한 노인과 상호작용
      },
      {
        text: "보물의 저주를 풀기 위한 연구를 시작한다.",
        effect: { 희망적: 2, 지적: 1 },
        result: "혁신가적인 공주",
        acquireItem: "charm_amulet", // 매력의 부적 획득
      },
      {
        text: "보물을 팔아 왕국의 재정을 강화한다.",
        effect: { 부정적: 2 },
        result: "실리적 판단",
      },
    ],
  },
];

export default storyQuestions;
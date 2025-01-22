const questions = [
  {
    id: 1,
    question: "오늘의 기분은 어떠셨나요?",
    options: [
      {
        text: "매우 행복함",
        effect: { charm: 5, 긍정적: 3, 희망적: 2 },
        acquireItem: "magic_wand", // 마법의 지팡이 획득
      },
      {
        text: "평온함",
        effect: { charm: 3, 긍정적: 2 },
        interactWithNPC: "mystic_old_man", // 신비한 노인과 상호작용
      },
      {
        text: "약간 우울함",
        effect: { charm: -2, 부정적: 2 },
        triggerEvent: true, // 랜덤 이벤트 발생
      },
      {
        text: "매우 슬픔",
        effect: { charm: -5, 부정적: 3 },
      },
    ],
  },
  {
    id: 2,
    question: "오늘 하루 에너지는 어땠나요?",
    options: [
      {
        text: "활기찼다",
        effect: { health: 5, 열정적: 3 },
        acquireItem: "healing_potion", // 치유 물약 획득
      },
      {
        text: "보통",
        effect: { health: 2 },
      },
      {
        text: "지쳤다",
        effect: { health: -2, 부정적: 2 },
        triggerEvent: true, // 랜덤 이벤트 발생
      },
      {
        text: "매우 지쳤다",
        effect: { health: -5, 부정적: 3 },
      },
    ],
  },
  {
    id: 3,
    question: "오늘 가장 많이 느낀 감정은 무엇인가요?",
    options: [
      {
        text: "기쁨",
        effect: { charm: 3, health: 2, 긍정적: 3 },
        interactWithNPC: "friendly_villager", // 친절한 마을 사람과 상호작용
      },
      {
        text: "분노",
        effect: { health: -3, charm: -2, 부정적: 3 },
        triggerEvent: true, // 랜덤 이벤트 발생
      },
      {
        text: "슬픔",
        effect: { charm: -3, 부정적: 2 },
      },
      {
        text: "평온",
        effect: { charm: 2, 회피적: 2 },
      },
    ],
  },
  {
    id: 4,
    question: "오늘 하루의 스트레스 수준은 어땠나요?",
    options: [
      {
        text: "전혀 없었음",
        effect: { health: 5, charm: 3, 긍정적: 3 },
        acquireItem: "lucky_coin", // 행운의 동전 획득
      },
      {
        text: "보통",
        effect: { health: 2 },
      },
      {
        text: "약간 높았음",
        effect: { health: -2, 부정적: 2 },
        triggerEvent: true, // 랜덤 이벤트 발생
      },
      {
        text: "매우 높았음",
        effect: { health: -5, charm: -3, 부정적: 3 },
      },
    ],
  },
  {
    id: 5,
    question: "오늘 가장 많은 시간을 보낸 활동은 무엇인가요?",
    options: [
      {
        text: "일/공부",
        effect: { health: -2, charm: 2, 희망적: 3 },
        interactWithNPC: "wise_wizard", // 현명한 마법사와 상호작용
      },
      {
        text: "운동",
        effect: { health: 5, 열정적: 3 },
        acquireItem: "energy_drink", // 에너지 드링크 획득
      },
      {
        text: "사람들과 어울림",
        effect: { charm: 5, 긍정적: 3 },
      },
      {
        text: "휴식/취미",
        effect: { health: 3, charm: 3, 회피적: 2 },
      },
    ],
  },
  {
    id: 6,
    question: "오늘 마신 물의 양은 얼마나 되나요?",
    options: [
      {
        text: "충분히 마셨다",
        effect: { health: 5, 긍정적: 2 },
      },
      {
        text: "적당히 마셨다",
        effect: { health: 2 },
      },
      {
        text: "조금 부족했다",
        effect: { health: -2, 부정적: 1 },
        triggerEvent: true, // 랜덤 이벤트 발생
      },
      {
        text: "전혀 부족했다",
        effect: { health: -5, 부정적: 2 },
      },
    ],
  },
  {
    id: 7,
    question: "오늘의 날씨는 어땠나요?",
    options: [
      {
        text: "맑음",
        effect: { charm: 3, 긍정적: 3 },
      },
      {
        text: "흐림",
        effect: { charm: 1 },
      },
      {
        text: "비/눈",
        effect: { charm: -2, 회피적: 2 },
        triggerEvent: true, // 랜덤 이벤트 발생
      },
      {
        text: "폭풍우",
        effect: { charm: -5, 부정적: 3 },
      },
    ],
  },
  {
    id: 8,
    question: "오늘 가장 기억에 남는 순간은 무엇인가요?",
    options: [
      {
        text: "즐거운 순간",
        effect: { charm: 5, 긍정적: 3 },
      },
      {
        text: "감동적인 순간",
        effect: { charm: 3, health: 2, 희망적: 3 },
        acquireItem: "memory_crystal", // 기억의 수정 획득
      },
      {
        text: "힘들었던 순간",
        effect: { health: -3, charm: -2, 부정적: 2 },
      },
      {
        text: "기억에 남는 순간 없음",
        effect: {},
      },
    ],
  },
  {
    id: 9,
    question: "오늘 몇 시간을 잤나요?",
    options: [
      {
        text: "7시간 이상",
        effect: { health: 5, 긍정적: 2 },
      },
      {
        text: "5~7시간",
        effect: { health: 3 },
      },
      {
        text: "3~5시간",
        effect: { health: -3, 부정적: 1 },
        triggerEvent: true, // 랜덤 이벤트 발생
      },
      {
        text: "3시간 이하",
        effect: { health: -5, 부정적: 2 },
      },
    ],
  },
  {
    id: 10,
    question: "내일 어떤 하루를 보내고 싶나요?",
    options: [
      {
        text: "활기찬 하루",
        effect: { charm: 3, health: 3, 열정적: 3 },
      },
      {
        text: "평화로운 하루",
        effect: { charm: 2, 회피적: 3 },
      },
      {
        text: "도전적인 하루",
        effect: { health: 5, 열정적: 3 },
        interactWithNPC: "wandering_merchant", // 방랑 상인과 상호작용
      },
      {
        text: "쉬는 하루",
        effect: { health: 3, 회피적: 2 },
      },
    ],
  },
  {
    id: 11,
    question: "오늘 누군가와의 대화에서 가장 기억에 남는 말은 무엇인가요?",
    options: [
      {
        text: "격려의 말",
        effect: { charm: 5, 긍정적: 3, 희망적: 2 },
        acquireItem: "encouragement_scroll", // 격려의 두루마리 획득
      },
      {
        text: "비판의 말",
        effect: { charm: -3, 부정적: 2 },
      },
      {
        text: "무관심한 말",
        effect: { charm: -2, 회피적: 2 },
      },
      {
        text: "기억에 남는 말 없음",
        effect: {},
      },
    ],
  },
  {
    id: 12,
    question: "오늘 가장 크게 느낀 감정적 변화는 무엇인가요?",
    options: [
      {
        text: "기쁨에서 슬픔으로",
        effect: { charm: -3, 부정적: 2 },
        triggerEvent: true, // 랜덤 이벤트 발생
      },
      {
        text: "슬픔에서 기쁨으로",
        effect: { charm: 5, 긍정적: 3 },
      },
      {
        text: "분노에서 평온으로",
        effect: { health: 3, 회피적: 2 },
      },
      {
        text: "변화 없음",
        effect: {},
      },
    ],
  },
  {
    id: 13,
    question: "오늘 가장 큰 도전은 무엇이었나요?",
    options: [
      {
        text: "업무/학업",
        effect: { health: -2, 열정적: 3 },
      },
      {
        text: "대인관계",
        effect: { charm: -3, 부정적: 2 },
        interactWithNPC: "friendly_villager", // 친절한 마을 사람과 상호작용
      },
      {
        text: "건강 관리",
        effect: { health: 5, 긍정적: 2 },
      },
      {
        text: "도전 없음",
        effect: {},
      },
    ],
  },
  {
    id: 14,
    question: "오늘 가장 감사한 순간은 무엇인가요?",
    options: [
      {
        text: "가족과의 시간",
        effect: { charm: 5, 긍정적: 3 },
      },
      {
        text: "친구와의 대화",
        effect: { charm: 3, 긍정적: 2 },
      },
      {
        text: "자기 자신에게 감사",
        effect: { health: 3, 희망적: 2 },
        acquireItem: "gratitude_journal", // 감사 일기 획득
      },
      {
        text: "감사한 순간 없음",
        effect: {},
      },
    ],
  },
  {
    id: 15,
    question: "오늘 가장 크게 배운 점은 무엇인가요?",
    options: [
      {
        text: "새로운 지식",
        effect: { health: 2, 열정적: 3 },
      },
      {
        text: "자기 성찰",
        effect: { charm: 3, 긍정적: 2 },
      },
      {
        text: "타인에 대한 이해",
        effect: { charm: 5, 긍정적: 3 },
        interactWithNPC: "wise_wizard", // 현명한 마법사와 상호작용
      },
      {
        text: "배운 점 없음",
        effect: {},
      },
    ],
  },
  {
    id: 16,
    question: "오늘 누군가에게 도움을 요청한 적이 있나요?",
    options: [
      {
        text: "네, 도움을 받았습니다.",
        effect: { charm: 5, 긍정적: 3 },
      },
      {
        text: "아니요, 혼자 해결했습니다.",
        effect: { health: 3, 열정적: 2 },
      },
      {
        text: "도움을 요청했지만 거절당했습니다.",
        effect: { charm: -3, 부정적: 2 },
        triggerEvent: true, // 랜덤 이벤트 발생
      },
      {
        text: "도움을 요청할 필요가 없었습니다.",
        effect: {},
      },
    ],
  },
  {
    id: 17,
    question: "오늘 가장 큰 성취는 무엇인가요?",
    options: [
      {
        text: "업무/학업",
        effect: { health: 2, 열정적: 3 },
      },
      {
        text: "대인관계",
        effect: { charm: 5, 긍정적: 3 },
      },
      {
        text: "건강 관리",
        effect: { health: 5, 긍정적: 2 },
        acquireItem: "achievement_medal", // 성취 메달 획득
      },
      {
        text: "성취 없음",
        effect: {},
      },
    ],
  },
];

export default questions;
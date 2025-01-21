const questions = [
  {
    id: 1,
    question: "오늘의 기분은 어떠셨나요?",
    options: [
      { text: "매우 행복함", effect: { charm: 5, 긍정적: 3, 희망적: 2 } },
      { text: "평온함", effect: { charm: 3, 긍정적: 2 } },
      { text: "약간 우울함", effect: { charm: -2, 부정적: 2 } },
      { text: "매우 슬픔", effect: { charm: -5, 부정적: 3 } },
    ],
  },
  {
    id: 2,
    question: "오늘 하루 에너지는 어땠나요?",
    options: [
      { text: "활기찼다", effect: { health: 5, 열정적: 3 } },
      { text: "보통", effect: { health: 2 } },
      { text: "지쳤다", effect: { health: -2, 부정적: 2 } },
      { text: "매우 지쳤다", effect: { health: -5, 부정적: 3 } },
    ],
  },
  {
    id: 3,
    question: "오늘 가장 많이 느낀 감정은 무엇인가요?",
    options: [
      { text: "기쁨", effect: { charm: 3, health: 2, 긍정적: 3 } },
      { text: "분노", effect: { health: -3, charm: -2, 부정적: 3 } },
      { text: "슬픔", effect: { charm: -3, 부정적: 2 } },
      { text: "평온", effect: { charm: 2, 회피적: 2 } },
    ],
  },
  {
    id: 4,
    question: "오늘 하루의 스트레스 수준은 어땠나요?",
    options: [
      { text: "전혀 없었음", effect: { health: 5, charm: 3, 긍정적: 3 } },
      { text: "보통", effect: { health: 2 } },
      { text: "약간 높았음", effect: { health: -2, 부정적: 2 } },
      { text: "매우 높았음", effect: { health: -5, charm: -3, 부정적: 3 } },
    ],
  },
  {
    id: 5,
    question: "오늘 가장 많은 시간을 보낸 활동은 무엇인가요?",
    options: [
      { text: "일/공부", effect: { health: -2, charm: 2, 희망적: 3 } },
      { text: "운동", effect: { health: 5, 열정적: 3 } },
      { text: "사람들과 어울림", effect: { charm: 5, 긍정적: 3 } },
      { text: "휴식/취미", effect: { health: 3, charm: 3, 회피적: 2 } },
    ],
  },
  {
    id: 6,
    question: "오늘 마신 물의 양은 얼마나 되나요?",
    options: [
      { text: "충분히 마셨다", effect: { health: 5, 긍정적: 2 } },
      { text: "적당히 마셨다", effect: { health: 2 } },
      { text: "조금 부족했다", effect: { health: -2, 부정적: 1 } },
      { text: "전혀 부족했다", effect: { health: -5, 부정적: 2 } },
    ],
  },
  {
    id: 7,
    question: "오늘의 날씨는 어땠나요?",
    options: [
      { text: "맑음", effect: { charm: 3, 긍정적: 3 } },
      { text: "흐림", effect: { charm: 1 } },
      { text: "비/눈", effect: { charm: -2, 회피적: 2 } },
      { text: "폭풍우", effect: { charm: -5, 부정적: 3 } },
    ],
  },
  {
    id: 8,
    question: "오늘 가장 기억에 남는 순간은 무엇인가요?",
    options: [
      { text: "즐거운 순간", effect: { charm: 5, 긍정적: 3 } },
      { text: "감동적인 순간", effect: { charm: 3, health: 2, 희망적: 3 } },
      { text: "힘들었던 순간", effect: { health: -3, charm: -2, 부정적: 2 } },
      { text: "기억에 남는 순간 없음", effect: {} },
    ],
  },
  {
    id: 9,
    question: "오늘 몇 시간을 잤나요?",
    options: [
      { text: "7시간 이상", effect: { health: 5, 긍정적: 2 } },
      { text: "5~7시간", effect: { health: 3 } },
      { text: "3~5시간", effect: { health: -3, 부정적: 1 } },
      { text: "3시간 이하", effect: { health: -5, 부정적: 2 } },
    ],
  },
  {
    id: 10,
    question: "내일 어떤 하루를 보내고 싶나요?",
    options: [
      { text: "활기찬 하루", effect: { charm: 3, health: 3, 열정적: 3 } },
      { text: "평화로운 하루", effect: { charm: 2, 회피적: 3 } },
      { text: "도전적인 하루", effect: { health: 5, 열정적: 3 } },
      { text: "쉬는 하루", effect: { health: 3, 회피적: 2 } },
    ],
  },
];

export default questions;

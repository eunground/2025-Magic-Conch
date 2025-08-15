document.addEventListener('DOMContentLoaded', () => {
  const loadingBox = document.getElementById('loadingBox');
  const resultArea = document.getElementById('resultArea');

  const params = new URLSearchParams(location.search);
  const selected = Number(params.get('card') ?? Math.floor(Math.random() * 12));

  const results = [
    { title: "새로운 시작", text: "지금 떠오르는 첫 생각을 믿어보세요. 작은 시작이 큰 흐름을 만듭니다." },
    { title: "안정과 균형", text: "서두르지 않는 태도가 좋은 결과를 데려옵니다. 페이스 유지!" },
    { title: "우연의 기회", text: "예상 못한 제안이나 연락이 찾아옵니다. 열린 마음이 행운을 키워요." },
    { title: "집중의 시간", text: "선택지보다 기준을 정하세요. 기준이 선택을 쉽게 만듭니다." },
    { title: "협력의 신호", text: "혼자보다 함께가 빠릅니다. 도움을 청하면 길이 열립니다." },
    { title: "휴식의 필요", text: "잠깐 멈추면 더 멀리 갑니다. 오늘은 회복에 투자하세요." },
    { title: "성장의 징후", text: "어제의 어려움이 오늘의 실력이 됩니다. 곧 성과가 보일 거예요." },
    { title: "정리와 마감", text: "미뤄 둔 일을 마무리하세요. 새 기회를 맞을 공간이 생깁니다." },
    { title: "관계의 돌파", text: "솔직한 한마디가 오해를 걷어냅니다. 부드럽지만 분명하게." },
    { title: "행운의 타이밍", text: "고민하던 시도는 지금이 적기. 작게라도 움직여 보세요." },
    { title: "학습의 기회", text: "실수 속에 힌트가 있습니다. 배움을 챙기면 손해가 아닙니다." },
    { title: "감정의 안정", text: "감정을 이름 붙이면 잦아듭니다. ‘나는 지금 ~하다’라고 말해보세요." },
  ];
  const pick = results[selected % results.length];

  setTimeout(() => {
    loadingBox.style.display = 'none';
    resultArea.hidden = false;
    document.getElementById('resultTitle').textContent = pick.title;
    document.getElementById('resultText').textContent  = pick.text;
  }, 5000);
});

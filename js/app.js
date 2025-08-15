/* ===== 데이터셋 (부스 콘셉트에 맞춘 10종) ===== */
const CARDS = [
  { code: "let error = 404;",
    fortune: "찾는 길이 잠시 보이지 않지만, 덕분에 새로운 길을 발견합니다.",
    advice: "요청이 실패해도 로그를 남겨 재현 경로를 확보하세요. 재시도는 지수백오프!",
    meme: "“It works on my machine.” — 당신 PC만의 200 OK",
    rarity: "meh" },
  { code: "const caffeine = 'high';",
    fortune: "집중력이 폭발! 다만 손 떨림으로 버그도 폭발할 수 있어요.",
    advice: "PR 올리기 전 10분 산책하고 다시 한 번 Diff를 훑어보세요.",
    meme: "커피: null → ‘high’로 캐스팅 완료 ☕",
    rarity: "ok" },
  { code: "let bugCount = 0;",
    fortune: "오늘은 신기하게도 큰 이슈가 없습니다. 평화로운 배포 운!",
    advice: "테스트가 초록일 때 배포하되 롤백 스위치는 늘 준비!",
    meme: "“테스트 통과 했는데요?” → PM: “프로덕션도 그렇다곤 안 했어.”",
    rarity: "ok" },
  { code: "const build = 'broken';",
    fortune: "CI가 붉게 물드는 날. 하지만 팀이 더 단단해집니다.",
    advice: "Fail fast. 원인 하나 고치고 다시 돌려요. 한 번에 여러 개 건드리지 않기!",
    meme: "빨간불은 팀워크의 시작 🔴",
    rarity: "bad" },
  { code: "let meeting = 'cancelled';",
    fortune: "회의가 취소됐다! 집중의 신이 미소 짓습니다.",
    advice: "비워진 30분으로 티켓 하나 ‘슬쩍’ 닫아 성취감 챙기기.",
    meme: "회의가 사라지면 생산성이 나타난다(관측자 효과)",
    rarity: "ok" },
  { code: "const testCoverage = 80;",
    fortune: "준수한 커버리지. 리팩토링 운이 열렸습니다.",
    advice: "가장 복잡한 함수부터 스몰 스텝 리팩토링 후 스냅샷 갱신.",
    meme: "커버리지 80%: 나머지 20%는 ‘전설의 if’",
    rarity: "meh" },
  { code: "let apiLatency = 42;",
    fortune: "응답이 경쾌합니다. 데모/발표 대성공!",
    advice: "캐싱 가능한 곳에 stale-while-revalidate 전략 적용해보세요.",
    meme: "42ms — 삶, 우주, 그리고 모든 것의 지연시간",
    rarity: "ok" },
  { code: "const mergeConflict = true;",
    fortune: "충돌이 예고됐습니다. 하지만 미리 조율하면 깔끔히 해결!",
    advice: "rebase 전에 동료에게 변경 요약 공유 → 충돌 범위 최소화.",
    meme: "git: “둘 다 소중해… 근데 누굴 살리지?”",
    rarity: "meh" },
  { code: "let luck = Math.random();",
    fortune: "오늘의 운은 랜덤! 예상 밖의 도움을 받습니다.",
    advice: "실험적 시도를 1개만 해보세요. 실패해도 배움이 남습니다.",
    meme: "주사위는 굴려졌고, CI는 돌려졌다.",
    rarity: "ok" },
  { code: "const deadline = 'imminent';",
    fortune: "마감이 코앞. 집중하면 극복, 방황하면 과로.",
    advice: "범위를 줄이고 반드시 해야 할 3가지에 올인하세요.",
    meme: "“스펙 크립? 제발… 크립아웃해줘…”",
    rarity: "bad" }
];

/* ===== 공통 유틸 ===== */
const STORAGE_KEY = 'conchCurrent';

function pickRandomCard(){
  return CARDS[Math.floor(Math.random()*CARDS.length)];
}

function saveCurrentCard(card){
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(card));
}

function getCurrentCard(){
  try{
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}

function clearCurrentCard(){
  sessionStorage.removeItem(STORAGE_KEY);
}

/**
 * draw 화면용 카드 UI 렌더러
 * @param {HTMLElement} deckEl - 그릴 컨테이너
 * @param {number} count - 카드 칸 개수
 * @param {Function} onClick - 카드 클릭 핸들러
 */
function renderDeck(deckEl, count=9, onClick=()=>{}){
  if(!deckEl) return;
  deckEl.innerHTML = '';
  for(let i=0;i<count;i++){
    const btn = document.createElement('button');
    btn.className = 'draw-card';
    btn.innerHTML = '<span>카드 뽑기</span>';
    btn.addEventListener('click', onClick);
    deckEl.appendChild(btn);
  }
}

/* 전역 노출 (다른 페이지 inline 스크립트에서 사용) */
window.pickRandomCard = pickRandomCard;
window.saveCurrentCard = saveCurrentCard;
window.getCurrentCard = getCurrentCard;
window.clearCurrentCard = clearCurrentCard;
window.renderDeck = renderDeck;

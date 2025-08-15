document.addEventListener('DOMContentLoaded', () => {
  const stage = document.getElementById('cardStage');
  const drawBtn = document.getElementById('drawBtn');
  const CARD_COUNT = 12;
  let selectedIndex = null;

  for (let i = 0; i < CARD_COUNT; i++) {
    const card = document.createElement('div');
    card.className = 'card-item';
    card.dataset.i = String(i);
    card.innerHTML = `<span class="card__index">${i + 1}</span>`;
    card.addEventListener('click', () => {
      [...stage.querySelectorAll('.card-item')].forEach(el => el.classList.remove('card--selected'));
      card.classList.add('card--selected');
      selectedIndex = i;
      drawBtn.disabled = false;
      drawBtn.classList.remove('btn--disabled');
    });
    stage.appendChild(card);
  }

  drawBtn.addEventListener('click', () => {
    if (selectedIndex == null) return;
    const next = new URL('/result.html', location.origin);
    next.searchParams.set('card', String(selectedIndex));
    location.href = next.toString();
  });
});

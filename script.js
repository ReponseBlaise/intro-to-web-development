function changeBackgroundColor(color){
  const section = document.getElementById('journey');
  if(section) section.style.backgroundColor = color;
}

const cardUi = document.getElementById('card-uiux');
const cardJava = document.getElementById('card-java');
const cardIt = document.getElementById('card-it');

if(cardUi) cardUi.addEventListener('click', () => changeBackgroundColor('#2CA02C'));
if(cardJava) cardJava.addEventListener('click', () => changeBackgroundColor('#FF7F0E'));
if(cardIt) cardIt.addEventListener('click', () => changeBackgroundColor('#9467BD'));

/* DARK / LIGHT MODE */
const modeToggle = document.getElementById('modeToggle');
modeToggle && modeToggle.addEventListener('click', () => {
  const pressed = modeToggle.getAttribute('aria-pressed') === 'true';
  document.body.classList.toggle('dark-mode');
  modeToggle.setAttribute('aria-pressed', String(!pressed));
  modeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

/* Enter key accessibility */
[cardUi, cardJava, cardIt].forEach(card => {
  if(!card) return;
  card.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      card.click();
      e.preventDefault();
    }
  });
});

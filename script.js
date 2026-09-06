const accents = ['#46718c', '#b9563e', '#44745d', '#7a5a9b'];
let accentIndex = 0;

const themeButton = document.querySelector('#theme-toggle');
const accentButton = document.querySelector('#accent-toggle');

themeButton.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  themeButton.textContent = isDark ? '☀' : '☾';
});

accentButton.addEventListener('click', () => {
  accentIndex = (accentIndex + 1) % accents.length;
  document.documentElement.style.setProperty('--accent', accents[accentIndex]);
});

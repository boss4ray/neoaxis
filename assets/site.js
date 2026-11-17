const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');

function setMenuOpen(open) {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

toggle.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    setMenuOpen(false);
    toggle.focus();
  }
});
window.addEventListener('pageshow', () => setMenuOpen(false));
document.getElementById('year').textContent = new Date().getFullYear();

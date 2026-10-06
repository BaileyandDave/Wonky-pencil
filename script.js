
const btn = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.background = '#eef2f5';
    img.style.minHeight = img.style.minHeight || '120px';
    img.alt = img.alt ? img.alt + ' — image unavailable' : 'Image unavailable';
  }, {once:true});
});

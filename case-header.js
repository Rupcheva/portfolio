const header = document.querySelector('.site-header, .homepage-card-experiment .header');
const revealDistance = 240;
let previousY = Math.max(0, window.scrollY);
let upwardDistance = 0;
const usesCompactHeader = header.matches('.homepage-card-experiment .header, .case-home-header');
const compactDistance = 120;

if (usesCompactHeader) {
  header.classList.toggle('is-compact', previousY > compactDistance);
}

function updateHeader() {
  const y = Math.max(0, window.scrollY);
  const delta = y - previousY;
  previousY = y;

  if (usesCompactHeader) {
    header.classList.toggle('is-compact', y > compactDistance);
  }

  if (y <= header.offsetHeight) {
    upwardDistance = 0;
    header.classList.remove('is-hidden');
  } else if (delta > 0) {
    upwardDistance = 0;
    header.classList.add('is-hidden');
  } else if (delta < 0) {
    upwardDistance += -delta;
    if (upwardDistance >= revealDistance) {
      header.classList.remove('is-hidden');
    }
  }
}

window.addEventListener('scroll', updateHeader, { passive: true });

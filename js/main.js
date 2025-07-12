// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth',
    });
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});
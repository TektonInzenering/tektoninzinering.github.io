// Тектон Инженеринг — script.js

// 1. Navbar shadow on scroll
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
});

// 2. Close mobile navbar after clicking a nav link
document.querySelectorAll('#navMenu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const collapse = document.getElementById('navMenu');
    const bsCollapse = bootstrap.Collapse.getInstance(collapse);
    if (bsCollapse) bsCollapse.hide();
  });
});

// 3. Active nav link on scroll (IntersectionObserver)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#navMenu .nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { rootMargin: '-50% 0px -49% 0px' });

sections.forEach(section => observer.observe(section));

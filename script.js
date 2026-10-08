const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const navLinks = document.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('main section[id]');
const desktopLinks = document.querySelectorAll('.desktop-nav a');

const closeMenu = () => {
  header.classList.remove('menu-open');
  mobileNav.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
};

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMenu();
    return;
  }

  header.classList.add('menu-open');
  mobileNav.classList.add('open');
  document.body.classList.add('menu-open');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Close navigation');
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));

const updateHeader = () => {
  header.classList.toggle('scrolled', window.scrollY > 32);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      desktopLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-30% 0px -60%', threshold: 0 });

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();

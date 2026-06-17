// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (menu && hamburger && menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Stagger grid children
document.querySelectorAll('.skills-grid .skill-card').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 70}ms`;
});
document.querySelectorAll('.samples-grid .sample-card').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 70}ms`;
});
document.querySelectorAll('.clients-grid .client-card').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 60}ms`;
});

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.style.color = 'var(--gold)';
        }
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach((s) => sectionObserver.observe(s));

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Swap this timeout block with a real fetch() to your form endpoint when ready
  setTimeout(() => {
    note.textContent = 'Message sent! I\'ll get back to you soon.';
    note.className = 'form-note success';
    e.target.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Footer year ---------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------- Mobile nav toggle ---------------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ---------------- Active nav link on scroll ---------------- */
  const sections = document.querySelectorAll('main .section');
  const navItems = document.querySelectorAll('.nav-link[data-nav]');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(sec => navObserver.observe(sec));

  /* ---------------- Reveal on scroll ---------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (reducedMotion) {
    revealEls.forEach(el => el.classList.add('in-view'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ---------------- Hero stat count-up ---------------- */
  const statNums = document.querySelectorAll('.hero-stat-num');
  const countUp = (el) => {
    const target = parseInt(el.dataset.count, 10);
    if (reducedMotion) { el.textContent = target; return; }
    let current = 0;
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      current = Math.floor(progress * target);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  statNums.forEach(el => statObserver.observe(el));

  /* ---------------- SERP hero typing animation ---------------- */
  const typedEl = document.getElementById('typedQuery');
  const serpResult = document.getElementById('serpResult');
  const query = 'mea lourine sasam seo specialist';

  if (reducedMotion) {
    typedEl.textContent = query;
    serpResult.classList.add('show');
  } else {
    let i = 0;
    const typeChar = () => {
      if (i <= query.length) {
        typedEl.textContent = query.slice(0, i);
        i++;
        setTimeout(typeChar, 45);
      } else {
        setTimeout(() => serpResult.classList.add('show'), 300);
      }
    };
    setTimeout(typeChar, 600);
  }

  /* ---------------- Growth chart draw-on-scroll ---------------- */
  const growthPath = document.getElementById('growthLine');
  const growthPoint = document.querySelector('.growth-point');
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        growthPath.classList.add('animate');
        growthPoint.classList.add('animate');
        chartObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  if (growthPath) chartObserver.observe(growthPath);

  /* ---------------- Certificate lightbox ---------------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
      lightboxImg.src = card.dataset.img;
      lightboxImg.alt = card.dataset.title;
      lightboxCaption.textContent = card.dataset.title;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  };
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

});
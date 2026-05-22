/* ========================================
   ĐÔNG NAM LED - MAIN SCRIPTS
   ======================================== */

(function () {
  'use strict';

  // ===== Header scroll effect (throttled) =====
  const header = document.querySelector('.site-header');
  if (header) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ===== Mobile menu toggle =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#' || id === '') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Fade-in animations =====
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        }),
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );
      fadeEls.forEach(el => observer.observe(el));
    } else {
      fadeEls.forEach(el => el.classList.add('visible'));
    }
  }

  // ===== Active nav highlight on scroll =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  if (sections.length && navLinks.length) {
    let navTicking = false;
    window.addEventListener('scroll', () => {
      if (!navTicking) {
        requestAnimationFrame(() => {
          let current = '';
          sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 100) current = s.id;
          });
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
          });
          navTicking = false;
        });
        navTicking = true;
      }
    }, { passive: true });
  }

  // ===== Contact form handler =====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(this);
      const name = data.get('name') || '';
      const phone = data.get('phone') || '';
      const message = data.get('message') || '';
      const text = encodeURIComponent(
        `Xin chào ĐÔNG NAM,\nTôi tên: ${name}\nSĐT: ${phone}\nNội dung: ${message}`
      );
      window.open(`https://zalo.me/0967567535?text=${text}`, '_blank', 'noopener');

      const toast = document.createElement('div');
      toast.setAttribute('role', 'status');
      toast.style.cssText = [
        'position:fixed', 'top:100px', 'right:20px', 'z-index:9999',
        'background:#16a34a', 'color:#fff', 'padding:.875rem 1.375rem',
        'border-radius:12px', 'box-shadow:0 10px 30px rgba(0,0,0,.2)',
        'font-weight:500', 'max-width:300px', 'font-size:.9rem'
      ].join(';');
      toast.textContent = '✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 4000);
      this.reset();
    });
  }

})();

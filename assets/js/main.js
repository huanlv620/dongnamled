/* ========================================
   ĐÔNG NAM LED - MAIN SCRIPTS
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Header scroll effect =====
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ===== Mobile menu toggle =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ===== Fade-in animations on scroll =====
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // ===== Contact form handler =====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get('name') || '';
      const phone = formData.get('phone') || '';
      const message = formData.get('message') || '';

      // Build Zalo message link with prefilled text
      const text = encodeURIComponent(
        `Xin chào ĐÔNG NAM,\nTôi tên: ${name}\nSĐT: ${phone}\nNội dung: ${message}`
      );
      // Open Zalo chat
      window.open(`https://zalo.me/0967567535`, '_blank');

      // Show success message
      const successMsg = document.createElement('div');
      successMsg.style.cssText = `
        position: fixed; top: 100px; right: 20px; z-index: 1000;
        background: #16a34a; color: white; padding: 1rem 1.5rem;
        border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        font-weight: 500; max-width: 320px;
      `;
      successMsg.textContent = '✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.';
      document.body.appendChild(successMsg);
      setTimeout(() => successMsg.remove(), 4000);

      this.reset();
    });
  }

  // ===== Active nav highlight on scroll (for single-page sections) =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }

  // ===== Lazy load images (native) =====
  const lazyImages = document.querySelectorAll('img[data-src]');
  if (lazyImages.length && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
  }

});

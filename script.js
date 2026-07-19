// ================================================
// NAVBAR: scroll state + mobile menu
// ================================================
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ================================================
// CURSOR GLOW (desktop only)
// ================================================
const cursorGlow = document.getElementById('cursorGlow');
if (window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
}

// ================================================
// SIGNATURE: tilting ID card
// ================================================
const idCard = document.getElementById('idCard');
if (idCard && window.matchMedia('(pointer: fine)').matches) {
  idCard.addEventListener('mousemove', (e) => {
    const rect = idCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    idCard.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg) translateZ(10px)`;
  });
  idCard.addEventListener('mouseleave', () => {
    idCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}

// ================================================
// SCROLL REVEAL + skill bar fill
// ================================================
const revealTargets = document.querySelectorAll(
  '.section-head, .about-body, .fact-card, .skill-col, .project-card, .blog-card, .contact-form, .contact-links'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const bars = document.querySelectorAll('.bar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));
bars.forEach(el => observer.observe(el));

// ================================================
// HERO STAT COUNTERS
// ================================================
const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const step = Math.max(1, Math.round(target / 40));
      const tick = () => {
        current += step;
        if (current >= target) {
          el.textContent = target;
        } else {
          el.textContent = current;
          requestAnimationFrame(tick);
        }
      };
      tick();
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => statObserver.observe(el));

// ================================================
// CONTACT FORM — submits to FormSubmit.co via AJAX
// ================================================
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const submitBtn = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const originalLabel = submitBtn.textContent;
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;
  formNote.textContent = '';
  formNote.style.color = '';

  try {
    const formData = new FormData(contactForm);
    const response = await fetch('https://formsubmit.co/ajax/it24026@mbstu.ac.bd', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (response.ok) {
      formNote.textContent = 'Message sent — thanks for reaching out! I\u2019ll reply soon.';
      contactForm.reset();
    } else {
      throw new Error('Request failed');
    }
  } catch (err) {
    formNote.style.color = '#FF7A7A';
    formNote.textContent = 'Something went wrong. Please email me directly instead.';
  } finally {
    submitBtn.textContent = originalLabel;
    submitBtn.disabled = false;
  }
});

// ================================================
// FOOTER YEAR
// ================================================
document.getElementById('year').textContent = new Date().getFullYear();

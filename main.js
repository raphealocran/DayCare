(function () {
  'use strict';

  /* ---------- Mobile navigation ---------- */
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('navDrawer');

  function closeDrawer() {
    if (!drawer || !hamburger) return;
    drawer.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger && drawer) {
    hamburger.addEventListener('click', function () {
      const isOpen = drawer.classList.contains('is-open');
      drawer.classList.toggle('is-open');
      hamburger.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeDrawer();
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        closeDrawer();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeDrawer();
      }
    });
  }

  /* ---------- Pricing toggle ---------- */
  const pricingSwitch = document.getElementById('pricingSwitch');
  const labelMonthly = document.getElementById('labelMonthly');
  const labelAnnual = document.getElementById('labelAnnual');
  const priceEls = document.querySelectorAll('.pricing-card__price');
  const periodEls = document.querySelectorAll('[data-period]');

  let isAnnual = false;

  function updatePricing() {
    if (!priceEls.length || !periodEls.length) return;

    priceEls.forEach(function (el) {
      const monthly = parseFloat(el.dataset.monthly);
      const value = isAnnual ? Math.round(monthly * 0.92) : monthly;
      el.textContent = '$' + value;
    });

    periodEls.forEach(function (el) {
      el.textContent = isAnnual ? 'per month, billed annually' : 'per month';
    });

    if (labelMonthly && labelAnnual) {
      labelMonthly.classList.toggle('is-active', !isAnnual);
      labelAnnual.classList.toggle('is-active', isAnnual);
    }
  }

  if (pricingSwitch) {
    pricingSwitch.addEventListener('click', function () {
      isAnnual = !isAnnual;
      pricingSwitch.classList.toggle('is-annual', isAnnual);
      pricingSwitch.setAttribute('aria-checked', String(isAnnual));
      updatePricing();
    });
  }

  /* ---------- Email form (no backend) ---------- */
  const form = document.getElementById('tourForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = document.getElementById('emailInput');
      const value = input.value.trim();

      if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        input.style.outline = '2px solid rgba(255,255,255,0.5)';
        input.focus();
        setTimeout(function () {
          input.style.outline = 'none';
        }, 1800);
        return;
      }

      const button = form.querySelector('button');
      const originalText = button.textContent;
      button.textContent = '✓ We\'ll be in touch!';
      button.disabled = true;
      input.value = '';
      input.disabled = true;

      setTimeout(function () {
        button.textContent = originalText;
        button.disabled = false;
        input.disabled = false;
      }, 3000);
    });
  }

  /* ---------- Smooth scroll for all anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = 72;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Init ---------- */
  updatePricing();
})();
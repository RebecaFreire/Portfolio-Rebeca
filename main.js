(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          if (navMenu.classList.contains('is-open')) {
            navMenu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }

    const yearField = document.getElementById('current-year');
    if (yearField) {
      yearField.textContent = new Date().getFullYear();
    }
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        const { target } = el.dataset;
        const _target = document.querySelector(`#${target}`);
        el.classList.toggle('is-active');
        _target.classList.toggle('is-active');
      });
    });
  }
});

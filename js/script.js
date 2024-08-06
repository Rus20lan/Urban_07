document.addEventListener('DOMContentLoaded', () => {
  const btnBurger = document.querySelector('.header__burger-btn img'),
    btnClose = document.querySelector('.burger-menu__btn-close'),
    burgerMenu = document.querySelector('.burger-menu');

  // Burger Menu
  btnBurger.addEventListener('click', (e) => {
    e.preventDefault();
    if (burgerMenu.classList.contains('hidden')) {
      burgerMenu.classList.add('open');
      burgerMenu.classList.remove('hidden');
    }
    console.log(e.target);
  });
  btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    if (burgerMenu.classList.contains('open')) {
      burgerMenu.classList.add('hidden');
      burgerMenu.classList.remove('open');
    }
  });

  // Slider Indicator
  const linksSlider = document.querySelectorAll('[data-name]'),
    indicatorSlider = document.querySelector('.header__indicator');
  linksSlider.forEach((link) => {
    link.addEventListener('click', (e) => {
      let target = e.target,
        classes = Array.from(indicatorSlider.classList);
      indicatorSlider.className = '';
      if (target.dataset.name === 'start')
        classes[1] = 'header__indicator_start';
      else if (target.dataset.name === '01')
        classes[1] = 'header__indicator_01';
      else if (target.dataset.name === '02')
        classes[1] = 'header__indicator_02';
      else if (target.dataset.name === '03')
        classes[1] = 'header__indicator_03';
      indicatorSlider.classList.add(...classes);
    });
  });
});

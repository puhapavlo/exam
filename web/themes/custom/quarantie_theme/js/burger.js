const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active');
  menu.classList.toggle('menu_active');
});

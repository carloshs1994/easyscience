const hamburgerMenu = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#closeButton');
const closeNavLink = document.querySelectorAll('li > a.Personal-information');
const openAndClose = function () {
  menu.classList.toggle('visible');
};
hamburgerMenu.addEventListener('click', openAndClose);
closeMenu.addEventListener('click', openAndClose);
closeNavLink.forEach((element) => {
  element.addEventListener('click', openAndClose);
});
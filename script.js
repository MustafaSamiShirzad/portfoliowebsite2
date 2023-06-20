const navClosedBtn = document.querySelector('.nav_closed_btn');
const navMenuMobile = document.querySelector('.closing_menu_button');
const menuHamburger = document.querySelector('.menu');
const navMainBar = document.querySelector('.nav_main_bar');
const navMenuOptions = document.querySelectorAll('.nav_menu_options');

menuHamburger.addEventListener('click', () => {
  navMenuMobile.style.display = 'flex';
  navMainBar.style.display = 'none';
});

for (let i = 0; i < navMenuOptions.length; i += 1) {
  navMenuOptions[i].addEventListener('click', () => {
    navMenuMobile.style.display = 'none';
    navMainBar.style.display = 'flex';
  });
}

navClosedBtn.addEventListener('click', () => {
  navMenuMobile.style.display = 'none';
  navMainBar.style.display = 'flex';
});
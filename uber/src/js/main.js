window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const menuItem = document.querySelectorAll('.menu_item');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenu.addEventListener('click', () => {
    console.log('click');
    menu.classList.toggle('menu_active');
    mobileMenu.classList.toggle('mobile-menu_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.toggle('menu_active');
      mobileMenu.classList.toggle('mobile-menu_active');
    });
  });
});
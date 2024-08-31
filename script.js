
const hamburgerIcon = document.querySelector('.hamburger-icon');
const dropdownMenu = document.querySelector('.dropdown_menu');

hamburgerIcon.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

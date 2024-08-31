
const hamburgerIcon = document.querySelector('.hamburger-icon');
const dropdownMenu = document.querySelector('.dropdown_menu');

// Add a click event listener to the hamburger icon
hamburgerIcon.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});
const hamburger = document.getElementById("icon-hamburger");
const closeIcon = document.getElementById("icon-close");
const navMenu = document.getElementById("nav-responsive");


hamburger.addEventListener('click', () => {
  hamburger.style.display = "none";
  closeIcon.style.display = "block";
  navMenu.style.left = "0";
});

closeIcon.addEventListener('click', () => {
  closeIcon.style.display = "none";
  hamburger.style.display = "block";
  navMenu.style.left = "-100%";
});
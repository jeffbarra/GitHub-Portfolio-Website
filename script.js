const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

// NavBar opens and closes on hamburger click & scroll is disabled and re-enabled //

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  if (
    (hamburger.classList.toggle("active"), navMenu.classList.toggle("active"))
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".container");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

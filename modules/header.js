const hamburgerMenu = document.getElementById("hamburgerMenu");
const menuContent = document.getElementById("menuContent");
const navLogo = document.querySelector(".nav-logo");

const toggleMenu = () => {
  hamburgerMenu.addEventListener("click", () => {
    menuContent.classList.toggle("active");
    navLogo.classList.toggle("remove");
  });
};

export { toggleMenu };

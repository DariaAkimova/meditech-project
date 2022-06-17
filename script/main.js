const upButton = document.querySelector(".btn-up");
const menuButton = document.querySelector(".main-nav__toggle");
const menu = document.querySelector(".main-nav");
const closeMenuButton = menu.querySelector(".main-nav__close-btn");
const noScriptElements = document.querySelectorAll(".no-js");

const activateScripts = () => {
  noScriptElements.forEach((element) => element.classList.remove("no-js"));
};

const changeMenuClass = () => {
  menu.classList.remove("main-nav_opened");
  menu.classList.add("main-nav_closed");
};

const goUp = () => window.scrollTo(0, 0);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    upButton.classList.remove("hidden");
    upButton.addEventListener("click", goUp);
  } else {
    upButton.classList.add("hidden");
    upButton.removeEventListener("click", goUp);
  }
});

const openCloseMenu = () => {
  if (menu.classList.contains("main-nav_closed")) {
    menu.classList.remove("main-nav_closed");
    menu.classList.add("main-nav_opened");
  } else {
    menu.classList.remove("main-nav_opened");
    menu.classList.add("main-nav_closed");
  }
};

const removeCloseButtonListener = () =>
  closeMenuButton.removeEventListener("click", closeMenu);

const closeMenu = function () {
  menu.classList.remove("main-nav_opened");
  menu.classList.add("main-nav_closed");
  removeCloseButtonListener();
};

activateScripts();
changeMenuClass();
menuButton.addEventListener("click", openCloseMenu);

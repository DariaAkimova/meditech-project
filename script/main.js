const upButton = document.querySelector('.btn-up');
const menuButton = document.querySelector ('.open-menu-btn');
const minMenu = document.querySelector('.min-menu');
const closeMenuButton = minMenu.querySelector('.min-menu__close-btn');

const goUp = () => window.scrollTo(0, 0); 

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
    upButton.classList.remove('visually-hidden');
    upButton.addEventListener('click', goUp);

    
} else {
    upButton.classList.add('visually-hidden');
    upButton.removeEventListener('click', goUp);
     }
}
);

const openMenu = () => {
    minMenu.classList.remove('visually-hidden');
    closeMenuButton.addEventListener('click', closeMenu);
}

const removeCloseButtonListener = () => closeMenuButton.removeEventListener('click', closeMenu);

const closeMenu = function  () {
     minMenu.classList.add('visually-hidden');
     removeCloseButtonListener();
}

menuButton.addEventListener('click', openMenu);


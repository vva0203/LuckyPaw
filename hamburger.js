const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');


hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('header__nav--active');
});
nav.addEventListener('click', (e) => {
    if(e.classList.contains('header__nav-link')) {
        hamburger.classList.remove('hamburger--active');
        nav.classList.remove('header__nav-active');
    }
});

const burgerClose = () => {
    if(hamburger.classList.contains('hamburger--active')) {
        hamburger.click()
    }
}
document.addEventListener('wheel', (e) => {
    burgerClose()
});
document.addEventListener('touchmove', (e) => {
    burgerClose()
});
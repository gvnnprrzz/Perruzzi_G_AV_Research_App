const menuIcon = document.querySelector('.menu');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    nav.classList.toggle('open');
});
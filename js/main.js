const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNnavItems = document.querySelectorAll('.nav__item');

const toggleNav = () => {
	nav.classList.toggle('nav--active');
};

navBtn.addEventListener('click', toggleNav);

allNnavItems.forEach((i) => {
	i.addEventListener('click', toggleNav);
});

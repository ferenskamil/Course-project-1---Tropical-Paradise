const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const navItem = document.querySelectorAll('.nav__item');

const toggleNav = () => {
	nav.classList.toggle('nav--active');
};

navBtn.addEventListener('click', toggleNav);

navItem.forEach((i) => {
	i.addEventListener('click', toggleNav);
});

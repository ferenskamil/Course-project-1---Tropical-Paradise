const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const toggleNav = () => {
	nav.classList.toggle('nav--active');
};

navBtn.addEventListener('click', toggleNav);

allNavItems.forEach((i) => {
	i.addEventListener('click', () => {
		nav.classList.remove('nav--active');
	});
});

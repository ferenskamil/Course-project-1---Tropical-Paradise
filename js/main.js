// Zmienne
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

// Function to extend and retract navigation
const toggleNav = () => {
	nav.classList.toggle('nav--active');

	allNavItems.forEach((i) => {
		i.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

// function that delays the ejection of elements
const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((i) => {
		i.classList.toggle('nav-items-animation');

		// animation-delay: .3s
		i.style.animationDelay = `.${delayTime}s`;
		delayTime += 2;
	});
};

// Function changing navigation bars color while scrolling
const handleObserver = () => {
	let currentScroll = window.scrollY;

	allSections.forEach((item) => {
		if (
			item.classList.contains('white-section') &&
			currentScroll >= item.offsetTop - 40
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!item.classList.contains('white-section') &&
			currentScroll >= item.offsetTop /* + 40 */
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

// Function changes cuurrent year in footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear();

	footerYear.textContent = year;
};

// Events
handleCurrentYear();
navBtn.addEventListener('click', toggleNav);
window.addEventListener('scroll', handleObserver);

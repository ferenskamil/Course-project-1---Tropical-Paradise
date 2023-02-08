// Zmienne
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

// Funkcja odpowiadająca za wysuwanie i chowanie nawigacji 
const toggleNav = () => {
	nav.classList.toggle('nav--active');

	allNavItems.forEach((i) => {
		i.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

// Funkcja odpowiadająca za animację (opóźnienie, elementów nawigacji)
const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((i) => {
		i.classList.toggle('nav-items-animation');

		// animation-delay: .3s
		i.style.animationDelay = `.${delayTime}s`;
		delayTime += 2;
	});
};


// eventy 
navBtn.addEventListener('click', toggleNav);

const links = document.querySelectorAll('.menu__link[data-goto]');

if (links.length) {
	function onLinkClick(event) {
		const clickedLink = event.target;
		if (clickedLink.dataset.goto && document.querySelector(clickedLink.dataset.goto)) {
			const sectionToGoTo = document.querySelector(clickedLink.dataset.goto);
			const sectionGoToValue =
				sectionToGoTo.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			if (burder.classList.contains('active')) {
				document.body.classList.remove('lock');
				burder.classList.remove('active');
				menu.classList.remove('active');
			}

			window.scrollTo({
				top: sectionGoToValue,
				behavior: 'smooth',
			});
			event.preventDefault();
		}
	}

	links.forEach((link) => {
		link.addEventListener('click', onLinkClick);
	});
}

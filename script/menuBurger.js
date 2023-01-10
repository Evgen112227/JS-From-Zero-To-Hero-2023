const burder = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');
if (burder) {
	burder.addEventListener('click', (e) => {
		document.body.classList.toggle('lock');
		burder.classList.toggle('active');
		menu.classList.toggle('active');
	});
}

const images = document.querySelectorAll('.slider__img');
const sliderWrapper = document.querySelector('.slider__wrapper');
let count = 0;
let width = document.querySelector('.slider').offsetWidth;

window.addEventListener('resize', () => {
	width = document.querySelector('.slider').offsetWidth;
});

document.querySelector('.rightButton').addEventListener('click', (e) => {
	clearInterval(timerId);
	rollSliderRight();
});
document.querySelector('.leftButton').addEventListener('click', (e) => {
	clearInterval(timerId);
	rollSliderLeft();
});

function rollSliderRight() {
	count++;
	if (width === 880 && count + 3 <= images.length) {
		sliderWrapper.style.transform = `translate(-${count * 220}px)`;
		if (count === images.length - 3) {
			count = 0;
			sliderWrapper.style.transform = `translate(0)`;
		}
	} else if (width === 660 && count + 2 <= images.length) {
		sliderWrapper.style.transform = `translate(-${count * 220}px)`;
		if (count === images.length - 2) {
			count = 0;
			sliderWrapper.style.transform = `translate(0)`;
		}
	} else if (width === 440 && count + 1 <= images.length) {
		sliderWrapper.style.transform = `translate(-${count * 220}px)`;
		if (count === images.length - 1) {
			count = 0;
			sliderWrapper.style.transform = `translate(0)`;
		}
	} else if (width === 220 && count <= images.length) {
		sliderWrapper.style.transform = `translate(-${count * 220}px)`;
		if (count === images.length) {
			count = 0;
			sliderWrapper.style.transform = `translate(0)`;
		}
	}
}

function rollSliderLeft() {
	count--;
	if (width === 880 && count + 3 <= images.length) {
		console.log(count);

		sliderWrapper.style.transform = `translate(-${count * 220}px)`;
		if (count === 0) {
			count = images.length - 3;
			sliderWrapper.style.transform = `translate(0)`;
		}
	} else if (width === 660 && count + 2 <= images.length) {
		sliderWrapper.style.transform = `translate(-${count * 220}px)`;
		if (count === 0) {
			count = images.length - 2;
			sliderWrapper.style.transform = `translate(0)`;
		}
	} else if (width === 440 && count + 1 <= images.length) {
		sliderWrapper.style.transform = `translate(-${count * 220}px)`;
		if (count === 0) {
			count = images.length - 1;
			sliderWrapper.style.transform = `translate(0)`;
		}
	} else if (width === 220 && count <= images.length) {
		sliderWrapper.style.transform = `translate(-${count * 220}px)`;
		if (count === 0) {
			count = images.length;
			sliderWrapper.style.transform = `translate(0)`;
		}
	}
}

const timerId = setInterval(rollSliderRight, 2000);

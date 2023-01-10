const tabsHeader = document.querySelectorAll('.tabs__item');
const tabsContent = document.querySelectorAll('.tabs__inner');

tabsHeader.forEach((tab) => {
	tab.addEventListener('click', (e) => {
		tabsContent.forEach((element) => element.classList.add('visually-hidden'));
		tabsHeader.forEach((t) => t.classList.remove('tabs__item--active'));
		const content = document.querySelector('#' + tab.dataset.tab);
		content.classList.remove('visually-hidden');
		e.target.classList.add('tabs__item--active');
	});
});

const cardButton = document.querySelector('.card-footer_button');

cardButton.addEventListener('click', toggleMenu);

function toggleMenu() {
	var cardFooter = cardButton.parentElement;
	// console.log(cardButton.nextElementSibling);
	// toggle card-footer_button
	toggleClass(cardButton, 'active');
	// toggle card-footer
	toggleClass(cardFooter, 'show-menu');
	// toggle card-footer-default
	toggleClass(cardFooter.firstElementChild, 'hidden');
	// toggle card-footer-share
	toggleClass(cardButton.nextElementSibling, 'hidden');
}

function toggleClass(ele, kelas) {
	ele.classList.toggle(kelas);
}

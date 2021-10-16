const cardButton = document.querySelector('.card-footer_button');
const shareLink = document.querySelectorAll('.share-link');

// toggle show share menu when share button clicked
cardButton.addEventListener('click', toggleMenu);

// close share menu when share link clicked
shareLink.forEach((ele) => ele.addEventListener('click', closeBtnMenu));

// toggle share menu
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

// close share menu
function closeBtnMenu() {
	toggleMenu();
}

// toggle class
function toggleClass(ele, kelas) {
	ele.classList.toggle(kelas);
}

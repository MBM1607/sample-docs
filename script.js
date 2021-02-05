document.addEventListener("DOMContentLoaded", () => {
	clickElements = [document.querySelector(".nav-links"),
	document.querySelector("#main-doc"),
	document.querySelector(".hamburger")];

	document.querySelector(".hamburger").addEventListener("click", function () {
		clickElements.forEach(element => element.classList.toggle("clicked"));

	});
});
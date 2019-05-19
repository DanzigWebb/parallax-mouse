
// parallax

function parallax(e) {
	let parallaxOffset = e.offsetX;
	let layers = this.querySelectorAll('.scene-layer');
	layers.forEach(item => {
		let layerSpeed = item.getAttribute('data-number');
		item.style.transform = `translateX(${parallaxOffset/layerSpeed}px)`
	});
	
}

document.addEventListener('mousemove', parallax )

let headerButton = document.querySelector('.header-menu-button')
headerButton.addEventListener('click', function(e) {
	this.classList.toggle('is-active');
});

document.addEventListener('click', function(e) {
	if (e.target !== headerButton) {
		headerButton.classList.remove('is-active')
	}
})
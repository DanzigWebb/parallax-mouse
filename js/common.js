
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
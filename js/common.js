// parallax

function parallax(e) {
	let parallaxOffset = e.clientX;
	let layers = this.querySelectorAll('.scene-layer');
	layers.forEach(item => {
		let layerSpeed = item.getAttribute('data-number');
		item.style.transform = `translateX(${parallaxOffset/layerSpeed}px)`
	});
}

document.addEventListener('mousemove', parallax)


let scrollTop = function () {
	let btnUp = document.querySelector('.footer-scroll-up');
	btnUp.addEventListener('click', function() {
		window.scrollTo(0, 0);
	})
}


scrollTop ()
sidebar.init();
Tabs.init();
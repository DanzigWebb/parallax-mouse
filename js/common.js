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



window.addEventListener('scroll', function () {
	let upButton = document.querySelector('#up-button');
	if (pageYOffset > 400) {
		upButton.classList.add('is-active');
	} else {
		upButton.classList.remove('is-active');
	}
	upButton.addEventListener('click', e => {
		window.scrollTo(0, 0)
	})
})



sidebar.init()

Tabs.init()
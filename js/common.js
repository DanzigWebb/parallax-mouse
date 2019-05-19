
// parallax

function parallax(e) {
	let parallaxOffset = e.clientX;
	let layers = this.querySelectorAll('.scene-layer');
	layers.forEach(item => {
		let layerSpeed = item.getAttribute('data-number');
		item.style.transform = `translateX(${parallaxOffset/layerSpeed}px)`
	});
	
}

document.addEventListener('mousemove', parallax )



function openSiderbar () {

	let headerButton = document.querySelector('.header-menu-button');
	let marchMenu = document.querySelector('.march-menu');
	let MenuLink = marchMenu.querySelectorAll('.march-menu__link');
	let body = document.querySelector('.site-body');
	let siteContent = document.getElementById('site-content');
	headerButton.addEventListener('click', function(e) {
		this.classList.toggle('is-active');
		marchMenu.classList.toggle('is-active');
		body.classList.toggle('is-active');
	});

	document.addEventListener('click', function(e) {
		if (e.target == siteContent) {
			headerButton.classList.remove('is-active')
			marchMenu.classList.remove('is-active');
			body.classList.remove('is-active');
		}

		
		MenuLink.forEach(link => {
			link.addEventListener('click', function(e) {
				if (e.target == this) {
					headerButton.classList.remove('is-active')
					marchMenu.classList.remove('is-active');
					body.classList.remove('is-active');
				}
			})
		});
	})
}

openSiderbar ()

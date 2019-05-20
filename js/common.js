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



function openSiderbar() {

	let headerButton = document.querySelector('.header-menu-button');
	let marchMenu = document.querySelector('.march-menu');
	let linkWrap = marchMenu.querySelectorAll('.march-menu-link-wrap');
	let MenuLink = marchMenu.querySelectorAll('.march-menu__link');
	let sublinkWrap = marchMenu.querySelectorAll('.march-menu-subwrap');
	let siteContent = document.getElementById('site-content');
	headerButton.addEventListener('click', function (e) {
		this.classList.toggle('is-active');
		marchMenu.classList.toggle('is-active');
		siteContent.classList.toggle('is-active');
	});


	sublinkWrap.forEach(item => {
		item.parentElement.classList.add("has-children");
	});



	document.addEventListener('click', function (e) {
		if (e.target == siteContent) {
			headerButton.classList.remove('is-active')
			marchMenu.classList.remove('is-active');
			siteContent.classList.remove('is-active');
		}
			MenuLink.forEach(link => {
				if (e.target == link) {
					headerButton.classList.remove('is-active')
					marchMenu.classList.remove('is-active');
					siteContent.classList.remove('is-active');
				}
			});
		

	});

	


}

openSiderbar()
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
	let back = document.querySelector('.body-scene');
	let menuLink = marchMenu.querySelectorAll('.march-menu__link');
	let sublinkWrap = marchMenu.querySelectorAll('.march-menu-subwrap');
	let siteContent = document.getElementById('site-content');

	// обработчик гамбургера
	headerButton.addEventListener('click', function (e) {
		this.classList.toggle('is-active');
		marchMenu.classList.toggle('is-active');
		siteContent.classList.toggle('is-active');
		back.style.filter = 'brightness(0.4)'
	});

	// создание кнопки при наличии вложенного списка ссылок
	sublinkWrap.forEach(item => {
		item.parentElement.classList.add('has-children');
		let newButton = document.createElement('button');
		newButton.innerHTML = `<i class="fas fa-arrow-up"></i>`
		newButton.className = "march-link-button";
		item.parentElement.appendChild(newButton);
	});

	let button = marchMenu.querySelectorAll('.march-link-button');
	
	document.addEventListener('click', function (e) {
		
		// закрытие меню при клике на ссылки или контент
		menuLink.forEach(link => {
			if (e.target == link || e.target == siteContent) {
				headerButton.classList.remove('is-active')
				marchMenu.classList.remove('is-active');
				siteContent.classList.remove('is-active');
				back.style.filter = ''
			}
		});
	});

	button.forEach(item => {
		item.addEventListener('click', function(e) {
			
			if (e.target == this || e.target == this.childNodes[0]) {
				// удаление класса у всех кнопок кроме нажатой
				button.forEach(butt => {
					if (butt.classList.contains('is-active')) {
						butt.classList.remove('is-active');
						this.classList.remove('is-active');
						butt.previousElementSibling.style.height = `0px`
					}
				});
				
			}
			this.classList.add('is-active');
			let linkWrap = this.previousElementSibling;
			linkWrap.style.height = `${linkWrap.scrollHeight}px`;


		})
	});
	
}

openSiderbar()

// for (let i = 0; i<button.length; i++) {

// 	if (e.target == button[i] || e.target == button[i].childNodes[0]) {
// 		for (let j = 0; j<button.length; j++) {
// 			if (button[j].classList.contains('is-active') & sublinkWrap[j].style.heightscrollHeight) {
// 				button[j].classList.remove(('is-active'))
// 		}
		
// 		}
// 		button[i].classList.toggle('is-active');
// 		sublinkWrap[i].style.height = `${sublinkWrap[i].scrollHeight}px`
// 	}
// }
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

	let body = document.getElementById('my-body')
	let headerButton = body.querySelector('.header-menu-button');
	let marchMenu = body.querySelector('.march-menu');
	let back = body.querySelector('.body-scene');
	let menuLink = marchMenu.querySelectorAll('.march-menu__link');
	let sublinkWrap = marchMenu.querySelectorAll('.march-menu-subwrap');
	let siteContent = body.querySelector('#site-content');

	// обработчик гамбургера
	headerButton.addEventListener('click', function (e) {
		this.classList.toggle('is-active');
		marchMenu.classList.toggle('is-active');
		body.classList.toggle('is-active');
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
				body.classList.remove('is-active');
				back.style.filter = ''
			}
		});
	});

	button.forEach(item => {
		item.addEventListener('click', function (e) {

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



let aboutOpens = function () {
	let aboutSection = document.getElementById('about-wrap');
		let aboutContent = aboutSection.querySelector('.s-about-content');
		let aboutButtons = aboutSection.querySelector('.s-about-tabs-wrap');
		let aboutBtn = aboutButtons.querySelectorAll('.s-about-tabs__item');
		let aboutItem = aboutSection.querySelectorAll('.s-about-item');
	let btnPrev = aboutSection.querySelector('.s-about-arrows__btn-prev');
	let btnNext = aboutSection.querySelector('.s-about-arrows__btn-next');
	// позиционирование элементов
	let getPosition = function () {
		aboutItem.forEach(function (item, i, aboutItemArr) {
			if (i > 0) {
				item.style.transform = `translateX(${i*item.offsetWidth}px)`;
			}
		});
		aboutContent.style.height = `${aboutItem[0].offsetHeight}px`
	}
	getPosition()

	window.addEventListener(`resize`, e => {
		getPosition()
	}, false);


	let removeActiveButton = function (arrButtons) {
		arrButtons.forEach(item => {
			item.classList.remove('is-active');
		});
	}

	let moveSlider = function (number) {
		aboutContent.style.transform = `translateX(-${number*aboutItem[number].offsetWidth}px)`;
		aboutContent.style.height = `${aboutItem[number].offsetHeight}px`;
	}


	// логика переключателя
	aboutSection.addEventListener('click', function (e) {

		let btnNumber = 0;

		aboutBtn.forEach(function (btn, i, btnArr) {
			// логика кнопок
			if (e.target == btn) {
				removeActiveButton(btnArr);
				btn.classList.add('is-active');
			}
			if (btn.classList.contains('is-active')) {
				btnNumber = i;
			}
			
			// логика стрелок


			if (e.target == btn) {
				moveSlider (btnNumber)
			}
		})

		aboutItem[btnNumber].classList.add('is-active');

		if (e.target == btnNext) {
			if (btnNumber < 2) { 
				removeActiveButton(aboutBtn);
				aboutBtn[btnNumber].nextElementSibling.classList.add('is-active');
				aboutBtn.forEach(function (btn, i, btnArr) {
					if (btn.classList.contains('is-active')) {
						btnNumber = i;
					}
				})
				moveSlider (btnNumber)
			}

		}

		if (e.target == btnPrev) {
			if (btnNumber > 0) {
				removeActiveButton(aboutBtn);
				aboutBtn[btnNumber].previousElementSibling.classList.add('is-active');
				aboutBtn.forEach(function (btn, i, btnArr) {
					if (btn.classList.contains('is-active')) {
						btnNumber = i;
					}
				})
					moveSlider (btnNumber)
			}
		}

		
	})


}
aboutOpens()
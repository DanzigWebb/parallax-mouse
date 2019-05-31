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

	let removeActiveButton = function (arrButtons) {
		arrButtons.forEach(item => {
			item.classList.remove('is-active');
		});
	}

	let moveSlider = function (number) {
		aboutContent.style.transform = `translateX(-${number*aboutItem[number].offsetWidth}px)`;
		aboutContent.style.height = `${aboutItem[number].offsetHeight}px`;
	}

	window.addEventListener(`resize`, e => {
		getPosition();
		if (window.innerWidth >= 1200) {
			aboutContent.style.transform = moveSlider(0);
		} else if (window.innerWidth >= 992) {
			moveSlider(0);
		} else if (window.innerWidth >= 768) {
			moveSlider(0);
		} else if (window.innerWidth >= 576) {
			moveSlider(0);
		}
	}, false);


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
				moveSlider(btnNumber)
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
				moveSlider(btnNumber)
			} else {
				removeActiveButton(aboutBtn);
				aboutBtn[0].classList.add('is-active');
				moveSlider(0)
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
				moveSlider(btnNumber)
			} else {
				removeActiveButton(aboutBtn);
				aboutBtn[2].classList.add('is-active');
				moveSlider(2)
			}
		}

	})


}
// aboutOpens()


sidebar.init()


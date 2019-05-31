let sidebar = {
	body: document.body,
	headerButton: document.querySelector('.header-menu-button'),
	back: document.querySelector('.body-scene'),
	siteContent: document.querySelector('#site-content'),
	sideMenu: document.querySelector('.side-menu'),
  // настраиваемые параметры
	linkBtn: '<i class="fas fa-arrow-up"></i>',
	// инициализация
	init: function () {
		let thisHelper = this;
		this.sideMenu.querySelectorAll('.side-menu-subwrap').forEach(item => {
			item.parentElement.classList.add('has-children');
			let newButton = document.createElement('button');
			newButton.innerHTML = this.linkBtn;
			newButton.className = "side-link-button";
			item.parentElement.appendChild(newButton);
		});
		let menuLink = this.sideMenu.querySelectorAll('.side-menu__link');
		let linkBtn = this.sideMenu.querySelectorAll('.side-link-button');
		// подписка на события
		// открытие меню при клике на кнопку
		this.headerButton.addEventListener('click', function (e) {
			openMenu();
		});
		// закрытие меню при клике на ссылку или вне меню
		document.addEventListener('click', function (e) {
			menuLink.forEach(link => {
				if (e.target == link || e.target == thisHelper.siteContent) {
					closeMenu()
				}
			});
		});
		// вкладки на кнопках в меню
		linkBtn.forEach(item => {
			item.addEventListener('click', function (e) {
				if (e.target == this || e.target == this.childNodes[0]) {
					// удаление класса у всех кнопок кроме нажатой
					linkBtn.forEach(butt => {
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
		// методы меню
		let openMenu = function () {
			thisHelper.headerButton.classList.add('is-active')
      thisHelper.body.classList.add('is-active');
      thisHelper.back.style.filter = `brightness(0.4)`;
      document.documentElement.style.overflow = 'hidden';
		};
		let closeMenu = function () {
			thisHelper.headerButton.classList.remove('is-active')
      thisHelper.body.classList.remove('is-active');
      thisHelper.back.style.filter = `none`;
      document.documentElement.style.overflow = 'auto';
		};
	}
}

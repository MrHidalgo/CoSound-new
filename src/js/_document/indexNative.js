/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const initAnimation = () => {
		/*function aboutAnimatedLine() {
			const _tlAbout = new TimelineMax({
				repeat: -1
			});

			const _line1 = document.querySelector('[about-line1-js]'),
				_line2 = document.querySelector('[about-line2-js]');

			_tlAbout
				.fromTo(_line1, 2.5, {height: '0', ease: "bounce"}, {height: '70px', ease: "bounce"})
				.fromTo(_line2, 2.5, {width: '140px', ease: "bounce"}, {width: '0', ease: "bounce"}, '-=0.5')
				.fromTo(_line1, 2.5, {height: '70px', ease: "bounce"}, {height: '0', ease: "bounce"})
				.fromTo(_line2, 2.5, {width: '0', ease: "bounce"}, {width: '140px', ease: "bounce"}, '-=0.5');

			// _tlAbout
				// .fromTo(_line1, 2.5, {y: '-100%', ease: "bounce"}, {y: '0', ease: "bounce"})
				// .fromTo(_line2, 2.5, {x: '100%', ease: "bounce"}, {x: '0', ease: "bounce"}, '-=0.5');
		}

		aboutAnimatedLine();*/
	};

	const initNewsTitleAnimation = () => {
		const textWrapper = document.querySelector('.letters');

		textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		anime.timeline({loop: false})
			.add({
				targets: '.letter',
				rotateY: [-90, 0],
				duration: 1300,
				delay: (el, i) => 60 * i
			}).add({
			targets: '.letters',
			opacity: 1,
			duration: 1300,
			easing: "easeOutExpo",
			delay: 750
		});
	};


	const initNewsNav = () => {
		$('[news-btn-js]').on('click', (ev) => {
			const _el = $(ev.currentTarget),
				_elID = _el.data('id'),
				_elVal = _el.data('val');

			$('[news-btn-js]').removeClass('is-active');
			_el.addClass('is-active');

			$('[news-title-js]').text(_elVal);
			initNewsTitleAnimation();

			$('.news__slider, .news__description').removeClass('is-active');
			$('.news__slider-' + _elID).addClass('is-active');
			$('.news__description-' + _elID).addClass('is-active');
		});
	};

	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		// ==========================================

		// callback
		initNewsNav();
		// ==========================================
	};
	initNative();
})();

"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {
	var sliderCount = 6;

	for (var i = 1; i <= sliderCount; i++) {
		new Swiper('.newsSlider' + i, {
			loop: false,
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 30,
				slideShadows: false
			},
			speed: 1000,
			slidesPerView: 1,
			spaceBetween: 0,
			navigation: {
				nextEl: '.news__slider-' + i + ' .news__slider-btn--next',
				prevEl: '.news__slider-' + i + ' .news__slider-btn--prev'
			}
		});
	}
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var initAnimation = function initAnimation() {
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

	var initNewsTitleAnimation = function initNewsTitleAnimation() {
		var textWrapper = document.querySelector('.letters');

		textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		anime.timeline({ loop: false }).add({
			targets: '.letter',
			rotateY: [-90, 0],
			duration: 1300,
			delay: function delay(el, i) {
				return 60 * i;
			}
		}).add({
			targets: '.letters',
			opacity: 1,
			duration: 1300,
			easing: "easeOutExpo",
			delay: 750
		});
	};

	var initNewsNav = function initNewsNav() {
		$('[news-btn-js]').on('click', function (ev) {
			var _el = $(ev.currentTarget),
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
	var initNative = function initNative() {
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
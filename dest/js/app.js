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
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var initAnimationTimeline = function initAnimationTimeline() {
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
		// ==========================================

		// callback
		initAnimationTimeline();
		// ==========================================
	};
	initNative();
})();
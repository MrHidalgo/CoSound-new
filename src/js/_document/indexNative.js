/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const initAnimationTimeline = () => {
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
	const initNative = () => {
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

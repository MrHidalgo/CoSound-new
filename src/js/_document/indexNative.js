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

			$('.news__slider, .news__description, [news-btn-js]').removeClass('is-active');

			_el.addClass('is-active');

			$('[news-title-js]').text(_elVal);
			initNewsTitleAnimation();

			$('.news__slider-' + _elID).addClass('is-active');
			$('.news__description-' + _elID).addClass('is-active');
		});
	};


	const initTabs = () => {
		$('[tabs-btn-js]').on('click', (ev) => {
			const _el = $(ev.currentTarget),
				_elID = _el.data('id');

			$('.tabs__main').addClass('is-overlay');

			if(_el.closest('[tabs-parent-js]').hasClass('is-open')) {
				_el.closest('[tabs-parent-js]').removeClass('is-open');
				$('.tabs__square').removeClass('is-change');
				$('.tabs__main').removeClass('is-overlay');
			} else {
				_el.closest('[tabs-parent-js]').addClass('is-open').removeClass('is-overlay');
				$('.tabs__square').addClass('is-change');
			}
		})
	};


	const initVideo = () => {
		const vid = $("video")[0];

		function playVid() {
			vid.play();
		}

		function pauseVid() {
			vid.pause();
		}

		function muteVid() {
			vid.volume = 0;
			$('[volume-video-js]').val(0);
		}

		function soundsVid() {
			vid.volume = 1.0;
			$('[volume-video-js]').val(100);
		}

		function fancyTimeFormat(time) {
			const hrs = Math.floor(time / 3600),
				mins = Math.floor((time % 3600) / 60),
				secs = Math.floor(time % 60);

			let ret = "";

			if(hrs > 0) {
				ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
			}

			ret += "" + mins + ":" + (secs < 10 ? "0" : "");
			ret += "" + secs;

			return ret;
		}

		function onTrackedVideoFrame(currentTime, duration){
			$("[currentTime-video-js]").text(fancyTimeFormat(currentTime));
			$("[duration-video-js]").text(fancyTimeFormat(duration));
		}

		if(vid) {
			$("#video").on("loadedmetadata", function(ev){
				onTrackedVideoFrame(ev.currentTarget.currentTime, ev.currentTarget.duration);
			});

			vid.ontimeupdate = () => {
				let percentage = (vid.currentTime / vid.duration) * 100;

				$("[progress-video-js] span").css("width", percentage + "%");

				onTrackedVideoFrame(vid.currentTime, vid.duration);

				if (percentage === 100) {
					$("[progress-video-js] span").css("width", "0");
				}
			};

			$("[progress-video-js]").on("click", (ev) => {
				let offset = $(ev.currentTarget).offset(),
					left = (ev.pageX - offset.left),
					totalWidth = $("[progress-video-js]").width(),
					percentage = (left / totalWidth),
					vidTime = vid.duration * percentage;

				vid.currentTime = vidTime;
			});

			$('[video-play-js]').on('click', (ev) => {
				if($(ev.currentTarget).hasClass('is-play')) {
					$(ev.currentTarget).removeClass('is-play');
					pauseVid();
				} else {
					$(ev.currentTarget).addClass('is-play');
					playVid();
				}
			});

			$('[mute-video-js]').on('click', (ev) => {
				muteVid();
				$('[volume-video-js]').trigger('input');
			});

			$('[sounds-video-js]').on('click', (ev) => {
				soundsVid();
				$('[volume-video-js]').trigger('input');
			});

			$('[volume-video-js]').on('input', function (ev) {
				let min = ev.target.min,
					max = ev.target.max,
					val = ev.target.value;

				vid.volume = (val / 100);

				$(ev.target).css({
					'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
				});
			}).trigger('input');
		}
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
		initHamburger();
		// ==========================================

		// callback
		initNewsNav();
		initTabs();
		initVideo();
		// ==========================================
	};
	initNative();
})();

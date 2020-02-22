

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {
	const sliderCount = 6;

	for(let i = 1; i <= sliderCount; i++) {
		new Swiper('.newsSlider' + i, {
			loop: false,
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 30,
				slideShadows: false,
			},
			speed: 1000,
			slidesPerView: 1,
			spaceBetween: 0,
			navigation: {
				nextEl: '.news__slider-' + i + ' .news__slider-btn--next',
				prevEl: '.news__slider-' + i + ' .news__slider-btn--prev',
			}
		});
	}

	new Swiper('.mainSlider', {
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		speed: 1000,
		autoplay: {
		  delay: 5000,
		},
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			nextEl: '.main__arrow--next',
			prevEl: '.main__arrow--prev',
		},
		pagination: {
			el: '.main__indicator',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				function numberAppend(d) {
					return (d < 10) ? '0' + d.toString() : d.toString();
				}

				return '<span class="' + current + '">' + numberAppend(current) + '</span>';
			}
		},
	});
};

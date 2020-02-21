

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
};

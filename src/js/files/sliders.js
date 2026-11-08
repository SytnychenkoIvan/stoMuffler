// /*
// Документация по работе в шаблоне:
// Документация слайдера: https://swiperjs.com/
// Сниппет(HTML): swiper
// */

// // Подключаем слайдер Swiper из node_modules
// // При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// // Пример: { Navigation, Autoplay }
// import Swiper, { Navigation } from 'swiper';
// /*
// Основниые модули слайдера:
// Navigation, Pagination, Autoplay,
// EffectFade, Lazy, Manipulation
// Подробнее смотри https://swiperjs.com/
// */

// // Стили Swiper
// // Базовые стили
// import "../../scss/base/swiper.scss";
// // Полный набор стилей из scss/libs/swiper.scss
// // import "../../scss/libs/swiper.scss";
// // Полный набор стилей из node_modules
// // import 'swiper/css';

// // Добавление классов слайдерам
// // swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
// // function bildSliders() {
// // 	//BildSlider
// // 	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
// // 	if (sliders) {
// // 		sliders.forEach(slider => {
// // 			slider.parentElement.classList.add('swiper');
// // 			slider.classList.add('swiper-wrapper');
// // 			for (const slide of slider.children) {
// // 				slide.classList.add('swiper-slide');
// // 			}
// // 		});
// // 	}
// // }
// // Инициализация слайдеров
// function initSliders() {
// 	// Добавление классов слайдера
// 	// при необходимости отключить
// 	// bildSliders();

// 	// Перечень слайдеров
// 	if (document.querySelector('.portfolio__slider')) {
// 		new Swiper('.portfolio__slider', {
// 			// Подключаем модули слайдера
// 			// для конкретного случая
// 			/*
// 			effect: 'fade',
// 			autoplay: {
// 				delay: 3000,
// 				disableOnInteraction: false,
// 			},
// 			*/
// 			modules: [Navigation],
// 			observer: true,
// 			observeParents: true,
// 			slidesPerView: 3,
// 			spaceBetween: 56,
// 			autoHeight: true,
// 			speed: 800,
// 			//touchRatio: 0,
// 			//simulateTouch: false,
// 			//loop: true,
// 			//preloadImages: false,
// 			//lazy: true,
// 			// Dotts
// 			//pagination: {
// 			//	el: '.slider-quality__pagging',
// 			//	clickable: true,
// 			//},
// 			// Arrows
// 			navigation: {
// 				nextEl: '.portfolio__arrow_right',
// 				prevEl: '.portfolio__arrow_left',
// 			},
// 			/*
// 			breakpoints: {
// 				320: {
// 					slidesPerView: 1,
// 					spaceBetween: 0,
// 					autoHeight: true,
// 				},
// 				768: {
// 					slidesPerView: 2,
// 					spaceBetween: 20,
// 				},
// 				992: {
// 					slidesPerView: 3,
// 					spaceBetween: 20,
// 				},
// 				1268: {
// 					slidesPerView: 4,
// 					spaceBetween: 30,
// 				},
// 			},
// 			*/
// 			on: {

// 			}
// 		});
// 	}
// }
// // Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
// function initSlidersScroll() {
// 	// Добавление классов слайдера
// 	// при необходимости отключить
// 	bildSliders();

// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
// }

// window.addEventListener("load", function (e) {
// 	// Запуск инициализации слайдеров
// 	initSliders();
// 	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
// 	//initSlidersScroll();
// });


/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.portfolio__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.portfolio__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 56,
			// autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.portfolio__arrow_left',
				nextEl: '.portfolio__arrow_right',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
					autoHeight: true,
				},
				650: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 56,
				},
			},

			// Події
			on: {

			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});


new Swiper('.swiper', {
	modules: [Navigation, Pagination],
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoHeight: true,
	slidesPerView: 1.8,
	spaceBetween: 50,
	centeredSlides: true,
	loop: true,
});

// document.querySelector('input').addEventListener('input', e => {
// 	e.target.nextElementSibling.style.setProperty("--p", (100 * e.target.value) + "%");
// });
// (100*e.target.value)+
// const element = document.getElementById('myElement');

// // Встановлюємо рамку
// element.style.border = '2px solid green';
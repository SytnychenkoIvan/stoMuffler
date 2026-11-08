// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";



const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const data = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		message: document.getElementById('message').value
	};

	const response = await fetch('/.netlify/functions/telegram', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (response.ok) {
		alert('Сообщение отправлено!');
		form.reset();
	} else {
		alert('Ошибка');
	}
});

// Функція Glow при наведенні на кнопку=======================================================
window.addEventListener('load', windowLoad)

function windowLoad() {
	if (document.querySelector('[data-glow]')) {
		document.documentElement.addEventListener("mousemove", buttonActions);
		document.documentElement.addEventListener("mouseout", buttonActions);
		document.documentElement.addEventListener("mouseover", buttonActions);

		let bGlow, bGlowColor, bGlowSize;

		function buttonActions(e) {
			const button = e.target.closest('[data-glow]');
			if (!button) return;

			if (e.type === "mouseover") {
				button.insertAdjacentHTML('beforeend', `
					<span class="action-button__glow">
							<span class="action-button__color"></span>
						</span>
				`);

				bGlow = button.querySelector('.action-button__glow');
				bGlowColor = bGlow.querySelector('.action-button__color');
				bGlowSize = Math.min(button.offsetWidth, button.offsetHeight);
				bGlow.style.width = bGlow.style.height = `${bGlowSize}px`;

				bGlowColor.style.width = `${button.offsetWidth}px`;
				bGlowColor.style.height = `${button.offsetHeight}px`;
			}
			if (e.type === "mouseout") {
				button.querySelector('.action-button__glow').remove();
			}
			if (e.type === "mousemove") {
				const posX = e.pageX - (button.getBoundingClientRect().left + scrollX);
				const posY = e.pageY - (button.getBoundingClientRect().top + scrollY);

				bGlow.style.left = `${posX - bGlowSize / 2}px`;
				bGlow.style.top = `${posY - bGlowSize / 2}px`;

				bGlowColor.style.transform = `
				translate(${posX - (button.offsetWidth - bGlowSize / 2)}px,
							${posY - (button.offsetHeight - bGlowSize / 2)}px)`;
			}
		}
	}
}

// Функція показування кнопки при скролі =======================================================

const ringButton = document.querySelector('.ring');

const showButton = () => {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 500) {
			ringButton.classList.add('show');
		} else {
			ringButton.classList.remove('show');
		}
	})
}
showButton()

//Перемикання світлої та темної теми========================================================================================================================================================


let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.themes__icon');

const enableWhiteStyle = () => {
	document.body.classList.add('whitestyle');
	localStorage.setItem('styleMode', 'white')
}

const disableWhiteStyle = () => {
	document.body.classList.remove('whitestyle');
	localStorage.setItem('styleMode', null)
}

// Без вращения иконок===================================================================================================

// styleToggle.addEventListener('click', () => {
// 	styleMode = localStorage.getItem('styleMode');
// 	if (styleMode !== 'white') {
// 		enableWhiteStyle();
// 	} else {
// 		disableWhiteStyle();
// 	}
// });
//========================================================================================================================================================

if (styleMode === 'white') {
	enableWhiteStyle();
}

//---С вращением иконок======================================================================================================

styleToggle.addEventListener('click', () => {
	styleToggle.classList.add('rotate');

	if (localStorage.getItem('styleMode') !== 'white') {
		enableWhiteStyle();
	} else {
		disableWhiteStyle();
	}

	styleToggle.addEventListener('transitionend', function handler() {
		styleToggle.classList.remove('rotate');
		styleToggle.removeEventListener('transitionend', handler);
	});
});

//========================================================================================================================================================

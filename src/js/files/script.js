//open closed indicator

const shopStatus = document.querySelector('.shop-status');
		const shopStatusText = document.querySelector('.shop-status__text');

		function updateShopStatus() {
			// Получаем текущее время в Киеве
			const now = new Date();

			const parts = new Intl.DateTimeFormat('en-GB', {
				timeZone: 'Europe/Kyiv',
				weekday: 'short',
				hour: '2-digit',
				minute: '2-digit',
				hourCycle: 'h23'
			}).formatToParts(now);

			const getPart = (type) =>
				parts.find(part => part.type === type).value;

			const weekday = getPart('weekday');
			const hours = Number(getPart('hour'));
			const minutes = Number(getPart('minute'));

			const currentMinutes = hours * 60 + minutes;

			// Понедельник–пятница, с 09:00 до 18:00
			const isWorkday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
				.includes(weekday);

			const isOpen =
				isWorkday &&
				currentMinutes >= 9 * 60 &&
				currentMinutes < 18 * 60;

			if (isOpen) {
				shopStatus.classList.add('is-open');
				shopStatus.classList.remove('is-closed');
				shopStatusText.textContent = 'Зараз відчинено';
			} else {
				shopStatus.classList.add('is-closed');
				shopStatus.classList.remove('is-open');
				shopStatusText.textContent = 'Зараз зачинено';
			}
		}

		// Проверяем сразу при загрузке страницы
		updateShopStatus();

		// Обновляем статус раз в 30 секунд
		setInterval(updateShopStatus, 30000);

//go to top and phone button
		const fixedButtons = document.querySelector('.fixed-buttons');

		if (fixedButtons) {
			const showButton = () => {
				if (window.scrollY > 500) {
					fixedButtons.classList.add('show');
				} else {
					fixedButtons.classList.remove('show');
				}
			};

			window.addEventListener('scroll', showButton);

			fixedButtons.querySelector('.ring').addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			});

			showButton();
		}
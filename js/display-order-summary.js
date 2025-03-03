	function getHiddenOrders() {
		return JSON.parse(localStorage.getItem("hiddenOrders")) || [];
	}
	// Зберігаємо приховані ID в localStorage
	function saveHiddenOrders(hiddenOrders) {
		localStorage.setItem("hiddenOrders", JSON.stringify(hiddenOrders));
	}
	
	// Вивід таблиці для опрацювання.
	function displayOrdersSummary() {
		const ordersContainer = document.getElementById("ordersSummary");
		ordersContainer.innerHTML = ""; // Очищаємо попередній вивід

		if (orderArray.length === 0) {
			ordersContainer.innerHTML = "<p>Немає замовлень</p>";
			return;
		}

		const table = document.createElement("table");
		table.classList.add("show-table");

		const thead = document.createElement("thead");
		thead.classList.add("show");
		thead.innerHTML = `
			<tr>
				<th class="col-number">№</th>
				<th class="col-name">Назва</th>
				<th class="col-name">Додатки</th>
				<th class="col-price">Загальна вартість</th>
				<th class="col-ingrid">Ігрідієнти</th>
				<th class="col-price">Виконано</th>
				<th class="col-additions">Час створення</th>
			</tr>
		`;

		table.appendChild(thead);

		const tbody = document.createElement("tbody");

		orderArray.forEach((order, index) => {
			const orderDetails = order.orderDetails;
			let totalCost = 0;
			let allExtras = {};

			Object.values(orderDetails).forEach(orderItem => {
				totalCost += orderItem.cost;
				// Підсумовуємо додаткові інгредієнти
			Object.entries(orderItem.extras).forEach(([extra, extraData]) => {
					allExtras[extra] = (allExtras[extra] || 0) + extraData.amount;
				});
			});

			const orderString = Object.entries(orderDetails)
				.map(([name, details]) => `${name} x${details.count}`)
				.join(", ");

			const ingredientsString = Object.entries(order.ingredientsTotal || {})
				.map(([key, value]) => `${key}: ${value}`)
				.join(", ");

			const extrasString = Object.entries(allExtras)
				.map(([key, value]) => `${key}: ${value}г`)
				.join(", ");
			

			const extrasDisplay = extrasString.trim() === "" ? "-" : extrasString;
				// Створюємо рядок таблиці
			const orderTr = document.createElement("tr");
			orderTr.classList.add("header-row");
			orderTr.innerHTML = `
				<td class="col-number">№${index + 1}</td>
				<td class="col-name">${orderString}</td>
				<td class="col-name">${extrasDisplay}</td>
				<td class="col-price">${totalCost}грн</td>
				<td class="col-ingrid"><p>${ingredientsString}</p></td>
				<td class="col-price">
					<button class="done" data-id="${index + 1}">&#10004;</button>
				</td>
				<td class="col-additions">
					<p>${new Date(order.createdAt).toISOString().slice(0, 19).replace("T", " ")}</p>
				</td>
			`;

			// Додаємо логіку для приховування кнопок
			if (hiddenOrders.includes(index + 1)) {
				orderTr.classList.add("hide");
			}

			tbody.appendChild(orderTr);
		});

		table.appendChild(tbody);
		ordersContainer.appendChild(table);
		
		
		const tfoot = document.createElement("tfoot");
		tfoot.id = "orderSummaryRow"; 
		table.appendChild(tfoot);
		if(orderArray.length == 0){
			ordersContainer.innerHTML = "";
		}
		
	}
	
		// функція підсумовуваня наших замовлень
	function groupOrders() {
		let orderSummary = {}; // Підсумкове збереження

		// Отримуємо всі видимі замовлення з таблиці show-table
		document.querySelectorAll(".show-table tr:not(.hide) .col-name").forEach(cell => {
			let orderText = cell.textContent.trim();
			
			// Розбиваємо текст на окремі інгредієнти (name x кількість) за допомогою розділення по комі
			let items = orderText.split(",").map(item => item.trim()); // Окремі інгредієнти
			items.forEach(item => {
				let matches = item.match(/(.+?)\s*x(\d+)/);

				if (matches) {
					let name = matches[1].trim();
					let count = parseInt(matches[2]);

					// Якщо цей інгредієнт вже є в підсумку, додаємо кількість, якщо ні — ініціалізуємо
					if (orderSummary[name]) {
						orderSummary[name] += count;
					} else {
						orderSummary[name] = count;
					}
				}
			});
		});

		
		// Перетворюємо підсумкові дані у рядок
		let summaryString = Object.entries(orderSummary)
			.map(([name, count]) => {
				// Підсвічуємо за допомогою класів
				let className = "";
				if (count >= 5) {
					className = "high-count"; // Для x5 і більше
				} else if (count >= 2) {
					className = "medium-count"; // Для x2 до x4
				}else if (count >= 0) {
					className = "low-count"; // Для x0 до x2
				}

				return `<span class="${className}">${name} x${count} </span>`;
			})
			.join(", ");

		// Перевіряємо, чи вже є підсумковий рядок
		let summaryElement = document.getElementById("orderSummaryRow");

		if (!summaryElement) {
			// Якщо немає — створюємо новий підсумковий рядок
			summaryElement = document.createElement("div");
			summaryElement.id = "orderSummaryRow";
			summaryElement.classList.add("order-summary");
			summaryElement.innerHTML = `
				<p></p>
			`;
			//📌 Підсумок: ${summaryString} залишаю на майбутнє в параграф
			// Додаємо підсумок в контейнер ordersSummary
			const ordersContainer = document.getElementById("ordersSummary");
			ordersContainer.appendChild(summaryElement);
		} else {
			// Оновлюємо існуючий підсумок
			summaryElement.innerHTML = `<p>  ${summaryString}</p>`;
		}
	}

	
	document.addEventListener("click", (event) => {
	  if (event.target.classList.contains("done")) {
		const orderId = event.target.getAttribute("data-id"); // Отримуємо ID замовлення
		const row = event.target.closest("tr"); // Знаходимо батьківський <tr>

		if (row) {
		  // Додаємо клас для анімації (зменшення прозорості)
		  row.classList.add("opacityShowRow");

		  // Дочекаємось завершення анімації перед приховуванням
		  setTimeout(() => {
			row.classList.add("hide"); // Приховуємо весь рядок після завершення анімації
		  }, 500); // Затримка на 500 мс (чекаємо поки анімація закінчиться)

		  // Додаємо замовлення в список прихованих, якщо його ще немає
		  if (!hiddenOrders.includes(parseInt(orderId))) {
			hiddenOrders.push(parseInt(orderId));
		  }

		  localStorage.setItem("hiddenOrders", JSON.stringify(hiddenOrders)); // Оновлюємо localStorage
		  setTimeout(() => { groupOrders();}, 500); // Оновлюємо підсумкову таблицю
		}
	  }

	});

	// Перевіряємо приховані замовлення при завантаженні сторінки
	document.addEventListener("DOMContentLoaded", () => {
	  let hiddenOrders = getHiddenOrders();
	  hiddenOrders.forEach(orderId => {
		const row = document.querySelector(`.done[data-id="${orderId}"]`)?.closest("tr");
		if (row) {
		  // Додаємо клас для анімації (зменшення прозорості)
		  row.classList.add("opacityShowRow");

		  // Дочекаємось завершення анімації перед приховуванням
		  setTimeout(() => {
			row.classList.add("hide"); // Приховуємо весь рядок після завершення анімації
		  }, 500); // Затримка на 500 мс
		}
	  });

	  groupOrders(); // Оновлюємо підсумкову таблицю
	});
	
	// Викликаємо функцію для виведення інформації
	displayOrdersSummary();
"use strict"

	// Функція виводу таблиці
	function renderOrdersTable() {
		const tableContainer = document.getElementById("ordersContainer");
		tableContainer.innerHTML = ""; // Очищаємо перед оновленням

		if (Object.keys(orders).length === 0)  {
			tableContainer.innerHTML = "<div class='no-orders'>Немає активних замовлень</p>";
			localStorage.removeItem('orderNow');
			return;
		}

		let totalCost = 0; // Загальна сума всіх замовлень
		const table = document.createElement("table");
		table.classList.add("orders-table");
		table.innerHTML = `
			<thead>
				<tr>
					<th class="col-number">№</th>
					<th class="col-image">Страва</th>
					<th class="col-name">Назва</th>
					<th class="col-name">Кількість</th>
					<th class="col-price">Вартість</th>
					<th class="col-additions">Додатки</th>
				</tr>
			</thead>
			<tbody>
				${Object.entries(orders)
					.map(([fullName, order], index) => {
						totalCost += order.cost;

						return `
						<tr class="header-row">
							<td class="col-number">${index + 1}</td>
							<td class="col-image">
								<img src="${order.image}" alt="">
							</td>
							<td class="col-name">${fullName}</td>
							<td class="col-quantity-block" style="justify-content: space-between;" >
								<button class="quantity-minus" data-name="${order.dataName}">-</button> 
								<span id="count-${fullName}">x${order.count}</span> 
								<button class="quantity-plus" data-name="${order.dataName}">+</button>
							</td>
							<td class="col-price">
								<span id="cost-${order.dataName}">${order.cost}</span> грн
							</td>
							<td class="col-additions" style="display: block;">
								<select class="extra-select" data-name="${order.dataName}">
									<option value="none">Виберіть додаток</option>
									${Object.keys(extraItems).map(item => 
										`<option value="${item}">${extraItems[item].name} - ${extraItems[item].amount}г (+${extraItems[item].cost} грн)</option>`
									).join('')}
								</select>
								<button class="add-extra" data-name="${order.dataName}">Додати</button>
								<ul>
									${Object.entries(order.extras)
										.map(
											([extraName, extra]) => `
											<li>${extraName}: ${extra.amount}г (+${extra.cost} грн)
												<button class="remove-extra" data-name="${order.dataName}" data-extra="${extraName}">❌</button>
											</li>
										`
										)
										.join("")}
								</ul>
							</td>
						</tr>
						`;
					})
					.join("")}
			</tbody>
			<tfoot>
				<tr>
					<td colspan="2"><strong>Загальна сума:</strong></td>
					<td colspan="3"><strong id="total-cost">${totalCost} грн</strong></td>
				</tr>
			</tfoot>
		`;

		tableContainer.appendChild(table);
		
		
		
	// Додавання слухачів подій для кнопок quantity-plus
	document.querySelectorAll(".quantity-plus").forEach(button => {
		button.addEventListener("click", () => {
			const dataName = button.getAttribute("data-name");
			const matchingOrders = Object.entries(orders).filter(([_, order]) => order.dataName === dataName);

			if (matchingOrders.length > 0) {
				matchingOrders.forEach(([orderKey, order]) => {
					order.count++;
					// Оновлюємо вартість
					order.cost += order.cost / (order.count - 1);

					// Оновлюємо загальні інгредієнти
					Object.keys(order.ingredients).forEach(key => {
						totalIngredients[key] = (totalIngredients[key] || 0) + order.ingredients[key];
					});
				});
				renderOrdersTable(); // Оновлюємо таблицю
			}
		});
	});
	// Додавання слухачів подій для кнопок quantity-minus
	document.querySelectorAll(".quantity-minus").forEach(button => {
		button.addEventListener("click", () => {
			const dataName = button.getAttribute("data-name");
			const matchingOrders = Object.entries(orders).filter(([_, order]) => order.dataName === dataName);

			if (matchingOrders.length > 0) {
				matchingOrders.forEach(([orderKey, order]) => {
					if (order.count > 0) {
						const portionIngredients = order.ingredients;

						// Віднімаємо інгредієнти для однієї порції
						Object.keys(portionIngredients).forEach(ingredient => {
							if (totalIngredients[ingredient]) {
								totalIngredients[ingredient] -= portionIngredients[ingredient];
								if (totalIngredients[ingredient] < 0) totalIngredients[ingredient] = 0;
							}
						});

						order.count--;
						// Віднімаємо рівну частину вартості
						order.cost -= order.cost / (order.count + 1);
					}
				});

				// Видаляємо замовлення, якщо count = 0
				for (const [orderKey, order] of matchingOrders) {
					if (order.count === 0) {
						delete orders[orderKey];
					}
				}

				// Відображаємо кнопки btn1 та btn2, якщо всі замовлення видалені
				if (Object.values(orders).every(order => order.dataName !== dataName)) {
					const btn1 = document.querySelector(`.btn1[data-name="${dataName}"]`);
					const btn2 = document.querySelector(`.btn2[data-name="${dataName}"]`);

					if (btn1) btn1.classList.remove("hide");
					if (btn2) btn2.classList.remove("hide");
				}

				renderOrdersTable(); // Оновлюємо таблицю
			}
		});
	});

    document.querySelectorAll(".add-extra").forEach(button => {
		button.addEventListener("click", () => {
		const dataName = button.getAttribute("data-name");
		const matchingOrders = Object.entries(orders).filter(([_, order]) => order.dataName === dataName);

		if (matchingOrders.length > 0) {
			matchingOrders.forEach(([orderKey, order]) => {
				// Отримуємо вибраний інгредієнт з select
				const selectedExtra = document.querySelector(`.extra-select[data-name="${dataName}"]`).value;
				const extraItem = extraItems[selectedExtra];

				if (selectedExtra !== "none" && extraItem) {
					// Якщо додаток вже є в замовленні, збільшуємо його кількість і вартість
					if (order.extras[extraItem.name]) {
						order.extras[extraItem.name].amount += extraItem.amount; // Збільшуємо кількість
						order.extras[extraItem.name].cost += extraItem.cost; // Збільшуємо вартість
						order.cost += extraItem.cost; // Оновлюємо загальну вартість замовлення

						// Оновлюємо totalIngredients
						totalIngredients[extraItem.name] += extraItem.amount;
					} else {
						// Якщо додаток ще не був доданий, додаємо його
						order.extras[extraItem.name] = { amount: extraItem.amount, cost: extraItem.cost };
						order.cost += extraItem.cost; // Оновлюємо вартість замовлення

						// Оновлюємо totalIngredients
						totalIngredients[extraItem.name] = (totalIngredients[extraItem.name] || 0) + extraItem.amount;
					}
				}
			});
			renderOrdersTable(); // Оновлюємо таблицю
		}
	});
	});


	// Обробник події для кнопки "Видалити" додаток
	document.querySelectorAll(".remove-extra").forEach(button => {
		button.addEventListener("click", () => {
			const orderName = button.getAttribute("data-name");
			const extraName = button.getAttribute("data-extra");

			// Знаходимо відповідне замовлення за data-name
			const matchingOrders = Object.entries(orders).find(([_, order]) => order.dataName === orderName);

			if (matchingOrders) {
				const [orderKey, order] = matchingOrders; // Доступ до order

				if (order.extras[extraName]) {
					// Віднімаємо вартість від замовлення
					const extra = order.extras[extraName];
					order.cost -= extra.cost;

					// Віднімаємо кількість з totalIngredients
					if (totalIngredients[extraName]) {
						totalIngredients[extraName] -= extra.amount;
						if (totalIngredients[extraName] < 0) totalIngredients[extraName] = 0;
					}

					// Видаляємо додаток з об'єкта замовлення
					delete order.extras[extraName];
				}
			}
			// Оновлюємо таблицю після видалення
			renderOrdersTable();
		});
	});

}
	// Оновлюємо таблицю замовленнь
	renderOrdersTable();
	// Виклик функцій кнопок btn1 та btn2
	firstBtn(foodItems);
	secondBtn(foodItems);
"use strict"

	// Поточне замовлення
	let orders = {}; 
	// Об'єкт для збереження загальної кількості інгредієнтів
	let totalIngredients = {};
	
	let hiddenOrders = JSON.parse(localStorage.getItem("hiddenOrders")) || []; // Завантажуємо масив прихованих замовлень з localStorage
	let orderArray = JSON.parse(localStorage.getItem("OrderArray")) || []; 
	// Отримуємо приховані ID з localStorage

	
	// Пошук елементів 
	const searchFood = document.querySelector(".SearchItem");
	searchFood.addEventListener("input", (letter) => {
	const searchLetters = letter.target.value.trim();
	const filteredFood = foodItems.filter( (food) => food.name.toLowerCase().trim().startsWith(searchLetters.toLowerCase()));
	itemFood.innerHTML = "";
	blockFood(filteredFood);
	firstBtn(filteredFood);
	secondBtn(filteredFood);
	
	document.addEventListener("keydown", (event) => {
		// console.log(event.key === "Escape");
		if(event.key === "Escape"){
			searchFood.value = "";
			itemFood.innerHTML = "";
			blockFood(foodItems);
			firstBtn(foodItems);
			secondBtn(foodItems);
		}
	});
	
});
	// Видалити все	
	const cleareBtn = document.querySelector(".clearLocal");
	if(cleareBtn != null){
	cleareBtn.addEventListener("click", () => {
		localStorage.removeItem('OrderArray');
		localStorage.removeItem('hiddenOrders');
		location.reload()
	});	
	}

	const itemFood = document.querySelector(".items");
	
	const closeItem = document.querySelector('.js-items-open-block').addEventListener('click', () => {
		itemFood.classList.toggle('open-block-hide');
		itemFood.classList.add('.open-search-hide');
		if (searchFood.classList.contains('search-hide')) {
			// Якщо клас є (значить приховано)
			itemFood.classList.add('.open-search-hide');
		} else {
			// Якщо класу немає (значить показано)
			document.querySelector('.SearchItem').classList.remove('search-hide');
			itemFood.classList.remove('.open-search-hide');
		}
	});
	
	
	const closeSearch = document.querySelector('.js-search-item-button').
	addEventListener('click', () => {
		
		searchFood.classList.toggle('search-hide');
		console.log(searchFood.classList.contains('search-hide'));
		if (searchFood.classList.contains('search-hide')) {
			// Якщо клас є (значить приховано)
			itemFood.classList.add('items-padding-top');
		} else {
			// Якщо класу немає (значить показано)
			document.querySelector('.SearchItem').classList.remove('search-hide');
			itemFood.classList.remove('items-padding-top');
		}
	});
	
	
	// Форма блоку з їжею
	function blockFood(setFood) {
    setFood.forEach((item, index) => {
        const ingredients = Object.entries(item.ingerL)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ");
        let littleCost = item.cost.little;
        let maximumCost = item.cost.max;

        // Додаємо блок у DOM
        itemFood.insertAdjacentHTML("beforeend", `
            <div class="item">
				<img src="${item.image}" alt="">
				<div class="item-title">
					<p class="item-title-text"> ${item.name}</p>
				</div>
                <div class="item-buttons">
                    <button class="btn1" data-name="L-${item.itemId}"> L </button>
                    <button class="btn2" data-name="XL-${item.itemId}"> XL </button>
                </div>
            </div>
        `);

        // Отримуємо всі `.item`
        const allItems = document.querySelectorAll(".item");
        const lastItem = allItems[allItems.length - 1]; 
		
        // Знаходимо `.btn2` тільки в останньому `.item`
        let btn1 = lastItem.querySelector(".btn1");
        let btn2 = lastItem.querySelector(".btn2");

        // Якщо ціни однакові, приховуємо `.btn2`
        if (maximumCost == littleCost) {
            btn2.classList.add("hide");
            btn1.classList.add("sameBtn");
			//Текст для item з однією кнопкою
			btn1.textContent = "XL";
        } else {
            // console.log("Різні");
        }
    });

    // Додаємо пустий div з класом addItem і кнопкою "+"
    itemFood.insertAdjacentHTML("beforeend", `
        <div class="addItemInfo">
            <span>+</span>
        </div>
    `);
	
	// Збереження поточного замовлення в локал.
	const orderNow = JSON.parse(localStorage.getItem('orderNow'));
	if(orderNow){
		console.log("Данні є");
		orders = orders && Object.keys(orders).length ? orders : orderNow;
		// renderOrdersTable();
	}else {
		return;
	}
	if (orders === orderNow) {
		totalIngredients = { ...getTotalIngredients(orders) };
		}

	}
	//Загружаємо наші страви item.
	blockFood(foodItems);
	
	function getTotalIngredients(orders) {
		const totalIngredients = {};

		for (const order of Object.values(orders)) {
			for (const [ingredient, amount] of Object.entries(order.ingredients)) {
				totalIngredients[ingredient] = (totalIngredients[ingredient] || 0) + amount;
			}
		}
		return totalIngredients;
	}

	
	// Кнопки замовлення
	// Збереження поточного замовлення
	document.getElementById("saveBtn").addEventListener("click", () => {
		if (Object.keys(orders).length === 0) {
			alert("Ви ще нічого не вибрали!");
			return;
		}
		// Object.entries(orders).forEach(([key, value]) => {
			// console.log(`Ціна: ${value.cost} грн`);
			// console.log("Інгредієнти:", value.ingredients);
			// console.log("Доповнення:", value.extras);
			
		// });
		localStorage.setItem('orderNow', JSON.stringify(orders));
		hideButtons();
		renderOrdersTable();
	});
	
	// Функція генерації унікального OrdersId
	function generateOrderId() {
		const date = new Date();
		return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}_${date.getHours().toString().padStart(2, "0")}${date.getMinutes().toString().padStart(2, "0")}`;
	}


	function hideButtons() {
		document.getElementById("saveArr").classList.toggle("hidden");
		document.getElementById("saveBtn").classList.toggle("hidden");
	}

	
	/// Зберігання наших об'єктів до LocalStorage
	document.getElementById("saveArr").addEventListener("click", () => {
		
    if (Object.keys(orders).length === 0) {
        alert("Немає замовлень для збереження!");
        return;
    }

    const orderId = generateOrderId();
   
   const orderWithTime = {
        orderId: orderId,
        orderDetails: orders,
        ingredientsTotal: { ...totalIngredients }, // Копіюємо для збереження
        createdAt: new Date().toISOString()
    };

    try {
        if (!subtractIngredients(totalIngredients)) {
            console.error("Ігрідієнтів не вистачає!");
            return; // Вихід з функції, якщо віднімання не пройшло
        }

        // Якщо функція subtractIngredients не видав помилку, додаємо замовлення
        orderArray.push(orderWithTime);
        localStorage.setItem("OrderArray", JSON.stringify(orderArray));

        // Показати приховані кнопки в стравах
		document.querySelectorAll(".item").forEach((item) => {
			const btn1 = item.querySelector(".btn1");
			const btn2 = item.querySelector(".btn2");

			if (btn1 && btn2) { // Переконуємось, що кнопки існують
				if (!btn1.classList.contains("sameBtn")) {
					btn2.classList.remove("hide");
				}
				
				btn1.classList.remove("hide"); // btn1 завжди робимо видимою
			}
		});

        // Очищення поточних замовлень
        orders = {};
        Object.keys(totalIngredients).forEach(key => delete totalIngredients[key]);

        // Перечитати orderArray з localStorage перед оновленням таблиці
        orderArray = JSON.parse(localStorage.getItem("OrderArray")) || [];

        // Оновити таблицю
        renderOrdersTable();
        displayOrdersSummary();
        groupOrders();
		
        // Сховати кнопки збереження
        hideButtons();

        // Оновлюємо масив прихованих замовлень в localStorage
        localStorage.setItem("hiddenOrders", JSON.stringify(hiddenOrders));
    } catch (error) {
        console.error("Помилка при відніманні інгредієнтів:", error);
        // ❗ Очищаємо замовлення та оновлюємо таблицю, щоб вона стала пустою
        orders = {};
		totalIngredients = {};
        renderOrdersTable();
		getHiddenOrders();
    }

});

	function addOrder(name, size, cost, ingredients, dataName, image) {
		const fullName = `${name} ${size}`;
		const order = orders[fullName];

		// Якщо замовлення ще не існує
		if (!order) {
			orders[fullName] = {
				count: 1,
				cost: cost,
				ingredients: { ...ingredients }, // Копія об'єкта інгредієнтів
				dataName,
				image,
				extras: {} // Додаткові інгредієнти
			};

			// Оновлення totalIngredients
			Object.keys(ingredients).forEach(key => {
				totalIngredients[key] = (totalIngredients[key] || 0) + ingredients[key];
			});
		} else {
			// Якщо замовлення вже існує
			order.count++;
			order.cost += cost;

			// Сумуємо інгредієнти
			Object.keys(ingredients).forEach(key => {
				order.ingredients[key] = (order.ingredients[key] || 0) + ingredients[key];
			});

			// Оновлення totalIngredients з урахуванням кількості порцій
			Object.keys(ingredients).forEach(key => {
				totalIngredients[key] = (totalIngredients[key] || 0) + ingredients[key]; // додаємо інгредієнти на 1 порцію
			});
		}
		// Оновлюємо таблицю
		renderOrdersTable();
	}

	// Функція для кнопок першого типу
	function firstBtn(arr) {
		document.querySelectorAll(".btn1").forEach((button, index) => {
			button.addEventListener("click", () => {
				const { name, cost, ingerL, ingerM, image } = arr[index];
				const dataName = button.getAttribute("data-name");
				if (!name || !cost || !ingerL || !dataName) {
					console.error("Невірні дані для кнопки першого типу");
					return;
				}

				if (JSON.stringify(ingerL) === JSON.stringify(ingerM)) {
					// Додаємо новий елемент або збільшуємо кількість
					addOrder(name, "", cost.little, ingerL, dataName, image);
				} else {
					// Додаємо новий елемент або збільшуємо кількість
					addOrder(name, "L", cost.little, ingerL, dataName, image);
				}

				renderOrdersTable(); // Оновлюємо таблицю після всіх змін

				// Додаємо клас hide на кнопку, щоб приховати її
				button.classList.add("hide");
			});
		});
	}

	// Функція для кнопок другого типу
	function secondBtn(arr) {
		document.querySelectorAll(".btn2").forEach((button, index) => {
			button.addEventListener("click", () => {
				const { name, cost, ingerM, ingerL, image } = arr[index];
				const dataName = button.getAttribute("data-name");

				if (!name || !cost || !ingerM || !dataName) {
					console.error("Невірні дані для кнопки другого типу");
					return;
				}
				if (JSON.stringify(ingerL) === JSON.stringify(ingerM)) {
					// Додаємо новий елемент або збільшуємо кількість
					addOrder(name, "", cost.max, ingerM, dataName, image);
				} else {
					addOrder(name, "XL", cost.max, ingerM, dataName, image);
				}

				renderOrdersTable(); // Оновлюємо таблицю після всіх змін
				
				// Додаємо клас hide на кнопку, щоб приховати її
				button.classList.add("hide");
			});
		});
	}

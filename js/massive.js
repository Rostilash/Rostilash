"use strict";
	// Меню закладу
	const foodItems = [
{
	itemId: 1,
	name: "Удон",
	image: "https://i.pinimg.com/originals/84/af/f8/84aff8da6d0153185373e30f6976b802.jpg", 
	ingerL: {
		"Олія": 25,
		"Локшина Удон": 160,
		"Тофу": 40,
		"Соєві стейки": 35,
		"Морква": 35,
		"Кабачок": 15,
		"Перець Болгарський": 10,
		"Соєвий соус": 20,
		"Теріякі": 30,
		"Кунжут": 20,
		"Арахіс": 20,
		"Лайм": 30,
	},
	ingerM: {
		"Олія": 30,
		"Локшина Удон": 200,
		"Тофу": 70,
		"Соєві стейки": 55,
		"Морква": 55,
		"Кабачок": 20,
		"Перець Болгарський": 15,
		"Соєвий соус": 30,
		"Теріякі": 60,
		"Кунжут": 30,
		"Арахіс": 3,
		"Лайм": 50,
	},
	cost: {
		little: 155,
		max: 190
	},
},
{
	itemId: 2,
	name: "Рисова",
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-6rBbteuQaI-KGQkiBBYTieJ1CgSF3-OxA&s",
	
	ingerL: {
		"Олія": 25,
		"Локшина Рисова": 160,
		"Тофу": 40,
		"Соєві стейки": 35,
		"Морква": 35,
		"Кабачок": 15,
		"Перець Болгарський": 10,
		"Соєвий соус": 20,
		"Теріякі": 30,
		"Кунжут": 20,
		"Арахіс": 20,
		"Лайм": 30,
	},
	ingerM: {
		"Олія": 30,
		"Локшина Рисова": 200,
		"Тофу": 70,
		"Соєві стейки": 55,
		"Морква": 55,
		"Кабачок": 20,
		"Перець Болгарський": 15,
		"Соєвий соус": 30,
		"Теріякі": 60,
		"Кунжут": 30,
		"Арахіс": 3,
		"Лайм": 50,
	},
	cost: {
		little: 155,
		max: 190
	},
},
{
	itemId: 3,
	name: "Khao Pad Рис",
	image: "data:image/jpeg;base64,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",
	ingerL: {
		"Олія": 25,
		"Рис Басматі": 160,
		"Тофу": 40,
		"Соєві стейки": 35,
		"Морква": 35,
		"Кабачок": 15,
		"Нут": 25,
		"Соєвий соус": 20,
		"Теріякі": 30,
		"Sweet Chili соус": 20,
		"Кунжут": 20,
		"Арахіс": 20,
	},
	ingerM: {
		"Олія": 30,
		"Рис Басматі": 200,
		"Тофу": 70,
		"Соєві стейки": 55,
		"Морква": 55,
		"Кабачок": 20,
		"Нут": 30,
		"Соєвий соус": 30,
		"Теріякі": 60,
		"Sweet Chili соус": 30,
		"Кунжут": 30,
		"Арахіс": 3,
	},
	cost: {
		little: 155,
		max: 190
	},
},
{
	itemId: 4,
	name: "Mango Fried Rice",
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho6GXM-Mtm5C54QW9NfTdIYUQxefB848LHg&s",
	ingerL: {
		"Олія": 30,
		"Ерінги": 35,
		"Соєві стейки": 50,
		"Ананас": 45,
		"Перчик": 20,
		"Броколі": 20,
		"Рис Басматі": 160,
		"Соєвий соус": 20,
		"Соус Манго чилі": 60,
		"Кеш'ю": 15,
	},
	ingerM: {
		"Олія": 30,
		"Ерінги": 35,
		"Соєві стейки": 50,
		"Ананас": 45,
		"Перчик": 20,
		"Броколі": 20,
		"Рис Басматі": 160,
		"Соєвий соус": 20,
		"Соус Манго чилі": 60,
		"Кеш'ю": 15,
	},
	cost: {
		little: 210,
		max: 210
	},
},
{
	itemId: 5,
	name: "King Pad Thai",
	image: "https://foodwithfeeling.com/wp-content/uploads/2021/02/Vegan-Pad-Thai-7-500x500.jpg",
	ingerL: {
		"Олія": 25,
		"Шіїтаке": 50,
		"Печериці": 50,
		"Квасоля": 45,
		"Бебі Морква": 50,
		"Локшина Удон": 160,
		"Соєвий соус": 20,
		"Теріякі": 20,
		"Блю чіз": 75,
		"Пармезан": 10,
		"Помідор Чері": 15,
		"Кеш'ю": 15,
		"Олія Трюфеля": 5,
	},
	ingerM: {
		"Олія": 25,
		"Шіїтаке": 50,
		"Печериці": 50,
		"Квасоля": 45,
		"Бебі Морква": 50,
		"Локшина Удон": 160,
		"Соєвий соус": 20,
		"Теріякі": 20,
		"Блю чіз": 75,
		"Пармезан": 10,
		"Помідор Чері": 15,
		"Кеш'ю": 15,
		"Олія Трюфеля": 5,
	},
	cost: {
		little: 240,
		max: 240
	},
},
{
	itemId: 6,
	name: "Tom Yum Суп",
	image: "https://i.pinimg.com/736x/d4/fa/6b/d4fa6b526150ac38a0d8ec5b4db40552.jpg",
	ingerL: {
		"Олія": 15,
		"Тофу": 30,
		"Шіїтаке": 20,
		"Печериці": 30,
		"Бебі Морква": 10,
		"Броколі": 20,
		"Помідор": 15,
		"Соєвий соус": 20,
		"Паста Том Ям": 5,
		"Порей": 2,
		"Кокосове Молоко": 30,
		"Кунжут": 10
	},
	ingerM: {
		"Олія": 15,
		"Тофу": 30,
		"Шіїтаке": 20,
		"Печериці": 30,
		"Бебі Морква": 10,
		"Броколі": 20,
		"Помідор": 15,
		"Соєвий соус": 20,
		"Паста Том Ям": 5,
		"Порей": 2,
		"Кокосове Молоко": 30,
		"Кунжут": 10
	},
	cost: {
		little: 140,
		max: 140
	},
},
{
	itemId: 7,
	name: "Стейки під соусом",
	image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhIQERMVFRUWFhgXEhgXGRUWFhUWFxUYGBcXFRcYHSggGBoxHxcXIj0hJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy4mICYtNTA1LS8tLy0vLy8rNS0tLzAvLS0tLS0vLS0tLS8tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUGBwj/xAA6EAABBAAEBAMGBAQGAwAAAAABAAIDEQQSITEFQVFhBhMiMnGBkaGxFEJSwWLR4fAHFRYjM/FDcrL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQEAAgEEAgEDAgcBAAAAAAAAAQIRAwQSITFBURNhkRQyIjNxobHB8CP/2gAMAwEAAhEDEQA/APcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFSkFUREBFpsfx9jCWsGcjc8r6Dr8FzvFvEU5aWsZIXUTTWuAHy3WF9xSv3b0297fZ3L3gakge80oUnGYGkgyDTQ1ZF9LHPsvOnnEyU99tzGhbh6W8613O237rBLBM06scNDWX1Bjejau3nrvr77wtu59Q3rtK+5ejHxDB+o71sd+nv7bqNP4sw7dye+33JXnuJmMYs6OINNJrK0CyL5dS778+Qx8Mkrsz5HOB2qMtjaPi6wK50qfqbz8LxtdOPL3vCeIcPIC5sg036j5LjMf4nxbJCXW1hJyUBlIvSj7l554P4iRIKcQ7r+oHkV30uKa4ECnZtHNcNL5Nd0sbOVNTXvbqf7NKaFKT4y3kPil7o2kUSDbjX5aN6ddltY/E+H9DXPp7tCKJo9z0XCYAtAzMJLbIIPtRu2LT7jzWrxQd+LYxutgVXUmgqfqdWvic/wBU/ptK/U9PagUWPDsyta3oAPkKWReu8kREQEREBERAREQEREBERAXP8X8WQQ2GnzH3VN2vpa2/Enls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",
	ingerL: {
		"Олія": 25,
		"Соєві стейки": 160,
		"Соєвий соус": 20,
		"Теріякі": 20,
		"Кунжут": 10,
		"Лайм": 30
	},
	ingerM: {
		"Олія": 30,
		"Соєві стейки": 240,
		"Соєвий соус": 20,
		"Теріякі": 20,
		"Кунжут": 10,
		"Лайм": 30
	},
	cost: {
		little: 100,
		max: 150
	},
},
{
	itemId: 8,
	name: "Tom Kha Суп",
	image: "https://andychef.ru/wp-content/uploads/2014/11/main6.jpg",
	ingerL: {
		"Олія": 16,
		"Тофу": 30,
		"Гливи": 55,
		"Бебі Морква": 15,
		"Соєвий соус": 20,
		"Паста Том Kha": 7,
		"Помідор": 20,
		"Порей": 2,
		"Кокосове Молоко": 75,
		"Кунжут": 10
	},
	ingerM: {
		"Олія": 16,
		"Тофу": 30,
		"Гливи": 55,
		"Бебі Морква": 15,
		"Соєвий соус": 20,
		"Паста Том Kha": 7,
		"Помідор": 20,
		"Порей": 2,
		"Кокосове Молоко": 75,
		"Кунжут": 10
	},
	cost: {
		little: 150,
		max: 150
	},
},
{
	itemId: 8,
	name: "Miso Суп",
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpVG_Zvej-kXcshW3sSrtmv9LrqsYM6VcGuWAC-7gevRaAZ93ij7ssslN_7Vbmu4-0R0&usqp=CAU",
	ingerL: {
		"Олія": 15,
		"Тофу": 50,
		"Печериці": 30,
		"Кабачок": 15,
		"Соєвий соус": 20,
		"Місо паста": 5,
		"Порей": 2,
		"Вакаме": 10,
		"Кунжут": 10
	},
	ingerM: {
		"Олія": 15,
		"Тофу": 50,
		"Печериці": 30,
		"Кабачок": 15,
		"Соєвий соус": 20,
		"Місо паста": 5,
		"Порей": 2,
		"Вакаме": 10,
		"Кунжут": 10
	},
	cost: {
		little: 120,
		max: 120
	},
},
];

	const ingredientPrices = {
    "Шіїтаке": 0,
    "Соєві стейки": 0,
    "Рис Басматі": 0,
    "Локшина Рисова": 0,
    "Печериці": 0,
    "Тофу": 0,
    "Локшина Удон": 0,
    "Морква": 0,
    "Кабачок": 0,
    "Олія": 0,
    "Перець Болгарський": 0,
    "Соєвий соус": 0,
    "Теріякі": 0,
    "Кунжут": 0,
    "Арахіс": 0,
    "Лайм": 0,
    "Нут": 0,
    "Ерінги": 0,
    "Ананас": 0,
    "Перчик": 0,
    "Броколі": 0,
    "Соус Манго чилі": 0,
    "Кеш'ю": 0,
    "Квасоля": 0,
    "Бебі Морква": 0,
    "Блю чіз": 0,
    "Пармезан": 0,
    "Помідор Чері": 0,
    "Олія Трюфеля": 0,
    "Помідор": 0,
    "Паста Том Ям": 0,
    "Порей": 0,
    "Кокосове Молоко": 0,
    "Гливи": 0,
    "Паста Том Kha": 0,
    "Місо паста": 0,
    "Вакаме": 0,
	"Sweet Chili соус": 0
}; // Приклад цін за 1000 г тобто 1 кг
	
	const extraItems = {
		"Тофу": { name: "Тофу", amount: 40, cost: 35 },
		"Соєві стейки": { name: "Соєві стейки", amount: 40, cost: 35 },
		"Шіїтаке": { name: "Шіїтаке", amount: 40, cost: 35 }
	};
	

	const itemFood = document.querySelector(".items");
	const searchFood = document.querySelector(".SearchItem");
	const head = document.querySelector("header");
	const orderBlock = document.querySelector(".foodOrder p");
	const inSave = document.querySelector('#inputSave');

	//Загружаємо наше меню
	blockFood(foodItems);
	////////////////////////////////////////////////
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
                <h1> ${item.name}</h1>
                <img src="${item.image}" alt="">
                <div class="costItem">
                    <button class="btn1" data-name="Item1${item.itemId}"> L </button>
                    <button class="btn2" data-name="Item2${item.itemId}"> XL </button>
                </div>
            </div>
        `);

        // Отримуємо всі `.item`
        const allItems = document.querySelectorAll(".item");
        const lastItem = allItems[allItems.length - 1]; // Останній доданий елемент
        // Знаходимо `.btn2` тільки в останньому `.item`
        let btn1 = lastItem.querySelector(".btn1");
        let btn2 = lastItem.querySelector(".btn2");

        // Якщо ціни однакові, приховуємо `.btn2`
        if (maximumCost == littleCost) {
            btn2.classList.add("hide");
            btn1.classList.add("sameBtn");
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

    // Отримуємо останній доданий блок
    const addItem = document.querySelector(".addItemInfo");
		console.log(addItem);
	addItem.addEventListener("click", () => {
		
	});
}

	
	
	// Div з нашими кнопками
	// const costItemBlock = document.querySelector(".costItem");

	// Пошук елементів 
	searchFood.addEventListener("input", (letter) => {
		const searchLetters = letter.target.value.trim();
		const filteredFood = foodItems.filter( (food) => food.name.toLowerCase().trim().startsWith(searchLetters.toLowerCase()));
		itemFood.innerHTML = "";
		// head.style.display = "none";
		
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
	
	
	const cleareBtn = document.querySelector(".clearLocal");
	// Видалити все		
	if(cleareBtn != null){
	cleareBtn.addEventListener("click", () => {
		localStorage.removeItem('OrderArray');
		localStorage.removeItem('hiddenOrders');
		location.reload()
	});	
	}
	
	function hideButtons() {
		document.getElementById("saveArr").classList.toggle("hidden");
		document.getElementById("saveBtn").classList.toggle("hidden");
	}
	// Наш об'єкт який приймає всі страви
	let totalIngredients = {}; // Об'єкт для збереження загальної кількості інгредієнтів
	let orders = {}; // Поточне замовлення
	let orderArray = JSON.parse(localStorage.getItem("OrderArray")) || []; // Завантажуємо OrderArray з localStorage або ініціалізуємо порожній масив

	// Збереження поточного замовлення
	document.getElementById("saveBtn").addEventListener("click", () => {
		if (Object.keys(orders).length === 0) {
			alert("Ви ще нічого не вибрали!");
			return;
		}
		Object.entries(orders).forEach(([key, value]) => {
			// console.log(`Ціна: ${value.cost} грн`);
			// console.log("Інгредієнти:", value.ingredients);
			// console.log("Доповнення:", value.extras);
			
		});

		hideButtons();
		renderOrdersTable();
	});

	// Функція генерації унікального OrdersId
	function generateOrderId() {
		const date = new Date();
		return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}_${date.getHours().toString().padStart(2, "0")}${date.getMinutes().toString().padStart(2, "0")}`;
	}

	function addOrder(name, size, cost, ingredients, dataName) {
		const fullName = `${name} ${size}`;
		const order = orders[fullName];

		// Якщо замовлення ще не існує
		if (!order) {
			orders[fullName] = {
				count: 1,
				cost: cost,
				ingredients: { ...ingredients }, // Копія об'єкта інгредієнтів
				dataName,
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

		console.log("Оновлений totalIngredients:", totalIngredients);

		// Оновлюємо таблицю
		renderOrdersTable();
	}

	let hiddenOrders = JSON.parse(localStorage.getItem("hiddenOrders")) || []; // Завантажуємо масив прихованих замовлень з localStorage
//////////////////////////////////////////////////////////
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
				console.log(btn1, btn2);

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

		 // Показати приховані кнопки
        console.log(ingerL);
		if (JSON.stringify(ingerL) === JSON.stringify(ingerM)) {
			
			console.log("same");
		} else {
			// document.querySelectorAll(".btn1, .btn2").forEach(btn => btn.classList.remove("hide"));
		}
        // ❗ Очищаємо замовлення та оновлюємо таблицю, щоб вона стала пустою
        orders = {};
		totalIngredients = {};
        // renderOrdersTable();
    }

});




////////////////////////////////////////////////////////////////////////////////////
	// Функція виводу таблиці
	function renderOrdersTable() {
		const tableContainer = document.getElementById("ordersContainer");
		tableContainer.innerHTML = ""; // Очищаємо перед оновленням

		if (Object.keys(orders).length === 0) {
			tableContainer.innerHTML = "<p>Немає активних замовлень</p>";
			return;
		}

		let totalCost = 0; // Загальна сума всіх замовлень
		const table = document.createElement("table");
		table.classList.add("orders-table");

		table.innerHTML = `
			<thead>
				<tr>
					<th class="col-number">№</th>
					<th class="col-name">Назва</th>
					<th class="col-name">Кількість</th>
					<th class="col-price">Загальна вартість</th>
					<th class="col-additions">Додатки</th>
				</tr>
			</thead>
			<tbody>
				${Object.entries(orders)
					.map(([fullName, order], index) => {
						totalCost += order.cost; // Додаємо вартість до загальної суми

						return `
						<tr class="header-row">
							<td class="col-number">${index + 1}</td>
							<td class="col-name">${fullName}</td>
							<td>
								<button class="quantity-minus" data-name="${order.dataName}">-</button> 
								x<span id="count-${fullName}">${order.count}</span> 
								<button class="quantity-plus" data-name="${order.dataName}">+</button>
							</td>
							<td class="col-price">
								<span id="cost-${order.dataName}">${order.cost}</span> грн
							</td>
							<td class="col-additions">
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
					// Збільшуємо кількість
					order.count++;

					// Оновлюємо вартість
					order.cost += order.cost / (order.count - 1);

					// Оновлюємо загальні інгредієнти
					Object.keys(order.ingredients).forEach(key => {
						totalIngredients[key] = (totalIngredients[key] || 0) + order.ingredients[key];
					});

					console.log(`➕ Додано 1 порцію для ${orderKey}, нова кількість: ${order.count}`);
					console.log(totalIngredients);
				});

				console.log("Оновлений totalIngredients:", totalIngredients);
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

						// Зменшуємо count на 1
						order.count--;

						// Віднімаємо рівну частину вартості
						order.cost -= order.cost / (order.count + 1);

						// console.log(`➖ Віднято 1 порцію ${orderKey}, залишилося: ${order.count}`);
						// console.log(totalIngredients);
					}
				});

				console.log("Оновлений totalIngredients:", totalIngredients);

				// Видаляємо замовлення, якщо count = 0
				for (const [orderKey, order] of matchingOrders) {
					if (order.count === 0) {
						delete orders[orderKey];
						// console.log(`❌ Видалено ${orderKey} з orders`);
						// console.log(totalIngredients);
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
							console.log(`Додано ще ${extraItem.amount}г ${extraItem.name} до замовлення ${orderKey}, нова вартість: ${order.cost}`);
						} else {
							// Якщо додаток ще не був доданий, додаємо його
							order.extras[extraItem.name] = { amount: extraItem.amount, cost: extraItem.cost };
							order.cost += extraItem.cost; // Оновлюємо вартість замовлення

							// Оновлюємо totalIngredients
							totalIngredients[extraItem.name] = (totalIngredients[extraItem.name] || 0) + extraItem.amount;
							console.log(`Додано ${extraItem.amount}г ${extraItem.name} до замовлення ${orderKey}, нова вартість: ${order.cost}`);
						}
						console.log(totalIngredients);
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

					console.log(`❌ Видалено додаток ${extraName} з замовлення ${orderKey}`);
					console.log(totalIngredients);
				}
			}

			// Оновлюємо таблицю після видалення
			renderOrdersTable();
		});
	});

	}

	// Виклик функцій
	firstBtn(foodItems);
	secondBtn(foodItems);

	// Функція для кнопок першого типу
	function firstBtn(arr) {
		document.querySelectorAll(".btn1").forEach((button, index) => {
			button.addEventListener("click", () => {
				const { name, cost, ingerL, ingerM } = arr[index];
				const dataName = button.getAttribute("data-name");
				console.log(dataName);
				if (!name || !cost || !ingerL || !dataName) {
					console.error("Невірні дані для кнопки першого типу");
					return;
				}

				if (JSON.stringify(ingerL) === JSON.stringify(ingerM)) {
					// Додаємо новий елемент або збільшуємо кількість
					addOrder(name, "", cost.little, ingerL, dataName);
				} else {
					// Додаємо новий елемент або збільшуємо кількість
					addOrder(name, "L", cost.little, ingerL, dataName);
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
				const { name, cost, ingerM, ingerL } = arr[index];
				const dataName = button.getAttribute("data-name");

				if (!name || !cost || !ingerM || !dataName) {
					console.error("Невірні дані для кнопки другого типу");
					return;
				}
				if (JSON.stringify(ingerL) === JSON.stringify(ingerM)) {
					// Додаємо новий елемент або збільшуємо кількість
					addOrder(name, "", cost.max, ingerM, dataName);
				} else {
					// Додаємо новий елемент або збільшуємо кількість
					addOrder(name, "XL", cost.max, ingerM, dataName);
				}

				renderOrdersTable(); // Оновлюємо таблицю після всіх змін
				
				// Додаємо клас hide на кнопку, щоб приховати її
				button.classList.add("hide");
			});
		});
	}

	/////////////////////////////////////////////////////////////////////////////
	// Вивід таблиці для опрацювання.
	function displayOrdersSummary() {
		const ordersContainer = document.getElementById("ordersSummary");
		ordersContainer.innerHTML = ""; // Очищаємо попередній вивід

		if (orderArray.length === 0) {
			ordersContainer.innerHTML = "<p>Немає збережених замовлень</p>";
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
		console.log(tfoot.id);
		if(orderArray.length == 0){
			console.log('alfsa');
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
				<p>📌 Підсумок: ${summaryString}</p>
			`;
			// Додаємо підсумок в контейнер ordersSummary
			const ordersContainer = document.getElementById("ordersSummary");
			ordersContainer.appendChild(summaryElement);
		} else {
			// Оновлюємо існуючий підсумок
			summaryElement.innerHTML = `<p>  ${summaryString}</p>`;
		}
	}

	// Отримуємо приховані ID з localStorage
	function getHiddenOrders() {
		return JSON.parse(localStorage.getItem("hiddenOrders")) || [];
	}

	// Зберігаємо приховані ID в localStorage
	function saveHiddenOrders(hiddenOrders) {
		localStorage.setItem("hiddenOrders", JSON.stringify(hiddenOrders));
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
	
	// Отримуємо об'єкт з localStorage
	let ingPrValue = JSON.parse(localStorage.getItem("prices"));

	// Перевірка, чи є значення в prices, якщо вони не 0
	const shouldUpdatePrices = ingPrValue && Object.values(ingPrValue).some(value => value !== 0);

	// Якщо ціни не знайдені в localStorage або всі значення дорівнюють 0
	if (!shouldUpdatePrices) {
	  // Якщо ціни не збережено в localStorage, або всі значення дорівнюють 0, ініціалізуємо їх дефолтними значеннями
	  localStorage.setItem('prices', JSON.stringify(ingredientPrices));
	} else {
	  // В іншому випадку, дані в prices зберігаються без змін
	}

	// Функція для отримання всіх інгредієнтів з localStorage або дефолтних значень
	const getAllMyIngrid = () => {
	  const storedIngredients = localStorage.getItem('AllMyIngrid');
	  return storedIngredients ? JSON.parse(storedIngredients) : ingredientPrices;
	};

	// Константа нашого localStorage
	const allIngredients2 = getAllMyIngrid();
	
	
/////////////////////////////////////////////////////////////////		
// Функція віднімання інгредієнтів
	function subtractIngredients(cardItems) {
    if (typeof cardItems !== "object" || cardItems === null) {
        console.error("Параметр має бути об'єктом");
        throw new Error("Параметр має бути об'єктом");
    }

    const sortedEntries = Object.entries(allIngredients2).sort((a, b) => a[1] - b[1]);
    Object.assign(allIngredients2, Object.fromEntries(sortedEntries));
    console.log("✅ Відсортовані allIngredients2:", allIngredients2);
    console.log("cardItems:", cardItems);

    for (const key in cardItems) {
        if (cardItems.hasOwnProperty(key)) {
            if (allIngredients2[key] === undefined) {
                console.error(`Інгредієнт ${key} відсутній у allIngredients2`);
                alert(`Інгредієнт ${key} відсутній для приготування страви.`);
                throw new Error(`Інгредієнт ${key} відсутній`);
            }
            if (allIngredients2[key] < cardItems[key]) {
                console.error(`Недостатньо ${key}: потрібно ${cardItems[key]}, а є тільки ${allIngredients2[key]}`);
                alert(`Недостатньо інгредієнта ${key} для приготування страви.`);
                throw new Error(`Недостатньо ${key}`);
            }
        }
    }

    for (const key in cardItems) {
        if (cardItems.hasOwnProperty(key)) {
            allIngredients2[key] -= cardItems[key];
        }
    }

    console.log("Оновлені allIngredients2:", allIngredients2);
    localStorage.setItem('allIngredients', JSON.stringify(allIngredients2));
    updateAllMyIngrid(allIngredients2);

    return true; // Означає, що операція успішна
}


	function updateIngredients(newData) {
    localStorage.setItem("AllMyIngrid", JSON.stringify(newData));
    renderIngredients(); // Оновлюємо відображення
  }

	function renderIngredients() {
    const container = document.getElementById("ingredientsContainer");
    container.innerHTML = ""; // Очищаємо перед оновленням

    const ingredients = getAllMyIngrid();

    Object.entries(ingredients).forEach(([key, value]) => {
      const div = document.createElement("div");
      div.classList.add("ingredient-item");
      div.innerHTML = `
        <span>${key}: </span>
        <input type="number" value="${value}" data-key="${key}" class="ingredient-input">
        <button class="confirm" data-key="${key}">✔️</button>
        <button class="remove" data-key="${key}">❌</button>
      `;
      container.appendChild(div);
    });

    // Додаємо подію на підтвердження змін
    document.querySelectorAll(".confirm").forEach(button => {
      button.addEventListener("click", (e) => {
        const key = e.target.getAttribute("data-key");
        const input = document.querySelector(`input[data-key="${key}"]`);
        const newValue = parseInt(input.value, 10) || 0;
        const updatedIngredients = getAllMyIngrid();

        updatedIngredients[key] = newValue;
        updateIngredients(updatedIngredients);

        // Якщо значення < 500, підсвічуємо червоним
        if (newValue < 500) {
			console.log("gelo");
          input.style.backgroundColor = "red";
          input.style.color = "white";
        } else {
          input.style.backgroundColor = "white";
          input.style.color = "black";
        }
      });
    });

    // Додаємо подію на видалення інгредієнта
    document.querySelectorAll(".remove").forEach(button => {
      button.addEventListener("click", (e) => {
        const key = e.target.getAttribute("data-key");
        const updatedIngredients = getAllMyIngrid();
        delete updatedIngredients[key];
        updateIngredients(updatedIngredients);
      });
    });
  }

/////////////////////////////////////////////////////////////////////
// Отримуємо елементи для модельного вікна
const modal = document.getElementById("modal");
const btnShowCount = document.getElementById("btnShowCount");
const spanClose = document.querySelector(".close");
const addItemBtn = document.querySelector(".addItem");
const addBlock = document.querySelector(".addIngredient");
const addNewIngredientBtn = document.getElementById("addNewIngredient");
const newIngredientInput = document.getElementById("newIngredient");
const newAmountInput = document.getElementById("newAmount");
const ShowTable = document.querySelector(".ShowTable");


// Функція для показу модального вікна
btnShowCount.addEventListener("click", () => {
  modal.style.display = "block"; // Відкриваємо модальне вікно
  renderTable(); // Рендеримо таблицю інгредієнтів
});
// Функція для закриття модального вікна
spanClose.addEventListener("click", () => {
  modal.style.display = "none"; // Закриваємо модальне вікно
});
addItemBtn.addEventListener("click", () => {
  addBlock.classList.toggle("hide");
});

// Закрити модальне вікно при натисканні на будь-яке місце поза ним
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Закрити модальне вікно
  }
});

// Функція для рендеру таблиці інгредієнтів
function renderTable() {
  ShowTable.innerHTML = ""; // Очищаємо таблицю перед рендером

  const sortedIngredients = Object.entries(allIngredients2).sort((a, b) => a[1] - b[1]);

  let totalPrice = 0; // Загальна сума всіх інгредієнтів

  let tableHTML = `
    <table id="ingredientTable">
      <thead>
        <th>Інгредієнти</th>
        <th>Залишок</th>
        <th>Вартість</th>
        <th>Оновити</th>
        <th style="text-align: center; padding-left: 40%;">✔</th>
        <th></th>
      </thead>
  `;

  sortedIngredients.forEach(([key, value]) => {
    let rowClass = value < 500 ? 'low' : value < 1000 ? 'medium' : 'high';
    let formattedValue = value >= 1000 ? (value / 1000) + " кг" : value + " г";
    
    // Обчислення вартості
    let pricePer1000 = ingPrValue[key] || 0; 
    let totalCost = ((value / 1000) * pricePer1000).toFixed(2);
    totalPrice += parseFloat(totalCost); // Додаємо до загальної суми

    tableHTML += `
      <tr class="${rowClass}">
        <td>${key}</td>
        <td>${formattedValue}</td>
        <td>	
			
			<span class="addCost">
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14m-8-7h2m0 0h2m-2 0v2m0-2v-2m12 1h-6m6 4h-6M4 19h16c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Z"/>
</svg>

			</span> ${totalCost} грн</td>
        <td>
          <input type="number" data-key="${key}" value="0">
        </td>
        <td><button class="update" data-key="${key}">✔</button></td>
        <td><button class="remove" data-key="${key}">X</button></td>
      </tr>
    `;
  });

  // Додаємо підсумковий рядок із загальною сумою
  tableHTML += `
  <tfoot>
    <tr>
      <td colspan="2"><strong>Загальна сума:</strong></td>
      <td colspan="4"><strong>${totalPrice.toFixed(2)} грн</strong></td>
    </tr>
	</tfoot>
  `;

  tableHTML += `</table>`;
  ShowTable.innerHTML = tableHTML;
	const addCostbtn = document.querySelector(".addCost");
	const ingFormModal = document.querySelector(".ingForm");
	const closeForm = document.querySelector(".closeForm");
	// Відкриваємо форму і підставляємо одразу значення по Родителю 
	document.querySelectorAll(".addCost").forEach((addCostbtn) => {
	  addCostbtn.addEventListener("click", (event) => {
		ingFormModal.classList.remove("hide");
		document.querySelector(".addItem").classList.add("hide");
		// Отримуємо найближчий рядок <tr>, у якому знаходиться натиснута кнопка
		const row = event.target.closest("tr");

		// Отримуємо перший <td> у цьому рядку
		const firstTd = row ? row.querySelector("td:first-child") : null;

		// Отримуємо поле введення у формі
		const ingredientInput = document.querySelector("#ingredient");

		if (firstTd && ingredientInput) {
		  // Записуємо значення у поле введення
		  ingredientInput.value = firstTd.textContent.trim();
		}
	  });
	});
	closeForm.addEventListener("click", () => {
		ingFormModal.classList.add("hide");
		document.querySelector(".addItem").classList.remove("hide");
	});
	
	
  // Оновлення інгредієнтів
	document.querySelectorAll(".update").forEach(button => {
	button.addEventListener("click", (e) => {
	  const key = e.target.getAttribute("data-key");
	  const input = document.querySelector(`input[data-key="${key}"]`);
	  const changeValue = parseInt(input.value, 10) || 0;
	  
	  allIngredients2[key] = (allIngredients2[key] || 0) + changeValue;

	  updateAllMyIngrid(allIngredients2);
	  renderTable();
	});
	});

  document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const key = input.getAttribute("data-key");
        document.querySelector(`button.update[data-key="${key}"]`).click();
      }
    });
  });

  // Видалення інгредієнтів
  document.querySelectorAll(".remove").forEach(button => {
    button.addEventListener("click", (e) => {
      const key = e.target.getAttribute("data-key");
      if (confirm(`Ви дійсно хочете видалити інгредієнт ${key}?`)) {
        delete allIngredients2[key];
        updateAllMyIngrid(allIngredients2);
        renderTable();
      }
    });
  });
}

addNewIngredientBtn.addEventListener("click", () => {
  const newKey = newIngredientInput.value.trim();
  const newValue = parseInt(newAmountInput.value, 10) || 0;

  if (!isNaN(newKey)) {
    alert("Назва інгредієнта не може бути числом!");
    return;
  }

  if (newKey && newValue > 0) {
    const ingredients = getAllMyIngrid();
    ingredients[newKey] = newValue;
   
    updateAllMyIngrid(ingredients); // Оновлюємо в localStorage
    allIngredients2[newKey] = newValue; // Оновлюємо в allIngredients2 паралельно
    renderTable(); // Перерисовуємо таблицю одразу після оновлення
    
    newIngredientInput.value = ""; // Очищаємо поле вводу
    newAmountInput.value = ""; // Очищаємо поле вводу
    addBlock.classList.add("hide");
  }
});

function updateAllMyIngrid(updatedIngrid) {
  localStorage.setItem('AllMyIngrid', JSON.stringify(updatedIngrid));
  renderTable(); // Додаємо виклик renderTable після оновлення localStorage
}

/////// Додавання ціни за продукти в локал стор.
	// ingPrice 
	Object.entries(ingPrValue).forEach(([key,value]) => {
		// console.log(`Ключ: ${key} ${value}, Значення: ${localStorage.getItem(key)}`);
		if(localStorage.getItem(key) == null){
			// console.log('hello');
		}
	})
// Слухач події на відправку форми
if(document.getElementById("ingredientForm")){
document.getElementById("ingredientForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Запобігаємо перезавантаженню сторінки

  // Отримуємо введені дані
  const ingredientName = document.getElementById("ingredient").value.trim();
  const newQuantity = parseInt(document.getElementById("quantity").value);

  // Отримуємо об'єкт з prices з localStorage
  let ingPrValue = JSON.parse(localStorage.getItem("prices"));

  // Якщо prices не знайдено, ініціалізуємо дефолтними значеннями
  if (!ingPrValue) {
    localStorage.setItem("prices", JSON.stringify(ingredientPrices));
    ingPrValue = ingredientPrices; // Після ініціалізації отримуємо новий об'єкт
  }

  // Перевіряємо, чи є інгредієнт в об'єкті
  if (ingredientName in ingPrValue) {
    // Оновлюємо значення інгредієнта
    ingPrValue[ingredientName] = newQuantity;

    // Зберігаємо оновлений об'єкт в localStorage
    localStorage.setItem("prices", JSON.stringify(ingPrValue));

    // Показуємо повідомлення про успішне оновлення
    document.getElementById("message").textContent = `Значення для "${ingredientName}" успішно оновлено на ${newQuantity}.`;

    // Оновлюємо таблицю після зміни ціни
    renderTable();
  } else {
    // Якщо інгредієнт не знайдений у списку
    document.getElementById("message").textContent = `Інгредієнт "${ingredientName}" не знайдений у списку.`;
  }
});
}
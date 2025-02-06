"use strict";
	// Меню закладу
	const foodItems = [
{
	itemId: 1,
	name: "Удон",
	image: "data:image/jpeg;base64,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",
	ingredients: [
		{ name: "Локшина 'Удон'", weightL: 160, weightM: 200},
		{ name: "Тофу", weightL: 40,weightM: 80},
		{ name: "Соєві стейки", weightL: 35, weightM: 70},
		{ name: "Морква", weightL: 15, weightM: 30},
		{ name: "кабачок", weightL: 20, weightM: 40}
	],

	ingerL: {
		"Локшина Удон": 170,
		"Тофу": 40,
		"Соєві стейки": 35,
		"Морква": 15,
		"кабачок": 20,
	},
	ingerM: {
		"Локшина Удон": 200,
		"Тофу": 80,
		"Соєві стейки": 70,
		"Морква": 30,
		"кабачок": 40,
	},
	cost: {
		little: 170,
		max: 200
	},
	weightText: ["г","грам","кг","кілограм"],
},
{
	itemId: 2,
	name: "Рисова",
	image: "https://images.unian.net/photos/2021_01/thumb_files/400_0_1610635790-1066.jpg?0.4863108724782408",
	ingredients: [
		{ name: "рисова локшина", weightL: 160, weightM: 200},
		{ name: "Тофу", weightL: 40, weightM: 80},
		{ name: "Соєві стейки", weightL: 35, weightM: 70},
		{ name: "Морква", weightL: 15, weightM: 30},
		{ name: "Кабачок", weightL: 20, weightM: 40},
		{ name: "Перець", weightL: 15, weightM: 30}
	],
	ingerL: {
		"Локшина Рисова": 170,
		"Тофу": 40,
		"Соєві стейки": 35,
		"Морква": 15,
		"кабачок": 20,
	},
	ingerM: {
		"Локшина Рисова": 200,
		"Тофу": 80,
		"Соєві стейки": 70,
		"Морква": 30,
		"кабачок": 40,
	},
	cost: {
		little: 170,
		max: 200
	},
	weightText: ["г","грам","кг","кілограм"],
},
{
	itemId: 3,
	name: " Fried Rice",
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRho6GXM-Mtm5C54QW9NfTdIYUQxefB848LHg&s",
	ingredients: [
		{ name: "рис", weightL: 160, weightM: 200},
		{ name: "Тофу", weightL: 40, weightM: 80},
		{ name: "Соєві стейки", weightL: 35, weightM: 70},
		{ name: "Морква", weightL: 15, weightM: 30},
		{ name: "Кабачок", weightL: 20, weightM: 40},
		{ name: "Ананас", weightL: 20, weightM: 40},
	],
	ingerL: {
		"Рис Басматі": 170,
		"Тофу": 40,
		"Соєві стейки": 35,
		"Морква": 15,
		"кабачок": 20,
	},
	ingerM: {
		"Рис Басматі": 200,
		"Тофу": 80,
		"Соєві стейки": 70,
		"Морква": 30,
		"кабачок": 40,
	},
	cost: {
		little: 170,
		max: 200
	},
	weightText: ["г","грам","кг","кілограм"],
},
{
	itemId: 4,
	name: "Khao Pad",
	image: "data:image/jpeg;base64,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",
	ingredients: [
		{ name: "рис", weightL: 160, weightM: 200},
		{ name: "Тофу", weightL: 40, weightM: 80},
		{ name: "Соєві стейки", weightL: 35, weightM: 70},
		{ name: "Морква", weightL: 15, weightM: 30},
		{ name: "Кабачок", weightL: 20, weightM: 40},
	],
	ingerL: {
		"Рис Басматі": 170,
		"Тофу": 40,
		"Соєві стейки": 35,
		"Морква": 15,
		"кабачок": 20,
	},
	ingerM: {
		"Рис Басматі": 200,
		"Тофу": 80,
		"Соєві стейки": 70,
		"Морква": 30,
		"кабачок": 40,
	},
	cost: {
		little: 170,
		max: 200
	},
	weightText: ["г","грам","кг","кілограм"],
},
];


	const itemFood = document.querySelector(".items");
	const searchFood = document.querySelector(".SearchItem");
	const head = document.querySelector("header");
	const orderBlock = document.querySelector(".foodOrder p");
	const inSave = document.querySelector('#inputSave');

	//Загружаємо наше меню
	blockFood(foodItems);
	// Форма блоку з їжею
	function blockFood(setFood){
		setFood.forEach((item, index) => {
		const ingredients = Object.entries(item.ingerL).map(([key, value]) => `${key}: ${value}`).join(", ");
		itemFood.insertAdjacentHTML("beforeend", 
		`
		<div class="item">
	
				<h1> ${item.name}</h1>
				<img src="${item.image}" alt="">

				
				<div class="costItem">
				<button class="btn1" data-name="Item1${item.itemId}"> ${item.cost.little}</button>
				<button class="btn2" data-name="Item2${item.itemId}"> ${item.cost.max}</button>
				</div>
		
		</div>
		`

		);
		});
	
	}
	
	// Div з нашими кнопками
	const costItemBlock = document.querySelector(".costItem");

	// Пошук елементів 
	searchFood.addEventListener("input", (letter) => {
		const searchLetters = letter.target.value.trim();
		const filteredFood = foodItems.filter( (food) => food.name.toLowerCase().trim().startsWith(searchLetters.toLowerCase()));
		itemFood.innerHTML = "";
		// head.style.display = "none";
		
		blockFood(filteredFood);
		firstBtn(filteredFood);
		SecondBtn(filteredFood);
		
		document.addEventListener("keydown", (event) => {
			// console.log(event.key === "Escape");
			if(event.key === "Escape"){
				searchFood.value = "";
				itemFood.innerHTML = "";
				blockFood(foodItems);
				firstBtn(foodItems);
				SecondBtn(foodItems);
			}
		});
		
	});
	
	
	const cleareBtn = document.querySelector(".clearLocal");
	// let localArr = JSON.parse(localStorage.getItem('localArr')) || [];
	// Функція додавання до замовлення
	const totalIngredients = {}; // Об'єкт для збереження загальної кількості інгредієнтів
		
	
let orders = {}; // Поточне замовлення
let orderArray = JSON.parse(localStorage.getItem("OrderArray")) || []; // Завантажуємо OrderArray з localStorage або ініціалізуємо порожній масив

// Збереження поточного замовлення
document.getElementById("saveBtn").addEventListener("click", () => {
    if (Object.keys(orders).length === 0) {
        alert("Ви ще нічого не вибрали!");
        return;
    }
	document.getElementById("saveArr").classList.toggle("hidden");
	document.getElementById("saveBtn").classList.toggle("hidden");
	
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

    // console.log("Оновлений totalIngredients:", totalIngredients);

    // Оновлюємо таблицю
    renderOrdersTable();
}

// Функція для оновлення загальних інгредієнтів
// function updateTotalIngredients(ingredients, factor) {
    // Object.entries(ingredients).forEach(([ingredient, amount]) => {
        // totalIngredients[ingredient] = (totalIngredients[ingredient] || 0) + amount * factor;

        // Якщо значення стало 0 або менше - видаляємо ключ
        // if (totalIngredients[ingredient] <= 0) {
            // delete totalIngredients[ingredient];
        // }
    // });
// }

// Функція додавання додаткових інгредієнтів
function addExtra(orderName, extraName, extraAmount, extraCost) {
    if (!orders[orderName].extras[extraName]) {
        orders[orderName].extras[extraName] = { amount: 0, cost: 0 };
    }

    orders[orderName].extras[extraName].amount += extraAmount;
    orders[orderName].extras[extraName].cost += extraCost;
    orders[orderName].cost += extraCost;

    renderOrdersTable(); // Оновлюємо таблицю
}

// Функція видалення додатків
function removeExtra(orderName, extraName) {
    if (orders[orderName].extras[extraName]) {
        orders[orderName].cost -= orders[orderName].extras[extraName].cost; // Віднімаємо вартість
        delete orders[orderName].extras[extraName];
    }

    renderOrdersTable(); // Оновлюємо таблицю
}

// Функція видалення замовлення
// function removeOrder(orderName) {
    // delete orders[orderName];
    // renderOrdersTable(); // Оновлюємо таблицю
// }

let hiddenOrders = JSON.parse(localStorage.getItem("hiddenOrders")) || []; // Завантажуємо масив прихованих замовлень з localStorage

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

    // Оновлення масиву замовлень
    // orderArray.push(orderWithTime);
  
    try {
        // localStorage.setItem("OrderArray", JSON.stringify(orderArray)); // Зберігаємо у localStorage
        // 🔹 Якщо localStorage оновився без помилок, віднімаємо інгредієнти
		subtractIngredients(totalIngredients);
    } catch (error) {
        console.error("Помилка при збереженні в localStorage:", error);
    }

    // Показати приховані кнопки
    document.querySelectorAll(".btn1, .btn2").forEach(btn => btn.classList.remove("hide"));

    // Очищення поточних замовлень
    orders = {};
    Object.keys(totalIngredients).forEach(key => delete totalIngredients[key]);

    // Перечитати orderArray з localStorage перед оновленням таблиці
    orderArray = JSON.parse(localStorage.getItem("OrderArray")) || [];

    // Оновити таблицю
    renderOrdersTable();
    displayOrdersSummary();

    // Оновити підсумок замовлень
    groupOrders();  

    // Сховати кнопки збереження
    document.getElementById("saveArr").classList.toggle("hidden");
    document.getElementById("saveBtn").classList.toggle("hidden");

    // Оновлюємо масив прихованих замовлень в localStorage
    localStorage.setItem("hiddenOrders", JSON.stringify(hiddenOrders));
});




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
                <th class="col-name"> Кількість</th>
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
                    <td class="col-name">
                        ${fullName} 
                    </td>
					<td>
						<button class="quantity-minus" data-name="${order.dataName}">-</button> 
                        x<span id="count-${fullName}">${order.count}</span> 
                        <button class="quantity-plus" data-name="${order.dataName}">+</button>
					</td>
                    <td class="col-price">
                        <span id="cost-${order.dataName}">${order.cost}</span> грн
                    </td>
                    <td class="col-additions">
                        <button class="add-extra" data-name="${order.dataName}">Додати</button>
                        <ul>
                            ${Object.entries(order.extras)
                                .map(
                                    ([extraName, extra]) => `
                                    <li>${extraName}: ${extra.amount}г (+${extra.cost} грн)
                                        <button class="remove-extra" data-name="${fullName}" data-extra="${extraName}">❌</button>
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
            });

            console.log("Оновлений totalIngredients:", totalIngredients);
            renderOrdersTable(); // Оновлюємо таблицю
        }
    });
});
  // Додавання слухачів подій для кнопок quantity-minus
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

                    console.log(`➖ Віднято 1 порцію ${orderKey}, залишилося: ${order.count}`);
                }
            });

            console.log("Оновлений totalIngredients:", totalIngredients);

            // Видаляємо замовлення, якщо count = 0
            for (const [orderKey, order] of matchingOrders) {
                if (order.count === 0) {
                    delete orders[orderKey];
                    console.log(`❌ Видалено ${orderKey} з orders`);
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
}

// Виклик функцій
firstBtn(foodItems);
secondBtn(foodItems);


// Функція для кнопок першого типу
function firstBtn(arr) {
    document.querySelectorAll(".btn1").forEach((button, index) => {
        button.addEventListener("click", () => {
            const { name, cost, ingerL } = arr[index];
            const dataName = button.getAttribute("data-name");
			console.log(dataName);
            if (!name || !cost || !ingerL || !dataName) {
                console.error("Невірні дані для кнопки першого типу");
                return;
            }
            // Додаємо новий елемент або збільшуємо кількість
            addOrder(name, "L", cost.little, ingerL, dataName);
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
            const { name, cost, ingerM } = arr[index];
            const dataName = button.getAttribute("data-name");

            if (!name || !cost || !ingerM || !dataName) {
                console.error("Невірні дані для кнопки другого типу");
                return;
            }

            // Додаємо новий елемент або збільшуємо кількість
            addOrder(name, "M", cost.max, ingerM, dataName);
            renderOrdersTable(); // Оновлюємо таблицю після всіх змін
			
			// Додаємо клас hide на кнопку, щоб приховати її
            button.classList.add("hide");
        });
    });
}



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
            <th class="col-name">Кількість</th>
            <th class="col-price">Загальна вартість</th>
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

        // Створюємо рядок таблиці
        const orderTr = document.createElement("tr");
        orderTr.classList.add("header-row");
        orderTr.innerHTML = `
            <td class="col-number">№${index + 1}</td>
            <td class="col-name">${orderString}</td>
            <td class="col-name"><p>${ingredientsString}</p></td>
            <td class="col-price">${totalCost}</td>
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


}

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

            return `<span class="${className}">${name} x${count}</span>`;
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
//Розібратись чому коли коментую цей блок hide елемент не пряче
    localStorage.setItem("hiddenOrders", JSON.stringify(hiddenOrders));
}
    // document.addEventListener("click", (event) => {
        // if (event.target.classList.contains("done")) {
            // const orderId = event.target.getAttribute("data-id"); 
            // const row = event.target.closest("tr"); // Отримуємо батьківський рядок
            // if (row) {
                // row.classList.add("hide"); // Додаємо клас hide для приховування
                // if (!hiddenOrders.includes(parseInt(orderId))) {
                    // hiddenOrders.push(parseInt(orderId)); // Додаємо ID до масиву, якщо його ще немає
					
                // }
                // localStorage.setItem("hiddenOrders", JSON.stringify(hiddenOrders)); // Оновлюємо localStorage
            // }
        // }
    // });
// Приховуємо замовлення при кліку на кнопку "done"
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("done")) {
        const orderId = event.target.getAttribute("data-id"); // Отримуємо ID замовлення
        const row = event.target.closest("tr"); // Знаходимо батьківський <tr>

        if (row) {
            row.classList.add("hide"); // Додаємо клас приховування
            // let hiddenOrders = getHiddenOrders();
            if (!hiddenOrders.includes(parseInt(orderId))) {
                hiddenOrders.push(parseInt(orderId)); // Додаємо ID в список прихованих
                // saveHiddenOrders(hiddenOrders); // Оновлюємо localStorage
            }
			localStorage.setItem("hiddenOrders", JSON.stringify(hiddenOrders)); // Оновлюємо localStorage
            groupOrders(); // Оновлюємо підсумкову таблицю
        }
    }
});

// Перевіряємо приховані замовлення при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    let hiddenOrders = getHiddenOrders();
    hiddenOrders.forEach(orderId => {
        const row = document.querySelector(`.done[data-id="${orderId}"]`)?.closest("tr");
        if (row) {
            row.classList.add("hide"); // Приховуємо елемент
        }
    });
    groupOrders(); // Оновлюємо підсумкову таблицю
});



// Викликаємо функцію для виведення інформації
displayOrdersSummary();
document.addEventListener("DOMContentLoaded", () => {
    groupOrders();
});



	// Видалити все		
	if(cleareBtn != null){
	cleareBtn.addEventListener("click", () => {
		localStorage.removeItem('OrderArray');
		localStorage.removeItem('hiddenOrders');
		location.reload()
	});	
	}

	
// document.getElementById('AddSubtractButton').addEventListener('click', function() {
    // document.querySelector('.addingIngBlock').classList.add('showModal');
// });

// document.getElementById('btnShowCount').addEventListener('click', function() {
    // document.querySelector('.addingIngBlock').classList.add('showModal');
// });
	
	// document.querySelector('.addingIngBlock').addEventListener('click', function(e) {
  // if (e.target === this) {
    // this.classList.remove('showModal');
  // }
// });
	
	
	
	//Таблиця додавання Ігрідієнтів orderPanel
	// function renderTablesFromArray(array) {
	// const container = document.getElementById('tableContainer');
	// container.innerHTML = ""; // Очищуємо контейнер перед рендерингом нових таблиц
	
	// array.forEach((innerArray, index) => {
		// console.log(innerArray);
		// const table = document.createElement('table');
		// table.classList.add("table");
		// const btn = document.createElement('button');
		// btn.classList.add("btnTdDel");
		// btn.textContent = "Х";
		// table.setAttribute("data-index", index);

		// innerArray.forEach(arr => {
			// const tr = document.createElement('tr');
			// const td = document.createElement('td');
			// td.textContent = arr;
			// tr.appendChild(td);
			// table.appendChild(tr);
		// });
		
		// const caption = document.createElement('caption');
		// caption.textContent = `№ ${index + 1}`;
		// table.appendChild(btn);
		// table.prepend(caption);
		// container.appendChild(table);

	// });


	// }

	
	//Підключаємо кнопку orderPanel
	// const delItemBtn = document.querySelectorAll(".btnTdDel");
	// delItemBtn.forEach((val, index) => {
		// val.setAttribute("data-index", index);
		// val.addEventListener("click", (event) => {
		// const indexToHide = event.target.getAttribute("data-index"); // Отримуємо індекс
		// console.log(indexToHide);
		// deleteItemFromLocalStorage(indexToHide); // Викликаємо функцію для приховування
		// });
	// });	
	// orderPanel
	// function deleteItemFromLocalStorage(index) {
  // Отримуємо масив із localStorage
	// const storedArr = JSON.parse(localStorage.getItem("localArr"));

  // Видаляємо елемент за індексом
	// storedArr.splice(index, 1);
	// hideElement(index);
  // Оновлюємо localStorage
	// localStorage.setItem("localArr", JSON.stringify(storedArr));
// }
	// function hideElement(index) {
	  // const elementToHide = document.querySelector(`[data-index="${index}"]`);
	  // if (elementToHide) {
		// elementToHide.style.display = "none"; // Приховуємо елемент
	  // }
// }


//-*/*-* Додавання Ігрідієнтів

const getAllMyIngrid = () => {
  return JSON.parse(localStorage.getItem('AllMyIngrid')) || {};
};
const allIngredients2 = getAllMyIngrid();
	
// Функція віднімання інгредієнтів
function subtractIngredients(cardItems) {
    if (typeof cardItems !== "object" || cardItems === null) {
        console.error("Параметр має бути об'єктом");
        return;
    }

    const sortedEntries = Object.entries(allIngredients2).sort((a, b) => a[1] - b[1]);
    Object.assign(allIngredients2, Object.fromEntries(sortedEntries));
    console.log("✅ Відсортовані allIngredients2:", allIngredients2);
    console.log("cardItems:", cardItems);
    for (const key in cardItems) {
        if (cardItems.hasOwnProperty(key)) {
            if (allIngredients2[key] === undefined) {
                console.error(`❌ Інгредієнт ${key} відсутній у allIngredients2`);
                alert(`❌ Інгредієнт ${key} відсутній. Віднімання неможливе.`);
                return;
            }
            if (allIngredients2[key] < cardItems[key]) {
                console.error(`❌ Недостатньо ${key}: потрібно ${cardItems[key]}, а є тільки ${allIngredients2[key]}`);
                alert(`❌ Недостатньо інгредієнта ${key}. Віднімання не виконано.`);
                return;
            }
        }
    }

    for (const key in cardItems) {
        if (cardItems.hasOwnProperty(key)) {
            // console.log(`➖Віднімаємо ${cardItems[key]} від ${key} (${allIngredients2[key]})`);
            allIngredients2[key] -= cardItems[key];
        }
    }

    console.log("✅ Оновлені allIngredients2:", allIngredients2);
    localStorage.setItem('allIngredients', JSON.stringify(allIngredients2));
    updateAllMyIngrid(allIngredients2);
    return allIngredients2;
}




const addItemsBtn = document.getElementById("AddSubtractButton");
const addItemsDiv = document.querySelector(".addItemsDiv");

// addItemsBtn.addEventListener("click", () => {
	// addItemsDiv.classList.toggle("hide");
// });


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



	// document.getElementById("btnShowCount").addEventListener("click", () => {
	// renderTable();
	// });

/////////////////////////////////////////////////////////////////////

// Отримуємо елементи
const modal = document.getElementById("modal");
const btnShowCount = document.getElementById("btnShowCount");
const spanClose = document.querySelector(".close");
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

// Закрити модальне вікно при натисканні на будь-яке місце поза ним
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Закрити модальне вікно
  }
});

// Функція для рендеру таблиці інгредієнтів
function renderTable() {
  ShowTable.innerHTML = ""; // Очищаємо таблицю перед рендером

  // Сортуємо інгредієнти від меншого до більшого
  const sortedIngredients = Object.entries(allIngredients2).sort((a, b) => a[1] - b[1]);

  let tableHTML = `
    <table id="ingredientTable">
      <tr>
        <th>Інгредієнт</th>
        <th>Залишок</th>
        <th>Оновити</th>
        <th>Видалити</th>
      </tr>
  `;

  sortedIngredients.forEach(([key, value]) => {
    let rowClass = '';
    if (value < 500) {
      rowClass = 'low';
    } else if (value < 1000) {
      rowClass = 'medium';
    } else {
      rowClass = 'high';
    }

    tableHTML += `
      <tr class="${rowClass}">
        <td>${key}</td>
        <td>${value >= 1000 ? (value / 1000) + " кг" : value + " г"}</td>
        <td>
          <input type="number" data-key="${key}" value="0">
          <button class="update" data-key="${key}"> ✔ </button>
        </td>
        <td><button class="remove" data-key="${key}"> X </button></td>
      </tr>
    `;
  });

  tableHTML += `</table>`;
  ShowTable.innerHTML = tableHTML;

  // Додаємо події для кнопок оновлення інгредієнтів
document.querySelectorAll(".update").forEach(button => {
  button.addEventListener("click", (e) => {
    const key = e.target.getAttribute("data-key");
    const input = document.querySelector(`input[data-key="${key}"]`);
    const changeValue = parseInt(input.value, 10) || 0;
    
    // Додаємо або віднімаємо значення
    allIngredients2[key] = (allIngredients2[key] || 0) + changeValue;

    updateAllMyIngrid(allIngredients2); // Оновлюємо в localStorage
    renderTable(); // Перерисовуємо таблицю
  });
});

document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const key = input.getAttribute("data-key");
      const button = document.querySelector(`button.update[data-key="${key}"]`);
      button.click();
    }
  });
});

  // Додаємо події для кнопок видалення інгредієнтів
  document.querySelectorAll(".remove").forEach(button => {
    button.addEventListener("click", (e) => {
      const key = e.target.getAttribute("data-key");
      
      // Підтвердження видалення
      const confirmDelete = confirm(`Ви дійсно хочете видалити інгредієнт ${key}?`);

      if (confirmDelete) {
        delete allIngredients2[key]; // Видаляємо інгредієнт
        updateAllMyIngrid(allIngredients2); // Оновлюємо в localStorage
        renderTable(); // Перерисовуємо таблицю
      }
    });
  });
}



// Додаємо новий інгредієнт
addNewIngredientBtn.addEventListener("click", () => {
  const newKey = newIngredientInput.value.trim();
  const newValue = parseInt(newAmountInput.value, 10) || 0;

  if (newKey && newValue > 0) {
    const ingredients = getAllMyIngrid();
    ingredients[newKey] = newValue;
    updateAllMyIngrid(ingredients); // Оновлюємо в localStorage
    renderTable(); // Перерисовуємо таблицю
    newIngredientInput.value = ""; // Очищаємо поле вводу
    newAmountInput.value = ""; // Очищаємо поле вводу
  }
});



function updateAllMyIngrid(updatedIngrid) {
  localStorage.setItem('AllMyIngrid', JSON.stringify(updatedIngrid));
}

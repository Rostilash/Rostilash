	//Якщо немає ніяких значення при загрузці сторінці видає дефолтні обєкти
		
	let ingPrValue = JSON.parse(localStorage.getItem("prices"));
	// Перевірка, чи є значення в prices, якщо вони не 0
	const shouldUpdatePrices = ingPrValue && Object.values(ingPrValue).some(value => value !== 0);

	// Якщо ціни не знайдені в localStorage або всі значення дорівнюють 0
	if (!shouldUpdatePrices) {
	  // Якщо ціни не збережено в localStorage, або всі значення дорівнюють 0, ініціалізуємо їх дефолтними значеннями
	  localStorage.setItem('prices', JSON.stringify(ingredientPrices));
	}
		
	let allIngVal = JSON.parse(localStorage.getItem("AllMyIngrid"));
	const shouldUpdateIgridients = allIngVal && Object.values(allIngVal).some(value => value !== 0);
	if (!shouldUpdateIgridients) {
		setTimeout(() => {
		location.reload();
		}, 100); // Оновиться через 5 секунд
	  localStorage.setItem('AllMyIngrid', JSON.stringify(ingredientWeight));
	}
		

	// Функція для отримання всіх інгредієнтів з localStorage або дефолтних значень
	const getAllMyIngrid = () => {
	  const storedIngredients = localStorage.getItem('AllMyIngrid');
	  return storedIngredients ? JSON.parse(storedIngredients) : ingredientPrices;
	};

	const allIngredients2 = getAllMyIngrid();
	
	// Функція віднімання інгредієнтів
	function subtractIngredients(cardItems) {
    if (typeof cardItems !== "object" || cardItems === null) {
        console.error("Параметр має бути об'єктом");
        throw new Error("Параметр має бути об'єктом");
    }

    const sortedEntries = Object.entries(allIngredients2).sort((a, b) => a[1] - b[1]);
    Object.assign(allIngredients2, Object.fromEntries(sortedEntries));

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

    // console.log("Оновлені allIngredients2:", allIngredients2);
    localStorage.setItem('AllMyIngrid', JSON.stringify(allIngredients2));
    updateAllMyIngrid(allIngredients2);

    return true; // Означає, що операція успішна
}


	function updateIngredients(newData) {
    localStorage.setItem("AllMyIngrid", JSON.stringify(newData));
    renderIngredients(); // Оновлюємо відображення
  }
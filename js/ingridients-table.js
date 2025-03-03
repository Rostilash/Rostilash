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

// Форма додавання вартості для інгрідієнта
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


function updateAllMyIngrid(updatedIngrid) {
  localStorage.setItem('AllMyIngrid', JSON.stringify(updatedIngrid));
  renderTable(); // Додаємо виклик renderTable після оновлення localStorage
}

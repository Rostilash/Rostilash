"use strict";

	// function renderIngredients() {
    // const container = document.getElementById("ingredientsContainer");
    // container.innerHTML = ""; // 

    // const ingredients = getAllMyIngrid();

    // Object.entries(ingredients).forEach(([key, value]) => {
      // const div = document.createElement("div");
      // div.classList.add("ingredient-item");
      // div.innerHTML = `
        // <span>${key}: </span>
        // <input type="number" value="${value}" data-key="${key}" class="ingredient-input">
        // <button class="confirm" data-key="${key}">✔️</button>
        // <button class="remove" data-key="${key}">❌</button>
      // `;
      // container.appendChild(div);
    // });

    // document.querySelectorAll(".confirm").forEach(button => {
      // button.addEventListener("click", (e) => {
        // const key = e.target.getAttribute("data-key");
        // const input = document.querySelector(`input[data-key="${key}"]`);
        // const newValue = parseInt(input.value, 10) || 0;
        // const updatedIngredients = getAllMyIngrid();

        // updatedIngredients[key] = newValue;
        // updateIngredients(updatedIngredients);

        // if (newValue < 500) {
			// console.log("gelo");
          // input.style.backgroundColor = "red";
          // input.style.color = "white";
        // } else {
          // input.style.backgroundColor = "white";
          // input.style.color = "black";
        // }
      // });
    // });


    // document.querySelectorAll(".remove").forEach(button => {
      // button.addEventListener("click", (e) => {
        // const key = e.target.getAttribute("data-key");
        // const updatedIngredients = getAllMyIngrid();
        // delete updatedIngredients[key];
        // updateIngredients(updatedIngredients);
      // });
    // });
  // }



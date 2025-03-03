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

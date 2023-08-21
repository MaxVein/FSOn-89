"use strict";

// *********Подія сlick********* \\
// Натискаючи на кнопку "Click me" змусь червоний квадратик зміщуватись на 50px по діагоналі
// const btn = document.querySelector(".js-click");
// const square = document.querySelector(".js-box");

// let step = 0;
// const handleSquareStyling = (event) => {
//   console.log(event);
//   step += 50;
//   square.style.marginLeft = `${step}px`;
//   square.style.marginTop = `${step}px`;
// };

// btn.addEventListener("click", handleSquareStyling);
// square.addEventListener(
//   "click",
//   () => (square.style.backgroundColor = "green")
// );

// *********Подія input********* \\
// Виводь в консоль все що користувач вводить в input
// const inputEl = document.querySelector(".js-user-name");

// const logHandler = (event) => {
// //   console.log("Подія", event);
//   console.log("Значення поля", event.currentTarget.value);
// };

// inputEl.addEventListener("input", logHandler);

// *********Подія blur********* \\
// Користувач вводить в input своє ім'я після втрати фокусу отримує alert з вітальним повідомленням
// const inputEl = document.querySelector(".js-user-name");

// const greetingHandler = (event) => {
//   const name = event.currentTarget.value;
//   const msg = `${name}, вітаю тебе!`;
//   alert(msg);
// };

// inputEl.addEventListener("blur", greetingHandler);

// *********Подія submit********* \\
// Опрацюй форму та збери фідбек користувача в об'єкт
// const formEl = document.querySelector(".js-form");

// const submitHandler = (event) => {
//   event.preventDefault();
//   //   console.log(event);
//   const { email, password, comment } = event.currentTarget.elements;

//   const info = {
//     email: email.value,
//     password: password.value,
//     comment: comment.value,
//   };

//   console.log(info);
// };

// formEl.addEventListener("submit", submitHandler);

// *********Подія keydown / keyup / keypress********* \\
// *********Обробка комбінацій клавіш********* \\

// const handleKeyboardEvent = (event) => {
//   console.log(event.type);

//   if (event.code === "Escape") {
//     console.log("Why are you running?");
//   } else if (event.code === "Space") {
//     console.log("Why are you jumping");
//   } else if (event.ctrlKey && event.code === "KeyC") {
//     console.log("You better not copy anything!");
//   }
// };

// document.addEventListener("keydown", handleKeyboardEvent);
// document.addEventListener("keyup", handleKeyboardEvent);
// document.addEventListener("keypress", handleKeyboardEvent);

// ***************Практика************** \\
// Реалізуй пошук автомобілів по сайту
// Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
// Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
// Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку

// const cars = [
//   {
//     id: 1,
//     car: "Audi",
//     type: "A6",
//     price: 30000,
//     img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
//   },
//   {
//     id: 2,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 4,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 5,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 6,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const { formEl, listEl } = {
//   formEl: document.querySelector(".js-form"),
//   listEl: document.querySelector(".js-list"),
// };

// const renderList = (arr) => {
//   const markup = arr
//     .map(
//       ({ id, car, type, price, img }) => `<li class="car-card" data-id="${id}">
//     <img class="car-image" src="${img}" alt="${car + type}"/>
//     <h2 class="car-title">${car}</h2>
//     <h3 class="car-type">${type}</h3>
//     <span class="car-price">${price} $</span>
//     </li>`
//     )
//     .join("");

//   listEl.style.display = "flex";
//   listEl.innerHTML = markup;
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Посилання на форму", event.currentTarget);
//   console.log("Посилання на елементи форми", event.currentTarget.elements);

//   const {
//     query: { value: queryValue },
//     options: { value: selectValue },
//   } = event.currentTarget.elements;

//   const filteredList = queryValue
//     ? cars.filter(
//         (car) => car[selectValue]?.toLowerCase() === queryValue.toLowerCase()
//       )
//     : cars;

//   renderList(filteredList);
// };

// formEl.addEventListener("submit", handleSubmit);
// renderList(cars);

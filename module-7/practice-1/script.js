// ******* Додавання прослуховувача подій на кожен елемент ******* \\
// Отримай колір квадратика по якому було здійснено клік

// const handleClick = (event) => console.log(event.target.dataset.color);

//Var 1 BAD
// const red = document.querySelector(".red");
// const black = document.querySelector(".black");
// const green = document.querySelector(".green");

// red.addEventListener("click", handleClick);
// black.addEventListener("click", handleClick);
// green.addEventListener("click", handleClick);

//Var 2 BAD
// const boxes = document.querySelectorAll(".box");
// Array.from(boxes).forEach((item) =>
//   item.addEventListener("click", handleClick)
// );

// ************** Делегування подій ************** \\
// Отримай колір квадратика по якому було здійснено клік

//Var 3 GOOD
// const container = document.querySelector(".container");
// container.addEventListener("click", handleClick);

// **************** stopPropagation **************** \\

// const red = document.querySelector(".js-box-red");
// const green = document.querySelector(".js-box-green");
// const black = document.querySelector(".js-box-black");

// red.addEventListener('click', handlerClick);
// green.addEventListener('click', handlerClick);
// black.addEventListener('click', handlerClick)

// function handlerClick(evt) {
//   const isConfirm = confirm(`click на елементі ${evt.currentTarget.id} ,викликати метод stopPropagation?`)

//   if (isConfirm) {
//     evt.stopPropagation();
//   }
// }

// **************** stopImmediatePropagation **************** \\
// const red = document.querySelector(".js-box-red");

// red.addEventListener("click", firstHandlerClick);
// red.addEventListener("click", secondHandlerClick);
// red.addEventListener("click", thirdHandlerClick);

// function firstHandlerClick(e) {
//   alert("First handler");

//   const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//   if (isConfirm) {
//     e.stopImmediatePropagation();
//   }
// }

// function secondHandlerClick(e) {
//   alert("Second handler");

//   const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//   if (isConfirm) {
//     e.stopImmediatePropagation();
//   }
// }

// function thirdHandlerClick(e) {
//   alert("Third handler");

//   const isConfirm = confirm("Викликати метод stopImmediatePropagation?");

//   if (isConfirm) {
//     e.stopImmediatePropagation();
//   }
// }

// **************** Практика **************** \\
// Створи картки з товарами на основі масиву products, приклад картки https://prnt.sc/KmgDlzqOIA3M
// Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно з детальною інформацією про продукт, приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)

// const products = [
//   {
//     id: 1,
//     img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
//     name: "Монітор",
//     price: 3000,
//     description: "23-дюймовий монітор з Full HD роздільною здатністю.",
//   },
//   {
//     id: 2,
//     img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
//     name: "Ноутбук",
//     price: 20000,
//     description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
//   },
//   {
//     id: 3,
//     img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
//     name: "Смартфон",
//     price: 8000,
//     description: "Оснащений потрійною камерою та багатоядерним процесором.",
//   },
//   {
//     id: 4,
//     img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
//     name: "Планшет",
//     price: 12000,
//     description:
//       "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
//   },
// ];

// const listEl = document.querySelector(".js-products");

// const renderList = (arr, container) => {
//   const markup = arr
//     .map(
//       (item) => `<li data-id="${item.id}" class="item js-product-item">
//   <img src="${item.img}" width="300" />
//   <h2>${item.name}</h2>
//   <p>${item.price}₴</p>
//   </li>`
//     )
//     .join("");

//   container.insertAdjacentHTML("beforeend", markup);
// };

// const handleListClick = (event) => {
//   if (event.currentTarget === event.target) {
//     return;
//   }
//   const currentListItem = event.target.closest(".js-product-item");
//   const currentListItemId = Number(currentListItem.dataset.id);
//   const product = products.find((item) => item.id === currentListItemId);

//   const modalInstance = basicLightbox.create(`<div class="modal">
//     <img src="${product.img}" />
//     <h2>${product.name}</h2>
//     <h3>${product.price}грн</h3>
//     <p>${product.description}</p>
//   </div>`);

//   modalInstance.show();
// };

// renderList(products, listEl);
// listEl.addEventListener("click", handleListClick);

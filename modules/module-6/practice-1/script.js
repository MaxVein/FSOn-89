"use strict";

// ******Пошук HTML елементу за допомогою querySelector****** \\

// За назвою тегу
// const h1Tag = document.querySelector("h1"); //перевага надається querySelector
// console.log(h1Tag);
// console.dir(h1Tag);
// const h1TagM = document.getElementsByTagName("h1");
// console.log(h1TagM);

// За назвою класу
// const h1Class = document.querySelector(".js-title"); //перевага надається querySelector
// console.log(h1Class);
// const h1ClassM = document.getElementsByClassName("js-title");
// console.log(h1ClassM);

// За ID
// const h1Id = document.querySelector("#title");
// console.log(h1Id);
// const h1IdM = document.getElementById("title"); //перевага надається getElementId
// console.log(h1IdM);

// ******Пошук HTML елементів за допомогою querySelectorAll****** \\

// const ulItems = document.querySelectorAll(".js-item");
// console.log(ulItems);

// // Перетворення колекції до масиву
// const ulItemsArr = Array.from(ulItems);
// console.log(ulItemsArr);

// ******Створення HTML елементів за допомогою createElement****** \\
// const ulList = document.createElement("ul");
// const liEl = document.createElement("li");
// const h2El = document.createElement("h2");
// h2El.textContent = "I ❤ JS";

// liEl.appendChild(h2El);
// ulList.appendChild(liEl);

// const h1Class = document.querySelector(".js-title");
// h1Class.insertAdjacentElement("afterend", ulList);

// const exList = document.getElementById("example-list");
// document.body.appendChild(ulList);
// exList.insertAdjacentElement('beforeend',ulList);

// ******Створення HTML елементів за допомогою шаблонної розмітки****** \\
// Метод insertAdjacentHTML
// const h1Class = document.querySelector(".js-title");
// h1Class.insertAdjacentHTML(
//   "afterend",
//   '<ul class="js-list"><li><h2>I ❤ JS</h2></li></ul>'
// );

// Властивість innerHTML
// h1Class.innerHTML = "<ul class='js-list'><li><h2>I ❤ JS</h2></li></ul>";

// ******Стилізація за допомогою властивості style****** \\
// const h1Class = document.querySelector(".js-title");
// h1Class.style.color = "red";
// h1Class.style.backgroundColor = "black";

// ******Стилізація за допомогою властивості classList****** \\
// const h1Class = document.querySelector(".js-title");

// Метод add
// h1Class.classList.add("active");
// Метод remove
// h1Class.classList.remove("active");
// Метод toggle
// h1Class.classList.toggle("active");

// ******Системні атрибути****** \\
// const h1Class = document.querySelector(".js-title");

// методи для роботи з атрибутами
// h1Class.id = "title1"
// console.log(h1Class.hasAttribute("id"))
// console.log(h1Class.getAttribute("id"))
// h1Class.setAttribute("id","title-new");
// console.log(h1Class.getAttribute("id"))
// h1Class.removeAttribute("id")
// console.log(h1Class.attributes)

// ******Data атрибути****** \\
// const h1Class = document.querySelector(
//   "h1[data-metainfo='Title of the website']"
// );
// h1Class.style.color = "red";
// console.log(h1Class.dataset.metainfo)

// ***************************Практика************************* \\

// Task 1
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

const cars = [
  {
    id: 1,
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 3,
    model: "BMW",
    type: "5 series",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 4,
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 5,
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
];

// *******Варіант-1******* \\
// function render(arr) {
//   const ul = document.querySelector(".list");
//   const cards = arr.map((item) => {
//     const liEl = document.createElement("li");
//     const imgEl = document.createElement("img");
//     const modelEl = document.createElement("h2");
//     const typeEl = document.createElement("h4");
//     const priceEl = document.createElement("h3");

//     liEl.setAttribute("data-id", item.id);
//     imgEl.src = item.img;
//     imgEl.width = 300;
//     imgEl.alt = item.model;

//     modelEl.textContent = "Model: "+ item.model;
//     typeEl.textContent = "Type: " + item.type;
//     priceEl.textContent = "Price: " + item.price;

//     liEl.append(imgEl, modelEl, typeEl, priceEl);

//     return liEl;
//   });
//   ul.append(...cards);
// }

// *******Варіант-2******* \\
// function render(arr) {
//   const ul = document.querySelector(".list");
//   const cards = arr
//     .map(
//       (item) => `<li style="display:'flex';"><img width="300" src=${item.img}/>
//       <div style="margin-bottom:20px">
//        <h2 style="font-size:20px; font-weight:bold">Model: ${item.model}</h2>
//         <div>Type: ${item.type}</div>
//         <div>Price: ${item.price}$</div>
//       </div>
//     </li>`
//     )
//     .join("");

//   ul.style.listStyle = "none";
//   ul.insertAdjacentHTML("afterbegin", cards);
// }

render(cars);

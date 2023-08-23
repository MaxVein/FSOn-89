// *********** localStorage *************** \\
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// *****Збереження в LS***** \\

// localStorage.setItem(LS_KEY, JSON.stringify(names));

// *****Читання з LS***** \\

// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));

// *****Видалення з LS***** \\

// localStorage.removeItem(LS_KEY)

// *****Очищення LS******* \\

// localStorage.clear()

// ***Чому варто завжди використовувати метод JSON.stringify***\\

// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

// localStorage.setItem(LS_KEY, names);
// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));

// ***LS не може зберігати функції в жодній з їх інтерпретацій***\\.

// const LS_KEY = 'my function';

// function add(a, b) {
//     return a + b;
// }

// localStorage.setItem(LS_KEY, JSON.stringify(add))
// console.log(localStorage.getItem(LS_KEY));

// const calculator = {
//     a: 5,
//     b: 10,
//     add() {
//         return this.a + this.b
//     }
// }

// localStorage.setItem(LS_KEY, JSON.stringify(calculator))
// console.log(localStorage.getItem(LS_KEY));

// *************Практика*************** \\
// Для практичного завдання використаємо збірку Parcel та ES6 модулі
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (їх можна знайти в файлі products.json)
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів, для цього створи в об'єкті доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача перенаправляємо на сторінку Home

import { renderList } from "./templates/templateHome";
import JSON_PRODUCTS from "./model/products.json";

const PRODUCTS_CART_KEY = "PRODUCTS_CART";

const homeListEl = document.querySelector(".js-list");
const products = JSON_PRODUCTS;

const handleListClick = (e) => {
  if (!e.target.classList.contains("js-add")) {
    return;
  }

  const productEl = e.target.closest(".js-product");
  const productId = Number(productEl.dataset.id);
  const currentProduct = products.find(({ id }) => id === productId);

  const cart = JSON.parse(localStorage.getItem(PRODUCTS_CART_KEY)) ?? [];

  const productIdx = cart.findIndex(({ id }) => id === productId);

  if (productIdx !== -1) {
    cart[productIdx].qty += 1;
  } else {
    currentProduct.qty = 1;
    cart.push(currentProduct);
  }

  localStorage.setItem(PRODUCTS_CART_KEY, JSON.stringify(cart));
};

homeListEl.addEventListener("click", handleListClick);
renderList(products, homeListEl);

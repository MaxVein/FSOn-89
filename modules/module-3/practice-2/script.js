"use strict";

//*Деструктурування в загальному

// const colors = ["#4654756", "#egegerg", "#rhtrjt"];
// const [primary, secondary, tetriary] = colors;
// console.log(primary, secondary, tetriary);

// const colorObj = {
//   red: "#5475754",
//   green: "#99834",
//   blue: "#80874",
//   shades: {
//     rPale: "#8786",
//     gBright: "#6584546",
//     bDark: "#34632352",
//   },
// };
// const {
//   red,
//   green,
//   blue:primaryBlue,
//   shades: { rPale, gBright, bDark },
// } = colorObj;
// console.log(red, green, primaryBlue, rPale);

// *************************Операція rest та spread********************************\\

const arr = [1, 2, 3];
const [first, ...other] = [...arr]; //spread

// console.log(arr)
// console.log(copy)

// const [first, ...args] = arr; // rest
// console.log(first);
// console.log(args);

// ************Операція rest та spread в функціях********************************\\

const min = function (msg, ...props) {
  let minVal = props[0];

  for (const itemI of props) {
    if (minVal > itemI) {
      minVal = itemI;
    }
  }
  return msg + minVal;
};

console.log(minVal)

// const arr = [10, 20, 30, 40, 50, 60];

console.log(min("Minimum of user salaries",1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));
// console.log(min("Minimum of user salaries", ...arr)); //spread

// const names = ['Alice', 'Kate', 'Emma'];

// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }

// foo(...arr) // foo('Alice', 'Kate', 'Emma')// spread

// function foo(first, second, ...args) { //rest
//     console.log(first);
//     console.log(second);
//     console.log(args);
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily')

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// function foo({ name, age, ...props }) {
//     console.log(name);
//     console.log(age);
//     console.log(props);
// }
// foo(user)

// function foo({ name, skills: { html, ...props }, ...props2}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)

// ******************************Деструктуризація масива***************************************\\
// const arr = [1, 2, 3, 4, 5];

// ******************************Деструктуризація об'єкта***************************************\\
// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// ************************Глибока деструктуризація об'єкта***************************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// *********************Деструктуризація об'єкта в параметрах функції******************************\\

// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// *********Без деструктуризації
// function getUserName(obj) {
//      const {
//     name,
//     skills: { html, css, js },
//   } = obj;
//     console.log(`Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`);
// }

// getUserName(user)

// *********З деструктуризацією
// function getUserName({ name, skills: { html, css, js } }) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
//   );
// }

// getUserName(user);

// *************************Деструктуризація об'єкта в циклі***********************************\\

// const users = [{ name: "Kate" }, { name: "Alex" }, { name: "Mark" }];

// ********Без деструктуризації*******
// const names = [];

// for (const user of users) {
//     names.push(user.name)
// }

// console.log(names);

// ********З деструктуризацією об'єктів в масиві*********
// const names = [];

// for (const { name } of users) {
//   names.push(name);
// }

// console.log(names);

// ********З деструктуризацією масивів в масиві*********
// const usersArr = [["Kate"], ["Kate"], ["Kate"]];
// const namesArr = [];

// for (const [name] of usersArr) {
//   namesArr.push(name);
// }

// console.log(namesArr);

// Task - 1 - Деструктуризація
// Деструктуруй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//     id: 1,
//     username: 'harry_potter',
//     profile: {
//       name: 'Harry',
//       surname: 'Potter',
//       age: 25
//     }
//   };

// Деструктуризація об'єкта для отримання окремих змінних
// const { username, profile:{name,surname}} = user;

// Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);

// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//   name: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };

// function displayProductInfo({
//   name,
//   price,
//   category,
//   details: { brand, color, weight },
// }) {
//   console.log(`Назва товару: ${name}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log("Деталі:");
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);

// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// const generateId = function () {
//   return Math.floor(new Date().getTime() + Math.random());
// };

// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     createdAt: new Date(),
//     list: "default",
//       ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({firstName,lastName, ...props}) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// Task - 5 Об'єкт параметрів
// Необхідно зробити рефакторинг функції calculateHousePerimeter, так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.

// function calculateHousePerimeter({ sideA, sideB, sideC, sideD }) {
//   return sideA + sideB + sideC + sideD;
// }

// const perimeter = calculateHousePerimeter({
//   sideA: 10,
//   sideB: 15,
//   sideC: 10,
//   sideD: 15,
// });
// console.log(`Периметр будинку: ${perimeter}`);

// function calculateHousePerimeterPro(...sides) {
//   let perimeter = 0;

//   for (const side of sides) {
//     perimeter += side;
//   }
//   return perimeter;
// }
// console.log(
//   `Периметр будинку: ${calculateHousePerimeterPro(
//     1,
    // 2,
//     3,
//     4,
//     5,
//     7,
//     8,
//     9,
//     53436
//   )}`
// );

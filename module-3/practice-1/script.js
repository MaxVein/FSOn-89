"use strict";

// Об'єкт
// const user = {
//   name: "Test user",
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
// };

// Звернення до властивостей об'єкта

// console.log(user.name);
// console.log('css', user.skills.css);

// const objectKey = prompt("What property of object user you need");

// console.log(user[objectKey]);
// console.log(user['name']);

// Зміна значення властивості
// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// user['age'] = 28;
// console.log(user);

// user.city = 'Odesa';
// user['age'] = 38;
// console.log(user);

// Object.freeze
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// Object.freeze(user);
// user.name = 'Kyi';
// user.city = 'Kyiv';

// Методи об'єкта
// const user = {
//     name: 'Kyi',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     sayHello(city) {
//         console.log(city);
//         console.log(`Hello my name ${this.name}`);
//     }
// }
// user.sayHello('Lviv')

// Цикл for...in
// const user = {
//   name: "Kyi",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// for (const key in user) {
//   console.log(key, user[key]);
// }

// const newUser = Object.create(user);
// newUser.surname = "New User Surname";

// for (const key in newUser) {
//   if (newUser.hasOwnProperty(key)) {
//     console.log(key, newUser[key]);
//   }
// }

// Метод Object.keys()
// const user = {
//     name: 'Kyi',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const newUser = Object.create(user);
// newUser.surname = "New User Surname";

// console.log(Object.keys(newUser));

// const keys = Object.keys(user);

// for(const key of keys){
//     console.log(key,user[key]);
// }
// console.log(keys);

// Метод Object.values()

// const user = {
//     name: 'Kyi',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// Метод Object.entries()

// const user = {
//     name: 'Kyi',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);

// Практика //
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
// return { product, quantity, price, totalPrice: quantity * price };
// }
// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("aplle", 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//     const values = Object.values(obj);
//     const usersQuantity = values.length;
//     let totalTime = 0;

//     for (const val of values) {
//         totalTime += val;
//     }

//     return `Count of players ${usersQuantity}, average time ${
//       totalTime / usersQuantity
//     }`;
// }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];

// function getUserNames(users, bookName) {
//   const userNames = [];

//   for (const user of users) {
//     if (user.books.includes(bookName)) {
//       userNames.push(user.name);
//     }
//   }

//   return userNames.join(", ");
// }

// console.log(getUserNames(friends, "Harry Potter"));

// function getAverageAge(users) {
//   const usersWithAge = [];
//   let totalAge = 0;

//   for (const user of users) {
//     if (user.hasOwnProperty("age")) {
//       // "age" in user
//       usersWithAge.push(user.age);
//       totalAge += user.age;
//     }
//   }

//   return `Average reader age is: ${Math.floor(totalAge / usersWithAge.length)}`;
// }

// console.log(getAverageAge(friends));

// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   slizerin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   getFacultyStudents(facultyName) {
//     if (!this[facultyName]) {
//       return `No such faculty as ${facultyName} ${this[facultyName]}`;
//     }

//     const userNames = [];
//     for (const user of this[facultyName]) {
//       userNames.push(user.name);
//     }

//     return userNames.join(", ");
//   },
//   getFacultyScore(facultyName) {
//     if (!this[facultyName]) {
//       return `No such faculty as ${facultyName}`;
//     }

//     let totalPoints = 0;
//     for (const user of this[facultyName]) {
//       totalPoints += user.points;
//     }

//     return `${facultyName} has ${totalPoints} in total.`;
//   },
// };

// console.log(hogvarts.getFacultyStudents("griffindor"));
// console.log(hogvarts.getFacultyStudents("slizerin"));
// console.log(hogvarts.getFacultyStudents("slitherin"));

// console.log(hogvarts.getFacultyScore('griffindor'));
// console.log(hogvarts.getFacultyScore('slizerin'));
// console.log(hogvarts.getFacultyScore('slitherin'));

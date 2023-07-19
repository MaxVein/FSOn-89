"use strict";

// Тестовий масив для теоретичного блоку

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring", "CSS"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// ********map******** \\
// const names = users.map((item, index, arr) => {
//   console.log(item);
//   console.log(index);
//   console.log(arr);
// });
// const names = users.map(({ name }) => name);
// console.log(names);

// ********flatMap******** \\
// const mappedSkills=users.map(({skills})=>skills)
// const flatSkills=users.flatMap(({skills})=>skills)
// console.log(mappedSkills);
// console.log(flatSkills);

// ********flat******** \\
// const arr = [1, 2, 3, [21, 22, 23, [11, 12, 13,[222,223,224]]]];
// const justFlat = arr.flat();
// const deepFlat = arr.flat(3);
// console.log(justFlat);
// console.log(deepFlat);

// ********filter******** \\
// const filteredUsers = users.filter(({ age }) => age > 25);
// console.log(filteredUsers);

// const flatSkills = users.flatMap(({ skills }) => skills);
// console.log(flatSkills);

// const uniqueSkills = flatSkills.filter(
//   (val, index, arr) => index === arr.indexOf(val)
// );

// console.log(uniqueSkills);

// ********find******** \\
// const javaScriptLearner = users.find(({ skills }) => skills.includes("JavaScript"));
// console.log(javaScriptLearner);

// ********findIndex********\\
// const javaScriptLearnerIdx = users.findIndex(({ skills }) =>
//   skills.includes("JavaScript")
// );
// console.log(javaScriptLearnerIdx);

// ********some********\\
// const hasJSStudent = users.some(({ skills }) => skills.includes("JavaScript"));
// console.log(hasJSStudent);

// ******** every ********\\
// const everyJSStudent = users.every(({ skills }) => skills.includes("JavaScript"));
// console.log(everyJSStudent);

// ********sort********\\
// const usersCopyAsc = [...users];
// usersCopyAsc.sort((first, second) => first.age - second.age);

// const usersCopyDesc = [...users];
// usersCopyDesc.sort((first, second) => second.age - first.age);

// console.log(usersCopyAsc);
// console.log(usersCopyDesc);

// const userCopy = [...users].sort(({ name: first }, { name: second }) =>
//   first.localeCompare(second)
// );

// console.log(userCopy);

// ********reduce********\\
// const averageUserAge =
//   (users.reduce((acc, item) => acc + item.age, 0) / users.length).toFixed();

//   console.log(averageUserAge);

// ****************Практика**************** \\

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const averageGrade =
//       grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

//     return {
//       name,
//       averageGrade: averageGrade.toFixed(2),
//     };
//   });
// }

// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//     { name: 'John', age: 20, gpa: 3.8 },
//     { name: 'Alice', age: 21, gpa: 3.2 },
//     { name: 'Bob', age: 19, gpa: 3.5 },
//     { name: 'Emily', age: 22, gpa: 3.9 },
//     { name: 'David', age: 20, gpa: 3.7 }
// ];

// // function getAdult(arr) {return arr.filter(({ age }) => age > 20)};
// const getAdult = (arr) => arr.filter(({ age }) => age > 20);

// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.

// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// const getBook = (arr, title) =>
//   arr.find(({ title: bookTitle }) => bookTitle === title)
//     ? arr.find(({ title: bookTitle }) => bookTitle === title)
//     : "Not Found";

//* Оператор нульового злиття! ??
// const getBook = (arr, title) =>
//   arr.find(({ title: bookTitle }) => bookTitle === title) ?? "Not Found";

// function getBook(arr, title) {
//   const foundBook = arr.find(({ title: bookTitle }) => bookTitle === title);
//   if (foundBook) {
//     return foundBook;
//   }

//   return "Not Found";
// }

// console.log(
//   getBook(
//     books,
//     "Design Patterns: Elements of Reusable Object-Oriented Software"
//   )
// );
// console.log(getBook(books, "qwerty"));

// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами.
//  Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 },
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];

// function getTotal(arr) {
//   return arr.reduce((acc, item) => item.price * item.quantity + acc, 0);
// }

// console.log(getTotal(products));

// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];

// function sortDesc(arr) {
//     const arrCopy = [...arr].sort((first, second) => second.year - first.year);
//     return arrCopy;
// }
// console.log(sortDesc(books));

// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.

// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];

// function getProducts(arr) {
//   const names = arr.map(({ name }) => name);
//   const filteredNames = arr.filter((item) => item.price < 2);

//   return names.filter((val) =>
//     filteredNames.map((item) => item.name).includes(val)
//   ).sort();

//   return arr.filter((item) => item.price < 2).map(({ name }) => name).sort();
// }

// console.log(getProducts(products));

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа


// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }


// const str = "absdabsrgbadgtdswwbetflg";

// const result = str.split("").reduce((acc, char) => {
//   if (acc.hasOwnProperty(char)) {
//     acc[char] += 1;
//   } else {
//     acc[char] = 1;
//   }

//   return acc;
// }, {});

// const resultReversed = str.split("").reduce((acc, char) => {
//   const prop = Object.entries(acc).find(([k, v]) => v === char);

//   if (prop) {
//     acc[+Number.parseInt(prop[0]) + 1 + char] = acc[prop[0]];
//     delete acc[prop[0]]; //? краще не використовувати
//   } else {
//     acc = { ...acc, [1 + char]: char };//, додаємо літеру щоб ключ був унікальним
//   }

//   //   console.log(acc);
//   return acc;
// }, {});

// console.log(result);
// console.log(resultReversed);

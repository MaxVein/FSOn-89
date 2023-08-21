"use strict";
// Що таке масив
// const array = ["Hello world", null, true, 15];


// Перевірка масиву
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray("hello")); // false



// Перший та останій елемент масиву
// const firstEl = array[0];
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];




// Перебір масиву
// const array = ["Hello world", null, true, 15];

// Цикл for
// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(item);
// }


// Цикл for of
// for(const item of array){
//     console.log(item);
// }



// Присвоєння за посиланням та за значенням

// Примітивні типи даних - за значенням
// console.log(1 === 1);
// console.log([1] === [1]);


// let a = 15;
// let b = a;

// b += 1;

// console.log(a);
// console.log(b);
// console.log(a === b);




// Складні типи даних - за посиланням
// let a = [1,2,3];
// let b = a;

// b.push(4)


// console.log('a',a);
// console.log('b',b);

// console.log(a === b);




// Методи для роботи з масивом

// push pop
// const numbers = [1, 2, 3];
// numbers.push(4);
// const result = numbers.pop();
// console.log(result);
// console.log(numbers);



// unshift shift
// const numbers = [1, 2, 3];
// numbers.unshift(4,5,6)
// const result = numbers.shift();
// console.log(result);
// console.log(numbers);



//slice - повертає від start до end новий масив
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.slice(2, 5);
// console.log(result);
// console.log(numbers);



// splice - змінює оригінальний масив, повертає масив видалених елементів, на місце видалених елементів дозволяє вставити нові
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.splice(2,2)
// console.log(result);
// console.log(numbers);

// numbers.splice(2, 1, 'hello world', false)
// console.log(numbers);


// numbers.splice(2, 0, 'hello world')
// console.log(numbers);


//includes
// const str = ['a', 'b', 'c', 'd'];

// console.log(str.includes('c')); // true
// console.log(str.includes('e')); // false

//indexOf
// const str = ['a', 'b', 'c', 'd','c'];

// console.log(str.indexOf('c'));//2
// console.log(str.indexOf('e'));//-1

// console.log(str.indexOf('e') !== -1);


// concat
// const str = ['a', 'b', 'c', 'd', 'c'];
// const strA = ['g', 'h'];
// const strB = ['w', 'e'];


// const result = str.concat(strA, strB);
// console.log(result);
// console.log(str);




// ПРАКТИКА

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, 4, "Hello", null, 42, false, "Hello", 1];

// Example-1
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//       i -= 1;
//   }
// }

// console.log(arr);

// Example-2
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.includes(arr[i], i + 1) && !result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(getCommonElements([1, 1, 2, 3, 2, 1, 17, 19]));

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх користувачів
//2 параметр це масив з чоловічими іменами.
//Функція повинна відібрати з масиву всіх користувачів лише жіночі імена та повернути їх в результаті свого виконання.

// const users = ["Artem", "Anna", "Maksym", "Svitlana", "David", "Roman", "Olga"];
// const men = ["Artem", "Maksym", "David", "Roman"];

// function getWomen(users, men) {
//   const women = [];

//   for (const user of users) {
//     if (!men.includes(user)) {
//       women.push(user);
//     }
//   }

//   return women;
// }

// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який змінить порядок літер у рядку (зворотний порядок літер, тобто розверне рядок) і виведе його в консоль.

// const string = "Welcome to the future";
// const strArr1 = string.split("").reverse().join("");
// const strArr = string.split(" ");

// for (const word of strArr) {
//   const wordIdx = strArr.indexOf(word);
//   strArr.splice(wordIdx, 1, word.split("").reverse().join(""));
// }

// console.log(strArr1);
// console.log(strArr.reverse().join(" "));

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елемент на вірнi

// Example 1
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9, 1, 8, 8, 6, 9];

// for (let i = 1; i < numbers.length; i += 1) {
//   const curElement = numbers[i];
//   const prevElement = numbers[i - 1];

//   if (curElement - prevElement !== 1) {
//     numbers[i] = prevElement + 1;
//   }
// }

// console.log(numbers);

// Example 2

// використовуємо цикл в циклі для того щоб numbers[i] елемент порівняти зі всіма попередніми(всіма перед ним)
// for (let i = 1; i < numbers.length; i++) {
//   // тут беремо наступний елемент
//     for (let j = 0; j < i; j++) {
//       // тут беремо попередній елемент
//       // замість умови j < i; - можна також написати j < numbers.length
//       if (numbers[i] < numbers[j]) {
//         // тут поточний елемент
//         const saved = numbers[i]; // проміжна змінна для збереження поточного значення
//         numbers[i] = numbers[j]; // замінюємо наступне значення поточним
//           numbers[j] = saved; // поточному значенню присвоюємо колишнє збережене значення наступного
//         //   console.log(numbers) // якщо потрібно детально зрозуміти алгоритм
//       }
//     }
// }


// console.log(numbers);

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк, яка формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//   let message;

//   switch (arr.length) {
//     case 0: {
//       message = "no one likes this";
//       break;
//     }
//     case 1: {
//       message = `${arr[0]} likes this`;
//       break;
//     }
//     case 2: {
//       message = `${arr[0]} and ${arr[1]} likes this`;
//       break;
//     }
//     case 3: {
//       message = `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`;
//       break;
//     }
//     case 4: {
//       message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} more like this`;
//       break;
//     }
//   }

//   return message;
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

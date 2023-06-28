"use strict";
// const value = 10;


// if(value === 10){
// console.log("condition is true 😎");
// }


// if(value === 10){
//     console.log("condition is true 😎");
// }else{
//     console.log("condition is false 😭");
// }


// if (value === 1) {
//     console.log("first");
// } else if (value < 10 && value > 5) {
//     console.log("second");
// } else if (value === 10) {
//     console.log("third");
// } else {
//     console.log('default');
// }



/***** Інструкція switch *****/
// const value = 4;

// switch (value) {
//     case 1:
//         console.log("value is one");
//         break;
//     case 3:
//         console.log("value is three");
//         break;
//     case 4:
//         console.log("value is four");
//         break;
//     case 7:
//         console.log("value is seven");
//         break;
//     default:
//         console.log("default");
// }





/***** Тернарний оператор *****/
// condition ? true : false

// Який вигляд в умові if
// const value = 17;
// let message;

// if (value > 15 && value < 20) {
//    message = 'в діапазоні від 15 до 20';
// }else{
//     message = 'Спробуйте ще';
// }

// console.log(message);


// Який вигляд в умові тернарного виразу
// const value = 17;
// let message;

// message = value > 15 && value < 20 ?  'в діапазоні від 15 до 20' : 'Спробуйте ще';

// console.log(message);




/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let


// let number = 10;

// if (true) {
//     number = 22;
// }
// console.log(number);

// ==============================
// let number = 10;

// if (true) {
//     number = 22;
//     if (true) {
//         number = 35;
//     }
// }
// console.log(number);

// ==============================
// let number = 10;

// if (true) {
//     let number = 22;
//     if (true) {
//         number = 35;
//     }
// }
// console.log(number);

// ==============================
// let number = 10;

// if (true) {
//     if (true) {
//         number = 35;
//     }
// let number = 22;
// }
// console.log(number);




//  Глобальна та функціональна
// var


// if (true) {
//     var number = 15;
// }

// console.log(number);


// ==============================
// var number = 10;

// if (true) {
//     var number = 15;
// }

// console.log(number);



// function foo() {
//     var str = 'Hello world';
// }
// foo()
// console.log(str);





/***** Цикл for *****/

// const str = 'hello world';
// for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i]);
// }




/***** Цикл while *****/
// const str = 'hello world';
// let i = 0;

// while (i < 0) {
//     console.log('Hello');
//     i += 1
// }

/***** Цикл do while *****/


// let i = 0;

// do {
//     console.log('hello world');
//     i += 1
// } while (i < 0)



// Оператор break
// const str = 'Hello world';
// console.log(str.length);
// for (let i = 0; i < str.length; i += 1) {
//     console.log(i);
//
//     if (str[i] === 'l') {
//         idx = i;
//         break;
//     }
// }

// console.log('result',idx);


// Оператор continue
// for (let i = 0; i <= 20; i += 1) {
//     if (i % 2 === 0) {
//         console.log('Парне', i);
//         continue;
//     }
//     console.log('Не парне', i);
// }

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію if
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з
//  дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно
// світлофор не працює, action be careful

// const color = prompt("What is the color?");
// console.log(color);

// let action;

// switch (color.trim().toLowerCase()) {
//   case "red": {
//     action = "stop";
//     break;
//   }
//   case "yellow": {
//     action = "ready";
//     break;
//   }
//   case "green": {
//     action = "go";
//     break;
//   }
//   case "": {
//     action = "не працує";
//     break;
//   }
//   default: {
//     action = "be careful";
//   }
// }
// console.log(action);

// Task - 2
// Потрібно створити додаток для автоматизації перевірки
// правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(riddle, answer) {
//   const userInput = prompt(riddle);

//   return userInput
//     ? answer.toLowerCase() === userInput.toLowerCase()
//     : "Ви не ввели нічого";
// }

// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(
//   check("Через воду він проводить, А сам з місця вік не сходить", "міст")
// );

// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(depth) {
//   const snailSpeed = 7;
//   const snailSleepSpeed = 2;
//   let totalDistance = 0;
//   let days = 0;

//   while (totalDistance < depth) {
//     totalDistance += snailSpeed;
//     days++;

//     if (totalDistance < depth) {
//       totalDistance -= snailSleepSpeed;
//     }
//   }

//   console.log(days);
// }

// getDays(42) // 8
// getDays(17) // 3
// getDays(18) // 4

// Task - 4
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//   const vowels = "aeiou";
//   let vowelsCounter = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       vowelsCounter++;
//     }
//   }

//   return vowelsCounter;
// }

// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")) // 8

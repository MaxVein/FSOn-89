"use strict";

//* Function declaration
// hoisting https://www.w3schools.com/js/js_hoisting.asp#

// checkIfExist(1, 2, 3, 4, 5, 6);
// function checkIfExist() {
//   console.log(arguments);
//   console.log("HERE FD");
// }

// const checkIfExistFE = function (...params) {
//   console.log(params);
//   console.log("HERE FC");
// };
// checkIfExistFE(1, 2, 3, 4, 5, 6);


//* Області видимості, присвоєння за посиланням та значенням

//* Example 1
// let someValue = 4;

// if (true) {
//     someValue = 11;
// }

// console.log(someValue);

//* Example 2
// let someValue = 4;

// if (true) {
//   if (true) {
//     someValue = 24;
//   }

//   let someValue = 11;
// }

// console.log(someValue);

//* Example 3
// let someValue = 2;

// function checkScope(someValue) {
//     // let someValue = 2
//     someValue = 45;
//     return someValue;
// }

// console.log(checkScope(someValue));
// console.log(someValue);

//* Example 4
// let someValue = 2;

// function checkScope() {
//     someValue = 42;
//     return someValue;
// }

// checkScope();

// console.log(someValue);

// function robot(truth) {
//     let msg = "";
//     if (truth) {
//         msg = "Yes";
//         return msg;
//     } else {
//         return 'No'
//     }
// }

// const robotAnswer = robot(true);
// console.log(robotAnswer)

//* Example 5
// Приклад - Impure function (брудна функція) - змінює вхідні дані в процесі виконання
// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     arr.splice(0, 3);
// }

// checkScope(someArray);
// console.log(someArray);

//------
// Приклад - Pure function (чиста функція) - не змінює вхідні дані, а на їхній основі просто видає новий результат(правильний підхід до написання функцій)
// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     arr = Array.from(arr)
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);

// Практика

//* Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

const numbers = [25, 12, 67, 40, 18];

function checkValue(numbers, value) {
  //Example 1
  //   let message = "Success ✅";
  //   for (const num of numbers) {
  //     if (value < num) {
  //       message = "Fail ❌";
  //       return message;
  //     }
  //   }
  //     return message;
  //Example 2
  // const maxArrayValue = Math.max(...numbers);
  // return maxArrayValue > value ? "Fail ❌" : "Success ✅";
}

// console.log(checkValue(numbers, 100));
// console.log(checkValue(numbers, 13));

//* Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділяючи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементів в масиві
//  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCombination(arr, count) {
  const result = [];

  for (let i = 0; i < arr.length; i += count) {
    const shortArray = arr.slice(i, i + count);
    //  shortArray.length === count ? result.push(shortArray) : null;
    if (shortArray.length === count) {
      result.push(shortArray);
    }
  }

  return result;
}
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//* Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     const dimensionsArr = dimensions.split(" ")
//     const firstElement = dimensionsArr[0];
//     const secondElement = dimensionsArr[1];

//     return firstElement * secondElement;
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));

//* Task-4
//? Напишіть функції для роботи з колекцією навчальних курсів courses:

//? addCourse(name) - додає курс до кінця колекції
//? removeCourse(name) - видаляє курс із колекції
//? updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function arrayItemsToLowerCase(arr) {
//   arr = courses.slice();
//   for (let i = 0; i < arr.length; i++) {
//     arr.splice(i, 1, arr[i].toLowerCase());
//   }
//   return arr;
// }

// function addCourse(name) {
//   const arr = arrayItemsToLowerCase(courses);

//   if (!arr.includes(name.toLowerCase())) {
//     courses.push(name);
//     return `${name} - Курс доданий`;
//   } else {
//     return `${name} - Ви вже маєте такий курс`;
//   }
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("css")); // 'Ви вже маєте такий курс'

// function removeCourse(name) {
//   const arr = arrayItemsToLowerCase(courses);
//   const elemIndex = arr.indexOf(name.toLowerCase());

//   if (elemIndex !== -1) {
//     courses.splice(elemIndex, 1);
//   } else {
//       return 'Курс із таким ім\'ям не знайдено';
//   }
// }

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'

// function updateCourse(oldName, newName) {
//     const arr = arrayItemsToLowerCase(courses);
//     const elemIndex = arr.indexOf(oldName.toLowerCase());

//      if (elemIndex !== -1) {
//        courses.splice(elemIndex, 1, newName);
//      } else {
//        return "Курс із таким ім'ям не знайдено";
//      }

// }

// updateCourse('HTML', 'NestJS');
// console.log(updateCourse('qwerty', 'NestJS'));
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

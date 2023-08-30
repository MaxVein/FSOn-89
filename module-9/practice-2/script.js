//*********Приклад роботи синхронного та асинхронного JS**************\\

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve("C").then((value) => console.log(value));

// console.log("D");

//*********Поділення асинхронного JS на мікро та макро процеси**************\\

// ******Мікро процеси***** \\
// Promise
// Observer
// addEventListener

// ******Макро процеси****** \\
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame

//*********Приклад роботи синхронного та асинхронного JS**************\\
// Пронумеруй виклики методів відповідно до порядку їх виконання

// console.log("A"); /1

// setTimeout(() => console.log("B"), 0);/5

// Promise.reject("C").then((value) => console.log(value)).catch(err => console.log(err));/4
// Promise.resolve("D").then((value) => console.log(value)); /3

// setTimeout(() => console.log("E"), 0);/6

// console.log("F");/2

//*************** Promise *******************\\

// ****Створення Promise**** \\
// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   console.log("random", random);

//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve("Success message would be here!");
//     } else {
//       reject("Failure message would be here!");
//     }
//   }, 1000);
// });

// ****Обробка Promise**** \\

// promise
//   .then((result) => console.log(result))
//   .catch((err) => console.log("this is our error", err))
//   .finally(() =>
//     console.log("I am not interested in result, I am just hanging around)")
//   );

// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по черзі має з'являтись смайлик з затримкою в 1 секунду ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами в якому кожен з них буде відповідати за своє віконце, після чого оброби даний масив за допомогою методу Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скрипт автоматично визначав чи гравець переміг, чи ні. Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
// Виводить модальне вікно з повідомленням про статус гри ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game" поле має очищатись, а гра починатись з початку.

const startBtnEl = document.querySelector(".js-start");
const cellListEl = document.querySelector(".js-container");

const createPromise = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random();

    setTimeout(() => {
      if (random > 0.5) {
        resolve("🤑");
      } else {
        reject("👿");
      }
    }, 1000);
  });
};

const fillCells = (cells, list) => {
  cells.forEach((item, i) => {
    list.children[i].textContent = "";

    setTimeout(() => {
      list.children[i].textContent = item.value || item.reason;
    }, 1000 * (i + 1));
  });
};

const defineIsWinner = (isWinner, delay) => {
  setTimeout(() => {
    const modalInstance = basicLightbox.create(
      `<h1>${isWinner ? "Winner" : "Loser"}</h1>`
    );
    modalInstance.show();
  }, delay);
};

const startGameHandler = () => {
  const promises = [...cellListEl.children].map(() => createPromise());

  Promise.allSettled(promises).then((results) => {
    const isWinner =
      results.every((item) => item.status === "fulfilled") ||
      results.every((item) => item.status === "rejected");

    fillCells(results, cellListEl);
    defineIsWinner(isWinner, 1000 * results.length + 200);
  });
};

startBtnEl.addEventListener("click", startGameHandler);

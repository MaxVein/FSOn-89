// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// ***********setTimeout*********** \\

// const id = setTimeout(() => {
// console.log('Time is over');
// }, 1000)

// Видалення Timeout за необхідністю
// clearTimeout(id)

// Можливість передати параметри для колбеку
// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// ***********setInterval*********** \\

// const id = setInterval(() => {
//   console.log("setInterval");
// }, 1000);

// Видалення Timeout за необхідністю
// clearInterval(id);
// setTimeout(() => clearInterval(id), 4000);

// Можливість передати параметри для колбеку
// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд
// const contentEl = document.querySelector(".js-content");
// const textEl = document.querySelector(".js-text");

// let counter = 10;
// textEl.textContent = `Залишилось ${counter} секунд`;

// const idInterval = setInterval(() => {
//   counter -= 1;
//   textEl.textContent = `Залишилось ${counter} секунд`;
//   console.log("interval");
// }, 1000);

// const idTimeout = setTimeout(() => {
//   contentEl.style.display = "none";
//   clearInterval(idInterval);
// }, counter * 1000);

// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log('start');

// setTimeout(() => {
//     console.log(setTimeout);
// }, 0)

// console.log('finish');

// ***********Class Date*********** \\
// const currentDate = new Date();
// const targetDate = new Date("Sep 05 2023");

// console.log(currentDate.toLocaleString());
// console.log(targetDate.toLocaleString());
// console.log(new Date(targetDate - currentDate).toLocaleDateString());
// console.log(new Date(targetDate - currentDate).getDate());

// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

// const arrDay = [
//   "Неділя",
//   "Понеділок",
//   "Вівторок",
//   "Середа",
//   "Четвер",
//   "П`ятниця",
//   "Субота",
// ];

// const namesOfMonth = [
//   "Січень",
//   "Лютий",
//   "Березень",
//   "Квітень",
//   "Травень",
//   "Червень",
//   "Липень",
//   "Серпень",
//   "Вересень",
//   "Жовтень",
//   "Листопад",
//   "Грудень",
// ];

// const elements = {
//   day: document.querySelector(".date-day"),
//   date: document.querySelector(".date"),
//   month: document.querySelector(".date-month"),
//   year: document.querySelector(".date-year"),
//   clock: document.querySelector(".digital-clock"),
//   seconds: document.querySelector(".clock-seconds__arrow"),
//   minutes: document.querySelector(".clock-minutes__arrow"),
//   hours: document.querySelector(".clock-hours__arrow"),
// };

// setInterval(() => {
//   const currentDate = new Date();

//   elements.day.textContent = arrDay[currentDate.getDay()];
//   elements.month.textContent = namesOfMonth[currentDate.getMonth()];
//   elements.date.textContent = currentDate.getDate();
//   elements.year.textContent = currentDate.getFullYear();

//   const localTime = currentDate.toLocaleTimeString("uk-UA");

//   elements.clock.textContent = `Поточний час ${localTime}`;

//   const hours = currentDate.getHours();
//   const minutes = currentDate.getMinutes();
//   const seconds = currentDate.getSeconds();
//   const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;
//   const minutesDeg = (360 / 60) * minutes;
//   const secondsDeg = (360 / 60) * seconds;

//   elements.hours.style.transform = `rotate(${hoursDeg}deg)`;
//   elements.minutes.style.transform = `rotate(${minutesDeg}deg)`;
//   elements.seconds.style.transform = `rotate(${secondsDeg}deg)`;
// }, 1000);

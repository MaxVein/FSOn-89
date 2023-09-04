// *********Links********* \\
// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/

// Приклад документації до API
// https://rickandmortyapi.com/documentation/#rest

// *********Показати роботу з Postman********* \\
// https://www.postman.com/downloads/

// *********Fetch********* \\
// fetch("https://rickandmortyapi.com/api/character").then((res) =>
//   console.log(res)
// );

// *********Обробка помилок та парсинг відповіді********* \\
// fetch("https://rickandmortyapi.com/api/character")
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     }

//     throw new Error(res.status);
//   })
//   .then((character) => console.log(character));

// ***************Практика*************** \\
// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

// !!! ЗВЕРНИ УВАГУ ЩО API_KEY ПІСЛЯ РЕЄСТРАЦІЇ ВАЛІДНИЙ 21 ДЕНЬ !!!.
import { API_KEY, BASE_URL } from "./configs/api.js";

const weatherList = document.querySelector(".js-list");
const searchForm = document.querySelector(".js-search-form");
const weatherHeader = document.querySelector(".js-header");

const searchSubmitHandler = (e) => {
  e.preventDefault();
  const {
    city: { value: cityValue },
    days: { value: daysValue },
  } = e.target.elements;

  fetchWeather(cityValue, daysValue)
    .then((weatherInfo) => {
      renderHeader(weatherInfo.location, weatherHeader);
      renderList(weatherInfo.forecast.forecastday, weatherList);
    })
    .catch((err) => console.error(err));
};

const fetchWeather = (city, days) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: days,
    lang: "uk",
  });
  const endpoint = BASE_URL + "/forecast.json?" + params.toString();

  return fetch(endpoint).then((res) => {
    if (res.ok) {
      return res.json();
    }

    throw new Error(res.statusText);
  });
};

const renderList = (arr, container) => {
  const markup = arr
    .map(
      (item) => `<li class="weather-card">
    <img src="${item.day.condition.icon}" />
    <h2 class="date">${item.date}</h2>
    <h3 class="weather-text">${item.day.condition.text}</h3>
    <h3 class="temperature">${item.day.avgtemp_c} °C</h3>
    </li>`
    )
    .join("");

  container.innerHTML = markup;
};

const renderHeader = (location, container) => {
  container.textContent = `Погода в ${location.country}, ${location.name}`;
};

searchForm.addEventListener("submit", searchSubmitHandler);

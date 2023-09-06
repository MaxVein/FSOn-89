// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

import { BASE_URL, API_KEY } from "./configs/api.js";

const filmListEl = document.querySelector(".js-movie-list");

let page = 1;

const renderList = (arr, container) => {
  const markup = arr
    .map(
      (item) => `<li class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt=${item.original_title} />
    <div class="movie-info">
    <h2>${item.original_title}</h2>
    <p>Release Date: ${item.release_date}</p>
    <p>Vote Average: ${item.vote_average}</p>
    </div>
    </li>`
    )
    .join("");

  container.insertAdjacentHTML("beforeend", markup);
};

// *********************** Кнопка "Load More" ************************** \\
// const loadMoreEl = document.querySelector(".js-load-more");

// const fetchFilms = (page) => {
//   const params = new URLSearchParams({
//     api_key: API_KEY,
//     page,
//   });
//   const endpoint = BASE_URL + "/trending/movie/week?" + params.toString();

//   return fetch(endpoint)
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       }

//       throw new Error(res.statusText);
//     })
//     .then((res) => {
//       loadMoreEl.classList.replace("load-more-hidden", "load-more");

//       if (res.page === res.total_pages) {
//         loadMoreEl.classList.replace("load-more", "load-more-hidden");
//       }
//       return res;
//     });
// };

// const loadMoreHandler = () => {
//   page += 1;
//   fetchFilms(page).then((res) => renderList(res.results, filmListEl));
// };

// fetchFilms(page).then((res) => renderList(res.results, filmListEl));
// loadMoreEl.addEventListener("click", loadMoreHandler);

// ********************************Infinity scroll ********************** \\

// const guardEl = document.querySelector(".js-guard");
// const options = {
//   root: null,
//   rootMargin: "300px",
//   threshold: 0,
// };

// const handleIntersection = (entries, observer) => {
//   //   console.log(entries);
//   //   console.log(observer);
//   entries.forEach((intersection) => {
//     if (intersection.isIntersecting) {
//       page += 1;

//       fetchFilms(page)
//         .then((res) => {
//           if (res.page === res.total_pages) {
//             observer.unobserve(intersection.target);
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   });
// };

// const observer = new IntersectionObserver(handleIntersection, options);

// const fetchFilms = (page) => {
//   const params = new URLSearchParams({
//     api_key: API_KEY,
//     page,
//   });
//   const endpoint = BASE_URL + "/trending/movie/week?" + params.toString();

//   return fetch(endpoint)
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       }

//       throw new Error(res.statusText);
//     })
//     .then((res) => {
//       renderList(res.results, filmListEl);
//       return res;
//     });
// };

// fetchFilms(page)
//   .then(() => {
//     observer.observe(guardEl);
//   })
//   .catch((err) => console.log(err));

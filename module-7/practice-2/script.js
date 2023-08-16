// ******************************Lazy Loading****************************** \\

// Тестовий масив для lazy-loading
// const cats = [
//   "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
//   "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
//   "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
//   "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
//   "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
//   "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//   "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//   "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//   "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
//   "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
//   "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
//   "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
// ];

// const listEl = document.querySelector(".js-cats");

// const renderList = (arr, container) => {
//   const markup = arr
//     .map(
//       (url) => `<li>
//         <img src="${url}" loading="lazy" alt="cat" width="300" />
//         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//     </li>`
//     )
//     .join("");

//   container.insertAdjacentHTML("beforeend", markup);
// };

// renderList(cats, listEl);

// *****************************Throttle & Debounce***************************** \\

// const inputEl = document.querySelector(".js-search");

// inputEl.addEventListener(
//   "input",
//   _.throttle((e) => {
//     console.log(e);
//   }, 1000)
// );

// inputEl.addEventListener(
//   "input",
//   _.debounce(
//     (e) => {
//       console.log(e);
//     },
//     1000,
//     { leading: false, trailing: true }
//   )
// );

// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скрипт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скрипт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const PLAYER_X = "X";
const PLAYER_O = "O";

const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

const contentEl = document.querySelector(".content");
const historyX = [];
const historyO = [];
let player = "X";

const renderField = () => {
  let markup = "";
  for (let i = 1; i < 10; i++) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  contentEl.innerHTML = markup;
};

const hasPlayerWon = (player) => {
  const history = player === PLAYER_X ? historyX : historyO;

  return history.length >= 3
    ? combination.some((item) => item.every((id) => history.includes(id)))
    : false;
};

const changePlayer = (prevPlayer) => {
  player = prevPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
};

const historyReset = () => {
  player = "X";
  historyX.splice(0, historyX.length);
  historyO.splice(0, historyO.length);
};

const endGame = (msg) => {
  const lightboxObj = basicLightbox.create(
    `<div class="box"><h1>${msg}</h1></div>`
  );
  lightboxObj.show();
  historyReset();
  renderField();
};

const gameStep = (player, chosenId, el) => {
  const isPlayerX = player === PLAYER_X;
  (isPlayerX ? historyX : historyO).push(chosenId);
  el.textContent = player;
  return hasPlayerWon(player);
};

const clickHandler = (e) => {
  const { currentTarget, target } = e;
  if (currentTarget === target || target.textContent) {
    return;
  }

  const isGameOver = historyO.length + historyX.length === 9;
  const chosenId = Number(e.target.dataset.id);
  const isWinner = gameStep(player, chosenId, target);

  if (isWinner) {
    return endGame(`Player ${player} won`);
  }

  if (isGameOver) {
    return endGame("GAME OVER.");
  }

  changePlayer(player);
};

renderField();
contentEl.addEventListener("click", clickHandler);

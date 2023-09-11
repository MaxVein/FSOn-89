// ***************Практика*************** \\
//Створити таблицю користувачів і надати інтерфейс по взаємодії з ними (приклад таблиці https://prnt.sc/roX-65-64zYE)
// Взаємодія реалізовуватиметься CRUD операціями, при цьому операція додавання/оновлення користувача буде реалізована через форму в модальному вікні, все решту в таблиці
// Додавання та оновлення користувачів будуть здійснюватись через модальне вікно (приклад https://prnt.sc/B8jLy46anuU0)
// Використовуй стилі і іконки bootstrap https://getbootstrap.com/docs/5.3/getting-started/introduction/
// Для збірки проєкту використовуй Vite/Parcel(менеджер проєктів)
// Несправжній бекенд реалізуй з допомогою json-server пакету
// https://github.com/typicode/json-server#getting-started
// https://www.digitalocean.com/community/tutorials/json-server
//! Для запуску проєкту використовуй Vite, з Open Live Server розширенням працювати правильно не буде, через особливості json-server

import { makeRequest, toggleLoader, showModal } from "./configs/utils";

const usersTableBody = document.querySelector(".users-table__body");
const addUserBtn = document.querySelector(".users-header__add-btn");
const tableHeadItems = document.querySelectorAll(".users-table__head__item");
const loader = document.querySelector(".loader");

const renderTable = (arr, container) => {
  const markup = arr
    .map(
      (item) => `<tr data-id="${item.id}">
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.email}</td>
        <td>
            <button data-type="user-action" data-action="update" class="btn btn-light"><i class="bi bi-pencil pe-none"></i></button> |
            <button data-type="user-action" data-action="delete" class="btn btn-light"><i class="bi bi-trash pe-none"></i></button>
        </td>
    </tr>`
    )
    .join("");

  // class pe-none - disables pointer event on element

  container.innerHTML = markup;
};

const renderForm = (id, data = null) => {
  const action = id.split("-")[0];
  const isRequired = action === "add" ? "required" : "";
  const { email, name, surname } = {
    email: data?.email ?? "",
    name: data?.name ?? "",
    surname: data?.surname ?? "",
  };

  return `<form id="${id}" class="container bg-light-subtle p-3 rounded-2">
<div class="mb-3">
    <label for="email-control" class="form-label">Email address</label>
    <input ${isRequired} type="email" value="${email}" name="email" class="form-control" id="email-control">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="name-control" class="form-label">Name</label>
    <input ${isRequired} type="text" value="${name}" name="name" class="form-control" id="name-control">
  </div>
  <div class="mb-3">
    <label for="surname-control" class="form-label">Surname</label>
    <input ${isRequired} type="text" name="surname" value="${surname}" class="form-control" id="surname-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
};

//CRUD
const getUsers = () => {
  toggleLoader(loader, "show");
  return makeRequest("/users", "GET").then((users) => {
    renderTable(users, usersTableBody);
    toggleLoader(loader, "hide");
  });
};
const addUser = (data) => makeRequest("/users", "POST", data);
const updateUser = (id, data) => makeRequest("/users/" + id, "PUT", data);
const deleteUser = (id) => makeRequest("/users/" + id, "DELETE");
//

const userAddHandler = () => {
  const formId = "add-form";
  const modal = showModal(renderForm(formId));
  const formEl = document.getElementById(formId);

  const addUserCallback = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // console.log(formData);
    // console.log(Array.from(formData.entries()));
    // console.log(Object.fromEntries(formData));

    const data = Object.fromEntries(formData);
    addUser(data)
      .then(() => getUsers())
      .then(() => {
        modal.close(() =>
          formEl.removeEventListener("submit", addUserCallback)
        );
      });
  };

  formEl.addEventListener("submit", addUserCallback);
};

const userUpdateHandler = (data) => {
  const formId = "update-form";
  const { id, ...userData } = data;
  const modal = showModal(renderForm(formId, userData));
  const formEl = document.getElementById(formId);

  const updateUserCallback = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    updateUser(id, data)
      .then(() => getUsers())
      .then(() => {
        modal.close(() =>
          formEl.removeEventListener("submit", addUserCallback)
        );
      });
  };

  formEl.addEventListener("submit", updateUserCallback);
};

const userActionHandler = (e) => {
  if (e.currentTarget === e.target || e.target.dataset.type !== "user-action") {
    return;
  }

  const btn = e.target;
  const row = btn.closest("tr");
  const userId = row.dataset.id;
  const actionType = btn.dataset.action;
  const tableHeadItemsArr = Array.from(tableHeadItems).slice(
    0,
    tableHeadItems.length - 1
  );
  const rowItemsArr = Array.from(row.children).slice(
    0,
    row.children.length - 1
  );
  //   console.log(tableHeadItemsArr);
  //   console.log(rowItemsArr);

  const userData = {
    id: userId,
    email: "",
    name: "",
    surname: "",
  };

  rowItemsArr.forEach(
    (item, index) =>
      (userData[tableHeadItemsArr[index].textContent.toLowerCase()] =
        item.textContent)
  );

  //   console.log(userData);

  if (actionType === "delete") {
    deleteUser(userId).then(() => {
      const modal = showModal(
        `<div class="bg-light-subtle p-3 rounded-2">Success</div>`
      );
      getUsers().then(() => modal.close());
    });
  } else if (actionType === "update") {
    userUpdateHandler(userData);
  }
};

addUserBtn.addEventListener("click", userAddHandler);
usersTableBody.addEventListener("click", userActionHandler);
getUsers();

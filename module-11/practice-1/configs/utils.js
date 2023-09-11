import { BASE_URL } from "./constants";
import * as basicLightbox from "basiclightbox";

export const toggleLoader = (loader, action) => {
  const method = action === "show" ? "remove" : "add";
  loader.classList[method]("d-none");
};

export const makeRequest = (path, method, data = null) => {
  const body = data ? JSON.stringify(data) : null;

  return fetch(BASE_URL + path, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    })
    .catch((err) => console.err(err));
};

export const showModal = (content) => {
  const modal = basicLightbox.create(content);
  modal.show();

  return modal;
};

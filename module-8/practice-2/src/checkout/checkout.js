import { renderList } from "../templates/templateCheckout";

const PRODUCTS_CART_KEY = "PRODUCTS_CART";

const titleEl = document.querySelector(".total-price-label");
const cartListEl = document.querySelector(".js-list");
const clearBtn = document.querySelector(".js-clear");

const products = JSON.parse(localStorage.getItem(PRODUCTS_CART_KEY));

titleEl.innerHTML = products.length
  ? `Загальна вартість покупки: ${products.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    )} грн`
  : "Your basket is empty";

const clearCartHandler = () => {
  const hasUserConfirmed = confirm("Ви впевненні що хочете очистити кошик?");

  if (hasUserConfirmed) {
    localStorage.clear();
    window.location.href = "../index.html";
  } else {
    alert("Ваш кошик в безпеці)");
  }
};

renderList(products, cartListEl);
clearBtn.addEventListener("click", clearCartHandler);

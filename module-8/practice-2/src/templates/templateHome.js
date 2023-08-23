export const renderList = (arr, container) => {
  const markup = arr
    .map(
      (item) => `<li data-id="${item.id}" class="product-card js-product">
        <img src="${item.img}" alt="${item.name}" class="product-img"/>
        <h2 class="product-title">${item.name}</h2>
        <p class="product-description">${item.description}</p>
        <p class="product-price">${item.price} грн</p>
        <button class="product-add-btn js-add">Додати в кошик</button>
      </li>`
    )
    .join("");

  container.innerHTML = markup;
};

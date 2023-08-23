export const renderList = (arr, container) => {
  const markup = arr
    .map(
      (item) => `<li data-id="${item.id}" class="product-card js-product">
        <img src="${item.img}" alt="${item.name}" class="product-img"/>
        <h2 class="product-title">${item.name}</h2>
        <p>Кількість: ${item.qty}</p>
        <p>Загальна вартість: ${
          item.price * item.qty
        } грн</p>
      </li>`
    )
    .join("");

  container.innerHTML = markup;
};

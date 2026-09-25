function getBurgerTemplate(index) {
  return `<div  class="meal-card">
            <img
              src="./assets/img/${burgers[index].productNumber}.jpg"
              alt="${burgers[index].name}"
            />
            <div class="meal-text">
              <h3>${burgers[index].name}</h3>
              <p>
                ${burgers[index].description} 
              </p>
            </div>
            <div class="price-and-add">
                    <h4>${burgers[index].price.toFixed(2).replace(".", ",")}€</h4>
              <button onclick="addToBasket('burger', ${index})" class="add-to-basket">
                <p>Add to basket</p>
              </button>
            </div>
          </div>`;
}

function getPizzaTemplate(index) {
  return `<div  class="meal-card">
            <img
              src="./assets/img/${pizzas[index].productNumber}.jpg"
              alt="${pizzas[index].name}"
            />
            <div class="meal-text">
              <h3>${pizzas[index].name}</h3>
              <p>
                ${pizzas[index].description} 
              </p>
            </div>
            <div class="price-and-add">
                    <h4>${pizzas[index].price.toFixed(2).replace(".", ",")}€</h4>
              <button onclick="addToBasket('pizza', ${index})" class="add-to-basket">
                <p>Add to basket</p>
              </button>
            </div>
          </div>`;
}

function getSaladTemplate(index) {
  return `<div  class="meal-card">
            <img
              src="./assets/img/${salads[index].productNumber}.jpg"
              alt="${salads[index].name}"
            />
            <div class="meal-text">
              <h3>${salads[index].name}</h3>
              <p>
                ${salads[index].description} 
              </p>
            </div>
            <div class="price-and-add">
                    <h4>${salads[index].price.toFixed(2).replace(".", ",")}€</h4>
              <button onclick="addToBasket('salad', ${index})" class="add-to-basket">
                <p>Add to basket</p>
              </button>
            </div>
          </div>`;
}

function getBasketTemplate(index) {
  let minusOrDelete;

  if (basket[index].quantity === 1) {
    minusOrDelete = `<a onclick="deleteProduct(${index})"><img src="./assets/icon/delete-inactive.png" alt="Delete Button" /></a>`;
  } else {
    minusOrDelete = `<a onclick="quantityMinusOne(${index})">-</a>`;
  }

  return `
      <div class="basket-product-card">
        <p>${basket[index].quantity}x ${basket[index].name}</p>
        <div class="quantity-and-price">
          <div class="quantity">
            ${minusOrDelete}
            <p>${basket[index].quantity}</p>
            <a onclick="quantityPlusOne(${index})">+</a>
          </div>
          <p id="basket-sum-product">${(basket[index].price * basket[index].quantity).toFixed(2).replace(".", ",")}€</p>
        </div>
      </div>`;
}

function buyNow() {
  let confirmation = document.getElementById("confirmation");
  confirmation.classList.add("open");
}

function closeBasket() {
  let closingTag = document.getElementById("basket");
  closingTag.classList.toggle("open");
}

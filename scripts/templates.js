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
              <button onclick="addToBasket(index)" class="add-to-basket">
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
              <button onclick="addToBasket(index)" class="add-to-basket">
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
              <button onclick="addToBasket(index)" class="add-to-basket">
                <p>Add to basket</p>
              </button>
            </div>
          </div>`;
}

function getBasketTemplate() {
  return `
  <div  class="basket">
    <div class="close-basket">X</div>
    <h2>Your Basket</h2>
    <div class="basket-scroll-wrapper">
      <div class="basket-product-card">
        <p>1x Veggie Mushroom Black Burger</p>
        <div class="quantity-and-price">
          <div class="quantity">
            <img src="./assets/icon/delete-inactive.png" alt="Delete Button" />
            <p>1</p>
            <p>+</p>
          </div>
          <p id="basket-sum-product">16,90€</p>
        </div>
      </div>

      <div class="basket-product-card">
        <p>1x Veggie Mushroom Black Burger</p>
        <div class="quantity-and-price">
          <div class="quantity">
            <img src="./assets/icon/delete-inactive.png" alt="Delete Button" />
            <p>1</p>
            <p>+</p>
          </div>
          <p id="basket-sum-product">16,90€</p>
        </div>
      </div>

      <div class="basket-product-card">
        <p>1x Veggie Mushroom Black Burger</p>
        <div class="quantity-and-price">
          <div class="quantity">
            <img src="./assets/icon/delete-inactive.png" alt="Delete Button" />
            <p>1</p>
            <p>+</p>
          </div>
          <p id="basket-sum-product">16,90€</p>
        </div>
      </div>

      <div class="basket-product-card">
        <p>1x Veggie Mushroom Black Burger</p>
        <div class="quantity-and-price">
          <div class="quantity">
            <img src="./assets/icon/delete-inactive.png" alt="Delete Button" />
            <p>1</p>
            <p>+</p>
          </div>
          <p id="basket-sum-product">16,90€</p>
        </div>
      </div>

      <div class="basket-product-card">
        <p>1x Veggie Mushroom Black Burger</p>
        <div class="quantity-and-price">
          <div class="quantity">
            <img src="./assets/icon/delete-inactive.png" alt="Delete Button" />
            <p>1</p>
            <p>+</p>
          </div>
          <p id="basket-sum-product">16,90€</p>
        </div>
      </div>
    </div>

    <div class="basket-summary">
      <div class="summary-wrapper">
        <div class="summary-row">
          <div class="summary-label">Subtotal</div>
          <div class="summary-value" id="subtotal">
            36,70€
          </div>
        </div>

        <div class="summary-row">
          <div class="summary-label">Delivery fee</div>
          <div class="summary-value" id="delivery-fee">
            4,99€
          </div>
        </div>

        <div class="summary-line"></div>

        <div class="summary-row summary-total">
          <div class="summary-label">Total</div>
          <div class="summary-value" id="total">
            41,69€
          </div>
        </div>
      </div>
      <button class="buy-button" id="buy-button" type="button">
        Buy now (41,69€)
      </button>
    </div>
  </div>;
  `;
}

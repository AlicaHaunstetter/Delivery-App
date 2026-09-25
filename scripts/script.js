let basket = [];

function init() {
  renderBurger();
  renderPizza();
  renderSalad();
  renderBasket();
}

function renderBurger() {
  let burgerContent = document.getElementById("burger-cards");
  burgerContent.innerHTML = "";
  for (let index = 0; index < burgers.length; index++) {
    burgerContent.innerHTML += getBurgerTemplate(index);
  }
}

function renderPizza() {
  let pizzaContent = document.getElementById("pizza-cards");
  pizzaContent.innerHTML = "";
  for (let index = 0; index < pizzas.length; index++) {
    pizzaContent.innerHTML += getPizzaTemplate(index);
  }
}

function renderSalad() {
  let saladContent = document.getElementById("salad-cards");
  saladContent.innerHTML = "";
  for (let index = 0; index < salads.length; index++) {
    saladContent.innerHTML += getSaladTemplate(index);
  }
}

function renderBasket() {
  let basketContent = document.getElementById("basket-scroll-wrapper");
  basketContent.innerHTML = "";
  for (let index = 0; index < basket.length; index++) {
    basketContent.innerHTML += getBasketTemplate(index);
  }
  calculateTotal();
}

function buttonAddedQuantity() {
  // show added quantity in get element by id added to basket
}

function buyNow() {
  // onclick buy now -> display confirmation
}

function addToBasket(category, index) {
  let lists = { burger: burgers, pizza: pizzas, salad: salads };
  let product = lists[category][index];

  let alreadyInBasket = false;
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].name === product.name) {
      basket[i].quantity++;
      alreadyInBasket = true;
    }
  }

  if (!alreadyInBasket)
    basket.push({
      name: product.name,
      price: product.price,
      quantity: 1,
      productNumber: product.productNumber,
    });
  renderBasket();
}

function calculateSubtotal() {
  let subtotal = 0;
  for (let i = 0; i < basket.length; i++) {
    subtotal = subtotal + basket[i].price * basket[i].quantity;
  }
  document.getElementById("subtotal").textContent =
    subtotal.toFixed(2).replace(".", ",") + "€";
  return subtotal;
}

function calculateTotal() {
  let subtotal = calculateSubtotal();
  let deliveryFee = 4.99;
  let total = subtotal + deliveryFee;
  document.getElementById("total").textContent =
    total.toFixed(2).replace(".", ",") + "€";
  document.getElementById("buy-button").textContent =
    "Buy now (" + total.toFixed(2).replace(".", ",") + "€)";
  return total;
}

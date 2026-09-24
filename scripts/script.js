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
    burgerContent.innerHTML += getProductTemplate(index);
  }
}

function renderPizza() {
  // for schleife array pizzas
}

function renderSalad() {
  // for schleife array salads
}

function renderBasket() {
  // for schleife let basket
  //     if basket empty = display: none
}

function addProductToBasket(productNumber) {
  // if product in basket = 0 { push product + quantity = 1 };
  // else { quantity + 1 }
  // renderBasket();
}

function calculateSubtotal() {}

function calculateTotal() {
  // =subtotal + 4.99
}

function buttonAddedQuantity() {
  // show added quantity in get element by id added to basket
}

function buyNow() {
  // onclick buy now -> display confirmation
}

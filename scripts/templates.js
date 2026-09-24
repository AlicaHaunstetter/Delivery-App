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
              <div class="add-to-basket">
                <p>Add to basket</p>
              </div>
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
              <div class="add-to-basket">
                <p>Add to basket</p>
              </div>
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
              <div class="add-to-basket">
                <p>Add to basket</p>
              </div>
            </div>
          </div>`;
}

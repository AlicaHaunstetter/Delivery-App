function getProductTemplate(index) {
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

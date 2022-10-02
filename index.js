const addToCartButton = document.getElementsByClassName("add-to-cart");
// console.log(addToCartButton);
for (let addButton = 0; addButton < addToCartButton.length; addButton++) {
  const addCartButton = addToCartButton[addButton];
  addCartButton.addEventListener("click", addToCartClick);
}

// add item to cart
function addToCartClick(event) {
  const button = event.target;
  const shopItem = button.parentElement.parentElement.parentElement;
  const foodName = shopItem.getElementsByClassName("food-name")[0].innerText;
  const foodPrice = shopItem.getElementsByClassName("food-price")[0].innerText;
  const foodImage = shopItem.getElementsByClassName("food-image")[0].src;
  addItemToCart(foodName, foodPrice, foodImage);
  // console.log(shopItem);
  // console.log(foodName, foodPrice, foodImage);
}

function addItemToCart(foodName, foodPrice, foodImage) {
  const cartItems = document.getElementsByClassName("cart-row")[0];
  const cartItemsName = document.getElementsByClassName("cart-item-name");

  // preventing add same item inside cart
  for (let itemsName = 0; itemsName < cartItemsName.length; itemsName++) {
    const itemsNameArray = cartItemsName[itemsName];
    if (itemsNameArray.innerText == foodName) {
      alert("This item is already added to cart");
      return;
    }
  }

  // console.log(cartItemsName);

  const cartRow = document.createElement("div");
  cartRow.innerHTML = `
    <div class="cart-item">
      <div class="cart-title">
        <img width="100" src="${foodImage}" alt="image" />
        <h4 class="cart-item-name">${foodName}</h4>
      </div>
      <h4>${foodPrice}</h4>
      <div class="cart-quantity">
        <i class="las la-minus"></i>
        <h4>1</h4>
        <i class="las la-plus"></i>
      </div>
      <i class="las la-trash"></i>
    </div>`;
  cartItems.append(cartRow);
}

const addToCartButton = document.getElementsByClassName("add-to-cart");
// console.log(addToCartButton);
for (let addButton = 0; addButton < addToCartButton.length; addButton++) {
  const addCartButton = addToCartButton[addButton];
  addCartButton.addEventListener("click", addToCartClick);
}

// add item to cart
function addToCartClick(event) {
  const button = event.target;
  const foodItem = button.parentElement.parentElement.parentElement;
  const foodName = foodItem.getElementsByClassName("food-name")[0].innerText;
  const foodPrice = foodItem.getElementsByClassName("food-price")[0].innerText;
  const foodImage = foodItem.getElementsByClassName("food-image")[0].src;
  addItemToCart(foodName, foodPrice, foodImage);
  // console.log(foodItem);
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
      <h4 class="cart-food-price">${foodPrice}</h4>
      <div class="cart-quantity">
        <i class="las la-minus"></i>
        <h4 class="cart-item-quantity">1</h4>
        <i class="las la-plus"></i>
      </div>
      <i class="las la-trash"></i>
    </div>`;
  cartItems.append(cartRow);
  removeFromCartButton();
  updateCartTotal();
}

// remove cart button function

function removeFromCartButton() {
  const removeItemButton = document.getElementsByClassName("la-trash");
  for (
    let removeButton = 0;
    removeButton < removeItemButton.length;
    removeButton++
  ) {
    const button = removeItemButton[removeButton];
    // console.log(button);
    button.addEventListener("click", (event) => {
      const buttonClicked = event.target;
      button.parentElement.remove();
      updateCartTotal();
    });
  }
}

// update total cart
function updateCartTotal() {
  const cartItemContainer = document.getElementsByClassName("cart-row")[0];
  const cartItem = cartItemContainer.getElementsByClassName("cart-item");
  let totalPrice = 0;
  for (let cartUpdate = 0; cartUpdate < cartItem.length; cartUpdate++) {
    const cartElement = cartItem[cartUpdate];
    const cartPriceElement =
      cartElement.getElementsByClassName("cart-food-price")[0];
    const cartQuantityElement =
      cartElement.getElementsByClassName("cart-item-quantity")[0];
    cartPrice = cartPriceElement.innerText.replace("IDR", "");
    cartQuantity = cartQuantityElement.innerText;
    totalPrice = totalPrice + cartPrice * cartQuantity;
  }
  console.log(cartPrice * cartQuantity);
  document.getElementsByClassName(
    "cart-total-price"
  )[0].innerText = `IDR ${totalPrice}`;
}

const foodCatalogue = document.getElementById("food-catalogue");
const foodItemsData = [
  {
    id: "burger",
    img: "images/burger.jpg",
    foodname: "Beef Burger",
    price: "35000",
  },

  {
    id: "kebab",
    img: "images/kebab.jpg",
    foodname: "Beef Kebab",
    price: "25000",
  },

  {
    id: "fried-chicken",
    img: "images/fried-chicken.jpg",
    foodname: "Crispy Fried Chicken",
    price: "15000",
  },
  {
    id: "pizza",
    img: "images/pizza.jpg",
    foodname: "Seafood Pizza",
    price: "100000",
  },
];

// Generate Food Catalogue
function generateCatalogue() {
  return (foodCatalogue.innerHTML = foodItemsData
    .map((insertItem) => {
      const { img, foodname, price } = insertItem;
      return `
            <div class="food-card-item">
              <img width="200" src=${img} alt="image" />
              <div class="card-details">
                <h4>${foodname}</h4>
                <div class="card-price">
                  <p>IDR ${price}</p>
                  <div class="add-to-cart">Add to cart</div>
                </div>
              </div>
            </div>
    `;
    })
    .join(""));
}

generateCatalogue();

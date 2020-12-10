let addButton = document.querySelector("#addButton");
let sideButton = document.querySelector("#side");
let mainDishButton = document.querySelector("#mainDish");
let dessertButton = document.querySelector("#dessert");
let entireMealButton = document.querySelector("#entireMeal");
let letsCookButton = document.querySelector("#letsCookButton");
let titleDisplayBox = document.querySelector("#titleBox");
let titleDisplay = document.querySelector("#titleDisplay")
let recipeDisplay = document.querySelector("#recipeDisplay");

let sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
let mainDishes = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];
let desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];


letsCookButton.addEventListener("click", displayFoodOption);

function displayFoodOption() {
  let randomSidesIndex = Math.floor(Math.random() * sides.length);
  let randomMainDishIndex = Math.floor(Math.random() * mainDishes.length);
  let randomDessertIndex = Math.floor(Math.random() * desserts.length);
  if (sideButton.checked == true) {
    titleDisplay.hidden = false;
    recipeDisplay.innerHTML = `${sides[randomSidesIndex]}!`
  } else if (mainDishButton.checked == true) {
    titleDisplay.hidden = false;
    recipeDisplay.innerHTML = `${mainDishes[randomMainDishIndex]}!`
  } else if (dessertButton.checked == true) {
    titleDisplay.hidden = false;
    recipeDisplay.innerHTML = `${desserts[randomDessertIndex]}!`
  } else if (entireMealButton.checked == true) {
    titleDisplay.hidden = false;
    recipeDisplay.innerHTML = `${mainDishes[randomMainDishIndex]} with a side of ${sides[randomSidesIndex]} and ${desserts[randomDessertIndex]} for dessert!`;
  }
}

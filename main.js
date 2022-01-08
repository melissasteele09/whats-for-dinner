var sideOptions = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots",
  "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"
];

var mainDishOptions = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry",
  "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen",
  "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"
];

var dessertOptions = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler",
  "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie",
  "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"
];

var sideOptionButton = document.querySelector("#sideButton");
var mainDishOptionButton = document.querySelector("#mainDishButton");
var dessertOptionButton = document.querySelector("#dessertButton");
var entireMealOptionButton = document.querySelector("#entireMealButton");
var cookButton = document.querySelector("#letsCookButton");
var recipeDisplayDiv = document.querySelector("#recipeDisplayDiv");
var selectedButton;
var randomSide;
var randomMain;
var randomDessert;
var random;

cookButton.addEventListener("click", displayRecipe);

function displayRecipe() {
  if (sideOptionButton.checked) {
    random = Math.floor(Math.random() * sideOptions.length);
    recipeDisplayDiv.innerHTML =
      `<h3 class="suggestionDisplayTitle">You should make:</h3><article class="display">${sideOptions[random]}</article>`;
  } else if (mainDishOptionButton.checked) {
    random = Math.floor(Math.random() * mainDishOptions.length);
    recipeDisplayDiv.innerHTML =
      `<h3 class="suggestionDisplayTitle">You should make:</h3><article class="display">${mainDishOptions[random]}</article>`;
  } else if (dessertOptionButton.checked) {
    random = Math.floor(Math.random() * dessertOptions.length);
    recipeDisplayDiv.innerHTML =
      `<h3 class="suggestionDisplayTitle">You should make:</h3><article class="display">${dessertOptions[random]}</article>`;
  } else if (entireMealOptionButton.checked) {
    randomSide = Math.floor(Math.random() * sideOptions.length);
    randomMain = Math.floor(Math.random() * mainDishOptions.length);
    randomDessert = Math.floor(Math.random() * dessertOptions.length);
    recipeDisplayDiv.innerHTML =
      `<h3 class="suggestionDisplayTitle">You should make:</h3><article class="display">${mainDishOptions[randomMain]}
      with a side of ${sideOptions[randomSide]} and ${dessertOptions[randomDessert]}
      for dessert!</article>`;
  }
};

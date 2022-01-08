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
var addRecipeButton = document.querySelector("#addRecipeBttn");

var selectedButton;
var randomSide;
var randomMain;
var randomDessert;
var random;
var clearBttn;

cookButton.addEventListener("click", selectRecipe);
addRecipeButton.addEventListener("click", showNewRecipeForm);

function selectRecipe() {
  if (sideOptionButton.checked) {
    showRecipe(sideOptions);
  } else if (mainDishOptionButton.checked) {
    showRecipe(mainDishOptions);
  } else if (dessertOptionButton.checked) {
    showRecipe(dessertOptions);
  } else if (entireMealOptionButton.checked) {
    showEntireMeal();
  } else {
    asterisk.innerHTML =
      `*`
  }
};

function showRecipe(recipeType) {
  asterisk.innerHTML =
    ``;
  random = Math.floor(Math.random() * recipeType.length);
  recipeDisplayDiv.innerHTML =
    `<h3 class="suggestionDisplayTitle">You should make:</h3>
    <article class="display">${recipeType[random]}</article>
    <div class="clearButtonDiv">
    <button class="clearButton">Clear</button>
    </div>`;
  selectClearButton();
}

function showEntireMeal() {
  asterisk.innerHTML =
    ``;
  randomSide = Math.floor(Math.random() * sideOptions.length);
  randomMain = Math.floor(Math.random() * mainDishOptions.length);
  randomDessert = Math.floor(Math.random() * dessertOptions.length);
  recipeDisplayDiv.innerHTML =
    `<h3 class="suggestionDisplayTitle">You should make:</h3>
    <article class="display">${mainDishOptions[randomMain]}
    with a side of ${sideOptions[randomSide]} and
    ${dessertOptions[randomDessert]} for dessert!</article>
    <div class="clearButtonDiv">
    <button class="clearButton">Clear</button>
    </div>`;
  selectClearButton();
}

function selectClearButton() {
  clearBttn = document.querySelector(".clearButton");
  clearBttn.addEventListener("click", clearRecipe);
}

function clearRecipe() {
  recipeDisplayDiv.innerHTML =
    `<img src="assets/cookpot.svg" class="cookpot" />`
};

function showNewRecipeForm() {
  addRecipeFormDiv.innerHTML =
  `  <form id="addRecipeForm">
      <label for="recipeTypeInput" class="addRecipeLabels">Recipe Type:</label>
      <input type="text" id="recipeTypeInput" class="addRecipeInput"/>
      <label for="recipeNameInput" class="addRecipeLabels">Recipe Name:</label>
      <input type="text" id="recipeNameInput" class="addRecipeInput"/>
      <button id="saveNewButtn">Add New</button>
    </form>`
}

var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots",
  "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"
];

var mainDishes = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry",
  "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen",
  "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"
];

var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler",
  "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie",
  "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"
];

var recipeTypes =["Side", "Main Dish", "Dessert"];

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
var recipeType;
var recipeName;
var saveNewBttn;
var enteredRecipe;
var recipeTypeError;
var recipeNameError;

cookButton.addEventListener("click", selectRecipe);
addRecipeButton.addEventListener("click", showNewRecipeForm);

function selectRecipe() {
  if (sideOptionButton.checked) {
    showRecipe(sides);
  } else if (mainDishOptionButton.checked) {
    showRecipe(mainDishes);
  } else if (dessertOptionButton.checked) {
    showRecipe(desserts);
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
  randomSide = Math.floor(Math.random() * sides.length);
  randomMain = Math.floor(Math.random() * mainDishes.length);
  randomDessert = Math.floor(Math.random() * desserts.length);
  recipeDisplayDiv.innerHTML =
    `<h3 class="suggestionDisplayTitle">You should make:</h3>
    <article class="display">${mainDishes[randomMain]}
    with a side of ${sides[randomSide]} and
    ${desserts[randomDessert]} for dessert!</article>
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
      <span id="typeError"></span>
      <label for="recipeNameInput" class="addRecipeLabels">Recipe Name:</label>
      <input type="text" id="recipeNameInput" class="addRecipeInput"/>
      <span id="nameError"></span>
      <button id="saveNewButton" type="button">Add New</button>
    </form>`;
  targetNewRecipeForm();
};

function targetNewRecipeForm() {
  recipeType = document.querySelector("#recipeTypeInput");
  recipeName = document.querySelector("#recipeNameInput");
  saveNewBttn = document.querySelector("#saveNewButton");
  recipeTypeError = document.querySelector("#typeError");
  recipeNameError = document.querySelector("#nameError");
  saveNewButton.addEventListener("click", saveNewRecipe);
};

function saveNewRecipe() {
  if (recipeType.value === "" || recipeName.value === "") {
    recipeTypeError.innerHTML =
    `*`;
    recipeNameError.innerHTML =
    `*`
  } else if (recipeTypes.includes(recipeType.value)) {
    if (recipeType.value === "Side") {
      recipeTypeError.innerHTML =
      ``;
      recipeNameError.innerHTML =
      ``
      sides.push(recipeName.value);
      recipeDisplayDiv.innerHTML =
        `<h3 class="suggestionDisplayTitle">You should make:</h3>
        <article class="display">${recipeName.value}</article>
        <div class="clearButtonDiv">
        <button class="clearButton">Clear</button>
        </div>`;
      recipeType.value = "";
      recipeName.value = "";
      selectClearButton();
    } else if (recipeType.value === "Main Dish") {
      recipeTypeError.innerHTML =
      ``;
      recipeNameError.innerHTML =
      ``
      mainDishes.push(recipeName.value);
      recipeDisplayDiv.innerHTML =
        `<h3 class="suggestionDisplayTitle">You should make:</h3>
        <article class="display">${recipeName.value}</article>
        <div class="clearButtonDiv">
        <button class="clearButton">Clear</button>
        </div>`;
      recipeType.value = "";
      recipeName.value = "";
      selectClearButton();
    } else if (recipeType.value === "Dessert") {
      recipeTypeError.innerHTML =
      ``;
      recipeNameError.innerHTML =
      ``
      desserts.push(recipeName.value);
      recipeDisplayDiv.innerHTML =
        `<h3 class="suggestionDisplayTitle">You should make:</h3>
        <article class="display">${recipeName.value}</article>
        <div class="clearButtonDiv">
        <button class="clearButton">Clear</button>
        </div>`;
      recipeType.value = "";
      recipeName.value = "";
      selectClearButton();
    }
  } else if (!recipeTypes.includes(recipeType.value)) {
    recipeTypeError.innerHTML =
    `*`;
    recipeNameError.innerHTML =
    `*`
  }
};

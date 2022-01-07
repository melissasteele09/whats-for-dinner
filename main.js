var sideOptions = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots",
"Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];

var mainDishOptions = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry",
"Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen",
"Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];

var dessertOptions = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler",
"Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie",
"Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];

var sideOptionButton = document.querySelector("#sideButton");
var mainDishOptionButton = document.querySelector("#mainDishButton");
var dessertOptionButton = document.querySelector("#dessertButton");
var cookButton = document.querySelector("#letsCookButton");
var recipeDisplayDiv = document.querySelector("#recipeDisplayDiv");
var selectedButton;
var random;

cookButton.addEventListener("click", displayRecipe);

function displayRecipe(){
  if(sideOptionButton.checked) {
    selectedButton = sideOptions;
  } else if(mainDishOptionButton.checked) {
    selectedButton = mainDishOptions;
  } else if(dessertOptionButton.checked) {
    selectedButton = dessertOptions;
  }
    random = Math.floor(Math.random() * selectedButton.length);
    recipeDisplayDiv.innerHTML =
    `<h3>You should make:</h3><article>${selectedButton[random]}<article/>`;
  };

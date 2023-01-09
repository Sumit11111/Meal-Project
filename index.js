//initialising the arrays to store data after fetching from api
const meal = [];
const Favourites = JSON.parse(localStorage.getItem("links")) || ["Burger"];

//handles the onkeypress inside search bar it call the api provided after every key hit
const searchHandler = (val) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    .then((response) => response.json())
    .then((data) => {
      meal.length = 0;
      //adding data in meal array
      meal.push(...data.meals);
    });
  //updates the node on everykey hit in search results list
  removeChildren("search-results-list");
  //creates node and add it to the dom
  meal.map((d) => {
    listCreation(d.strMeal);
  });
};

//creates different node and append each other
const listCreation = (text) => {
  //console.log("inside node creation");
  //creatig different nodes and appending each other with properties
  const liNode = document.createElement("li");
  liNode.id = "search-results-list-item";
  const divNode = document.createElement("div");
  divNode.id = "li-div";
  const textNode = document.createElement("a");
  textNode.innerText = text;
  textNode.href = `./details.html?${text}`;
  const btnNode = document.createElement("input");
  btnNode.value = "Favourite";
  btnNode.type = "button";
  //adding event listner on Favourite button inside list items
  btnNode.addEventListener(
    "click",
    () => {
      var flag = 0;
      //checking whether meal already in fav array or not
      for (let x of Favourites) {
        if (x == text) {
          flag = 1;
        }
      }
      //not in fav array it will add and create aleart and also add in localstorage
      if (flag === 0) {
        Favourites.push(text);
        localStorage.setItem("links", JSON.stringify(Favourites));
        window.alert("Added in your Favourites!");
      } else {
        window.alert("Already in your Favourites!");
      }
    },
    false
  );
  //appending different nodes with right manner
  liNode.appendChild(divNode);
  divNode.appendChild(textNode);
  divNode.appendChild(btnNode);
  document.getElementById("search-results-list").appendChild(liNode);
};

//removes children in recursive manner each list item on update of meal array
function removeChildren(parentId) {
  var childNodes = document.getElementById(parentId).childNodes;
  console.log("length:", childNodes.length);
  for (var i = childNodes.length - 1; i >= 0; i--) {
    var childNode = childNodes[i];
    childNode.parentNode.removeChild(childNode);
  }
}

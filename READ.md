meal-project

meal project In this project i have created a meal search bar on which every key press it will call an api to fetch data, on every key press list will create and destroy as new new data is fetched according to text typed in search bar.It will show results on which there is Favourite button which will add data in local storage on click and if u click on text it will navigate u to new page detail.html.

Inside header there is favourite link on click of that lick it will navigate t detail.html page which will show the details specific meal like(pic, name and instruction) to make that meal.

There are following functions in this project

    searchHandler is user to fetch meals on keypress inside search bar, it will add fetched data inside meal array, inside this list is created and destroyed on keypress by removeChildren and listCreation functions.
    listCreation function is used to create different nodes and appended according to our needs, inside these list there is favourite button on click of that it will add data in localstorage.
    removeChildren function is used to delete nodes in iterative manner on fetching new data from api. 4.Inside favourite.html script it will fetch data from local storage then store it in Favourites after that favCreation fucntion will create node like listCreation, inside list there will be delete button which will delete data from local storage.
    Inside detial.html script on clicking favourite link in index.html which will pass name of the list item on click of the names which will redirect to detail.html where parameter is manipulated then api is again called which will create nodes and append those using detailCreation function by passing required data.

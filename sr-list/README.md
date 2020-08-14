# SHOPPING RECIPE LIST /[SR-LIST](https://sr-list-ccafe.web.app/)/

## The Idea
Browse recipes or add your own. Mark them as Favorites List and later or directly, add them to Your Shopping List to get a summarised list of products you need to buy to prepare the recipes ...

### Table of Contents
- [How To Use The App](#how-to-use-the-app)
- [App Pages](#app-pages)
- [Functionality description](#functionality-description)
- [Further Project Development](#further-project-development)
- [Design](#design)
- [Techical Documentation](#technical-documentation)

## How To Use The App: 
Pages available for both Registered and Guest Users -
Home Page with the Latest Recipes
Info Page about the project and the maintainance team with dynamic statistic about all recipes and recipes by category /the numbers are retrieved from the database on page load/
Recipes Page where users can look through a set of recipes, load next set, search recipes by name or filter by recipe category

## App Pages

### Guest and LoggedIn Users Pages
- Home
- Info
- Recipes
- Login/Register
- Recipe /accesed by clicking on recipe name in recipes list in both Home and Recipes Pages/

### LoggedIn Users Only Pages
- Shopping List
- Favorites
- Add Recipe


## Functionality description
- [**User Login and Register**, Login/Register Page](#user-login-and-register)
- [**Recipes Statistics**, Info Page](#recipes-statistics)
- [**Latest Recipes**, Home Page](#latest-recipes)
- [**Add to Shopping list**](#add-to-shopping-list)
- [**Add to Favorites**](#add-to-favorites)
- [**Remove from Shopping list**](#remove-from-shopping-list)
- [**Remove from Favorites**](#remove-from-favorites)
- [**The Number of Recipes in The Shopping list or Favorites**](#the-number-of-recipes-in-the-shopping-list-or-favorites)
- [**Add Recipe, Add Recipe Page**](#add-recipe)
- [**See A Recipe, See A Recipe Page**](see-a-recipe)

### User Login/Register
/Login/Register Page/

Uses Firebase Auth Api which authenticates users with email and pasword
The input fields in **Login** and **Register** forms are validated against required, valid email, password string length, password must be repeated in a second input field and must match the string in the first field.
User receives error messages if email alredy exists/when trying to register/ or not found /on login attempt/.

Registered users are loggedin in the App.
Logged in users can Logout or will be loggedout after 60 minutes after the token recived from Firebase Auth expires.

User Token and Id are stored in the browser\`s local storage. This allows on page refresh user to stay logged in.

### Recipes Statistics
**Info Page**

The content on that page is static except for the numbers showing total recipes available in the App and the numbers of recipes for each category in The App.

### Latest Recipes 
**Home Page**

Shows/gets from database the last 9 recipes - latest recipes are first.
The rest of the content is static.

### Add to Shopping list
For logged in users each recipe in the recipes list /Home and Recipes Page/ has a button **+** for adding the recipe to the **shopping list**.

After a recipe has been added to the shopping list, its products appear on the right of the Shopping list page. Recipe name is added to list on the left side of the Shopping list page.
If a recipe is added again to the Shopping list, its name does not appear again in the left list, but the products for the recipe are added again /their quantities/ to the product quantities in the product shopping list.

If different recipes in the Shopping list require same products - the required quantities are **transformed to parent units** if needed and then summed up. Every unit is either a parent unit or has a parent unit and a transformation coefficient.

### Add to Favorites
For logged in users each recipe in the recipes list /Home and Recipes Page/ has a button **heart sign** for adding the recipe to the **favorites list**.

**Note** The above two Buttons are available for only **loggedin users** on **recipe page** also /page that shows information for a single recipe.

### Remove from Shopping List
**Shopping List Page**
Logged in users can remove a recipe from the shopping list and all product its products by clicking the trash button available next to each recipe name. If other recipes need same products, the quantities for the products of the deleted recipe are subtracted.

### Remove from favorites
**Favorites Page**
Logged in users can remove a recipe from the Favorites list by clicking the trash button available under each recipe name.

### The Number of Recipes in The Shopping list or Favorites
**in navigation Shopping list/Favorites button**

The number of recipes are being updated each time the logged in user adds/removes a recipe from the corresponding list.

**Add Recipe** also adds the recipe to user favorites list and thus updates the number next to Favorites button in the navigation

### Add Recipe
**Add Recipe Page**

Logged in user can add data for a recipe by entering recipe name, time for preparation, number of serving, uploading a picture/if a picture is missing a default placeholder is placed when displaying the recipe). User can add the products for the recipe - by clicking the + button can display as many inputs as needed for the recipe. User can add a recipe preparation procedure also.

### See A Recipe
**Single Recipe Page**

Every recipe in every recipe list /recipes, latest, favorites, shopping list/ has an **eye button**. Clicking the **eye button** leads to the selected the page of the selected recipe where the information for this recipe is displayed.

### Static elements
**elements as a part of the design only**

- Social buttons share
- Rating
- See Recipe /Home page Banner/

## Further Project Development

### Current project version does not cover
- Set auth rules to write in Firebase Database
- Full Error handling /on each action in the app/
- User can edit own recipes
- User can delete own recipes
- User can increase/decrease number of times the recipe has been added to shopping list
- User can set price for each product an calculate approximate cost of the shopping list

- Admin dashboard for 
    - managing users
    - managing products
    - managing recipes
 ## Design
 This project uses A Cololib template - [**Delicious**](https://colorlib.com/wp/template/delicious/)
    

## Techical Documentation:
* [**Project setup**](#project-setup)
* [**Run the project locally**](#run-the-project-locally)
* [**Deploy to live server**](#deploy-to-live-server)
* [**Backend**](#backend)


### Project setup
This project has been set up with **create-react-app**

### Run the project locally
**`npm start`**
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Deploy to live server
This project is available on live server: https://sr-list-ccafe.web.app/

**Steps to deploy the project to Firebase Hosting**

1. Build and optimise the project - run in the project root directory

**npm run build**
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />
Can be run to update the hosted project release.

2. Follow the instructions on Firebase Hosting Tab
- install firebase tools run - npm install -g firebase-tools
- sign in to Google run - firebase login /Note: Do not use GitBash is incorrectly identified as non-interactive mode by the firebase command line tool/
- initiate the project run - **firebase init**
    - after confirming mark **HOSTING**
    - select existing project
    - point that you want to use as a public directory the build folder of your project /to upload all files from the build directory/
    - confirm to configure as a **single page app**
    - answer No to question if to overwrite the existing index.html file<br/>

    The project folder gets .firebaserc and firebase.json hosting configuration files
- to deploy the project run - **firebase deploy**

- add the static files to the deploy directory - the default is public
- to deploy the website run - **firebase deploy**

### Backend

This project uses 
- managing project data - 
* [Firebase Realtime Database](https://firebase.google.com/products/realtime-database?gclid=CjwKCAjwps75BRAcEiwAEiACMRGJHNsml65EN5VROSQ8ljcqIuLoAF6VAe8TmdoSMFl9HhMDSJjndRoCHnEQAvD_BwE)
* [**Firebase Database Service**](https://firebase.google.com/docs/reference/js/firebase.database) 
* [**axios**](https://www.digitalocean.com/community/tutorials/react-axios-react)
* [**Authenticating isers**](#authenticating-users)
* [Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth?fbclid=IwAR1i7htQyToqcqR_RDr7gbNysgWv4FWZnNVrVumTvQ9x-nfquijlSqgCRZc)
** [Sign up with email / password](https://firebase.google.com/docs/reference/rest/auth?fbclid=IwAR1i7htQyToqcqR_RDr7gbNysgWv4FWZnNVrVumTvQ9x-nfquijlSqgCRZc#section-create-email-password)
** [Sign in with email / password](https://firebase.google.com/docs/reference/rest/auth?fbclid=IwAR1i7htQyToqcqR_RDr7gbNysgWv4FWZnNVrVumTvQ9x-nfquijlSqgCRZc#section-sign-in-email-password)

### Routing

Implemented with BrowserRouter, Switch, Route, Redirect from `react-router-dom`
Routes are differentiated for authenticated and guest users in routing.js
In sr-list\src\components\header\navBar\menu\ auth routes are guarded via global state property **isAuth**

### Global State management  
Implemented via **Redux** - 
`redux`, 
`react-redux`
**`redux-thunk`** 
With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.
Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

The Redux store is **initialized** in index.js. It consist of 7 slices of state - 
* recipes, 
* auth,   
* categories,
* units,
* products,
* shoppingList,
* favoriteRecipe

**Redux Dev Tools** are set up via the **const composeEnhancers**, which is to be removed before deploying the project /but left here for presentational purposes/

## Project Functionality Implementation
* [**User Auth Flow**](#user-auth-flow)
* [**Add A Recipe Flow**](#add-a-recipe-flow)
* [**Latest Recipes**](#latest-recipes)
* [**Recipes List Filter and Search Recipes**](#recipes-list-filter-and-search-recipes)
* [**Add and Remove Recipe From Shopping List](#add-and-remove-recipe-from-shopping-list)

### User Auth Flow
Starts from - src\pages\authPage\index.js
- **authPage** - a class component
- local state for form elements and form valid state - control enabling/disabling form submit button
- methods -  
    -   inputChangedHandler - validates and sets data in state on input. Calls the shared method - checkFormElementValidity
    -   checkIsValidForm - validates form inputs against required fields and enables/disables submit button by controlling local state prperty isValidForm,
    -   switchModeHandler - switches between login and signUp, sets in global state action type in order to select the proper URL for sending the auth request, 
    -   submitHandler - gets validated form data and dispatches the auth request which is handled by the global state - auth method. The auth method on success saves in the local storage user's id, token and token's expiration date, used for reauthorizing the user.
 **Auth reducer** methods
 - setUserAuthType
 - authStart
 - authSuccess
 - authFail
 - setAuthRedirectPath - redirects to the Home page on success
 - authCheckState calls checkAuthTimeout - called in Routing component's componentDidMount - for user to stay loggedin after page refresh/reload if token did not expired
 - logout - removes token, userId, expirationDate from the local storage
 
 
### Add A Recipe Flow
- Starts from src\pages\addRecipePage\index.js
- **AddRecipe** - a class component
- local state keeps the form elements data. **Note** the form is not validated
- componentDidMount dispatches method for fetching categories and setting category data in the global categories state.
- inputChangedHandler, productDataChangedHandler - set in state form input data
- addIngredientInputsHandler - sets new ingredient in local state. An ingredients input row is displayed for each ingredient in the local state. Component AddIngredient is used to display ingredient input group.
- widgetOpen - uses the Cloudinary service for storing the recipe image
- submitFormHandler - adds recipe data in database - in recipes.json and favorites.json/as a current loggedin user's recipe/ and on success redirects to the home page
**Global state for addRecipe component**
- fetching categories 
- in child component - addIngredient - to fetch units and products

### Latest Recipes
- starts in sr-list\src\pages\homePage\index.js
- HomePage is a functional/stateless/ component
- It calls the **Recipes class based component**.
**Recipes component**
-   componentDidMount -  The logic in Recipes is split based on the value of of **type property**
-   onFetchLatestRecipes - uses **global Recipes state** to get the latest recipes in descending order. <br/>
    Number of recipes fetched is controlled by local **perPage property** 
-   Fetched recipes are displayed by calling **RecipeCard component** /has propteries - title, image, recipeId/
-   modalClickedHandler - resets modal message which appears after adding to Shopping or favorites list

### Recipes List Filter and Search Recipes
- starts in sr-list\src\pages\recipesPage\index.js
-  **Recipes Page** is set as a class based component. <br/>
    At this point of development has no local state.<br/>
    Uses **RecipesList** component to perform **load-more** type pagination.<br/>
    The page/set of recipes to displayed is controlled by **page property** of RecipesList component.
    **Global categories state** is used to fetched the categories for **categories property** of RecipesList component.
    
    **RecipesList component**
   Calls  **RecipeFiltersBlock** component.
   -  filterByCategoryHandler - saves in **local state** current filter value and dispatches **Global recipes state's** method fetchFilteredRecipesList(filterName, filterValue)
   **Note** Since Recipes list component gets recipes by rendering **Recipes component** which in turn gets recipes to be loaded from the global recipes state and when recipes are being filtered the method fetchFilteredRecipesList sets in global state the value of the global recipe property - the button FILTER is useless, since after a category to filter recipes is selected, recipes are displayed instantly.
   -  searchByRecipeNameHandler - dispatches **Global recipes state's** method fetchByNameRecipesList(filterName, filterValue)
   -  inputChangedHandler - saves in lical state current search value   
    
    
### Add and Recipe From Shopping List
**Add Recipe**
- implemented in src\components\recipeCard\index.js and sr-list\src\pages\recipePage\index.js
 - addRecipeToShoppingListHandler - dispatches **global shopping list state's method** addRecipeToShoppingList
        - on success this method dispatches     - addToShoppingListSuccess() - to set success message
                                                - countUserShoppingListRecipes(userId) - to update number of recipes in tha nav tab
**Remove Recipe** - see **Current User's recipes in SL**

### Current User's recipes in SL
sr-list\src\pages\shoppingListPage\index.js
**Shopping List** class based component
- componentDidMount 
    - gets user's recipes by global state method - getUserShoppingList
    - gets units and product from the global state

- createShoppingList - 
      - receives user's shopping list, units, products as parameters
      - returns data object consisted of two prperties/type of array/ - unique recipes/arrRecipes/ and unique products/arrProducts/ from the recipes with their data
    
  removeFromShoppingListHandler - dispatches globals state method - removeRecipeFromShoppingList 
  
  modalClickedHandler - closes modal message and resets message. Since messages are retrieved from the global state.
  
  **shoppingListData** is created after all needed data is set in state - the shoppingList, the products, the units
  **createShoppingList** method is called - reduces the data to Recipes and Products arrays
  While the reduced data object is created user sees **Spinner** /stateless component/
  

### Add Recipe To Favorites, Remove Recipe From Favorites

### Current User's recipes in FL
### See Recipe

## Components
### Elements
### Pages 
## Shared functionality
## Store

  







Auth - firebase auth ...
list here all react libraries imported


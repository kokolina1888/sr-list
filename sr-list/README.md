# SHOPPING RECIPE LIST /[SR-LIST](https://sr-list-ccafe.web.app/)/

## The Idea
Mark your favorites recipes - add them to Your Favorite List and later or directly, add them to Your Shopping List to get a summarised list of products you need to buy to prepare the recipes ...

### Table of Contents
- [How To Use The App](#how-to-use-the-app)
- [App Pages](#app-pages)
- [Brief functionality description](#brief-functionality-description)
- [Further Project Development](#further-project-development)
- [Design](#design)
- Techical Documentation

## How To Use The App: 
Pages available to both Registered and Guest Users -
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


## Brief functionality description
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
 This project uses A Cololib template - **Delicious**
    

## Techical Documentation:
DataBase, Backend API, Hosting: Firebase
Global State management - Redux /redux, react-redux/
Routing - 
Auth - firebase auth ...
list here all react libraries imported

Steps to run the project locally:
run from the project root - npm start

This project is available on live server: https://sr-list-ccafe.web.app/

 

Steps to deploy the project to Firebase Hosting
1. Build and optimise the project - run in the project root directory
npm run build 
2. Follow the instructions on Firebase Hosting Tab
- install firebase tools run - npm install -g firebase-tools
- sign in to Google run - firebase login /Note: Do not use GitBash is incorrectly identified as non-interactive mode by the firebase command line tool/
- initiate the project run - firebase init
    - after confirming mark HOSTING
    - select existing project
    - point that you want to use as a public directory the build folder of your project /to upload all files from the build directory/
    - confirm to configure as a single page app
    - answer No to if to overwrite the existing index.html file

    The project folder got .firebaserc and firebase.json hosting configuration files
- deploy the project run - firebase deploy

- add the static files to the deply directory - the default is public
  deploy the website run - firebase deploy

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

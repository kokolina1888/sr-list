SHOPPING RECIPE LIST /SR-LIST/

The Idea: Mark your favorites recipes - add them to Your Favorite List and later or directly add them to Your Shopping List to get a summarised list of products you need to buy to prepare the recipes ...

How To Use The App: 
Pages available to both Registered and Guest Users -
Home Page with the Latest Recipes
Info Page about the project and the maintainance team with dynamic statistic about all recipes and recipes by category /the numbers are retrieved from the database on page load/
Recipes Page where users can look through a set of recipes, load next set, search recipes by name or filter by recipe category

Pages and Functionalities Available to only Registered users:
List of pages and ponit out functionalities here

Brief functionality description: 
User Login/Register
Recips Statistics /Info Page/
Latest Recipes /Home Page/
Add to Shopping list
Add to Favorites
Add Recipe

Static /non functional elements/:
Social buttons share
Rating
See Recipe /Home page Banner/

Further Project Development:

Set auth rules to write in Firebase Database
Error handling on each action
Edit recipe
User can delete own recipes
Increase/decrease number of times the recipe been added to shopping list
Set Price for each product an calculate approximate cost of the shopping list

Admin dashboard for 
    - managing users
    - products
    

Techical Documentation:
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

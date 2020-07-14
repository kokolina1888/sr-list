import React from 'react';
import './app.module.css';
import Header from './components/header/header';
import Banner from './components/banner';
import Footer from './components/footer';
import RecipesList from './components/recipesList';
import Recipes from './components/recipes';
import Recipe from './components/recipe';
import Auth from './components/auth'
import ShoppingList from './components/shoppingList';
import InfoPage from './components/infoPage';

function App() {
  return (
    <div className={StyleSheet.app}>
      <Header />
      {/* <Banner type="home" /> */}
      {/* <Banner type="recipes" /> */}
      {/* <Banner type="shopping" /> */}

      {/* <Recipes title="Latest Recipes" /> */}
      {/* <RecipesList/> */}
      {/* <Recipe/> */}
      {/* <Auth/> */}
      {/* <ShoppingList/> */}
      <InfoPage/>
      <Footer />
    </div>
  );
}

export default App;

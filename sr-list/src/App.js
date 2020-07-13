import React from 'react';
import './app.module.css';
import Header from './components/header/header';
import Banner from './components/banner';
import Footer from './components/footer';
import RecipesList from './components/recipesList';
import Recipes from './components/recipes';
import Recipe from './components/recipe';

function App() {
  return (
    <div className={StyleSheet.app}>
      <Header />
      {/* <Banner type="home" /> */}
      {/* <Banner type="recipes" /> */}

      {/* <Recipes title="Latest Recipes" /> */}
      {/* <RecipesList/> */}
      <Recipe/>
      <Footer />
    </div>
  );
}

export default App;

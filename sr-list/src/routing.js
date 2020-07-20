import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from './pages/homePage'
import InfoPage from './pages/infoPage'
import RecipesPage from "./pages/recipesPage";
import AddRecipePage from "./pages/addRecipePage";
import ShoppingListPage from "./pages/shoppingListPage";
import RecipePage from './pages/recipePage';
import AuthPage from './pages/authPage'

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/recipes/:page" component={RecipesPage} />
        <Route path="/shopping-list" component={ShoppingListPage} />
        <Route path="/add-recipe" component={AddRecipePage} />
        <Route path="/recipe/:recipe" component={RecipePage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;

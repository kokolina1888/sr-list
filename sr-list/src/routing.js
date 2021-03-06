import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homePage";
import InfoPage from "./pages/infoPage";
import RecipesPage from "./pages/recipesPage";
import AddRecipePage from "./pages/addRecipePage";
import ShoppingListPage from "./pages/shoppingListPage";
import RecipePage from "./pages/recipePage";
import AuthPage from "./pages/authPage";
import FavoritesPage from './pages/favoritesPage'
import * as actions from "./store/actions/index";

class Routing extends Component {
  
  componentDidMount() {
    console.log('test')
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/recipes" component={RecipesPage} />
        <Route path="/recipe/:recipe" component={RecipePage} />        
        <Route path="/auth" component={AuthPage} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/info" component={InfoPage} />
          <Route path="/recipes" component={RecipesPage} />
          <Route path="/shopping-list" component={ShoppingListPage} />
          <Route path="/add-recipe" component={AddRecipePage} />
          <Route path="/recipe/:recipe" component={RecipePage} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/auth" component={AuthPage} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return <BrowserRouter>{routes}</BrowserRouter>;
  }
}
const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Routing);

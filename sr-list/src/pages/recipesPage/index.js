import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import UserLayout from "../../components/layouts/userLayout";
import Banner from "../../components/banner";
import RecipesList from "../../components/recipesList";

class RecipesPage extends Component {
  componentDidMount() {
    this.props.onFetchCategories();
  }
  render() {
    
    return (
      <UserLayout>
        <Banner type="recipes" />
        <RecipesList page={this.props.match.params.page} categories={this.props.categories} />
      </UserLayout>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategories: () => dispatch(actions.fetchCategories()),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(RecipesPage);

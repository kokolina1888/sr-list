import React, { Component } from "react";
import RecipeCard from "../recipeCard";

import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Spinner from "../UI/spinner";

import styles from "./index.module.css";

class Recipes extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.onFetchRecipes(this.props.nums);
  }

  render() {
    let recipes = <Spinner/>
    if( !this.props.loading ){
    recipes = this.props.recipes.map((recipe) => (
      <div key={recipe.id}  className="col-12 col-sm-6 col-lg-4">
        <RecipeCard title={recipe.name} />
      </div>
    ));
    }
    return (
      <section className={styles.latest}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles["latest-header"]}>
                <h3 className={styles.title}>{this.props.title}</h3>
              </div>
            </div>
          </div>
          <div className="row">{ recipes }</div>
        </div>
      </section>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    recipes: state.recipes,
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchRecipes: (num) => dispatch(actions.fetchRecipes(num)),    
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Recipes);

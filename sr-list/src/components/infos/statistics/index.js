import React, { Component } from "react";
import { connect } from "react-redux";
import StatisticsCard from "../statisticsCard";
import axios from "axios";
import { firebaseLooper } from "../../../shared";
import styles from "./index.module.css";
import { firebaseRecipes } from "../../../firebase";
import * as actions from "../../../store/actions";
import { plainObject } from "../../../shared";
import Spinner from "../../UI/spinner";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

class Statistics extends Component {
  
  componentDidMount() {
    this.props.onFetchCategories();
    this.props.onCountTotalRecipes();
    this.props.onFetchRecipesByCategory();
  }
  componentDidUpdate(previousProps, previousState) {
    console.log('component did mount')
    if (previousProps.categories !== null && this.props.recipesByCategoryData !== null) {
      if (
        previousProps.recipesByCategoryData.length <
        previousProps.categories.length
      ) {
        this.props.onFetchRecipesByCategory();
      }
    }
  }

  render() {
    let statistics = <Spinner />;
    let statisticsTotal = <Spinner />;
    if (this.props.totalRecipes) {
      statisticsTotal = (
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard
            type="total"
            title="Total"
            count={this.props.totalRecipes}
          />
        </div>
      );
    }

    let recipes = [];
    if (this.props.recipesByCategoryData && this.props.categories) {
      console.log(
        this.props.recipesByCategoryData.length == this.props.categories.length
      );
     
        recipes = this.props.recipesByCategoryData;
        console.log(recipes);
        //TO DO CHECK IF RECIPES.LENGTH IS EQUAL TO CATEGORY LENGTH

        let num = 1;
        statistics = recipes.map((r) => {
          return (
            <div className="col-12 col-sm-6 col-lg-3" key={num++}>
              <StatisticsCard
                type={r.categoryName}
                title={r.categoryName}
                count={r.count}
              />
            </div>
          );
        });
      
    }
    return (
      <div className={styles.container + " row"}>
        {statisticsTotal}
        {statistics}
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    totalRecipes: state.recipes.totalRecipes,
    recipesByCategoryData: state.recipes.recipesByCategory,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategories: () => dispatch(actions.fetchCategories()),
    onFetchRecipesByCategory: () => dispatch(actions.fetchRecipesByCategory()),
    onCountTotalRecipes: () => dispatch(actions.fetchTotalRecipes()),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Statistics);

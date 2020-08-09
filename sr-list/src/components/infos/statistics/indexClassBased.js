import React, { Component } from "react";
import StatisticsCard from "../statisticsCard";
import axios from "axios";
import styles from "./index.module.css";
import { firebaseRecipes } from "../../../firebase";
import Spinner from "../../UI/spinner";
class Statistics extends Component {
  
  state = {
    dataRecipe: null,
    total: 0
  }
  componentDidMount() {
    this.onFetchRecipesByCategory();
    this.countTotalRecipes()
  }

  async countTotalRecipes() {
    const total = await firebaseRecipes
      .orderByKey()
      .once("value")
      .then((snapshot) => {
        return snapshot.numChildren()
      })
      .catch((err) => {
        //dispatch method for setting error in state
      });
      this.setState({
       total: total,
      });
  }
  async onFetchRecipesByCategory() {
    let recipeData = [];
    const categories = await axios
      .get("https://sr-list-ccafe.firebaseio.com/categories.json")
      .then((response) => {
        return response.data;
      });
    
    for (let ind in categories) {
      let currCategory = categories[ind];
      const queryParams = '?orderBy="categoryName"&equalTo="' + ind + '"';
      let currentData = await axios
        .get("https://sr-list-ccafe.firebaseio.com/recipes.json" + queryParams)
        .then((recipes) => {
          return recipes.data;
        })
        .then((res) => {
          return {
            categoryName: currCategory.name,
            count: Object.keys(res).length,
          };
        })
        .catch((err) => {});

        recipeData.push(currentData)
        
    }
    this.setState({
      dataRecipe: recipeData
    })    
  }

  render() {
    let statistics = <Spinner />;
    let statisticsTotal = <Spinner />;
    if (this.state.total) {
      statisticsTotal = (
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard
            type="total"
            title="Total"
            count={this.state.total}
          />
        </div>
      );
    }

    let recipes = [];
    if (this.state.dataRecipe) {
     
      recipes = this.state.dataRecipe;
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


export default Statistics;

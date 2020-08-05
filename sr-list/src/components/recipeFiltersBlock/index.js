import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import styles from "./index.module.css";
import Input from "../UI/form/input";
import Select from "../UI/form/select";
import Button from "../UI/button";

class RecipeFiltersBlock extends Component {
  state = {
    filter: {
      value: null,
    },
    search: {
      value: '',
    },
  };

  filterByCategoryHandler = (event) => {
    this.setState({
      filter: {
        value: event.target.value,
      },
    });
    this.props.onFetchFilteredRecipesList("categoryName", event.target.value);
  };
  searchByRecipeNameHandler = (event) => {
    this.props.onSearchByNameRecipesList('name', this.state.search.value)
  };
  inputChangedHandler = (event) => {
    this.setState({
      search: {
        value: event.target.value
      }
    })
  }
  render() {
    return (
      <div className={styles["recipe-filters-block"] + " mb-80"}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <Select
                placeholder="Select a category"
                place="recipe-filter"
                ops={this.props.categories}
                value={this.state.filter.value}
                changed={(event) => {
                  this.filterByCategoryHandler(event);
                }}
              />
            </div>
            <div className="col-12 col-lg-2 text-right">
              <Button type="recipe-filter">Filter</Button>
            </div>
            <div className="col-12 col-lg-4">
              <Input
                type="text"
                name="search"
                placeholder="Search Recipes By Name"
                place="recipe-search"
                value={this.state.search.value}
                changed={this.inputChangedHandler}
              />
            </div>
            <div className="col-12 col-lg-2 text-right">
              <Button
                type="recipe-search"
                clicked={(event) => {
                  this.searchByRecipeNameHandler(event);
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFilteredRecipesList: (filterName, filterValue) =>
      dispatch(actions.fetchFilteredRecipesList(filterName, filterValue)),
    onSearchByNameRecipesList: (filterName, filterValue) =>
      dispatch(actions.fetchByNameRecipesList(filterName, filterValue)),
  };
};
export default connect(null, mapDispatchToProps)(RecipeFiltersBlock);

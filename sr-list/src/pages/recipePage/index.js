import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import UserLayout from "../../components/layouts/userLayout";

import Breadcrumb from "../../components/breadcrumb";
import Spinner from "../../components/UI/spinner";

import styles from "./index.module.css";
import { firebaseRecipes } from "../../firebase";
import { plainObject } from "../../shared/index";
class Recipe extends Component {
  state = {
    recipe: null,
  };
  componentDidMount() {
   console.log(this.props.match.params.recipe);
    firebaseRecipes
      .orderByKey()
      .startAt(this.props.match.params.recipe)
      .limitToFirst(1)
      .once("value")
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((childSnapshot) => {
          data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key,
          });
        });
        this.setState({
          recipe: data[0],
        });
        console.log(data)
      })
      .catch((err) => {});
      
    this.props.onFetchUnits();
    this.props.onFetchProducts();
    this.props.onFetchCategories();
  }
  render() {
    console.log(this.state.recipe)
    const products = plainObject(this.props.products);   
    const units = plainObject(this.props.units);
    let recipeData = <Spinner />;
    if (this.state.recipe) {
      const data = this.state.recipe;
      recipeData = (
        <Fragment>
          <div className="row">
            <div className="col-12 col-md-12">
              <div className={styles.headline + " my-5"}>
                <h2>{data.name}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-md-8">
              <div className={styles.info}>
                <img className={styles.img} src={data.image} alt="" />
              </div>
              <div className={styles.info}>
                <div className={styles.prep}>
                  <h6>Prep: {data.prepTime} min</h6>
                  <h6>Servings: {data.servings} </h6>
                </div>
              </div>
              <div className="col-12">
                <div className={styles.desc + " d-flex"}>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className={styles.ingredients}>
                <h4>Ingredients</h4>
                {data.ingredients.map((ing) => {
                  return (
                    <div
                      className="custom-control custom-checkbox"
                      key={ing.id}
                    >
                      <span
                        className="custom-control-span"
                        htmlFor="customCheck1"
                      >
                        {ing.productQuantity} {units[ing.units]} {products[ing.productName]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
    return (
      <UserLayout>
        <Breadcrumb>Recipe</Breadcrumb>
        <div className="receipe-content-area">
          <div className="container">{recipeData}</div>
        </div>
      </UserLayout>
    );
  }
}
const mapsStateToProps = (state) => {
  return {
    units: state.units.units,
    products: state.products.products,
    categories: state.categories.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUnits: () => dispatch(actions.fetchUnits()),
    onFetchProducts: () => dispatch(actions.fetchProducts()),
    onFetchCategories: () => dispatch(actions.fetchCategories()),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Recipe);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import UserLayout from "../../components/layouts/userLayout";
import Breadcrumb from "../../components/breadcrumb";
import Link from "../../components/UI/link";
import styles from "./index.module.css";
import Spinner from "../../components/UI/spinner";
import Modal from '../../components/UI/modal'
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { plainObjectWithData } from "../../shared";

class ShoppingList extends Component {
  state = {
    shoppingListProducts: null,
    shoppingListRecipes: null,
  };
  componentDidMount() {
    this.props.onGetShoppingList(this.props.userId);
    this.props.onFetchUnits();
    this.props.onFetchProducts();
  }

  createShoppingList = (list, dataProducts, units) => {
    let data = {};
    let recipes = {};
    let products = {};
    let prodObj = plainObjectWithData(this.props.products);
    let unitObj = plainObjectWithData(this.props.units);
    for (let ind in list) {
      //current recipe
      let curData = list[ind];
      let ings = curData.recipe.ingredients;
      //filter unique recipes in list
      if (!recipes[curData.recipe.id]) {
        recipes[curData.recipe.id] = curData.recipe;
      }

      //sum up recipe products
      for (let ind in ings) {
        let curIng = ings[ind];
        let unitData = unitObj[curIng.units];
        let quant = curIng.productQuantity;
        let unit = curIng.units;
        let unitName = unitData.name;
        //check if product unit has parent to transform to parent unit

        if (unitData.parent) {
          quant = curIng.productQuantity * unitData.coefToTransform;
          unit = unitData.parent;
          unitName = unitObj[unitData.parent].name;
        }
        //check if unit is in products obj
        let productToAddData = {
          prodName: prodObj[curIng.productName].name,
          quantity: +quant,
          unitName: unitName,
        };
        if (!products[unit]) {
          products[unit] = {};
          products[unit][curIng.productName] = productToAddData;
        } else {
          //unit is in the data already
          //check if this product is in the data
          if (products[unit][curIng.productName]) {
            //only add up to product quantity
            products[unit][curIng.productName] = {
              ...products[unit][curIng.productName],
              quantity: +products[unit][curIng.productName].quantity + +quant,
            };
          } else {
            //init product data
            products[unit][curIng.productName] = productToAddData;
          }
        }
      }
    }

    let arrRecipes = [];
    let arrProducts = [];
    for (let ind in recipes) {
      arrRecipes.push(recipes[ind]);
    }
    for (let ind in products) {
      for (let k in products[ind]) {
        arrProducts.push(products[ind][k]);
      }
    }
    data.recipes = arrRecipes;
    data.products = arrProducts;
    return data;
  };

  removeFromShoppingListHandler = (event, recipeId) => {
    event.preventDefault();
    this.props.onRemoveFromShoppingList(recipeId, this.props.userId);
  };
  modalClickedHandler = () => {
    this.props.onResetSLMessages();
  };
  render() {
    let shoppingListData = "";

    if (this.props.shoppingList && this.props.products && this.props.units) {
      shoppingListData = this.createShoppingList(
        this.props.shoppingList,
        this.props.products,
        this.props.units
      );
    }
    let recipesData = <Spinner />;
    let productsData = <Spinner />;
    if (shoppingListData) {
      if (shoppingListData.recipes) {
        let num = 1;
        recipesData = shoppingListData.recipes.map((recipe) => {
          return (
            <div
              key={recipe.id}
              className={styles["single-preparation-step"] + " d-flex"}
            >
              <span className={styles.recipe}>{num++}.</span>
              <div>
                {recipe.name}
                <Link
                  href={"/recipe/" + recipe.id}
                  type="shopping-list"
                  title="See Recipe!"
                >
                  <FontAwesomeIcon className={styles.fav} icon={faEye} />
                </Link>
                <Link
                  href="#"
                  type="remove"
                  onClick={(event) =>
                    this.removeFromShoppingListHandler(event, recipe.id)
                  }
                  title="Remove from Shopping List"
                >
                  <FontAwesomeIcon className={styles.fav} icon={faTrash} />
                </Link>
              </div>
            </div>
          );
        });
        if (shoppingListData.products) {
          let num = 1;
          productsData = shoppingListData.products.map((prod) => {
            return (
              <tr key={num}>
                <td>{num++}</td>
                <td>{prod.prodName}</td>
                <td>{prod.quantity}</td>
                <td>{prod.unitName}</td>
              </tr>
            );
          });
        }
      }
    }
    console.log(this.props.successSL);
    let modal = "";
    if (this.props.successSL) {
      modal = (
        <Modal
          message={this.props.successSL}
          type="success"
          clicked={this.modalClickedHandler}
        />
      );
    }

    return (
      <UserLayout>
        <Breadcrumb>Shopping List</Breadcrumb>
        <div className="receipe-content-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">{recipesData}</div>
              <div className={styles["container"] + " col-12 col-lg-8"}>
                <h4 className={styles.title}>Shopping List</h4>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Product</td>
                      <td>Quantity</td>
                      <td>Units</td>
                    </tr>
                  </thead>
                  <tbody>{productsData}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {modal}
      </UserLayout>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    units: state.units.units,
    products: state.products.products,
    shoppingList: state.shoppingList.shoppingList,
    userId: state.auth.userId,
    successSL: state.shoppingList.success
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetShoppingList: (userId) =>
      dispatch(actions.getUserShoppingList(userId)),
    onFetchUnits: () => dispatch(actions.fetchUnits()),
    onFetchProducts: () => dispatch(actions.fetchProducts()),
    onRemoveFromShoppingList: (recipeId, userId) =>
      dispatch(actions.removeRecipeFromShoppingList(recipeId, userId)),

    onResetSLMessages: () => dispatch(actions.resetSLMessages()),
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(ShoppingList);

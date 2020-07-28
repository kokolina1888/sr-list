import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import axios from "axios";

import UserLayout from "../../components/layouts/userLayout";
import AddIngredient from "../../components/addIngredient";
import Breadcrumb from "../../components/breadcrumb";
import Input from "../../components/UI/form/input";
import Select from "../../components/UI/form/select";
import Textarea from "../../components/UI/form/textarea";
import Spinner from "../../components/UI/spinner";
import Link from "../../components/UI/link";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class AddRecipe extends Component {
  state = {
    image: "",
    controls: {
      name: {
        value: "",
        required: true,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "",
      },
      description: {
        value: "",
        required: true,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "",
      },
      servings: {
        value: "",
        required: true,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "number",
      },
      prepTime: {
        value: "",
        required: true,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "number",
      },
      category: {
        value: "",
        required: true,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "",
      },
    },
    ingredients: [
      {
        productName: "",
        productQuantity: "",
        units: "",
        id: 0,
      },
    ],

    lastIngId: 0,
    categories: null,
    units: null,
    products: null,
  };

  componentDidMount() {
    this.props.onFetchCategories();
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
      },
    };
    this.setState({ controls: updatedControls });
  };

  productDataChangedHandler = (event, controlName, id) => {
    let updatedIngredients = [...this.state.ingredients];
    updatedIngredients[id][controlName] = event.target.value;
    this.setState({ ingredient: updatedIngredients });
  };
  addIngredientInputsHandler = (event) => {
    let ingredients = [...this.state.ingredients];
    let newId = this.state.lastIngId + 1;
    ingredients.push({
      productName: "",
      productQuantity: "",
      units: "",
      id: newId,
    });

    this.setState({ ingredients: ingredients, lastIngId: newId });
  };

  widgetOpen = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "drn0epwvu",
        uploadPreset: "jqzxsaue",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.setState({ image: result.info.secure_url });
        }
      }
    );
    widget.open();
  };
  submitFormHandler = (event) => {
    event.preventDefault();
    const recipeData = {
      userId: this.props.userId,
      name: this.state.controls.name.value,
      description: this.state.controls.description.value,
      servings: this.state.controls.servings.value,
      prepTime: this.state.controls.prepTime.value,
      categoryName: this.state.controls.category.value,
      ingredients: this.state.ingredients,
      image: this.state.image,
    };

    axios
      .post("https://sr-list-ccafe.firebaseio.com/recipes.json", recipeData)
      //  .post("/recipes.json?auth=" + this.props.token, recipeData)
      .then((response) => {
        const favoritesData = {
          recipeId: response.data.name,
          userId: this.props.userId,
          name: this.state.controls.name.value,
          image: this.state.image,
        };
        axios
          .post(
            "https://sr-list-ccafe.firebaseio.com/favorites.json",
            favoritesData
          )
          //  .post("/recipes.json?auth=" + this.props.token, recipeData)
          .then((response) => {})
          .catch((error) => {
            console.log(error);
          });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addRecipeToRecipesList = (data) => {
    axios
      .post("https://sr-list-ccafe.firebaseio.com/recipes.json", data)
      //  .post("/recipes.json?auth=" + this.props.token, recipeData)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  addRecipeToFavoritesList = (data) => {};
  render() {
    let categoriesSelect = <Input placeholder="Select a category ..." />;
    if (this.props.categories) {
      categoriesSelect = (
        <Select
          ops={this.props.categories}
          place="add-recipe"
          changed={(event) => this.inputChangedHandler(event, "category")}
          placeholder="Select a category"
        />
      );
    }
    let addIngredients = <Spinner />;
    if (this.state.ingredients) {
      addIngredients = this.state.ingredients.map((ing) => {
        return (
          <AddIngredient
            key={ing.id}
            productChanged={(event) =>
              this.productDataChangedHandler(event, "productName", ing.id)
            }
            productQuantChanged={(event) =>
              this.productDataChangedHandler(event, "productQuantity", ing.id)
            }
            productUnitChanged={(event) =>
              this.productDataChangedHandler(event, "units", ing.id)
            }
          />
        );
      });
    }
    let imageUrl = this.state.image;

    return (
      <UserLayout>
        <div className="contact-area section-padding-0-80">
          <Breadcrumb>Add a Recipe</Breadcrumb>
          <div className="container">
            <div className="row">
              <div className={styles.title}>
                <h3>Recipe info</h3>
              </div>
            </div>
            <div className={styles.form}>
              <form onSubmit={(event) => this.submitFormHandler(event)}>
                <div className="row">
                  <div className="col-12">
                    <Input
                      type="text"
                      placeholder="Recipe name ..."
                      changed={(event) =>
                        this.inputChangedHandler(event, "name")
                      }
                    />
                  </div>
                  <div className="col-12 col-lg-3">
                    {imageUrl ? (
                      <div>
                        <img src={imageUrl} width="200" alt="" />
                      </div>
                    ) : (
                      <div className={styles.placeholder}></div>
                    )}
                  </div>
                  <div className="col-12 col-lg-9">
                    <div className="col-12 col-lg-12">{categoriesSelect}</div>
                    <div className="col-12 col-lg-6">
                      <Input
                        type="text"
                        placeholder="Preparation time /min/..."
                        changed={(event) =>
                          this.inputChangedHandler(event, "prepTime")
                        }
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <Input
                        type="text"
                        placeholder="Servings ..."
                        changed={(event) =>
                          this.inputChangedHandler(event, "servings")
                        }
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <a
                        id="upload_widget"
                        className="cloudinary-button"
                        onClick={this.widgetOpen}
                      >
                        <span className={styles["upload-label"]}>
                          Upload image
                        </span>
                      </a>
                    </div>
                  </div>
                  <table className={styles.table + " table table-striped"}>
                    <thead>
                      <tr>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                        <th>Units</th>
                      </tr>
                    </thead>
                    <tbody>{addIngredients}</tbody>
                  </table>

                  <Link
                    type="add-ing"
                    onClick={(event) => this.addIngredientInputsHandler(event)}
                  >
                    <FontAwesomeIcon className={styles.plus} icon={faPlus} />
                  </Link>

                  <div className="col-12">
                    <Textarea
                      className="form-control"
                      cols="30"
                      rows="10"
                      placeholder="Recipe description"
                      changed={(event) =>
                        this.inputChangedHandler(event, "description")
                      }
                    />
                  </div>

                  <div className="col-12 text-center">
                    <Input
                      type="submit"
                      value="ADD RECIPE"
                      place="add-recipe"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </UserLayout>
    );
  }
}
const mapsStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    userId: state.auth.userId,
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategories: () => dispatch(actions.fetchCategories()),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(AddRecipe);

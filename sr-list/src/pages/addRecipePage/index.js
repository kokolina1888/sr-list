import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import UserLayout from "../../components/layouts/userLayout";
import Input from "../../components/UI/form/input";
import Button from "../../components/UI/button";
import Breadcrumb from "../../components/breadcrumb";
import Select from "../../components/UI/form/select";
import Textarea from "../../components/UI/form/textarea";
import AddIngredient from "../../components/addIngredient";

import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/UI/spinner";

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
          console.log("Done! Here is the image info: ", result.info.secure_url);
          this.setState({ image: result.info.secure_url });
        }
      }
    );
    widget.open();
  };

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
              <div className="row">
                <div className="col-12">
                  <Input
                    type="text"
                    placeholder="Recipe name ..."
                    changed={(event) => this.inputChangedHandler(event, "name")}
                  />
                </div>
                <div className="col-12 col-lg-3">
                  {imageUrl ? (
                    <div>
                      <img src={imageUrl} width="200" />
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
                    <button
                      id="upload_widget"
                      className="cloudinary-button"
                      onClick={this.widgetOpen}
                    >
                      Upload image
                    </button>
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

                <Button
                  type="add-ing"
                  clicked={(event) => this.addIngredientInputsHandler(event)}
                >
                  <FontAwesomeIcon className={styles.plus} icon={faPlus} />
                </Button>

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
                  <Button type="add-recipe">Save</Button>
                </div>
              </div>
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategories: () => dispatch(actions.fetchCategories()),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(AddRecipe);

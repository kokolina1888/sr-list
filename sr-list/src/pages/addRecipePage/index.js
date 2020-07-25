import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
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
import Spinner from '../../components/UI/spinner'

class AddRecipe extends Component {
  state = {
    controls: {
      name: {
        value: "",
        required: true,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "",
      },
      image: {
        value: "",
        required: false,
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
        data: {
          productName: {
            type: "select",
            label: "Select a product",
            placeholder: "",
            value: "",
            required: true,
            valid: false,
            errorMessage: "",
            touched: false,
            validation: "",
          },
          productQuantity: {
            type: "number",
            label: "",
            placeholder: "Product quantity ...",
            value: "",
            required: true,
            valid: false,
            errorMessage: "",
            touched: false,
            validation: "number",
          },
          units: {
           
              type: "select",
              label: "Select an unit",
              placeholder: "",
              value: '',
              required: true,
              valid: false,
              errorMessage: "",
              touched: false,
              validation: "",
           
          },
        },
        id: 0,
      },
    ],
  
    lastIngId: 0,
    categories: null,
    units: null,
    products: null,
  }

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

  productDataChangedHandler = ( event, controlName ) => {
    console.log(controlName)
  }
  render() {
    let categoriesSelect = <Spinner />;
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
                  <Input
                    type="text"
                    placeholder="Preparation time /min/..."
                    changed={(event) =>
                      this.inputChangedHandler(event, "prepTime")
                    }
                  />
                </div>
                <div className="col-12 col-lg-2">
                  <Input
                    type="text"
                    placeholder="Servings ..."
                    changed={(event) =>
                      this.inputChangedHandler(event, "servings")
                    }
                  />
                </div>
                <div className="col-12 col-lg-7">{categoriesSelect}</div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Ingredient</th>
                      <th>Quantity</th>
                      <th>Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AddIngredient
                      productChanged={(event) =>
                        this.productDataChangedHandler(event, "productName")
                      }
                      productQuantChanged={(event) =>
                        this.productDataChangedHandler(event, "quantity")
                      }
                      productUnitChanged={(event) =>
                        this.productDataChangedHandler(event, "unit")
                      }
                    />
                  </tbody>
                </table>

                <Button type="add-ing">
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
                <div className="col-12 col-lg-12">
                  <span className={styles.img}>Upload image</span>
                  <Input type="file" name="image" />
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
    categories: state.categories.categories
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategories: () => dispatch(actions.fetchCategories())
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(AddRecipe);

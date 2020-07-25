import React, { Component } from "react";
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

class AddRecipe extends Component {
  state = {
    controls: {
      image: {
        type: "file",
        label: "Add an image",
        placeholder: "",
        id: "recipe-image",
        value: "",
        required: false,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "",
      },
      description: {
        type: "textarea",
        label: null,
        placeholder: "Description ...",
        id: "recipe-description",
        value: "",
        required: true,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "",
      },
      servings: {
        type: "number",
        label: null,
        placeholder: "Servings ...",
        id: "recipe-servings",
        value: "",
        required: true,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "number",
      },
      prepTime: {
        type: "number",
        label: null,
        placeholder: "Preparation time ...",
        id: "prep-time",
        value: "",
        required: true,
        valid: false,
        errorMessage: "",
        touched: false,
        validation: "number",
      },
      category: {
        type: "select",
        label: null,
        label: "Select a category",
        placeholder: "",
        id: "recipe-category",
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
            value: {
              name: "",
              id: "",
            },
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
            productName: {
              type: "select",
              label: "Select an unit",
              placeholder: "",
              value: {
                name: "",
                id: "",
              },
              required: true,
              valid: false,
              errorMessage: "",
              touched: false,
              validation: "",
            },
          },
        },
        id: 0,
      },
    ],
    lastIngId: 0,
  };
  render() {
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
                    name="recipeName"
                    placeholder="Recipe name ..."
                  />
                </div>
                <div className="col-12 col-lg-3">
                  <Input
                    type="text"
                    name="prepTime"
                    placeholder="Preparation time /min/..."
                  />
                </div>
                <div className="col-12 col-lg-2">
                  <Input
                    type="text"
                    name="servings"
                    placeholder="Servings ..."
                  />
                </div>
                <div className="col-12 col-lg-7">
                  <Select name="category" placeholder="Select a category" />
                </div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Ingredient</th>
                      <th>Quantity</th>
                      <th>Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AddIngredient />
                    <AddIngredient />
                  </tbody>
                </table>

                <Button type="add-ing">
                  <FontAwesomeIcon className={styles.plus} icon={faPlus} />
                </Button>

                <div className="col-12">
                  <Textarea
                    name="description"
                    className="form-control"
                    cols="30"
                    rows="10"
                    placeholder="Recipe description"
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

export default AddRecipe;

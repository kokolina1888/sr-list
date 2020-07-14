import React, { Component } from "react";
import Input from "../UI/form/input";
import styles from "./index.module.css";
import Button from "../UI/button";
import Link from "../UI/link/link";
import Breadcrumb from "../breadcrumb";
import Select from "../UI/form/select";
import Textarea from "../UI/form/textarea";
import AddIngredient from "../addIngredient";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class AddRecipe extends Component {
  render() {
    return (
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
                <Input type="text" name="servings" placeholder="Servings ..." />
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
                  <Input type="file" name="image"/>
                </div>
              <div className="col-12 text-center">
                <Button type="add-recipe">Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRecipe;

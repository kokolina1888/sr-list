import React, { Component } from 'react';

import styles from "./index.module.css";
import Input from '../UI/form/input';
import Select from '../UI/form/select';
import Button from '../UI/button';

class RecipeFiltersBlock extends Component {
    render() {
        return (
          <div className={ styles['recipe-filters-block'] + " mb-80" }>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <Select name="category" placeholder="Select a category" place="recipe-filter"/>
                </div>
                <div className="col-12 col-lg-2 text-right">
                  <Button type="recipe-filter">
                    Filter
                  </Button>
                </div>
                <div className="col-12 col-lg-4">
                  <Input
                    type="text"
                    name="search"
                    placeholder="Search Recipes By Name"
                    place="recipe-search"
                  />
                </div>
                <div className="col-12 col-lg-2 text-right">
                  <Button type="recipe-search">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default RecipeFiltersBlock;
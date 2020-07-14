import React, { Component } from 'react';
import styles from "./index.module.css";
import Breadcrumb from '../breadcrumb'

class ShoppingList extends Component {
    render() {
        return (
          <div>
            <Breadcrumb>Shopping List</Breadcrumb>
            <div className="receipe-content-area">
                <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                       
                        <div className="single-preparation-step d-flex">
                            <h4>01.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. </p>
                            
                        </div>
                        <div className="single-preparation-step d-flex">
                            <h4>01.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. </p>
                            
                        </div>
                         <div className="single-preparation-step d-flex">
                            <h4>01.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. </p>
                            
                        </div>                       
                    </div>                   
                    <div className="col-12 col-lg-8">
                        <div className="ingredients">
                            <h4>Shopping List</h4>

                            
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" for="customCheck1">4 Tbsp (57 gr) butter</label>
                            </div>

                            
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                <label className="custom-control-label" for="customCheck2">2 large eggs</label>
                            </div>

                            
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                <label className="custom-control-label" for="customCheck3">2 yogurt containers granulated sugar</label>
                            </div>

                            
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                <label className="custom-control-label" for="customCheck4">1 vanilla or plain yogurt, 170g container</label>
                            </div>

                            
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                <label className="custom-control-label" for="customCheck5">2 yogurt containers unbleached white flour</label>
                            </div>

                            
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                                <label className="custom-control-label" for="customCheck6">1.5 yogurt containers milk</label>
                            </div>

                            
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck7"/>
                                <label className="custom-control-label" for="customCheck7">1/4 tsp cinnamon</label>
                            </div>

                            
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck8"/>
                                <label className="custom-control-label" for="customCheck8">1 cup fresh blueberries </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </div>
        );
    }
}

export default ShoppingList;
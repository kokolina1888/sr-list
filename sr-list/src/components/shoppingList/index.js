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
                      <span className={styles.recipe}>01.</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum nec varius dui.
                      </p>
                    </div>
                    <div className="single-preparation-step d-flex">
                      <span className={styles.recipe}>01.</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum nec varius dui.
                      </p>
                    </div>
                    <div className="single-preparation-step d-flex">
                      <span className={styles.recipe}>01.</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum nec varius dui.{" "}
                      </p>
                    </div>
                  </div>
                  <div className={styles['container'] + " col-12 col-lg-8"}>
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
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Butter</td>
                            <td>57</td>
                            <td>g</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Eggs</td>
                            <td>2</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>sugar</td>
                            <td>300</td>
                            <td>g</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>youghurt</td>
                            <td>300</td>
                            <td>g</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>flour</td>
                            <td>500</td>
                            <td>g</td>
                          </tr>
                        </tbody>
                      </table>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default ShoppingList;
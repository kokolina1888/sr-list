import React from "react";
import UserLayout from "../../components/layouts/userLayout";

import Breadcrumb from "../../components/breadcrumb";
import image from "../../images/recipes/bg5.jpg";

import styles from "./index.module.css";

const Recipe = (props) => {
  return (
    <UserLayout>
      <Breadcrumb>Recipe</Breadcrumb>
      <div className="receipe-content-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className={styles.headline + " my-5"}>
                <h2>Vegetarian cheese salad</h2>
                <div className={styles.prep}>
                  <h6>Prep: 45 mins</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-md-8">
              <div className="col-12">
                <img className={styles.img} src={image} alt=""/>
              </div>
              <div className="col-12">
                <div className={styles.desc + " d-flex"}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum nec varius dui. Suspendisse potenti. Vestibulum
                    ac pellentesque tortor. Aenean congue sed metus in iaculis.
                    Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget
                    lobortis purus. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Vestibulum nec varius
                    dui. Suspendisse potenti. Vestibulum ac pellentesque tortor.
                    Aenean congue sed metus in iaculis. Cras a tortor enim.
                    Phasellus posuere vestibulum ipsum, eget lobortis purus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum nec varius dui.
                    Suspendisse potenti. Vestibulum ac pellentesque tortor.
                    Aenean congue sed metus in iaculis. Cras a tortor enim.
                    Phasellus posuere vestibulum ipsum, eget lobortis purus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum nec varius dui.
                    Suspendisse potenti. Vestibulum ac pellentesque tortor.
                    Aenean congue sed metus in iaculis. Cras a tortor enim.
                    Phasellus posuere vestibulum ipsum, eget lobortis purus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum nec varius dui.
                    Suspendisse potenti. Vestibulum ac pellentesque tortor.
                    Aenean congue sed metus in iaculis. Cras a tortor enim.
                    Phasellus posuere vestibulum ipsum, eget lobortis purus.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className={styles.ingredients}>
                <h4>Ingredients</h4>
                <div className="custom-control custom-checkbox">
                  <span className="custom-control-span" for="customCheck1">
                    4 Tbsp (57 gr) butter
                  </span>
                </div>
                <div className="custom-control custom-checkbox">
                  <span className="custom-control-span" for="customCheck2">
                    2 large eggs
                  </span>
                </div>
                <div className="custom-control custom-checkbox">
                  <span className="custom-control-span" for="customCheck3">
                    2 yogurt containers granulated sugar
                  </span>
                </div>
                <div className="custom-control custom-checkbox">
                  <span className="custom-control-span" for="customCheck4">
                    1 vanilla or plain yogurt, 170g container
                  </span>
                </div>
                <div className="custom-control custom-checkbox">
                  <span className="custom-control-span" for="customCheck5">
                    2 yogurt containers unbleached white flour
                  </span>
                </div>
                <div className="custom-control custom-checkbox">
                  <span className="custom-control-span" for="customCheck6">
                    1.5 yogurt containers milk
                  </span>
                </div>
                <div className="custom-control custom-checkbox">
                  <span className="custom-control-span" for="customCheck7">
                    1/4 tsp cinnamon
                  </span>
                </div>
                <div className="custom-control custom-checkbox">
                  <span className="custom-control-span" for="customCheck8">
                    1 cup fresh blueberries{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Recipe;

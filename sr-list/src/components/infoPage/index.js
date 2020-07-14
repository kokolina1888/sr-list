import React from "react";
import styles from "./index.module.css";
import Breadcrumb from "../breadcrumb";
import Statistics from "./statistics";
import about from "../../images/core/about.png";

const InfoPage = () => {
  return (
    <div>
      <Breadcrumb type="info">Info</Breadcrumb>
      <section className={styles.about}>
        <div className="container">
          <h3 className={styles.title}>Who we are and what we do?</h3>
          <h6 className={styles["sub-title"]}>
            Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt,
            sodales nunc id, finibus nibh. className aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Fusce
            nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan
            molestie. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae
          </h6>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque
            tortor. Aenean congue sed metus in iaculis. Cras a tortor enim.
            Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis
            sapien, eget luctus quam. Aenean hendrerit varius massa quis
            laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo
            tincidunt, sodales nunc id, finibus nibh. className aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>

          <div className="row align-items-center mt-70">
            <Statistics />
          </div>
          <div>
            <img src={about} alt="" className={styles.image}/>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac
              pellentesque tortor. Aenean congue sed metus in iaculis. Cras a
              tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis
              purus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Proin malesuada et mauris ut
              lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean
              hendrerit varius massa quis laoreet. Donec quis metus ac arcu
              luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus
              nibh. className aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoPage;

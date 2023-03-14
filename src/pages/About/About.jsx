import React from "react";
import styles from "./About.module.css";
import AboutImg from '../../assets/LoginpageBackground.gif'

const About = () => {
  return (
    <div>
      <div className={styles["container"]}>
        <h2>About</h2>
        <div className="row w-100">
          <div className="col-1 w-50 card">
            <img
              src={AboutImg}
              alt="heroimg"
            />
          </div>
          <div className="col- w-50">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              beatae commodi velit rem delectus. Accusamus inventore aperiam
              molestias voluptas amet hic maiores id earum eum libero ex
              voluptates natus porro magnam, tempore ut aliquam optio iure
              dolore velit reprehenderit illum ullam quos qui! Facilis dicta
              voluptas voluptatum minima repellendus. Illum sequi id eaque
              voluptatum. Cumque itaque labore earum blanditiis perferendis ad?
              voluptatum. Cumque itaque labore earum blanditiis perferendis ad?
              Autem natus, doloremque cumque pariatur explicabo dolores, labore
              deserunt odit, quidem voluptate animi dolorem! Commodi, maxime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

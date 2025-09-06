import styles from "../event/view.module.css";
import React from "react";

const View = () => {
  const handleClick = (e) => {
    e.preventDefault;
    alert("Clicked Button");
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    alert("Consultation Form COMING SOON");
  };
  return (
    <div className={styles.consultButton}>
      <form onSubmit={handleSubmit}>
        {/* <input onChange={handleChange} type="text" placeholder="Enter ur Name" /> */}
        <button onClick={handleClick}>View all</button>
      </form>
    </div>
  );
};

export default View;

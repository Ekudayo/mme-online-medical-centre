import styles from "../event/learnMore.module.css"
import React from 'react'

const LearnMore = () => {
   const handleClick = (e) => {
     e.preventDefault;
     alert("Clicked Button");
   };
   const handleSubmit = (e) => {
     e.preventDefault;
     alert("COMING SOON");
   };
  return (
    <div className={styles.consultButton}>
      <form onSubmit={handleSubmit}>
        {/* <input onChange={handleChange} type="text" placeholder="Enter ur Name" /> */}
        <button onClick={handleClick}>Learn more</button>
      </form>
    </div>
  );
}

export default LearnMore
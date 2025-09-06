import styles from "../event/consult.module.css";

const Consult = () => {
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
        <button onClick={handleClick}>Consult today</button>
      </form>
    </div>
  );
};

export default Consult;

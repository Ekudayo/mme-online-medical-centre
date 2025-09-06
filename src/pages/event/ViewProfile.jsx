import styles from "../event/viewProfile.module.css"
const ViewProfile = () => {
  const handleClick = (e) => {
    e.preventDefault;
    alert("Clicked Button");
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    alert("Doctors Information COMING SOON");
  };

  return (
    <div className={styles.consultButton}>
      <form onSubmit={handleSubmit}>
        {/* <input onChange={handleChange} type="text" placeholder="Enter ur Name" /> */}
        <button onClick={handleClick}>View
          Profile</button>
      </form>
    </div>
  );
};

export default ViewProfile;
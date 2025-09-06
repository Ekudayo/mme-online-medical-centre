import styles from "../leading/leading.module.css"
import leading from "../../assets/leading.jpg"
import LearnMore from "../event/LearnMore";
const Leading = () => {
  return (
    <div className={styles.Leading}>
      <img className={styles.lead} src={leading} alt="Picture" />
      <div className={styles.rightContent}>
        <h1>Leading Healthcare providers</h1>
        <hr className={styles.horizontalLine} />
        <div className={styles.paraButton}>
          <p>
            MME provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <LearnMore />
        </div>
      </div>
    </div>
  );
}

export default Leading
import styles from "../home/home.module.css"
import Consult  from "../event/Consult";
import doctor from "../../assets/doctor.jpg";
import Services from "../services/Services";
import Leading from "../leading/Leading";
import Dowloads from "../dowloads/Dowloads";
import  CustomerSaying  from "../customersSaying/CustomerSaying";
import Article from "../article/Article";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.homeText}>
        <div className={styles.homeContent}>
          <h1>Virtual Healthcare for You</h1>

          <p>
            MME provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <Consult />
        </div>
        <div className={styles.homeImage}>
          <img src={doctor} alt="Doctor" />
        </div>
      </div>

      <div>
        <Services />
      </div>
      <div>
        <Leading/>
      </div>
      <div>
        <Dowloads/>
      </div>
      <div>
        <CustomerSaying />
      </div>
      <div>
        <Article/>
      </div>
    </section>
  );
}

export default Home
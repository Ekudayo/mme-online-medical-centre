import styles from "../services/services.module.css";
import { servicesData } from "../../utils/data";
console.log("servicesData:", servicesData);
import LearnMore from "../event/LearnMore";

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.title}>Our Services</h1>
      <hr className={styles.horizontalLine} />
      <p className={styles.description}>
        We provide to you the best choices for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health.
      </p>
      <div className={styles.servicesListContainer}>
        <ul className={styles.lists}>
          {servicesData.map((service) => (
            <li key={service.id} className={styles.serviceItem}>
              <img className={styles.img} src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <LearnMore/>
    </div>
  );
};

export default Services;

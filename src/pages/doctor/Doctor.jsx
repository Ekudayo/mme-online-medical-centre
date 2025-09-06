import styles from "../doctor/doctor.module.css";
import { doctors } from "../../utils/data";
console.log(doctors);
import ViewProfile from "../event/ViewProfile.jsx";

const Doctor = () => {
  return (
    <div className={styles.doctorsContainer}>
      <h1>Find A Doctor</h1>
      <form action="search">
        <input
          type="text"
          placeholder="Search by Doctor,Specialty,or Location"
        />
      </form>
      <ul className={styles.search}>
        <li>Specialty</li>
        <li>Location</li>
        <li>Availability</li>
        <li>Gender</li>
        <li>Language</li>
      </ul>

      <div className={styles.doctorsListContainer}>
        <ul className={styles.lists}>
          {doctors.map((doctor) => (
            <li key={doctor.id} className={styles.list}>
              <img
                className={styles.img}
                src={doctor.image}
                alt={doctor.photo}
              />
              <h2>Name:{doctor.name}</h2>
              <p>Doctor Experience: {doctor.yearsExperience}</p>
              <ViewProfile />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Doctor;

import styles from "../footer/footer.module.css"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.subFooter}>
        <div className={styles.footerOne}>
          <img
            className={styles.logo}
            src={logo}
            alt="MME Logo"
          />
          <p>
            MME provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone.
          </p>
          <span>©MME PTY LTD 2020. All rights reserved</span>
        </div>
        <div className={styles.footerTwo}>
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Testimonials</li>
            <li>Find a Doctor</li>
            <li>Apps</li>
          </ul>
        </div>
        <div className={styles.footerThree}>
          <h1>Region</h1>
          <ul>
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
          </ul>
        </div>
        <div className={styles.footerFour}>
          <h1>Help</h1>
          <ul>
            <li>Help Centre</li>
            <li>Contact Support</li>
            <li>Instuctions</li>
            <li>How it works</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer
import styles from "../dowloads/downloads.module.css";
import trafagar3 from "../../assets/trafagar3.jpg";
import Download from "../event/Download";

const Downloads = () => {
  return (
    <div className={styles.DownloadsContainer}>
      <div className={styles.DownloadsText}>
        <h1>Download our mobile apps</h1>
        <hr className={styles.horizontalLine} />
        <p>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <Download />
      </div>
      <img className={styles.Download} src={trafagar3} alt="Medical app picture" />
    </div>
  );
}

export default Downloads
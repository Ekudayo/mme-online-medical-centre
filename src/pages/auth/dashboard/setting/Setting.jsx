import styles from "../setting/setting.module.css";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};
export default Settings;
import styles from "../profile/profile.module.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};
export default Profile;
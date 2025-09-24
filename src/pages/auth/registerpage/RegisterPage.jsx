import styles from "../registerpage/registerPage.module.css";

import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImg from "../../../assets/background-img.jpg";
// import "./register.module.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    password: "",
  });

  const navigate = useNavigate();

  // function to handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handleSumbit
  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      //
      const res = await fetch(
        "http://localhost:5000/api/v1/auth/create-user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      console.log("RES", res);
      const data = await res.json();
      console.log("DATA REGISTER VALUES", data);
      if (res.status === 201) {
        // or show a success message
        toast.success(data.message || "Registered successfully");
        // Redirect to login page
        navigate("/auth/login");
      } else {
        console.log(data.error);
        toast.error(data.error || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Registration failed");
    }
  };

  return (
    <div className={styles.authContainer}>
      <div>
        {" "}
        <Link to="/" className={styles.homeLink}>
          Home
        </Link>
      </div>

      <div className={styles.authBox}>
        <div className={styles.authFormContainer}>
          <form className={styles.authForm} onSubmit={handleSumbit}>
            <h1>Register</h1>
            <div className={styles.inputBoxContainer}>
              <input
                className={styles.inputBox}
                name="firstname"
                type="text"
                placeholder="enter firstname"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBoxContainer}>
              <input
                className={styles.inputBox}
                name="lastname"
                type="text"
                placeholder="enter lastname"
                id="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBoxContainer}>
              <input
                className={styles.inputBox}
                name="email"
                type="email"
                placeholder="enter email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBoxContainer}>
              <input
                className={styles.inputBox}
                name="password"
                type="password"
                placeholder="enter password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputBoxContainer}>
              <input
                className={styles.inputBox}
                name="address"
                type="text"
                placeholder="enter address"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className={styles.authLinkContainer}>
              <p>Already have an account? </p>
              <Link className={styles.authLink} to="/auth/login">
                Login
              </Link>
            </div>
            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <img className={styles.backgroundImg} src={BackgroundImg} alt="background-img" />
    </div>
  );
};
export default RegisterPage;
// import styles from "./welcome.module.css";
// import React from "react";
// import welcomeImage from "../../assets/welcomeimage.jpg";
// import Register from "../register/Register.jsx";
// // import Link from "react-router-dom";

// const Welcome = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.textSection}>
//         <h1 className={styles.title}>Welcome to the Welcome Center</h1>
//         <p className={styles.description}>
//           This is the welcome page of our application kindly click the button to register.
//         </p>
//         {/* <Link to="/register"> */}
//           <button className={styles.button}>Get Started</button>
//         {/* </Link> */}
//       </div>
//       <img src={welcomeImage} alt="Welcome" className={styles.image} />
//     </div>
//   );
// };

// export default Welcome;
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import welcomeImage from "../../assets/welcomeimage.jpg";
import styles from "./welcome.module.css";
// Import the components that will be rendered by the nested routes
import Register from "../register/Register";
import Auth from "../auth/Auth";

// This is the new navbar for your welcome section
const WelcomeNavbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <Link to="/welcome">Home</Link> | <Link to="register">Register</Link> |{" "}
      <Link to="login">Login</Link>
    </nav>
  );
};

// This is the initial page with the buttons
const WelcomeContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>Welcome to the Welcome Center</h1>
        <p className={styles.description}>
          This is the welcome page of our application. Kindly click a button to
          proceed.
        </p>
        <Link to="register">
          <button className={styles.button}>Get Started</button>
        </Link>
        <Link to="login">
          <button className={styles.button}>Login</button>
        </Link>
      </div>
      <img src={welcomeImage} alt="Welcome" className={styles.image} />
    </div>
  );
};

// This component contains both the new navbar and the nested routing
function Welcome() {
  return (
    <>
      <WelcomeNavbar />
      <Routes>
        <Route path="/" element={<WelcomeContent />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Auth />} />
      </Routes>
    </>
  );
}

export default Welcome;

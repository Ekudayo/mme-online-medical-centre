import styles from "../verifyotp/VerifyOtp.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// 

// const VerifyOtp = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   };
//   try {
//     const res = await fetch("http://localhost:5000/api/v1/auth/login", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(formData)
//   });
//   console.log("Res", res);
//   const data = await res.json();
//   console.log("DATA LOGIN VALUES",data);
//   if(res.status===200){toast.success(data.message || "Login Successful");
//  // redirect to dashboard
//   navigate("/auth/dashboard");
//   } else {
//     toast.error(data.error || "Login Failed");
//   }
//   }
//   catch (error){
// console.error(error)
// toast.error("Something went wrong in login");
//   }
// }
//   return <div>VerifyOtp</div>;
// };
// export default VerifyOtp;

const VerifyOtp = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Res", res);
      const data = await res.json();
      console.log("DATA LOGIN VALUES", data);

      if (res.status === 200) {
        toast.success(data.message || "Login Successful");
        // redirect to dashboard
        navigate("/auth/dashboard");
      } else {
        toast.error(data.error || "Login Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in login");
    }
  };

  return (
    <div className={styles.container}>
      <Link to={"/"}>Home</Link>

      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>

        <div className={styles.authLinkContainer}>
          <p>
            Don't have an account?{" "}
            <Link className={styles.authLink} to="/auth/register">
              Register
            </Link>
          </p>
          <Link className={styles.authLink} to="/auth/forgot-password">
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtp;

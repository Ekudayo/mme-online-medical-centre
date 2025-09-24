import styles from "../login/login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  // loading state start
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // loading state end
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // set loading to true start
      setLoading(true); // Step 2: Start loading
      setError(null);
    // set loading to true end

    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("RES", res);
      const data = await res.json();
      console.log("DATA LOGIN VALUES", data);

      if (res.status === 200) {
        toast.success(data.message || "Login successful!");
        // Redirect to dashboard page
        navigate("/auth/dashboard");
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
    // set loading to false start
     finally {
      setLoading(false); // Step 2: Stop loading
    }
    // set loading to false end
  };

  return (
    <div>
       <Link to="/" className={styles.homeLink}>
                Home
              </Link>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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

          <div>
            <Link to="/auth/forgot-password">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Layout from "./layout/Layout";
import {
  About,
  Apps,
  Contact,
  Doctor,
  Home,
  Product,
  Testimonial,
  RegisterPage,
  Dashboard,
  Login,
  ForgotPassword,
  // VerifyToken,
} from "./pages/index";
import Layout from "./layout/Layout.jsx";
import AuthLayout from "./authLayout/AuthLayout.jsx";




function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route with navbar and footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/product" element={<Product />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/registerPage" element={<RegisterPage />} />
          </Route>
          {/* Route with navbar and footer */}

          {/* Route without navbar and footer */}
          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          </Route>
          {/* Route without navbar and footer */}

          {/* dashboard start */}
          <Route element={<AuthLayout />}>
            <Route path="/auth/dashboard" element={<Dashboard />} />
          </Route>
          {/* dashboard start */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

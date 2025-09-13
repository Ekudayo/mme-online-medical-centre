import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Layout from "./layout/Layout";
import Navbar from "./component/navbar/Navbar";

import Footer from "./component/footer/Footer";
import Layout from "./layout/Layout";

import {
  About,
  Apps,
  Auth,
  Contact,
  Dashboard,
  Doctor,
  Home,
  Product,
  Services,
  Testimonial,
  Welcome,
  Register
} from "./pages/index";

function App() {
  return (
    <>
      <Router>
        {<Navbar />}
        <Routes>
          {/* <Route element={<Layout />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/product" element={<Product />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/welcome/*" element={<Welcome />} />
          {/* <Route element={<Layout />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
        {/* services */}
        {/* <Routes></Routes> */}
        {/* services */}
        {<Footer />}
      </Router>
    </>
  );
}

export default App;

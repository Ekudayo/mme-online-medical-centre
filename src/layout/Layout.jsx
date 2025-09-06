import {Outlet} from "react-router-dom"
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const Layout = () => {
  return (
    <section>
<Navbar/>
<Outlet/>
<Footer/>
    </section>
  )
}

export default Layout
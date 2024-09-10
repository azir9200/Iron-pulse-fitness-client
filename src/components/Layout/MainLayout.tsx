import { Outlet } from "react-router-dom";
import Navbar from "../SharePages/Navbar";
import Footer from "../SharePages/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

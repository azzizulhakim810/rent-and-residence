import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

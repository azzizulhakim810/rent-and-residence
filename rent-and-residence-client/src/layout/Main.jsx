import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="relative">
        <Navbar />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

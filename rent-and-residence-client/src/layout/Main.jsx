import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="sticky top-0 z-1000 shadow-md bg-C_purple">
        <Navbar />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

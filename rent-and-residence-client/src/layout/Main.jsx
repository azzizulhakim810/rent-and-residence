import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
  return (
    /* Adding the bg color to keep nav item's bg or others to white rather than getting black */
    <div className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

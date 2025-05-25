import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="w-10/12 mx-auto">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Main;

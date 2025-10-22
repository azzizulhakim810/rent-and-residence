import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import SignInAndUpPopUp from "../pages/Shared/SignInAndUpPopUp/SignInAndUpPopUp";

const Main = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="sticky top-0 z-1000">
        <Navbar />
      </div>
      <SignInAndUpPopUp />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import SignInAndUp from "../pages/Shared/SignInAndUp/SignInAndUp";

const Main = () => {
  return (
    <div className="min-h-screen bg-white ">
      <div className="sticky top-0 z-1000">
        <Navbar />
        {/* <SignInAndUp /> */}
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

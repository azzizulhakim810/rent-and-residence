import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Sidebar from "../../pages/Shared/Sidebar/Sidebar";

import { NavLink } from "react-router";

import { BiMessageSquareAdd } from "react-icons/bi";
import { CiHeart, CiInboxIn, CiLogout, CiUser } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { uid, displayName, email, photoURL } = user || {};

  const dashboardMenu = (
    <>
      <li className="hover:bg-C_purple">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? " text-[#7854f6] border-t-[#7854f6] rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              : "text-[##222222] hover:bg-transparent rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-2 justify-start">
            <LuLayoutDashboard />
            Dashboard
          </span>
        </NavLink>
      </li>

      <li className="hover:bg-C_purple">
        <NavLink
          to="/myProfile"
          className={({ isActive }) =>
            isActive
              ? " text-[#7854f6] border-t-[#7854f6] rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              : "text-[##222222] hover:bg-transparent rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-2 justify-start">
            <CiUser />
            My Profile
          </span>
        </NavLink>
      </li>

      <li className="hover:bg-C_purple">
        <NavLink
          to="/myPropertyList"
          className={({ isActive }) =>
            isActive
              ? " text-[#7854f6] border-t-[#7854f6] rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              : "text-[##222222] hover:bg-transparent rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-2 justify-start">
            <GoHome />
            My Property List
          </span>
        </NavLink>
      </li>

      <li className="hover:bg-C_purple">
        <NavLink
          to="/addNewProperty"
          className={({ isActive }) =>
            isActive
              ? " text-[#7854f6] border-t-[#7854f6] rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              : "text-[##222222] hover:bg-transparent rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-2 justify-start">
            <BiMessageSquareAdd />
            Add New Property
          </span>
        </NavLink>
      </li>

      <li className="hover:bg-C_purple">
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? " text-[#7854f6] border-t-[#7854f6] rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              : "text-[##222222] hover:bg-transparent rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-2 justify-start">
            <CiHeart />
            Favorites
          </span>
        </NavLink>
      </li>

      <li className="hover:bg-C_purple">
        <NavLink
          to="/inbox"
          className={({ isActive }) =>
            isActive
              ? " text-[#7854f6] border-t-[#7854f6] rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              : "text-[##222222] hover:bg-transparent rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-2 justify-start">
            <CiInboxIn />
            Inbox
          </span>
        </NavLink>
      </li>

      <li className="hover:bg-C_purple">
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            isActive
              ? " text-[#7854f6] border-t-[#7854f6] rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              : "text-[##222222] hover:bg-transparent rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-2 justify-start">
            <CiLogout />
            Logout
          </span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" bg-white">
      <Navbar />

      <div className="grid grid-cols-12 gap-10 w-10/12 mx-auto pt-1">
        {/* Dashboard Menu  */}
        <div className="lg:col-span-3 col-span-10 ">
          <div className="p-8 w-full rounded-none bg-white border-e-[1px] border-e-gray-300 ">
            <div className="flex flex-col gap-5">
              {/* Image  */}
              <div className="avatar">
                <div className="md:w-18 w-8 rounded-full ">
                  <img
                    className="w-full object-fill "
                    src={
                      photoURL
                        ? photoURL
                        : "https://i.ibb.co/jkGkX8fs/default-user.png"
                    }
                  />
                </div>
              </div>

              {/* Details  */}
              <div className=" w-auto flex flex-col  gap-2  ">
                <h4 className=" font-Nunito font-[600] text-C_gray text-[22px] leading-6">
                  {displayName}
                </h4>
                <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] capitalize">
                  {email}
                </p>
              </div>
            </div>

            <ul className="dropdown-content z-[1] menu p-0 gap-1 bg-white rounded-box w-56 -ml-10 mt-2 font-Nunito_Sans md:text-[16px] text-sm font-medium tracking-wide ">
              {dashboardMenu}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 col-span-10 ">
          <Outlet />
        </div>

        {/* Sidebar  */}
        <div className="lg:col-span-3 col-span-10">
          <Sidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;

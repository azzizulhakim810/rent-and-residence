import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Navbar from "../../pages/Shared/Navbar/Navbar";

import { NavLink } from "react-router-dom";

import { BiMessageSquareAdd } from "react-icons/bi";
import { CiHeart, CiInboxIn, CiLogout, CiUser } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { HiArrowsRightLeft } from "react-icons/hi2";

import useSignedInUser from "../../hooks/useSignedInUser/useSignedInUser";
import { AuthContext } from "../../providers/AuthProvider";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import useRole from "../../hooks/useRole/useRole";

const Dashboard = () => {
  const [currentUserFromDB] = useSignedInUser();
  const { _id, name, profileImage } = currentUserFromDB;
  const { signOutUser, setLoading } = UseAuth();

  const [isRole] = useRole();

  // console.log(isRole);

  // Sign Out
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign Out Successfully");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const dashboardMenu = (
    <>
      <li className="hover:bg-C_purple hover:rounded-md">
        <NavLink
          to="/dashboard/stat"
          className={({ isActive }) =>
            isActive
              ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
              : "text-[##222222]  hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-4 justify-start">
            <LuLayoutDashboard />
            Dashboard
          </span>
        </NavLink>
      </li>

      <li className="hover:bg-C_purple hover:rounded-md">
        <NavLink
          to="/dashboard/myProfile"
          className={({ isActive }) =>
            isActive
              ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
              : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-4 justify-start">
            <CiUser />
            My Profile
          </span>
        </NavLink>
      </li>

      {/* <li className="hover:bg-C_purple hover:rounded-md">
        <NavLink
          to="/dashboard/myOrders"
          className={({ isActive }) =>
            isActive
              ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
              : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-4 justify-start">
            <TfiLayoutListThumb />
            My Orders
          </span>
        </NavLink>
      </li> */}

      {isRole?.toLowerCase() === "admin" ? (
        <>
          <li className="hover:bg-C_purple hover:rounded-md">
            <NavLink
              to="/dashboard/allProperties"
              className={({ isActive }) =>
                isActive
                  ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                  : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              }
            >
              <span className="flex items-center gap-4 justify-start">
                <GoHome />
                Property Listings
              </span>
            </NavLink>
          </li>

          <li className="hover:bg-C_purple hover:rounded-md">
            <NavLink
              to="/dashboard/allOrders"
              className={({ isActive }) =>
                isActive
                  ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                  : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              }
            >
              <span className="flex items-center gap-4 justify-start">
                <HiArrowsRightLeft />
                Transactions
              </span>
            </NavLink>
          </li>

          <li className="hover:bg-C_purple hover:rounded-md">
            <NavLink
              to="/dashboard/manageUsers"
              className={({ isActive }) =>
                isActive
                  ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                  : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              }
            >
              <span className="flex items-center gap-4 justify-start">
                <MdOutlineManageAccounts />
                Manage Users
              </span>
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}

      {/*  {isRole?.toLowerCase() === "admin" ? (
        <li className="hover:bg-C_purple hover:rounded-md">
          <NavLink
            to="/dashboard/allOrders"
            className={({ isActive }) =>
              isActive
                ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
            }
          >
            <span className="flex items-center gap-4 justify-start">
              <MdOutlineManageAccounts />
              All Orders
            </span>
          </NavLink>
        </li>
      ) : (
        ""
      )}
      {isRole?.toLowerCase() === "admin" ? (
        <li className="hover:bg-C_purple hover:rounded-md">
          <NavLink
            to="/dashboard/manageUsers"
            className={({ isActive }) =>
              isActive
                ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
            }
          >
            <span className="flex items-center gap-4 justify-start">
              <MdOutlineManageAccounts />
              Manage Users
            </span>
          </NavLink>
        </li>
      ) : (
        ""
      )} */}

      {isRole?.toLowerCase() === "agent" ? (
        <>
          <li className="hover:bg-C_purple hover:rounded-md">
            <NavLink
              to="/dashboard/myPropertyList"
              className={({ isActive }) =>
                isActive
                  ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                  : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              }
            >
              <span className="flex items-center gap-4 justify-start">
                <GoHome />
                My Property List
              </span>
            </NavLink>
          </li>

          <li className="hover:bg-C_purple hover:rounded-md">
            <NavLink
              to="/dashboard/addNewProperty"
              className={({ isActive }) =>
                isActive
                  ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                  : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              }
            >
              <span className="flex items-center gap-4 justify-start">
                <BiMessageSquareAdd />
                Add New Property
              </span>
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}

      {/* {isRole?.toLowerCase() === "agent" ? (
        <li className="hover:bg-C_purple hover:rounded-md">
          <NavLink
            to="/dashboard/addNewProperty"
            className={({ isActive }) =>
              isActive
                ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
            }
          >
            <span className="flex items-center gap-4 justify-start">
              <BiMessageSquareAdd />
              Add New Property
            </span>
          </NavLink>
        </li>
      ) : (
        ""
      )} */}

      {isRole?.toLowerCase() === "user" ? (
        <>
          <li className="hover:bg-C_purple hover:rounded-md">
            <NavLink
              to="/dashboard/myOrders"
              className={({ isActive }) =>
                isActive
                  ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                  : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              }
            >
              <span className="flex items-center gap-4 justify-start">
                <TfiLayoutListThumb />
                My Orders
              </span>
            </NavLink>
          </li>

          <li className="hover:bg-C_purple hover:rounded-md">
            <NavLink
              to="/dashboard/paymentHistory"
              className={({ isActive }) =>
                isActive
                  ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
                  : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
              }
            >
              <span className="flex items-center gap-4 justify-start">
                <VscHistory />
                Payment History
              </span>
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}

      {/*  <li className="hover:bg-C_purple hover:rounded-md">
        <NavLink
          to="/dashboard/paymentHistory"
          className={({ isActive }) =>
            isActive
              ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
              : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-4 justify-start">
            <VscHistory />
            Payment History
          </span>
        </NavLink>
      </li> */}

      <li className="hover:bg-C_purple hover:rounded-md">
        <NavLink
          to="/dashboard/favorites"
          className={({ isActive }) =>
            isActive
              ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md  hover:ms-3 transition-all duration-300   ps-6 py-3 "
              : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-4 justify-start">
            <CiHeart />
            Favorites
          </span>
        </NavLink>
      </li>

      <li className="hover:bg-C_purple hover:rounded-md">
        <NavLink
          to="/dashboard/inbox"
          className={({ isActive }) =>
            isActive
              ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md hover:ms-3 transition-all duration-300  ps-6 py-3 "
              : "text-[##222222] hover:bg-transparent rounded-md hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-4 justify-start">
            <CiInboxIn />
            Inbox
          </span>
        </NavLink>
      </li>

      <li className="hover:bg-C_purple hover:rounded-md">
        <NavLink
          to="/"
          onClick={handleSignOut}
          className={({ isActive }) =>
            isActive
              ? " text-white bg-C_purple hover:text-white border-t-[#7854f6] rounded-md hover:ms-3 transition-all duration-300   ps-6 py-3 "
              : "text-[##222222] hover:bg-transparent rounded-md  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
          }
        >
          <span className="flex items-center gap-4 justify-start">
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

      <div className="grid grid-cols-12 gap-10 w-11/12 mx-auto pt-1">
        {/* Dashboard Menu  */}
        <div className="lg:block hidden lg:col-span-3 col-span-10 border-e-[1px] border-e-gray-300 ">
          <div className="p-5 w-full rounded-none bg-white ">
            {/* Profile */}
            <div className="flex flex-col justify-center items-center  gap-5">
              <div className="avatar">
                <div className="md:w-18 w-8 rounded-full ">
                  <img
                    className="w-full object-fill "
                    src={
                      profileImage
                        ? profileImage
                        : "https://i.ibb.co/jkGkX8fs/default-user.png"
                    }
                  />
                </div>
              </div>

              <h4 className="font-Nunito font-[600] text-C_gray text-[17px] leading-6">
                Welcome Back, {name}
              </h4>
            </div>

            {/* Menu  */}
            <ul className=" z-[1] menu p-0 gap-1  rounded-box w-full mt-5 font-Nunito_Sans md:text-[16px] text-sm font-medium tracking-wide ">
              {dashboardMenu}
            </ul>
          </div>
        </div>

        {/* Childrens  */}
        <div className="lg:col-span-9  col-span-10 ">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;

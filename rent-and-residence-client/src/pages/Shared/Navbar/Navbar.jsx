import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import SignInAndUp from "../SignInAndUp/SignInAndUp";

import { BiMessageSquareAdd } from "react-icons/bi";
import { BsBuilding, BsCart2, BsPerson } from "react-icons/bs";
import { CiHeart, CiInboxIn, CiLogout, CiUser } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuLayoutDashboard, LuShoppingCart } from "react-icons/lu";
import { PiNewspaperLight } from "react-icons/pi";
import { RiContactsLine, RiMenu2Line } from "react-icons/ri";
import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const Navbar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const { user, signOutUser, loading } = useContext(AuthContext);
  // console.log(user);
  const [currentUserFromDB] = useSignedInUser();
  const { _id, profileImage } = currentUserFromDB;

  // const newDate = new Date(parseFloat(metadata?.createdAt));
  // console.log(newDate);

  // Sign Out
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign Out Successfully");
        loading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text-[#7854f6] font-medium tracking-wide  hover:bg-transparent border-t-[#7854f6] rounded-none"
              : " nav-item text-[##222222] font-medium tracking-wide hover:bg-transparent "
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            isActive
              ? "text-[#7854f6] font-medium tracking-wide hover:bg-transparent border-t-[#7854f6] rounded-none"
              : "nav-item  text-[#222222] hover:bg-transparent font-medium tracking-wide"
          }
        >
          Properties
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allAgents"
          className={({ isActive }) =>
            isActive
              ? "text-[#7854f6] font-medium tracking-wide hover:bg-transparent border-t-[#7854f6] rounded-none"
              : "nav-item  text-[#222222] hover:bg-transparent font-medium tracking-wide"
          }
        >
          All Agents
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-[#7854f6] hover:bg-transparent font-medium tracking-wide border-t-[#7854f6] rounded-none"
              : "nav-item  text-[#222222] hover:bg-transparent font-medium tracking-wide"
          }
        >
          Blogs
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#7854f6] hover:bg-transparent font-medium tracking-wide border-t-[#7854f6] rounded-none"
              : "nav-item  text-[#222222] hover:bg-transparent font-medium tracking-wide"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  const navOptionsMobile = (
    <>
      <li>
        <div className=" text-white bg-transparent text-lg pt-1 font-semibold">
          <Link
            to="tel:+34 912 123 678"
            className="flex items-center gap-3 hover:text-C_purple "
          >
            <FaPhoneAlt />

            <p>+34 912 123 678</p>
          </Link>
        </div>
      </li>

      {/* Add Listing Button  */}
      <li>
        <Link
          to="/addProperty"
          className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md border-0 py-5 text-[16px] my-6 shadow-none"
        >
          Add Listing
        </Link>
      </li>

      {/* Add Nav Item  */}
      <li className="py-4 border-gray-600 border-b-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text-C_purple hover:text-C_purple gap-3"
              : " nav-item text-white gap-3"
          }
        >
          <GoHome className="text-xl" />
          Home
        </NavLink>
      </li>

      <li className="py-4  border-gray-600 border-b-1">
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            isActive
              ? " text-C_purple hover:text-C_purple gap-3"
              : " nav-item text-white gap-3"
          }
        >
          <BsBuilding className="text-xl" />
          Properties
        </NavLink>
      </li>

      <li className="py-4  border-gray-600 border-b-1">
        <NavLink
          onMouseEnter={() => setShowSubmenu(true)}
          onMouseLeave={() => setShowSubmenu(false)}
          to="#"
        >
          <BsPerson className="text-xl" />
          Agents
          {showSubmenu ? (
            <ul className="bg-white absolute w-[150px] shadow-sm right-0 top-10 z-10 sub-menu p-2">
              <li>
                <Link
                  to="/allAgents"
                  className="relative nav-item text-[#222222] hover:text-[#7854f6]  font-medium tracking-wide hover:bg-transparent border-t-[#7854f6] rounded-none"
                >
                  All Agents
                </Link>
              </li>
            </ul>
          ) : (
            " "
          )}
        </NavLink>
      </li>

      <li className="py-4  border-gray-600 border-b-1">
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? " text-C_purple hover:text-C_purple  gap-3"
              : " nav-item text-white  gap-3"
          }
        >
          <PiNewspaperLight className="text-xl" />
          Blogs
        </NavLink>
      </li>

      <li className="py-4  border-gray-600 border-b-1">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? " text-C_purple hover:text-C_purple  gap-3"
              : " nav-item text-white  gap-3"
          }
        >
          <RiContactsLine className="text-xl" />
          Contact Us
        </NavLink>
      </li>
    </>
  );

  const profileDropdownNav = (
    <>
      <li className="hover:bg-C_purple">
        <NavLink
          to="/dashboard/stat"
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
          to="/dashboard/myProfile"
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
          to="/dashboard/myPropertyList"
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
          to="/dashboard/addNewProperty"
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
          to="/dashboard/favorites"
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
          to="/dashboard/inbox"
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
          to="/"
          onClick={handleSignOut}
          className={({ isActive }) =>
            isActive
              ? " text-[##222222] border-t-[#7854f6] rounded-none  hover:ms-3 transition-all duration-300  hover:text-white ps-6 py-3"
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
    <div id="top" className=" bg-white shadow-md">
      <div className="navbar py-6 lg:w-11/12 w-11/12 mx-auto ">
        <div className="navbar-start">
          {/* Hamburger Mobile Menu  */}
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn bg-transparent border-none p-2 text-2xl"
            >
              <RiMenu2Line />
            </label>
          </div>

          {/* Sidebar - Mobile  */}
          <div className="drawer-side  z-110">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay bg-white"
            ></label>
            <ul className="menu bg-black hover:bg-C_gray text-white min-h-full w-80 p-6  hover:text-C_purple text-[17px] font-normal leading-6 me-5">
              {/* Sidebar content here */}
              {navOptionsMobile}
            </ul>
          </div>

          {/* Logo-Desktop  */}
          <Link to="/">
            <img
              className="lg:w-[90%] w-full hidden lg:flex"
              src="https://i.ibb.co/vxgxQBtr/beijing-logo.webp"
              alt="logo"
            />
          </Link>
        </div>

        {/* Nav Items - Desktop | Logo - Mobile */}
        <div className="navbar-center z-100">
          <ul className="menu menu-horizontal px-10 text-[16px]  gap-2 hidden lg:flex">
            {navOptions}
          </ul>
          <Link to="/">
            <img
              className="w-[90%] lg:hidden"
              src="https://i.ibb.co/vxgxQBtr/beijing-logo.webp"
              alt="logo"
            />
          </Link>
        </div>

        {/* Cart + Profile + Add Housing Btn  */}
        <div className="navbar-end flex items-center content-center gap-4">
          {/* Number  */}
          <div className="lg:flex hidden">
            <Link to="mailto:+88012345678">
              <p className="nav-item text-[16px] font-semibold">
                +88 0124 56789
              </p>
            </Link>
          </div>

          {/* Cart  */}
          <div className="flex-none  cursor-pointer">
            <div className="dropdown dropdown-end mt-2">
              {/* Cart  */}
              <div tabIndex={0} role="button" className="">
                <div className="indicator">
                  <LuShoppingCart className="text-[#222222] text-2xl" />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              {/* Dropdown */}
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-42 shadow-2xl"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn bg-C_purple text-white">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile  */}
          {!user ? (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src="https://i.ibb.co/jkGkX8fs/default-user.png"
                />
              </div>
            </div>
          ) : (
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex="0"
                role="button"
                className="btn p-0 bg-transparent hover:bg-transparent border-none "
              >
                <div className="avatar">
                  <div className="md:w-10 w-8 rounded-full ">
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
              </div>

              {user && (
                <ul className="dropdown-content z-[1] menu p-0 gap-1 shadow-xl bg-white rounded-box w-56 lg:-ml-10 -ml-40 lg:mt-2 mt-5 font-Nunito_Sans md:text-[16px] text-sm font-medium tracking-wide ">
                  {profileDropdownNav}
                </ul>
              )}
            </div>
          )}

          {/* Btn - Desktop  */}
          {/* <Link
            to="/addProperty"
            className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md hidden lg:flex"
          >
            Add Housing
          </Link> */}

          {/* Sign In Btn - Desktop  */}

          <SignInAndUp />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

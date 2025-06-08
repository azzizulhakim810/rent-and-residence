import { useState } from "react";
import { BsBuilding, BsCart2, BsPerson } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { PiNewspaperLight } from "react-icons/pi";
import { RiContactsLine, RiMenu2Line } from "react-icons/ri";
import { NavLink } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleSubmenu = () => {};
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
          onMouseEnter={() => handleSubmenu(setShowSubmenu(true))}
          onMouseLeave={() => handleSubmenu(setShowSubmenu(false))}
          to="#"
          className="relative nav-item text-[#222222] hover:text-[#7854f6]  font-medium tracking-wide hover:bg-transparent border-t-[#7854f6] rounded-none"
        >
          Agents
          {showSubmenu ? (
            <ul className="bg-white absolute w-[150px] shadow-sm top-9 sub-menu p-2">
              <li>
                <Link
                  to="/agents"
                  className="relative nav-item text-[#222222] hover:text-[#7854f6]  font-medium tracking-wide hover:bg-transparent border-t-[#7854f6] rounded-none"
                >
                  Agents
                </Link>
              </li>
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
          {/* <ul
            id="submenu"
            className="hover:bg-transparent absolute w-[150px] shadow-sm top-11 sub-menu p-2"
          >
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul> */}
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
        <Link className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md border-0 py-5 text-[16px] my-6 shadow-none">
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
          onMouseEnter={() => handleSubmenu(setShowSubmenu(true))}
          onMouseLeave={() => handleSubmenu(setShowSubmenu(false))}
          to="#"
          /* className={({ isActive }) =>
            isActive
              ? "relative text-C_purple hover:text-C_purple  gap-3"
              : "relative nav-item text-white  gap-3"
          } */
        >
          <BsPerson className="text-xl" />
          Agents
          {/* <ul className="bg-white absolute w-[150px] shadow-sm right-0 top-10 z-10 sub-menu p-2">
            <li>
              <Link
                to="/agents"
                className="relative nav-item text-[#222222] hover:text-[#7854f6]  font-medium tracking-wide hover:bg-transparent border-t-[#7854f6] rounded-none"
              >
                Agents
              </Link>
            </li>
            <li>
              <Link
                to="/allAgents"
                className="relative nav-item text-[#222222] hover:text-[#7854f6]  font-medium tracking-wide hover:bg-transparent border-t-[#7854f6] rounded-none"
              >
                All Agents
              </Link>
            </li>
          </ul> */}
          {showSubmenu ? (
            <ul className="bg-white absolute w-[150px] shadow-sm right-0 top-10 z-10 sub-menu p-2">
              <li>
                <Link
                  to="/agents"
                  className="relative nav-item text-[#222222] hover:text-[#7854f6]  font-medium tracking-wide hover:bg-transparent border-t-[#7854f6] rounded-none"
                >
                  Agents
                </Link>
              </li>
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

  return (
    <div id="top" className=" bg-white ">
      <div className="navbar py-6 lg:w-10/12 w-11/12 mx-auto ">
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
          <div className="drawer-side  z-11">
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
        <div className="navbar-center  ">
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
            <Link mailto="+88012345678">
              <p className="nav-item text-[16px] font-semibold">
                +88 0124 56789
              </p>
            </Link>
          </div>

          {/* Cart  */}
          <div className="flex-none">
            <div className="dropdown dropdown-end mt-2">
              {/* Cart  */}
              <div tabIndex={0} role="button" className="">
                <div className="indicator">
                  <BsCart2 className="text-[#222222] text-2xl" />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              {/* Dropdown */}
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow-2xl"
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
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          {/* Btn - Desktop  */}
          <Link className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md hidden lg:flex">
            Add Housing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

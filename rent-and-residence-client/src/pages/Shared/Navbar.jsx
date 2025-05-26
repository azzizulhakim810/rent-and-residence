import { BsCart2 } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { NavLink } from "react-router";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text-[#7854f6] font-medium tracking-wide border-t-[#7854f6] rounded-none"
              : " nav-item text-[##222222] font-medium tracking-wide "
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
              ? "text-[#7854f6] font-medium tracking-wide border-t-[#7854f6] rounded-none"
              : "nav-item  text-[#222222] font-medium tracking-wide"
          }
        >
          Properties
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/agents"
          className={({ isActive }) =>
            isActive
              ? "text-[#7854f6] font-medium tracking-wide border-t-[#7854f6] rounded-none"
              : "nav-item  text-[#222222] font-medium tracking-wide"
          }
        >
          Agents
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-[#7854f6] font-medium tracking-wide border-t-[#7854f6] rounded-none"
              : "nav-item  text-[#222222] font-medium tracking-wide"
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
              ? "text-[#7854f6] font-medium tracking-wide border-t-[#7854f6] rounded-none"
              : "nav-item  text-[#222222] font-medium tracking-wide"
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
        <Link to="tel:+34 912 123 678">
          <span className="flex items-center bg-transparent hover:bg-transparent text-white hover:text-C_purple text-lg gap-3 pt-1 font-semibold">
            <FaPhoneAlt />

            <p>+34 912 123 678</p>
          </span>
        </Link>
      </li>

      {/* Add Listing Button  */}
      <li>
        <Link className="btn bg-C_purple text-white hover:bg-[#40384B] rounded border-0 py-6 text-[18px] my-6">
          Add Listing
        </Link>
      </li>
      {/* Add Nav Item  */}
      <li className="py-4 border-gray-600 border-b-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text-white hover:text-C_purple  "
              : " nav-item text-white "
          }
        >
          Home
        </NavLink>
      </li>

      <li className="py-4  border-gray-600 border-b-1">
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            isActive
              ? " text-white hover:text-C_purple "
              : " nav-item text-white  "
          }
        >
          Properties
        </NavLink>
      </li>

      <li className="py-4  border-gray-600 border-b-1">
        <NavLink
          to="/agents"
          className={({ isActive }) =>
            isActive
              ? " text-white hover:text-C_purple "
              : " nav-item text-white "
          }
        >
          Agents
        </NavLink>
      </li>

      <li className="py-4  border-gray-600 border-b-1">
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? " text-white hover:text-C_purple "
              : " nav-item text-white  "
          }
        >
          Blogs
        </NavLink>
      </li>

      <li className="py-4  border-gray-600 border-b-1">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? " text-white hover:text-C_purple "
              : " nav-item text-white "
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div id="top" className=" bg-white border-b-gray-200 border-b-2">
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
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-C_gray hover:bg-C_gray text-white min-h-full w-80 p-6  hover:text-C_purple text-[17px] font-normal leading-6 me-5">
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
          <ul className="menu menu-horizontal px-10 text-[15px] gap-2 hidden lg:flex">
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
              <p className="nav-item text-[15px] font-semibold">
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
          <Link className="btn bg-C_purple text-white hover:bg-[#40384B] rounded hidden lg:flex">
            Add Housing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

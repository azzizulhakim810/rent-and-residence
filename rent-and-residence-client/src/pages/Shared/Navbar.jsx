import { BsCart2 } from "react-icons/bs";
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

  return (
    <div className=" bg-white border-b-gray-200 border-b-2">
      <div className="navbar py-6 w-10/12 mx-auto ">
        <div className="navbar-start">
          {/* Hamburger Mobile Menu  */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>

          {/* Logo  */}
          <Link to="/">
            <img
              className="w-[90%]"
              src="https://i.ibb.co/vxgxQBtr/beijing-logo.webp"
              alt="logo"
            />
          </Link>
        </div>

        {/* Nav Items  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-10 text-[15px] gap-2">
            {navOptions}
          </ul>
        </div>

        {/* Cart + Profile + Add Housing Btn  */}
        <div className="navbar-end gap-4">
          {/* Number  */}
          <div>
            <Link mailto="+88012345678">
              <p className="nav-item text-[15px] font-semibold">
                +88 0124 56789
              </p>
            </Link>
          </div>

          {/* Cart  */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              {/* Cart  */}
              <div tabIndex={0} role="button" className="">
                <div className="indicator">
                  <BsCart2 className="text-[#222222] text-3xl " />
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

          {/* Btn  */}
          <Link className="btn bg-C_purple text-white hover:bg-[#40384B]">
            Add Housing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

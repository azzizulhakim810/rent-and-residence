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
    <div className="navbar bg-white shadow-sm py-6 px-20 w">
      <div className="navbar-start">
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
            <li>
              <Link>Item 1</Link>
            </li>
            <li>
              <Link>Parent</Link>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            className="w-[80%]"
            src="https://i.ibb.co/vxgxQBtr/beijing-logo.webp"
            alt="logo"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end gap-5">
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <div className="indicator">
                <BsCart2 className="text-[#222222] text-3xl " />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            {/* Dropdown */}
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        <Link className="btn bg-C_purple">Add Housing</Link>
      </div>
    </div>
  );
};

export default Navbar;

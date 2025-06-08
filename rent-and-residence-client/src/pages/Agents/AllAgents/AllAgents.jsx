import { BsEnvelope } from "react-icons/bs";
import {
  FaFacebookF,
  FaGlobe,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPrint,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const AllAgents = () => {
  return (
    <div className="bg-C_LightGray/5 py-6">
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm font-Nunito_Sans font-[500] mb-5">
          <ul>
            <li>
              <a>Home</a>
            </li>

            <li className="text-C_purple">Agents</li>
          </ul>
        </div>

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <h1 className="font-Nunito text-[34px] font-[700]">All Agents</h1>

            {/* Properties  */}
            {/* First Row  */}
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 py-5">
              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                {/* Profile  */}
                <div className="shadow-sm p-8 mb-5 w-full rounded-md bg-white">
                  <nav className="flex flex-col  gap-2">
                    <div className="flex justify-start items-top gap-8">
                      <div className=" w-[50%]">
                        <img
                          className="rounded-md"
                          src="https://i.ibb.co/nqCK8B0R/person7-21-1-500x328.webp"
                          alt=""
                        />

                        {/* Social Icons  */}
                        <div className="bg-gray-500 mx-auto flex justify-center align-middle items-center gap-4 ">
                          <button className=" text-C_gray bg-transparent text-[16px] p-3 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaFacebookF />
                          </button>
                          <button className=" text-C_gray bg-transparent text-[16px] p-3 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaLinkedinIn />
                          </button>
                          <button className=" text-C_gray bg-transparent text-[16px] p-3 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaXTwitter />
                          </button>
                          <button className=" text-C_gray bg-transparent text-[16px] p-3 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaYoutube />
                          </button>
                        </div>
                      </div>

                      {/* Details  */}
                      <span className=" w-auto flex flex-col gap-2 ps-3 ">
                        <div>
                          <h4 className=" font-Nunito font-[600] text-C_gray text-[25px] leading-6 pb-1">
                            Michaela Roja
                          </h4>
                          <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] leading-6">
                            real estate broker
                          </p>
                        </div>

                        <nav className="flex flex-col gap-2 text-gray-600 font-Nunito_Sans">
                          <span className="flex justify-start items-center hover:text-C_purple text-[16px] gap-3 pt-1 pointer-cursor">
                            <FaPhoneAlt className="text-lg" />

                            <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6  me-5">
                              <Link to="tel:+34 912 123 678">
                                +34 912 123 678
                              </Link>
                            </p>
                          </span>

                          <span className="flex justify-start items-center gap-3 pt-1 hover:text-C_purple  text-[16px] pointer-cursor">
                            <FaPrint className="text-lg" />
                            <p className=" text-C_gray text-[16px] leading-6  me-5">
                              +34 912 123 678
                            </p>
                          </span>

                          <span className="flex justify-start items-center gap-3 pt-1 pointer-cursor">
                            <BsEnvelope className="text-lg" />

                            <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6">
                              <Link mailto="office@realestate.com">
                                office@realestate.com{" "}
                              </Link>
                            </p>
                          </span>

                          <span className="flex justify-start items-center gap-3 pt-1 hover:text-C_purple ">
                            <FaGlobe className="text-lg" />

                            <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6">
                              <Link mailto="website.net">website.net</Link>
                            </p>
                          </span>
                        </nav>
                      </span>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar  */}
          <div className="lg:col-span-4 col-span-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAgents;

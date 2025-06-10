import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

            <li className="text-C_purple">All Agents</li>
          </ul>
        </div>

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <h1 className="font-Nunito text-[34px] font-[700]">All Agents</h1>
            <p className="flex flex-col gap-4 text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] leading-6 pt-2">
              <span>
                We like to think of ourselves as a small but perfectly formed
                lettings & management agency. Working you get the exposure,
                knowledge and expertise you would expect from a large agent, but
                the service you will only receive from a smaller business built
                around 100% client and tenant focus.
              </span>

              <span>
                Whether you’re looking for property for sale in New York area or
                property for rent, WP Residence makes searching easy. Use our
                unique geolocation mapping feature to root-out your ideal villa,
                townhouse or apartment and contact the owners direct. We will
                help you find your dream house in just a few seconds.
              </span>
            </p>

            {/* All Agents  */}
            {/* First Row  */}
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 py-5">
              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                {/* Profile  */}
                <div className=" p-2 mb-1 w-full rounded-md bg-white">
                  <nav className="flex flex-col  gap-2">
                    <div className="w-full">
                      <img
                        className="rounded-md"
                        src="https://i.ibb.co/nqCK8B0R/person7-21-1-500x328.webp"
                        alt=""
                      />
                    </div>

                    {/* Details  */}
                    <div className=" w-auto flex flex-col gap-2 p-2 mt-2">
                      <div>
                        <h4 className=" font-Nunito font-[600] text-C_gray text-[25px]">
                          Michaela Roja
                        </h4>
                        <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                          real estate broker
                        </p>

                        <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                          Michaela’s sociability, independent spirit, and
                          incredible customer service set him apart ...
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-1">
                        {/* Social Icons  */}
                        <div className=" flex gap-3 ">
                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaFacebookF />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaLinkedinIn />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px] rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaXTwitter />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaYoutube />
                          </button>
                        </div>

                        {/* Contact Info  */}
                        <nav className="flex gap-1 text-gray-600 font-Nunito_Sans">
                          <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaPhoneAlt />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaEnvelope />
                          </button>
                        </nav>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                {/* Profile  */}
                <div className=" p-2 mb-1 w-full rounded-md bg-white">
                  <nav className="flex flex-col  gap-2">
                    <div className="w-full">
                      <img
                        className="rounded-md"
                        src="https://i.ibb.co/nqCK8B0R/person7-21-1-500x328.webp"
                        alt=""
                      />
                    </div>

                    {/* Details  */}
                    <div className=" w-auto flex flex-col gap-2 p-2 mt-2">
                      <div>
                        <h4 className=" font-Nunito font-[600] text-C_gray text-[25px]">
                          Michaela Roja
                        </h4>
                        <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                          real estate broker
                        </p>

                        <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                          Michaela’s sociability, independent spirit, and
                          incredible customer service set him apart ...
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-1">
                        {/* Social Icons  */}
                        <div className=" flex gap-3 ">
                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaFacebookF />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaLinkedinIn />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px] rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaXTwitter />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaYoutube />
                          </button>
                        </div>

                        {/* Contact Info  */}
                        <nav className="flex gap-1 text-gray-600 font-Nunito_Sans">
                          <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaPhoneAlt />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaEnvelope />
                          </button>
                        </nav>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            {/* Second Row  */}
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 py-0">
              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                {/* Profile  */}
                <div className=" p-2 mb-1 w-full rounded-md bg-white">
                  <nav className="flex flex-col  gap-2">
                    <div className="w-full">
                      <img
                        className="rounded-md"
                        src="https://i.ibb.co/nqCK8B0R/person7-21-1-500x328.webp"
                        alt=""
                      />
                    </div>

                    {/* Details  */}
                    <div className=" w-auto flex flex-col gap-2 p-2 mt-2">
                      <div>
                        <h4 className=" font-Nunito font-[600] text-C_gray text-[25px]">
                          Michaela Roja
                        </h4>
                        <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                          real estate broker
                        </p>

                        <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                          Michaela’s sociability, independent spirit, and
                          incredible customer service set him apart ...
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-1">
                        {/* Social Icons  */}
                        <div className=" flex gap-3 ">
                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaFacebookF />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaLinkedinIn />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px] rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaXTwitter />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaYoutube />
                          </button>
                        </div>

                        {/* Contact Info  */}
                        <nav className="flex gap-1 text-gray-600 font-Nunito_Sans">
                          <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaPhoneAlt />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaEnvelope />
                          </button>
                        </nav>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                {/* Profile  */}
                <div className=" p-2 mb-1 w-full rounded-md bg-white">
                  <nav className="flex flex-col  gap-2">
                    <div className="w-full">
                      <img
                        className="rounded-md"
                        src="https://i.ibb.co/nqCK8B0R/person7-21-1-500x328.webp"
                        alt=""
                      />
                    </div>

                    {/* Details  */}
                    <div className=" w-auto flex flex-col gap-2 p-2 mt-2">
                      <div>
                        <h4 className=" font-Nunito font-[600] text-C_gray text-[25px]">
                          Michaela Roja
                        </h4>
                        <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                          real estate broker
                        </p>

                        <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                          Michaela’s sociability, independent spirit, and
                          incredible customer service set him apart ...
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-1">
                        {/* Social Icons  */}
                        <div className=" flex gap-3 ">
                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaFacebookF />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaLinkedinIn />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px] rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaXTwitter />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaYoutube />
                          </button>
                        </div>

                        {/* Contact Info  */}
                        <nav className="flex gap-1 text-gray-600 font-Nunito_Sans">
                          <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaPhoneAlt />
                          </button>

                          <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                            <FaEnvelope />
                          </button>
                        </nav>
                      </div>
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

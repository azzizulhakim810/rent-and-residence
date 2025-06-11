import { BsBoundingBoxCircles } from "react-icons/bs";
import {
  FaCar,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaRegHeart, FaXTwitter } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { LuCalendar } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { Link } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";

const PropertyDetails = () => {
  return (
    <div className="bg-C_LightGray/5 py-6">
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm font-Nunito_Sans font-[500] mb-5">
          <ul>
            <li>
              <a>Home</a>
            </li>

            <li className="text-C_purple">Contact Us</li>
          </ul>
        </div>

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 pb-5">
              <div>
                {/* Categories  */}
                <div className=" flex gap-3 font-Nunito_Sans">
                  <span className="bg-C_purple text-white text-[14px] rounded  px-4  py-1 ">
                    Sales
                  </span>

                  <span className="bg-C_purple text-white text-[14px] rounded  px-4  py-1 ">
                    Hot Offer
                  </span>
                </div>

                {/* Title & Subtitle  */}
                <h1 className="font-Nunito lg:text-[38px] text-[32px] font-[700] py-2">
                  Townhouse for Rent
                </h1>

                <p className="flex gap-2 items-center text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[18px] pb-2">
                  <FaMapMarkerAlt /> Nueva España, Madrid
                </p>

                {/* Overview  */}
                <div className="bg-white w-full shadow-lg p-8 my-6  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Overview
                  </h4>

                  {/* Features  */}
                  <div className="flex lg:flex-row flex-col justify-between items-center py-2">
                    <p className=" font-Nunito font-[600] text-[17px] text-C_DarkGray/90">
                      Updated On:<br></br> May 6, 2025
                    </p>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <LiaBedSolid className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">3 Bedrooms</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <PiBathtub className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">2 Bathrooms</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <FaCar className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">2 Garages</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <BsBoundingBoxCircles className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">
                        250 m<sup>2</sup>
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <LuCalendar className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">Year Built:2000</p>
                    </div>
                  </div>
                </div>

                {/* Description  */}
                <div className="bg-white w-full shadow-lg p-8 my-6  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Description
                  </h4>

                  {/* Features  */}
                  <div className="flex lg:flex-row flex-col justify-between items-center">
                    <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  pt-2">
                      Just steps away from QM2 express bus to Manhattan and
                      local buses; only minutes from the LIRR. Walking distance
                      to the Bay Terrace Shopping Center, Baybridge Commons
                      Shopping Center, pool clubs, movie theaters and tennis
                      courts. 1.5 blocks away from elementary school PS 169 and
                      Bell Academy middle school in the award-winning District
                      25. Don’t miss this opportunity!
                    </p>
                  </div>
                </div>

                <div className="bg-white w-full shadow-lg p-8 mb-2  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Overview
                  </h4>

                  {/* Social Icons  */}
                  <div className="bg-white text-C_LightGray mx-auto rounded flex justify-start align-middle items-center gap-6 py-4">
                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaFacebookF />
                    </button>

                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaLinkedinIn />
                    </button>

                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaXTwitter />
                    </button>

                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaYoutube />
                    </button>
                  </div>

                  {/* Details  */}
                  <div className=" w-auto flex flex-col gap-2 ">
                    <div className="overflow-x-auto  text-gray-600  my-3">
                      <table className=" w-4/12 text-start ">
                        <tbody className="font-Nunito_Sans text-[16px] tracking-wide">
                          {/* row 1  */}
                          <tr>
                            <td className=" text-C_gray font-[700] ">Phone:</td>
                            <td className="text-C_DarkGray">
                              <Link to="tel:+34 912 123 678">
                                (305) 555-4555
                              </Link>
                            </td>
                          </tr>

                          {/* row 2  */}
                          <tr>
                            <td className=" text-C_gray font-[700]  ">
                              Mobile:
                            </td>
                            <td className="text-C_DarkGray">
                              <Link to="tel:+34 912 123 678">
                                (305) 555-4555
                              </Link>
                            </td>
                          </tr>

                          {/* row 3  */}
                          <tr>
                            <td className=" text-C_gray font-[700]  ">
                              Email:
                            </td>
                            <td className="text-C_DarkGray">
                              <Link to="tel:+34 912 123 678">
                                realestate@inc.com
                              </Link>
                            </td>
                          </tr>

                          {/* row 4 */}
                          <tr>
                            <td className=" text-C_gray font-[700]  ">
                              LinkedIn
                            </td>
                            <td className="text-C_DarkGray">
                              <Link to="tel:+34 912 123 678">realestate</Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="flex flex-col gap-4 text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] leading-6 pt-2">
                      <span>
                        Whether you’re looking for property for sale in New York
                        area or property for rent, WP Residence makes searching
                        easy. Use our unique geolocation mapping feature to
                        root-out your ideal villa, townhouse or apartment and
                        contact the owners direct. We will help you find your
                        dream house in just a few seconds.
                      </span>

                      <span>
                        We offer our clients a wealth of knowledge regarding all
                        aspects of purchasing or selling a home. Whether it is
                        helping you search for your dream home, discussing new
                        New York real estate developments, or assisting with the
                        sale of your property, we would love the opportunity to
                        help. Please feel free to contact us with any questions!
                      </span>
                    </p>
                  </div>

                  <div className=" mt-10 w-full">
                    <figure className="bg-[url(https://i.ibb.co/DPynHVLF/team.jpg)] lg:h-[350px] h-[300px] w-full bg-cover bg-no-repeat bg-center  rounded-lg"></figure>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mt-10 bg-white w-full shadow-lg p-8 mb-2  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Contact Me
                  </h4>

                  <div className="flex flex-col gap-5 pt-2">
                    <div className="flex lg:flex-row flex-col gap-3">
                      <input
                        type="text"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Your Name"
                      />
                      <input
                        type="email"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Your Email"
                      />
                      <input
                        type="tel"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Your Phone"
                      />
                    </div>

                    <textarea className="textarea w-full h-40 "></textarea>

                    <label className="label">
                      <input type="checkbox" className="checkbox" />I consent to
                      the GDPR Terms
                    </label>

                    <button className="lg:w-3/12 w-full btn bg-C_purple border-2  text-white hover:text-C_purple hover:bg-transparent hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar  */}
          <div className="lg:col-span-4 col-span-10">
            <h1 className="font-Nunito lg:text-[38px] text-[32px] font-[600] py-2 text-end text-C_purple">
              2.100 € / <span className="text-[28px] font-[500]">month</span>
            </h1>

            {/* Share & Favourite Button  */}
            <div className=" flex justify-end gap-3 font-Nunito_Sans mb-14">
              <span
                className="flex items-center gap-2 tooltip bg-white text-title_color hover:text-C_purple font-Nunito_Sans font-[700] shadow-sm text-[15px] rounded  px-4  py-1 cursor-pointer"
                data-tip="add to favourite"
              >
                <FaRegHeart />
                Favourite
              </span>

              <span
                className="flex items-center gap-2 tooltip bg-white text-title_color hover:text-C_purple font-Nunito_Sans font-[700] shadow-sm text-[15px] rounded  px-4  py-1 cursor-pointer"
                data-tip="share this page"
              >
                <IoShareSocialOutline />
                Share
              </span>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

import { BsBoundingBoxCircles, BsEnvelope } from "react-icons/bs";
import {
  FaFacebookF,
  FaGlobe,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPrint,
  FaYoutube,
} from "react-icons/fa";
import { FaPlus, FaRegHeart, FaXTwitter } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const Agent = () => {
  return (
    <div className="bg-C_LightGray/5 py-6">
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={"Michaela Roja"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            {/* Profile  */}
            <div className="shadow-sm lg:p-8 p-5 mb-5 w-full rounded-md bg-white">
              <nav className="flex flex-col gap-2">
                <div className="flex lg:flex-row flex-col justify-start items-top gap-8">
                  <div className=" lg:w-[50%] w-full">
                    <img
                      className="rounded-md "
                      src="https://i.ibb.co/nqCK8B0R/person7-21-1-500x328.webp"
                      alt=""
                    />

                    {/* Social Icons  */}
                    <div className="bg-white w-10/12 z-10 shadow-xl text-C_LightGray mx-auto rounded flex justify-center align-middle items-center gap-3 py-1">
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
                      <h4 className=" font-Nunito font-[600] text-C_gray text-[25px] leading-6 pb-2">
                        Michaela Roja
                      </h4>
                      <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] leading-6">
                        real estate broker
                      </p>
                    </div>

                    <nav className="flex flex-col gap-3 text-gray-600 font-Nunito_Sans">
                      <span className="flex justify-start items-center hover:text-C_purple text-[16px] gap-3 pt-1 pointer-cursor">
                        <FaPhoneAlt className="text-lg" />

                        <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6  me-5">
                          <Link to="tel:+34 912 123 678">+34 912 123 678</Link>
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

                {/* About Me */}
                <div className="pt-10 p-2">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    About Me
                  </h4>

                  <p className="flex flex-col gap-4 text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] leading-6 pt-2">
                    <span>
                      Michaela’s sociability, independent spirit, and incredible
                      customer service set him apart as a top agent in the New
                      York real estate market. He works with a range of clients
                      – national and international, as well as investors and
                      local residents.
                    </span>

                    <span>
                      Whether a client is in the market for a single-family home
                      or a luxury penthouse, Michael is there to help out.
                      Between his time in the hospitality and real estate
                      industries, he knows what good service is all about.
                    </span>
                  </p>
                </div>

                {/* Contact Me */}
                <div className="pt-10">
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
              </nav>
            </div>

            <h1 className="font-Nunito text-[30px] font-[700] pt-5">
              My Listings
            </h1>

            {/* Filter  */}
            <div className="lg:flex-row flex flex-col lg:gap-0 gap-5 bg-white lg:px-0 px-8 lg:py-0 py-10 rounded-md shadow-sm mt-6 mb-3 ">
              <button
                className="btn border-none
               text-white bg-C_purple p-8 font-Nunito font-[700]"
              >
                All (4)
              </button>
              <button className="btn border-none hover:text-white hover:bg-C_purple p-8 font-Nunito font-[700] bg-transparent">
                Duplexes (1)
              </button>
              <button className="btn border-none hover:text-white hover:bg-C_purple p-8 font-Nunito font-[700] bg-transparent">
                Industrial (1)
              </button>
              <button className="btn border-none hover:text-white hover:bg-C_purple p-8 font-Nunito font-[700] bg-transparent">
                Retail (2)
              </button>
            </div>

            {/* Properties  */}
            {/* First Row  */}
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 py-5">
              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                <figure className="bg-[url(https://i.ibb.co/q33Q7qm4/pexels-fotoaibe-813692.jpg)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-t-lg">
                  <div className="absolute top-0 right-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                    <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 ">
                      Sales
                    </span>

                    <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 ">
                      Hot Offer
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                    <span className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                      5.500.000 €
                    </span>

                    <span className=" text-white font-Nunito font-[700] text-[20px] rounded px-6 ">
                      Villa with Amazing View
                    </span>
                  </div>
                </figure>

                <div className="card-body ">
                  <div className="flex justify-start">
                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <VscHome className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">3 Rooms</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <LiaBedSolid className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">5 Beds</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <PiBathtub className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">3 Baths</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px] ">
                      <BsBoundingBoxCircles className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">
                        250 m<sup>2</sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-300 h-[.5px] mt-0 mb-0"></div>

                <div className="px-5 py-4 flex justify-between">
                  <div className="avatar flex items-center gap-4">
                    <div className="w-8 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                    <p className="font-bold">Elena Pernía</p>
                  </div>

                  <div className="flex gap-1">
                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="share"
                    >
                      <IoShareSocialOutline />
                    </button>

                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="add to favourits"
                    >
                      <FaRegHeart />
                    </button>

                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="compare"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>

              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                <figure className="bg-[url(https://i.ibb.co/chXfhj9Q/pexels-fotoaibe-1571460.jpg)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-t-lg">
                  <div className="absolute top-0 right-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                    <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 ">
                      Sales
                    </span>

                    <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 ">
                      Hot Offer
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                    <span className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                      5.500.000 €
                    </span>

                    <span className=" text-white font-Nunito font-[700] text-[20px] rounded px-6 ">
                      Villa with Amazing View
                    </span>
                  </div>
                </figure>

                <div className="card-body ">
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <VscHome className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">3 Rooms</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <LiaBedSolid className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">5 Beds</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <PiBathtub className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">3 Baths</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px] ">
                      <BsBoundingBoxCircles className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">
                        250 m<sup>2</sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-300 h-[.5px] mt-0 mb-0"></div>

                <div className="px-5 py-4 flex justify-between">
                  <div className="avatar flex items-center gap-4">
                    <div className="w-8 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                    <p className="font-bold">Elena Pernía</p>
                  </div>

                  <div className="flex gap-1">
                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="share"
                    >
                      <IoShareSocialOutline />
                    </button>

                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="add to favourits"
                    >
                      <FaRegHeart />
                    </button>

                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="compare"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row  */}
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 py-5">
              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                {/* Image  */}
                <figure className="bg-[url(https://i.ibb.co/q33Q7qm4/pexels-fotoaibe-813692.jpg)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-t-lg">
                  <div className="absolute top-0 right-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                    <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 ">
                      Sales
                    </span>

                    <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 ">
                      Hot Offer
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                    <span className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                      5.500.000 €
                    </span>

                    <span className=" text-white font-Nunito font-[700] text-[20px] rounded px-6 ">
                      Villa with Amazing View
                    </span>
                  </div>
                </figure>

                <div className="card-body ">
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <VscHome className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">3 Rooms</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <LiaBedSolid className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">5 Beds</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <PiBathtub className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">3 Baths</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px] ">
                      <BsBoundingBoxCircles className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">
                        250 m<sup>2</sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-300 h-[.5px] mt-0 mb-0"></div>

                <div className="px-5 py-4 flex justify-between">
                  <div className="avatar flex items-center gap-4">
                    <div className="w-8 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                    <p className="font-bold">Elena Pernía</p>
                  </div>

                  <div className="flex gap-1">
                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="share"
                    >
                      <IoShareSocialOutline />
                    </button>

                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="add to favourits"
                    >
                      <FaRegHeart />
                    </button>

                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="compare"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>

              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                {/* Image  */}
                <figure className="bg-[url(https://i.ibb.co/chXfhj9Q/pexels-fotoaibe-1571460.jpg)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-t-lg">
                  <div className="absolute top-0 right-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                    <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 ">
                      Sales
                    </span>

                    <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 ">
                      Hot Offer
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                    <span className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                      5.500.000 €
                    </span>

                    <span className=" text-white font-Nunito font-[700] text-[20px] rounded px-6 ">
                      Villa with Amazing View
                    </span>
                  </div>
                </figure>

                <div className="card-body ">
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <VscHome className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">3 Rooms</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <LiaBedSolid className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">5 Beds</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
                      <PiBathtub className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">3 Baths</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 font-Nunito text-[14px] ">
                      <BsBoundingBoxCircles className="text-[20px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">
                        250 m<sup>2</sup>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-300 h-[.5px] mt-0 mb-0"></div>

                <div className="px-5 py-4 flex justify-between">
                  <div className="avatar flex items-center gap-4">
                    <div className="w-8 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                    <p className="font-bold">Elena Pernía</p>
                  </div>

                  <div className="flex gap-1">
                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="share"
                    >
                      <IoShareSocialOutline />
                    </button>

                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="add to favourits"
                    >
                      <FaRegHeart />
                    </button>

                    <button
                      className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
                      data-tip="compare"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination  */}
            <div className="join py-5">
              {/* Previous Button  */}
              <button className="join-item btn">
                <GrPrevious />
              </button>

              <input
                className="join-item btn btn-square ms-5"
                type="radio"
                name="options"
                aria-label="1"
                checked="checked"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="2"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="3"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="4"
              />

              {/* Quantity Per page  */}
              <select
                defaultValue="5"
                className="btn join-item select block w-[80px] ms-3 mx-5 bg-transparent border-gray-300 border-[1px] rounded focus:outline-none focus:ring-0 focus:ring-gray-300 focus:border-[1px] text-[14px] text-C_DarkGray focus:text-C_DarkGray font-Nunito_Sans"
              >
                <option disabled={true}>5</option>
                <option>10</option>
                <option>15</option>
              </select>

              {/* Next Button  */}
              <button className="join-item btn">
                <GrNext />
              </button>
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

export default Agent;

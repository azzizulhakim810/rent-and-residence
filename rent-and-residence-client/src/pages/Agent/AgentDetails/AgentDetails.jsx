import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

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
import { GrNext, GrPrevious } from "react-icons/gr";

import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import PropertyCard from "../../../components/PropertyCard/PropertyCard";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const AgentDetails = () => {
  const [agentOwnedProperty, setAgentOwnedProperty] = useState({});

  const agent = useLoaderData([]);
  // console.log(agent[0]);

  // Destructure Details from Agent
  const { _id, name, profileImage, email, role, phone } = agent[0] || {};

  useEffect(() => {
    fetch(`http://localhost:5123/api/agentOwnedProperty/${_id}`)
      .then((res) => res.json())
      .then((data) => setAgentOwnedProperty(data[0]));
  }, [_id]);

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
                <div className="flex lg:flex-row flex-col justify-start items-center gap-8">
                  <div className=" lg:w-[40%] w-full">
                    <img className="rounded-md " src={profileImage} alt="" />

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
                  <div className=" w-auto flex flex-col gap-2 ps-3 ">
                    <div>
                      <h4 className=" font-Nunito font-[600] text-C_gray text-[25px] leading-6 pb-2">
                        {name}
                      </h4>
                      <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] leading-6 capitalize">
                        {role}
                      </p>
                    </div>

                    <nav className="flex flex-col gap-3 text-gray-600 font-Nunito_Sans">
                      <span className="flex justify-start items-center hover:text-C_purple text-[16px] gap-3 pt-1 pointer-cursor">
                        <FaPhoneAlt className="text-lg" />

                        <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6  me-5">
                          <Link to="tel:+34 912 123 678">{phone}</Link>
                        </p>
                      </span>

                      <span className="flex justify-start items-center gap-3 pt-1 hover:text-C_purple  text-[16px] pointer-cursor">
                        <FaPrint className="text-lg" />
                        <p className=" text-C_gray text-[16px] leading-6  me-5">
                          {phone}
                        </p>
                      </span>

                      <span className="flex justify-start items-center gap-3 pt-1 pointer-cursor">
                        <BsEnvelope className="text-lg" />

                        <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6">
                          <Link mailto="office@realestate.com">{email} </Link>
                        </p>
                      </span>

                      <span className="flex justify-start items-center gap-3 pt-1 hover:text-C_purple ">
                        <FaGlobe className="text-lg" />

                        <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6">
                          <Link mailto="website.net">NAN</Link>
                        </p>
                      </span>
                    </nav>
                  </div>
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
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-start w-full gap-6 py-5">
              {agentOwnedProperty && (
                <PropertyCard property={agentOwnedProperty} />
              )}
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

export default AgentDetails;

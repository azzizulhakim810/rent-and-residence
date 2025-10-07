import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

import { BsEnvelope } from "react-icons/bs";
import {
  FaFacebookF,
  FaGlobe,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPrint,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";

import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import PropertyCard from "../../../components/PropertyCard/PropertyCard";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import useScrollToTop from "../../../hooks/useScrollToTop/useScrollToTop";
import FavouritePropCard from "../../../components/FavouritePropCard/FavouritePropCard";

const AgentDetails = () => {
  const [agentOwnedProperty, setAgentOwnedProperty] = useState([]);

  useScrollToTop();
  const agent = useLoaderData([]);
  const params = useParams();
  console.log(params);
  const axiosPublic = useAxiosPublic();
  console.log(agent);

  // Destructure Details from Agent
  const {
    _id,
    name,
    bio,
    profileImage,
    email,
    role,
    phone,
    facebookUrl,
    // instagramUrl,
    linkedinUrl,
    pinterestUrl,
    twitterUrl,
    websiteUrl,
  } = agent || {};

  // Check & validate URL
  const handleUrl = (url) => {
    if (!url) return "#";

    /*  if (!/^https?:\/\//i.test(url)) {
      return "https://" + url;
    } */

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return "https://" + url;
    }
    return url;
  };

  const formattedFacebookURL = handleUrl(facebookUrl);
  const formattedLinkedInURL = handleUrl(linkedinUrl);
  const formattedPinterestURL = handleUrl(pinterestUrl);
  const formattedTwitterURL = handleUrl(twitterUrl);
  // const formattedInstagramURL = handleUrl(instagramUrl);
  const formattedWebsiteURL = handleUrl(websiteUrl);

  useEffect(() => {
    axiosPublic
      .get(`/api/agentOwnedProperty/${_id}`)
      .then((res) => setAgentOwnedProperty(res.data))
      .catch((err) => console.log(err));
  }, [axiosPublic, _id]);

  console.log(agentOwnedProperty);

  return (
    <div className="bg-C_LightGray/5 py-6">
      <Helmet>
        <title>R & R | {name}</title>
      </Helmet>
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={"Michaela Roja"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            {/* Profile  */}
            <div className="shadow-sm lg:p-8 p-5 mb-5 w-full rounded-md bg-white">
              <nav className="flex flex-col gap-2">
                <div className="flex lg:flex-row flex-col justify-start items-top gap-8 -mb-36">
                  <div className=" lg:w-1/2 w-full ">
                    <img
                      className="rounded-md w-[100%] h-[60%]  mx-auto object-cover object-center"
                      src={profileImage}
                      alt=""
                    />

                    {/* Social Icons  */}
                    <div className="bg-white w-10/12 z-10 shadow-xl text-C_LightGray mx-auto rounded flex justify-center align-middle items-center gap-3 py-1">
                      <a
                        href={formattedFacebookURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className=" text-C_gray bg-transparent text-[16px] p-3 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                          <FaFacebookF />
                        </button>
                      </a>
                      <a
                        href={formattedLinkedInURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className=" text-C_gray bg-transparent text-[16px] p-3 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                          <FaLinkedinIn />
                        </button>
                      </a>
                      <a
                        href={formattedTwitterURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className=" text-C_gray bg-transparent text-[16px] p-3 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                          <FaXTwitter />
                        </button>
                      </a>
                      <a
                        href={formattedPinterestURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className=" text-C_gray bg-transparent text-[16px] p-3 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                          <FaPinterest />
                        </button>
                      </a>
                    </div>
                  </div>

                  {/* Details  */}
                  <span className="lg:w-1/2  w-auto flex flex-col gap-2 ps-3 pt-1 ">
                    <div>
                      <h4 className=" font-Nunito font-[600] text-C_gray text-[25px] leading-6 pb-2">
                        {name}
                      </h4>
                      <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] leading-6 capitalize">
                        {role}
                      </p>
                    </div>

                    <nav className="flex flex-col gap-3 text-gray-600 font-Nunito_Sans">
                      <a href={`tel:${phone}`}>
                        <span className="flex justify-start items-center hover:text-C_purple text-[16px] gap-3 pt-1 pointer-cursor">
                          <FaPhoneAlt className="text-lg" />

                          <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6  me-5">
                            {phone}
                          </p>
                        </span>
                      </a>

                      <a href={`tel:${phone}`}>
                        <span className="flex justify-start items-center gap-3 pt-1 hover:text-C_purple  text-[16px] pointer-cursor">
                          <FaPrint className="text-lg" />
                          <p className=" text-C_gray text-[16px] leading-6  me-5">
                            {phone}
                          </p>
                        </span>
                      </a>

                      <a href={`mailto:${email}`}>
                        <span className="flex justify-start items-center gap-3 pt-1 pointer-cursor">
                          <BsEnvelope className="text-lg" />

                          <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6">
                            {email}
                          </p>
                        </span>
                      </a>

                      <a href={formattedWebsiteURL}>
                        <span className="flex justify-start items-center gap-3 pt-1 hover:text-C_purple ">
                          <FaGlobe className="text-lg" />

                          <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6">
                            {websiteUrl}
                          </p>
                        </span>
                      </a>
                    </nav>
                  </span>
                </div>

                {/* Bio  */}
                <div>
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Bio
                  </h4>

                  <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  pt-2">
                    {bio}
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
              {/* {agentOwnedProperty.length !== 0 &&
                agentOwnedProperty?.map((eachProp) => (
                  <PropertyCard key={eachProp._id} property={eachProp} />
                ))} */}
              {agentOwnedProperty.length !== 0 &&
                agentOwnedProperty?.map((eachProp) => (
                  <FavouritePropCard
                    key={eachProp._id}
                    favProperty={eachProp}
                  />
                ))}
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

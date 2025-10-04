import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const SearchResults = () => {
  const axiosPublic = useAxiosPublic();
  const [params] = useSearchParams();
  const city = params.get("city");
  const bedroom = params.get("bedroom");
  const room = params.get("room");

  console.log(city, bedroom, room);

  // useEffect(() => {
  //   axiosPublic.get(`/api/search?city=${city}&bedroom=${bedroom}&room=${room}`);
  // }, []);

  const {
    data: foundProperties,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["searchResults", city, bedroom, room],
    queryFn: async () => {
      const result = await axiosPublic.get(
        `/api/search?city=${city}&bedroom=${bedroom}&room=${room}`
      );
      return result.data;
    },
  });

  console.log(foundProperties);

  return (
    <div className="bg-C_LightGray/5 pb-6 ">
      <Helmet>
        <title>R & R | Contact</title>
      </Helmet>
      {/* Map  */}
      {/* <Map
        lat={homeLat}
        lng={homeLng}
        title={title}
        propImg={officeImg}
        price={price}
      /> */}

      <div className="w-10/12 mx-auto pt-4 ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={"Search Results"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 pb-5">
              <div>
                {/* Contact Info  */}
                <div className="bg-white w-full shadow-lg p-8 mb-2  rounded-md ">
                  <h1 className="font-Nunito lg:text-[34px] text-[32px]  font-[700]">
                    Real Estate Agency
                  </h1>

                  <p className="flex gap-2 items-center text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[18px] pb-2">
                    Calle de Toledo, 41, 28005 Madrid, Spain
                  </p>

                  {/* Property Cards  */}
                  <div className="grid lg:grid-cols-2 grid-cols-1 justify-start w-full gap-6 py-5">
                    {isPending ? (
                      <div className="flex">
                        <p className="font-Nunito_Sans text-lg text-C_purple pe-2">
                          Properties are loading
                        </p>
                        <br />
                        <span className=" loading loading-ring loading-xl text-C_purple"></span>
                      </div>
                    ) : (
                      foundProperties?.map((property) => (
                        <PropertyCard
                          key={property._id}
                          property={property}
                          // favourites={favouritePropertyIds}
                          refetch={refetch}
                        />
                      ))
                    )}
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
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

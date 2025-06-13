// import { useEffect, useState } from "react";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { VscHome } from "react-icons/vsc";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Properties = () => {
  // const [properties, setProperties] = useState([]);
  const allProperties = useLoaderData([]);
  // setProperties(allProperties);

  /*   useEffect(() => {
    fetch("http://localhost:5123/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []); */

  // console.log(properties.map((property) => console.log(property)));

  // console.log(properties);
  return (
    <div className="grid grid-cols-12 lg:pb-22 lg:pt-0 py-20 relative">
      {/* Section Title Desktop | Hidden on Mobile */}

      <SectionTitle title={"Properties"} />

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-5/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          Discover the latest properties available today in Madrid area
        </h1>

        {/* First Row  */}
        <div className="flex lg:grid  grid-cols-3 justify-start w-full gap-6 py-5">
          {allProperties?.map((property) => (
            <div
              key={property._id}
              className=" bg-white  w-full shadow-lg rounded-lg"
            >
              {/* Image  */}
              <figure
                className={`bg-[url(${property.images[1]})] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-t-lg`}
              >
                {/*  className={`"(bg-[url(https://i.ibb.co/q33Q7qm4/pexels-fotoaibe-813692.jpg)])" "h-[250px]" "w-full" "bg-cover" "bg-no-repeat" "relative" "bg-black/20" "hover:bg-black/10"  "duration-400 ""bg-blend-overlay" "cursor-pointer" "rounded-t-lg"`} */}

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
          ))}
        </div>

        <Link className="btn w-1/6 mx-auto my-5 bg-C_purple text-white hover:bg-transparent hover:border-2 hover:border-C_purple hover:text-C_purple border-2 rounded-md hidden lg:flex capitalize text-[15px] font-Nunito_Sans py-5">
          load more listings
        </Link>
      </div>
    </div>
  );
};

export default Properties;

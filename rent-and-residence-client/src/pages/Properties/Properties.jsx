import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { VscHome } from "react-icons/vsc";
import Sidebar from "./Sidebar/Sidebar";

const Properties = () => {
  return (
    <div className="bg-C_LightGray/5 py-6">
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm font-Nunito_Sans font-[500]">
          <ul>
            <li>
              <a>Home</a>
            </li>

            <li className="text-C_purple">Properties Standard List</li>
          </ul>
        </div>

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10 ">
          <div className="col-span-8 ">
            <h1 className="font-Nunito text-[34px] font-[700]">
              Properties Standard List
            </h1>

            {/* Filter  */}
            <div className="flex gap-3 bg-white px-3 py-2 rounded-md shadow-sm mt-6 mb-3">
              <select
                defaultValue="Types"
                className="select select-ghost  join-item block w-[15%] px-4 py-0 bg-white border border-none rounded-full focus:outline-none focus:ring-0 focus:ring-none focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Types</option>
                <option>Rentals</option>
                <option>Sales</option>
              </select>

              <select
                defaultValue="Cities"
                className="select select-ghost  join-item block w-[15%] px-4 py-0 bg-white border border-none rounded-full focus:outline-none focus:ring-0 focus:ring-none focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Cities</option>
                <option>Madrid</option>
              </select>

              <select
                defaultValue="Categories"
                className="select select-ghost  join-item block w-[20%] px-4 py-0 bg-white border border-none rounded-full focus:outline-none focus:ring-0 focus:ring-none focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Categories</option>
                <option>Apartments</option>
                <option>Condos</option>
                <option>Duplexes</option>
              </select>

              <select
                defaultValue="Areas"
                className="select select-ghost  join-item block w-[25%] px-4 py-0 bg-white border border-none rounded-full focus:outline-none focus:ring-0 focus:ring-none focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Areas</option>
                <option>Calle De Embajadores</option>
                <option>El Cañaveral</option>
                <option>Goya</option>
              </select>

              <select
                defaultValue="States"
                className="select select-ghost  join-item block w-[25%] px-4 py-0 bg-white border border-none rounded-full focus:outline-none focus:ring-0 focus:ring-none focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Price/Date/Quantity</option>
                <option>Price High to Low</option>
                <option>Price Low to High</option>
                <option>Newest first</option>
                <option>Oldest first</option>
                <option>Bedrooms High to Low</option>
                <option>Bedrooms Low to high</option>
              </select>
            </div>

            {/* Properties  */}
            {/* First Row  */}
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
          <div className="col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;

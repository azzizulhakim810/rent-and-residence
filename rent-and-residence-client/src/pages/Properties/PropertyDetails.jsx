import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { BsBoundingBoxCircles, BsEnvelope } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { CiParking1 } from "react-icons/ci";
import {
  FaCar,
  FaFacebookF,
  FaGlobe,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPrint,
  FaYoutube,
} from "react-icons/fa";
import { FaRegHeart, FaXTwitter } from "react-icons/fa6";
import {
  GiComputerFan,
  GiFireplace,
  GiFrozenOrb,
  GiHotSurface,
  GiWashingMachine,
} from "react-icons/gi";
import { GrWheelchair } from "react-icons/gr";
import {
  IoShareSocialOutline,
  IoWaterOutline,
  IoWifiOutline,
} from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { LuCalendar } from "react-icons/lu";
import {
  MdElectricBolt,
  MdOutlineGasMeter,
  MdOutlineLocalLaundryService,
  MdOutlineSmokeFree,
  MdOutlineYard,
} from "react-icons/md";
import { PiBathtub, PiElevatorLight } from "react-icons/pi";

import { PiBasketballThin } from "react-icons/pi";
import { TbToolsKitchen2 } from "react-icons/tb";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PropertySidebar from "./PropertySidebar";

const PropertyDetails = () => {
  const [property, setProperty] = useState({});

  const { propertyId } = useParams();
  // console.log(propertyId);

  useEffect(() => {
    fetch(`http://localhost:5123/api/properties/${propertyId}`)
      .then((res) => res.json())
      .then((data) => setProperty(data[0]));
  }, [propertyId]);

  // Destructure Details from Property
  const {
    _id,
    title,
    price,
    address,
    updatedAt,
    propertyType,
    listingType,
    images,
    size,
    bedrooms,
    bathrooms,
    rooms,
    ownerId,
  } = property || {};

  const timeStamp = updatedAt;
  const date = new Date(timeStamp);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  console.log(formattedDate);

  return (
    <div className="bg-C_LightGray/5 py-6">
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={title} />

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

                {/* Title - Desktop */}
                <h1 className="font-Nunito lg:text-[38px] text-[32px] font-[700] pt-2">
                  {title}
                </h1>

                {/* Price - Mobile  */}
                <h1 className="lg:hidden flex font-Nunito lg:text-[38px] text-[32px] font-[600]  text-end text-C_purple pb-1">
                  {price} € /{" "}
                  <span className="text-[28px] font-[500]">month</span>
                </h1>

                {/* Subtitle - Desktop */}
                <p className="flex gap-2 items-center text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[18px] lg:pb-2 ">
                  <FaMapMarkerAlt /> {address?.locality}, {address?.city},{" "}
                  {address?.state}
                </p>

                {/* Share & Favourite Button - Mobile  */}
                <div className=" lg:hidden flex justify-start gap-3 font-Nunito_Sans mb-8 pt-3">
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

                {/* Overview  */}
                <div className="bg-white w-full shadow-lg p-8 my-6  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 lg:pb-2 pb-6">
                    Overview
                  </h4>

                  {/* Features  */}
                  <div className="flex lg:flex-row lg:gap-0 gap-8 justify-between lg:items-center flex-wrap items-start py-2">
                    <p className=" font-Nunito font-[600] text-[17px] text-C_DarkGray/90">
                      Updated On:<br></br> {formattedDate}
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

                  <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  pt-2">
                    Just steps away from QM2 express bus to Manhattan and local
                    buses; only minutes from the LIRR. Walking distance to the
                    Bay Terrace Shopping Center, Baybridge Commons Shopping
                    Center, pool clubs, movie theaters and tennis courts. 1.5
                    blocks away from elementary school PS 169 and Bell Academy
                    middle school in the award-winning District 25. Don’t miss
                    this opportunity!
                  </p>
                </div>

                {/* Details  */}
                <div className="bg-white w-full shadow-lg p-8 my-6  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Details
                  </h4>

                  {/* Info  */}
                  <div className=" w-auto flex flex-col gap-2 ">
                    {/* Desktop  */}
                    <div className="overflow-x-auto lg:flex hidden text-gray-600  my-3">
                      <table className=" w-full h-[180px] text-start ">
                        <tbody className="font-Nunito_Sans text-[16px] tracking-wide">
                          {/* row 1  */}
                          <tr className="text-C_gray">
                            <td>
                              <strong>Property Id:</strong> 132
                            </td>
                            <td>
                              <strong>Price:</strong> 2.100 € / month
                            </td>
                            <td>
                              <strong>Property Size:</strong> 150 m2
                            </td>
                          </tr>

                          {/* row 2  */}
                          <tr className=" text-C_gray  ">
                            <td>
                              <strong>Property Lot Size:</strong> 200 m2
                            </td>
                            <td>
                              <strong>Rooms: </strong> 10
                            </td>
                            <td>
                              <strong>Bedrooms: </strong> 3
                            </td>
                          </tr>

                          {/* row 3  */}
                          <tr className=" text-C_gray  ">
                            <td>
                              <strong>Bathrooms:</strong> 2
                            </td>
                            <td>
                              <strong>Year Built: </strong> 2000
                            </td>
                            <td>
                              <strong>Garages: </strong> 2
                            </td>
                          </tr>

                          {/* row 4 */}
                          <tr className=" text-C_gray  ">
                            <td>
                              <strong>Garage Size:</strong> 2 cars
                            </td>
                            <td>
                              <strong>Available from: </strong> 2021-09-02
                            </td>
                            <td>
                              <strong>Basement: </strong> cement
                            </td>
                          </tr>

                          {/* row 5 */}
                          <tr className=" text-C_gray  ">
                            <td>
                              <strong>External construction:</strong> No
                            </td>
                            <td>
                              <strong>Roofing: </strong> No
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile  */}
                    <div className="overflow-x-auto lg:hidden text-gray-600  my-3">
                      <table className=" w-full h-[180px] text-start ">
                        <tbody className="font-Nunito_Sans text-[16px] tracking-wide">
                          {/* row 1  */}
                          <tr className="flex flex-col gap-3  w-[100%] text-C_gray mb-3">
                            <td>
                              <strong>Property Id:</strong> 132
                            </td>
                            <td>
                              <strong>Price:</strong> 2.100 € / month
                            </td>
                            <td>
                              <strong>Property Size:</strong> 150 m2
                            </td>
                          </tr>

                          {/* row 2  */}
                          <tr className="flex flex-col gap-3  w-[100%] text-C_gray mb-3">
                            <td>
                              <strong>Property Lot Size:</strong> 200 m2
                            </td>
                            <td>
                              <strong>Rooms: </strong> 10
                            </td>
                            <td>
                              <strong>Bedrooms: </strong> 3
                            </td>
                          </tr>

                          {/* row 3  */}
                          <tr className="flex flex-col gap-3  w-[100%] text-C_gray mb-3">
                            <td>
                              <strong>Bathrooms:</strong> 2
                            </td>
                            <td>
                              <strong>Year Built: </strong> 2000
                            </td>
                            <td>
                              <strong>Garages: </strong> 2
                            </td>
                          </tr>

                          {/* row 4 */}
                          <tr className="flex flex-col gap-3  w-[100%] text-C_gray mb-3">
                            <td>
                              <strong>Garage Size:</strong> 2 cars
                            </td>
                            <td>
                              <strong>Available from: </strong> 2021-09-02
                            </td>
                            <td>
                              <strong>Basement: </strong> cement
                            </td>
                          </tr>

                          {/* row 5 */}
                          <tr className="flex flex-col gap-3  w-[100%] text-C_gray mb-3">
                            <td>
                              <strong>External construction:</strong> No
                            </td>
                            <td>
                              <strong>Roofing: </strong> No
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Features  */}
                <div className="bg-white w-full shadow-lg p-8 my-6  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Features
                  </h4>

                  {/* F Info  */}
                  <div className=" w-auto flex flex-col gap-2 ">
                    {/* Desktop  */}
                    <div className="overflow-x-auto lg:flex hidden text-gray-600  my-3">
                      <table className=" w-full  text-start ">
                        <tbody className=" font-Nunito_Sans text-[16px] tracking-wide">
                          {/* row 1  */}
                          <tr className="block mt-3 mb-3 font-Nunito font-[700] text-C_gray">
                            Interior Details
                          </tr>
                          <tr className="text-C_gray">
                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <TbToolsKitchen2 className="text-C_purple text-xl" />
                                Equipped Kitchen
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <CgGym className="text-C_purple text-xl" />
                                Gym
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <MdOutlineLocalLaundryService className="text-C_purple text-xl" />
                                Laundry
                              </p>
                            </td>
                          </tr>

                          {/* row 2  */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Outdoor Details
                          </tr>
                          <tr className=" text-C_gray">
                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <MdOutlineYard className="text-C_purple text-xl" />
                                Back yard
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <PiBasketballThin className="text-C_purple text-xl" />
                                Basketball court
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <CiParking1 className="text-C_purple text-xl" />
                                Garage Attached
                              </p>
                            </td>
                          </tr>

                          {/* row 3  */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Utilities
                          </tr>
                          <tr className=" text-C_gray">
                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <GiFrozenOrb className="text-C_purple text-xl" />
                                Central Air
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <MdElectricBolt className="text-C_purple text-xl" />
                                Electricity
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <GiHotSurface className="text-C_purple text-xl" />
                                Heating
                              </p>
                            </td>
                          </tr>
                          <span className="block my-3"></span>
                          <tr className=" text-C_gray">
                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <MdOutlineGasMeter className="text-C_purple text-xl" />
                                Natural Gas
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <GiComputerFan className="text-C_purple text-xl" />
                                Ventilation
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <IoWaterOutline className="text-C_purple text-xl" />
                                Water
                              </p>
                            </td>
                          </tr>

                          {/* row 4 */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Other Features
                          </tr>
                          <tr className=" text-C_gray">
                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <GrWheelchair className="text-C_purple text-xl" />
                                Chair Accessible
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <PiElevatorLight className="text-C_purple text-xl" />
                                Elevator
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <GiFireplace className="text-C_purple text-xl" />
                                Fireplace
                              </p>
                            </td>
                          </tr>
                          <span className="block my-3"></span>
                          <tr className=" text-C_gray">
                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <MdOutlineSmokeFree className="text-C_purple text-xl" />
                                Smoke detectors
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <GiWashingMachine className="text-C_purple text-xl" />
                                Washer and dryer
                              </p>
                            </td>

                            <td className="w-1/3">
                              <p className="flex gap-3">
                                <IoWifiOutline className="text-C_purple text-xl" />
                                WiFi
                              </p>
                            </td>
                          </tr>

                          {/* row 5 */}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile  */}
                    <div className="overflow-x-auto lg:hidden text-gray-600  my-3">
                      <table className=" w-full  text-start ">
                        <tbody className=" font-Nunito_Sans text-[16px] tracking-wide">
                          {/* row 1  */}
                          <tr className="block  mt-3 mb-3 font-Nunito font-[700] text-C_gray">
                            Interior Details
                          </tr>
                          <tr className="flex flex-col flex-wrap gap-3 w-full text-C_gray">
                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <TbToolsKitchen2 className="text-C_purple text-xl" />
                                Equipped Kitchen
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <CgGym className="text-C_purple text-xl" />
                                Gym
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <MdOutlineLocalLaundryService className="text-C_purple text-xl" />
                                Laundry
                              </p>
                            </td>
                          </tr>

                          {/* row 2  */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Outdoor Details
                          </tr>
                          <tr className="flex flex-col gap-3 w-full text-C_gray">
                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <MdOutlineYard className="text-C_purple text-xl" />
                                Back yard
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <PiBasketballThin className="text-C_purple text-xl" />
                                Basketball court
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <CiParking1 className="text-C_purple text-xl" />
                                Garage Attached
                              </p>
                            </td>
                          </tr>

                          {/* row 3  */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Utilities
                          </tr>
                          <tr className="flex flex-col gap-3 w-full text-C_gray">
                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <GiFrozenOrb className="text-C_purple text-xl" />
                                Central Air
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <MdElectricBolt className="text-C_purple text-xl" />
                                Electricity
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <GiHotSurface className="text-C_purple text-xl" />
                                Heating
                              </p>
                            </td>
                          </tr>
                          <span className="block my-3"></span>
                          <tr className="flex flex-col gap-3 w-full text-C_gray">
                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <MdOutlineGasMeter className="text-C_purple text-xl" />
                                Natural Gas
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <GiComputerFan className="text-C_purple text-xl" />
                                Ventilation
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <IoWaterOutline className="text-C_purple text-xl" />
                                Water
                              </p>
                            </td>
                          </tr>

                          {/* row 4 */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Other Features
                          </tr>
                          <tr className="flex flex-col gap-3 w-full text-C_gray">
                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <GrWheelchair className="text-C_purple text-xl" />
                                Chair Accessible
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <PiElevatorLight className="text-C_purple text-xl" />
                                Elevator
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <GiFireplace className="text-C_purple text-xl" />
                                Fireplace
                              </p>
                            </td>
                          </tr>
                          <span className="block my-3"></span>
                          <tr className="flex flex-col gap-3 w-full  text-C_gray">
                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <MdOutlineSmokeFree className="text-C_purple text-xl" />
                                Smoke detectors
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <GiWashingMachine className="text-C_purple text-xl" />
                                Washer and dryer
                              </p>
                            </td>

                            <td className="lg:w-1/3">
                              <p className="flex gap-3">
                                <IoWifiOutline className="text-C_purple text-xl" />
                                WiFi
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Video  */}
                <div
                  tabIndex={0}
                  className="collapse collapse-plus  bg-white w-full shadow-lg p-4 my-6  rounded-md "
                >
                  <input type="checkbox" />

                  <h4 className="collapse-title font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Video
                  </h4>
                  <div className="collapse-content ">
                    <iframe
                      className="rounded-lg mt-3"
                      width="100%"
                      height="400"
                      src="https://www.youtube.com/embed/wkGoES-V5Ys?si=UJHxcjwokWRqtonK"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

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
                          <input type="checkbox" className="checkbox" />I
                          consent to the GDPR Terms
                        </label>

                        <button className="lg:w-3/12 w-full btn bg-C_purple border-2  text-white hover:text-C_purple hover:bg-transparent hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                          Send Email
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar  */}
          <div className="lg:col-span-4 col-span-10">
            {/* Price -  Desktop */}
            <h1 className="lg:block hidden font-Nunito lg:text-[38px] text-[32px] font-[600] py-2 text-end text-C_purple">
              2.100 € / <span className="text-[28px] font-[500]">month</span>
            </h1>

            {/* Share & Favourite Button - Desktop  */}
            <div className=" lg:flex hidden justify-end gap-3 font-Nunito_Sans mb-14">
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
            <PropertySidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

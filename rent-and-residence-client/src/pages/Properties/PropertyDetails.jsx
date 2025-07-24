import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

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
  FaPinterest,
  FaPrint,
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
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";

import { LiaBedSolid, LiaCartPlusSolid } from "react-icons/lia";
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

import { Rating, ThinStar } from "@smastrom/react-rating";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PropertyGallery from "../../components/PropertyGallery/PropertyGallery";
import Map from "../Shared/Map/Map";
import PropertySidebar from "./PropertySidebar";

import "@smastrom/react-rating/style.css";
import useSignedInUser from "../../hooks/useSignedInUser/useSignedInUser";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";
import UseCart from "../../hooks/UseCart/UseCart";

// Declare it outside your component so it doesn't get re-created
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#7854F6",
  inactiveFillColor: "#7854f64f",
};

const PropertyDetails = () => {
  const [property, setProperty] = useState({});
  const [propertyOwner, setPropertyOwner] = useState([]);

  const [currentUserFromDB] = useSignedInUser();

  const { _id, email: userEmail } = currentUserFromDB;
  // console.log(userEmail);

  const [coordinates, setCoordinates] = useState(null);

  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const { propertyId } = useParams();
  // console.log(currentUserFromDB);

  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCart();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    // Good Practice to set defaultValues
    // defaultValues: {
    //   name: "",
    //   designation: "",
    //   comment: "",
    // },
  });

  const onSubmit = (data) => {
    if (rating == 0) {
      toast.error("Rating must be more than 0");
      return;
    }
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("designation", data.designation);
    formData.append("rating", rating);
    formData.append("comment", data.comment);
    formData.append("propertyId", propertyId);
    formData.append("userId", _id);

    console.log(Object.fromEntries(formData.entries()));

    fetch("http://localhost:5123/api/reviews", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Successfully submitted review");
          reset();
          setRating(0);
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  // Fetch the Property
  useEffect(() => {
    fetch(`http://localhost:5123/api/properties/${propertyId}`)
      .then((res) => res.json())
      .then((data) => setProperty(data[0]));
  }, [propertyId]);

  // Destructure Details from Property
  const {
    title,
    description,
    price,
    ownerId,
    images,
    propertyStatus,
    listedIn,
    afterPriceLabel,
    category,
    address,

    propertyDetails,

    amenities,

    neighborhood,

    energyClass,
    energyIndex,

    garages,
    garageSize,
  } = property || {};

  const propImg = property?.images?.[0];

  // Fetch the owner of each Property
  useEffect(() => {
    fetch(`http://localhost:5123/api/users/${ownerId}`)
      .then((res) => res.json())
      .then((data) => setPropertyOwner(data));
  }, [ownerId]);

  // Destructure Details from Owner
  const {
    name,
    profileImage,
    email,
    role,
    phone,
    facebookUrl,
    instagramUrl,
    linkedinUrl,
    pinterestUrl,
    twitterUrl,
    websiteUrl,
  } = propertyOwner || {};
  // console.log(propertyOwner);

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
  const formattedWebsiteURL = handleUrl(websiteUrl);

  useEffect(() => {
    fetch(`http://localhost:5123/api/reviews/${propertyId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [propertyId]);

  // Built Year Date Format
  const yearBuiltTimeStamp = propertyDetails?.yearBuilt;
  const yearBuiltOnly = new Date(yearBuiltTimeStamp)?.getFullYear();

  // Available from Date Format
  const availableFromTimeStamp = propertyDetails?.availableFrom;
  const availableFromOnly = new Date(availableFromTimeStamp);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const updatedAvailableFromFormat = availableFromOnly.toLocaleDateString(
    "en-US",
    options
  );

  // Make the address
  const propAddress =
    address?.locality + ", " + address?.city + ", " + address?.state;

  /*     const coords = getLatLngFromAddress(propAddress);
console.log(coords.lat); // ❌ undefined because it's a Promise */

  // pass the propAddress promise function
  useEffect(() => {
    const fetchCoordinate = async () => {
      const res = await getCoordinates(propAddress);
      setCoordinates(res);
      // console.log(res);
    };

    fetchCoordinate();
  }, [propAddress]);

  // Map
  const getCoordinates = async (propAddress) => {
    const api = import.meta.env.VITE_GEOCODING_API;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      propAddress
    )}&key=${api}`;

    const res = await fetch(url);
    const data = await res.json();

    // console.log(data);

    if (data?.results?.length > 0) {
      const { lat, lng } = data.results[0].geometry;

      // console.log(lat, lng);
      return { lat, lng };
    } else {
      // console.log("No result for", propAddress);
      return null;
    }
  };

  // Add to Cart
  const handleAddToCart = (propertyItem) => {
    if (currentUserFromDB && userEmail) {
      console.log(_id);

      const cartItem = {
        propertyId: propertyItem?._id,
        userId: _id,
        userEmail,
      };

      axiosSecure
        .post(`http://localhost:5123/api/carts`, cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("This property is added to cart");
            refetch();
          }
        });
    } else {
      toast.error("You must login to add items");
    }
  };

  return (
    <div className="bg-C_LightGray/5 pb-6">
      <Helmet>
        <title>R & R | properties</title>
      </Helmet>
      <div className="w-10/12 mx-auto">
        {/* Banner Image  */}
        <div className="lg:py-8 pt-8 lg:mb-10 ">
          <PropertyGallery className="absolute" images={images} />
        </div>

        {/* Breadcrumbs */}

        <Breadcrumb pageName={title} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 pb-5">
              <div className="w-full">
                {/* Categories  */}
                <div className=" flex gap-3 font-Nunito_Sans">
                  <span className="bg-C_purple text-white text-[14px] rounded  px-4  py-1 ">
                    {category}
                  </span>

                  <span className="bg-C_purple text-white text-[14px] rounded  px-4  py-1 ">
                    {propertyStatus}
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

                {/* Address - Desktop */}
                <p className="flex gap-2 items-center text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[18px] lg:pb-2 ">
                  <FaMapMarkerAlt /> {address?.street}, {address?.city},{" "}
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

                  {/* Details  */}
                  <div className="flex lg:flex-row lg:gap-0 gap-8 justify-between lg:items-center flex-wrap items-start py-2">
                    <p className=" font-Nunito font-[600] text-[17px] text-C_DarkGray/90">
                      Updated On:<br></br>
                      {updatedAvailableFromFormat}
                    </p>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <LiaBedSolid className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">
                        {propertyDetails?.bedrooms} Bedrooms
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <PiBathtub className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">
                        {propertyDetails?.bathrooms} Bathrooms
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <FaCar className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">{garages} cars</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <BsBoundingBoxCircles className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">
                        {propertyDetails?.sizeInMeter} m<sup>2</sup>
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-2 font-Nunito font-[700] text-[16px]">
                      <LuCalendar className="text-[25px] text-[#3f3f3f]" />
                      <p className="text-[#6f6f6f]">
                        Year Built: {yearBuiltOnly}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description  */}
                <div className="bg-white w-full shadow-lg p-8 my-6  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Description
                  </h4>

                  <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  pt-2">
                    {description}
                  </p>
                </div>

                {/* Details  */}
                <div className="bg-white w-full shadow-lg p-8 my-6  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Details
                  </h4>

                  {/* D Info  */}
                  <div className=" w-auto flex flex-col gap-2 ">
                    {/* Desktop  */}
                    <div className="overflow-x-auto lg:flex hidden text-gray-600  my-3">
                      <table className=" w-full h-[180px] text-start ">
                        <tbody className="font-Nunito_Sans text-[16px] tracking-wide">
                          {/* row 1  */}
                          <tr className="text-C_gray">
                            <td>
                              <strong>Property Id:</strong>{" "}
                              {/* {parseInt(_id?.slice(-8))} */}
                              <span className="uppercase">
                                {propertyId?.slice(-5)}
                              </span>
                            </td>
                            <td>
                              <strong>Price:</strong> {price} €{" "}
                              {afterPriceLabel}
                            </td>
                            <td>
                              <strong>Property Size:</strong>{" "}
                              {propertyDetails?.sizeInMeter} m2
                            </td>
                          </tr>

                          {/* row 2  */}
                          <tr className=" text-C_gray  ">
                            <td>
                              <strong>Property Lot Size:</strong>{" "}
                              {propertyDetails?.lotInInch} m2
                            </td>
                            <td>
                              <strong>Rooms: </strong> {propertyDetails?.rooms}
                            </td>
                            <td>
                              <strong>Bedrooms: </strong>{" "}
                              {propertyDetails?.bedrooms}
                            </td>
                          </tr>

                          {/* row 3  */}
                          <tr className=" text-C_gray  ">
                            <td>
                              <strong>Bathrooms:</strong>{" "}
                              {propertyDetails?.bathrooms}
                            </td>
                            <td>
                              <strong>Year Built: </strong> {yearBuiltOnly}
                            </td>
                            <td>
                              <strong>Garages: </strong> {garages}
                            </td>
                          </tr>

                          {/* row 4 */}
                          <tr className=" text-C_gray  ">
                            <td>
                              <strong>Garage Size:</strong> {garageSize} cars
                            </td>
                            <td>
                              <strong>Available from: </strong>{" "}
                              {updatedAvailableFromFormat}
                            </td>
                            <td>
                              <strong>Basement: </strong>{" "}
                              {propertyDetails?.basement}
                            </td>
                          </tr>

                          {/* row 5 */}
                          <tr className=" text-C_gray  ">
                            <td>
                              <strong>External construction:</strong>{" "}
                              {propertyDetails?.externalConstruction}
                            </td>
                            <td>
                              <strong>Roofing: </strong>{" "}
                              {propertyDetails?.roofing}
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
                              <strong>Property Id:</strong>{" "}
                              {/* {parseInt(_id?.slice(-8))} */}
                              <span className="uppercase">
                                {propertyId?.slice(-5)}
                              </span>
                            </td>
                            <td>
                              <strong>Price:</strong> {price} €{" "}
                              {afterPriceLabel}
                            </td>
                            <td>
                              <strong>Property Size:</strong>{" "}
                              {propertyDetails?.sizeInMeter} m2
                            </td>
                          </tr>

                          {/* row 2  */}
                          <tr className="flex flex-col gap-3  w-[100%] text-C_gray mb-3">
                            <td>
                              <strong>Property Lot Size:</strong>{" "}
                              {propertyDetails?.lotInInch} m2
                            </td>
                            <td>
                              <strong>Rooms: </strong> {propertyDetails?.rooms}
                            </td>
                            <td>
                              <strong>Bedrooms: </strong>{" "}
                              {propertyDetails?.bedrooms}
                            </td>
                          </tr>

                          {/* row 3  */}
                          <tr className="flex flex-col gap-3  w-[100%] text-C_gray mb-3">
                            <td>
                              <strong>Bathrooms:</strong>{" "}
                              {propertyDetails?.bathrooms}
                            </td>
                            <td>
                              <strong>Year Built: </strong> {yearBuiltOnly}
                            </td>
                            <td>
                              <strong>Garages: </strong> {garages}
                            </td>
                          </tr>

                          {/* row 4 */}
                          <tr className="flex flex-col gap-3  w-[100%] text-C_gray mb-3">
                            <td>
                              <strong>Garage Size:</strong> {garageSize} cars
                            </td>
                            <td>
                              <strong>Available from: </strong>{" "}
                              {updatedAvailableFromFormat}
                            </td>
                            <td>
                              <strong>Basement: </strong>{" "}
                              {propertyDetails?.basement}
                            </td>
                          </tr>

                          {/* row 5 */}
                          <tr className="flex flex-col gap-3  w-[100%] text-C_gray mb-3">
                            <td>
                              <strong>External construction:</strong>{" "}
                              {propertyDetails?.externalConstruction}
                            </td>
                            <td>
                              <strong>Roofing: </strong>{" "}
                              {propertyDetails?.roofing}
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
                            {amenities?.equippedKitchen ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <TbToolsKitchen2 className="text-C_purple text-xl" />
                                  Equipped Kitchen
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.gym ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <CgGym className="text-C_purple text-xl" />
                                  Gym
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.laundry ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <MdOutlineLocalLaundryService className="text-C_purple text-xl" />
                                  Laundry
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>
                          <span className="block my-3"></span>
                          <tr className="text-C_gray">
                            {amenities?.mediaRoom ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <TfiLayoutMediaCenterAlt className="text-C_purple text-xl" />
                                  Media Room
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>

                          {/* row 2  */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Outdoor Details
                          </tr>
                          <tr className=" text-C_gray">
                            {amenities?.backYard ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <MdOutlineYard className="text-C_purple text-xl" />
                                  Back yard
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.basketballCourt ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <PiBasketballThin className="text-C_purple text-xl" />
                                  Basketball court
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.garageAttached ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <CiParking1 className="text-C_purple text-xl" />
                                  Garage Attached
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>
                          <span className="block my-3"></span>
                          <tr className=" text-C_gray">
                            {amenities?.hotBath ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <CiParking1 className="text-C_purple text-xl" />
                                  Hot Bath
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.pool ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <CiParking1 className="text-C_purple text-xl" />
                                  Pool
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>

                          {/* row 3  */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Utilities
                          </tr>
                          <tr className=" text-C_gray">
                            {amenities?.centralAir ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <GiFrozenOrb className="text-C_purple text-xl" />
                                  Central Air
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.electricity ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <MdElectricBolt className="text-C_purple text-xl" />
                                  Electricity
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.heating ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <GiHotSurface className="text-C_purple text-xl" />
                                  Heating
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>

                          <span className="block my-3"></span>

                          <tr className=" text-C_gray">
                            {amenities?.naturalGas ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <MdOutlineGasMeter className="text-C_purple text-xl" />
                                  Natural Gas
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.ventilation ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <GiComputerFan className="text-C_purple text-xl" />
                                  Ventilation
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.water ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <IoWaterOutline className="text-C_purple text-xl" />
                                  Water
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>

                          {/* row 4 */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Other Features
                          </tr>
                          <tr className=" text-C_gray">
                            {amenities?.chairAccessible ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <GrWheelchair className="text-C_purple text-xl" />
                                  Chair Accessible
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.elevator ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <PiElevatorLight className="text-C_purple text-xl" />
                                  Elevator
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.fireplace ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <GiFireplace className="text-C_purple text-xl" />
                                  Fireplace
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>
                          <span className="block my-3"></span>
                          <tr className=" text-C_gray">
                            {amenities?.smokeDetector ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <MdOutlineSmokeFree className="text-C_purple text-xl" />
                                  Smoke detectors
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.equippedKitchen ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <GiWashingMachine className="text-C_purple text-xl" />
                                  Washer and dryer
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.equippedKitchen ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <IoWifiOutline className="text-C_purple text-xl" />
                                  WiFi
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>
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
                            {amenities?.equippedKitchen ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <TbToolsKitchen2 className="text-C_purple text-xl" />
                                  Equipped Kitchen
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.gym ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <CgGym className="text-C_purple text-xl" />
                                  Gym
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.laundry ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <MdOutlineLocalLaundryService className="text-C_purple text-xl" />
                                  Laundry
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>
                          <span className="block my-3"></span>
                          <tr className="flex flex-col flex-wrap gap-3 w-full text-C_gray">
                            {amenities?.mediaRoom ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <TfiLayoutMediaCenterAlt className="text-C_purple text-xl" />
                                  Media Room
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>

                          {/* row 2  */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Outdoor Details
                          </tr>

                          <tr className="flex flex-col gap-3 w-full text-C_gray">
                            {amenities?.backYard ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <MdOutlineYard className="text-C_purple text-xl" />
                                  Back yard
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.basketballCourt ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <PiBasketballThin className="text-C_purple text-xl" />
                                  Basketball court
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.garageAttached ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <CiParking1 className="text-C_purple text-xl" />
                                  Garage Attached
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>
                          <span className="block my-3"></span>
                          <tr className="flex flex-col gap-3 w-full text-C_gray">
                            {amenities?.hotBath ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <CiParking1 className="text-C_purple text-xl" />
                                  Hot Bath
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.pool ? (
                              <td className="w-1/3">
                                <p className="flex gap-3">
                                  <CiParking1 className="text-C_purple text-xl" />
                                  Pool
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>

                          {/* row 3  */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Utilities
                          </tr>
                          <tr className="flex flex-col gap-3 w-full text-C_gray">
                            {amenities?.centralAir ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <GiFrozenOrb className="text-C_purple text-xl" />
                                  Central Air
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.electricity ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <MdElectricBolt className="text-C_purple text-xl" />
                                  Electricity
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.heating ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <GiHotSurface className="text-C_purple text-xl" />
                                  Heating
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>
                          <span className="block my-3"></span>
                          <tr className="flex flex-col gap-3 w-full text-C_gray">
                            {amenities?.naturalGas ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <MdOutlineGasMeter className="text-C_purple text-xl" />
                                  Natural Gas
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.ventilation ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <GiComputerFan className="text-C_purple text-xl" />
                                  Ventilation
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.water ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <IoWaterOutline className="text-C_purple text-xl" />
                                  Water
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>

                          {/* row 4 */}
                          <tr className="block mt-5 mb-3 font-Nunito font-[700] text-C_gray">
                            Other Features
                          </tr>
                          <tr className="flex flex-col gap-3 w-full text-C_gray">
                            {amenities?.chairAccessible ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <GrWheelchair className="text-C_purple text-xl" />
                                  Chair Accessible
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.elevator ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <PiElevatorLight className="text-C_purple text-xl" />
                                  Elevator
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.fireplace ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <GiFireplace className="text-C_purple text-xl" />
                                  Fireplace
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                          </tr>
                          <span className="block my-3"></span>
                          <tr className="flex flex-col gap-3 w-full  text-C_gray">
                            {amenities?.smokeDetector ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <MdOutlineSmokeFree className="text-C_purple text-xl" />
                                  Smoke detectors
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.equippedKitchen ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <GiWashingMachine className="text-C_purple text-xl" />
                                  Washer and dryer
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
                            {amenities?.equippedKitchen ? (
                              <td className="w-full">
                                <p className="flex gap-3">
                                  <IoWifiOutline className="text-C_purple text-xl" />
                                  WiFi
                                </p>
                              </td>
                            ) : (
                              " "
                            )}
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

                {/* Map  */}
                <div
                  tabIndex={0}
                  className=" bg-white w-full shadow-lg p-8 my-6 rounded-md "
                >
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-6">
                    Map
                  </h4>

                  {coordinates ? (
                    <Map
                      lat={coordinates?.lat}
                      lng={coordinates?.lng}
                      title={title}
                      price={price}
                      propImg={propImg}
                    />
                  ) : (
                    <div class="flex justify-center items-center ">
                      <p className="font-Nunito_Sans text-C_purple pe-2">
                        Don't see the map? Please Reload
                      </p>
                      <br />
                      <span className=" loading loading-ring loading-xl text-C_purple"></span>
                    </div>
                  )}
                </div>

                {/* Reviews  */}
                <div
                  tabIndex={0}
                  className=" bg-white w-full shadow-lg p-8 my-6 rounded-md "
                >
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-0">
                    Reviews
                  </h4>

                  <div className="pt-5">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-5 "
                    >
                      {/* Rating  */}

                      <Rating
                        style={{ maxWidth: 150 }}
                        value={rating}
                        onChange={setRating}
                        itemStyles={myStyles}
                      />

                      <div className="flex lg:flex-row flex-col gap-3">
                        <div className="w-1/2">
                          <input
                            type="text"
                            className="input font-Nunito_Sans font-[600] text-C_LightGray w-full focus:border-1 focus:border-C_purple focus:outline-0"
                            placeholder="Your Name"
                            {...register("name", {
                              required: "This is required",
                            })}
                          />
                          {errors.name && (
                            <span className="w-1/2 text-sm text-red-500 ">
                              {errors.name.message}
                            </span>
                          )}
                        </div>
                        <div className="w-1/2">
                          <input
                            type="text"
                            className="input font-Nunito_Sans font-[600] text-C_LightGray w-full focus:border-1 focus:border-C_purple focus:outline-0"
                            placeholder="Designation"
                            {...register("designation", {
                              required: "This is required",
                            })}
                          />
                          {errors.designation && (
                            <span className="w-1/2 text-sm text-red-500  mt-2">
                              {errors.designation.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <textarea
                          placeholder="Comment"
                          className="textarea w-full h-20 focus:border-1 focus:border-C_purple focus:outline-0"
                          {...register("comment", {
                            required: "This is required",
                            maxLength: {
                              value: 50,
                              message:
                                "Comment should be less than 50 Characters",
                            },
                            minLength: {
                              value: 10,
                              message:
                                "Comment should be more than 10 Characters",
                            },
                          })}
                        ></textarea>
                        {errors.comment && (
                          <span className="w-1/2 text-sm text-red-500">
                            {errors.comment.message}
                          </span>
                        )}
                      </div>

                      <input
                        value="Submit"
                        type="submit"
                        className="btn lg:w-3/12 w-full bg-C_purple border-2  text-white hover:text-C_purple hover:bg-transparent hover:border-C_purple rounded-md  text-[16px] font-Nunito_Sans font-[600]"
                      />
                    </form>
                  </div>
                </div>

                {/* Profile  */}
                <div className="shadow-sm lg:p-8 p-5 mb-5 w-full rounded-md bg-white">
                  <nav className="flex flex-col gap-2">
                    <div className="flex lg:flex-row flex-col justify-start items-top gap-8 -mb-26">
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
          <div className="lg:col-span-4 col-span-10 ">
            <div className="flex justify-end -mt-[30px]">
              <button
                onClick={() => handleAddToCart(property)}
                className="btn flex items-center gap-2  bg-C_purple text-white hover:bg-[#40384B] font-Nunito_Sans font-[700] shadow-sm text-[15px] rounded px-5 py-2 cursor-pointer"
              >
                <LiaCartPlusSolid />
                Add to Cart
              </button>
            </div>

            {/* Price -  Desktop */}
            <h1 className="lg:block hidden font-Nunito lg:text-[38px] text-[32px] font-[600] py-2 text-end text-C_purple">
              {price} € / <span className="text-[28px] font-[500]">month</span>
            </h1>

            {/* Share & Favourite Button - Desktop  */}
            <div className=" lg:flex hidden justify-end gap-3 font-Nunito_Sans mb-10">
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
            <PropertySidebar ownerId={ownerId} reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

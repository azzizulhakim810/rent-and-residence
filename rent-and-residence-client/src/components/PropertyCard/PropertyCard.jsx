import { useEffect, useState } from "react";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";
const PropertyCard = ({ property }) => {
  const [propertyOwner, setPropertyOwner] = useState([]);
  // Destructure Details from Property
  const {
    _id,
    title,
    price,
    propertyType,
    listingType,
    images,
    size,
    bedrooms,
    bathrooms,
    rooms,
    ownerId,
  } = property || {};

  // Fetch the owner of each Property
  useEffect(() => {
    fetch(`http://localhost:5123/api/users/${ownerId}`)
      .then((res) => res.json())
      .then((data) => setPropertyOwner(data));
  }, [ownerId]);

  // Destructure Details from Owner
  const { name, profileImage } = propertyOwner[0] || {};

  // console.log(images.at(0));
  // console.log(images.find((item) => item !== undefined));
  // console.log(images.forEach((img, i) => img));
  return (
    <Link to={`/propertyDetails/${_id}`}>
      <div className=" bg-white w-full shadow-lg rounded-lg">
        {/* Image  */}
        {images?.[0] && (
          <figure
            className="w-full h-64 bg-cover bg-center relative bg-black/30 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-t-lg"
            style={{
              backgroundImage: images[0] ? `url(${images[0]})` : "none",
              backgroundColor: images[0]
                ? undefined
                : `<div class="flex justify-center items-center ">
                      <span className=" loading loading-ring loading-xl text-C_purple"></span>
                    </div>`,
            }}
          >
            <div className="absolute top-0 right-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
              <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 capitalize">
                {listingType}
              </span>

              <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 capitalize">
                {propertyType}
              </span>
            </div>

            {/* Price & Title  */}
            <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
              <span className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                {price} €
              </span>

              <span className=" text-white font-Nunito font-[700] text-[20px] rounded px-6 ">
                {title}
              </span>
            </div>
          </figure>
        )}

        {/* Features  */}
        <div className="card-body ">
          <div className="flex justify-between">
            <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
              <VscHome className="text-[20px] text-[#3f3f3f]" />
              <p className="text-[#6f6f6f]">{rooms} Rooms</p>
            </div>

            <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
              <LiaBedSolid className="text-[20px] text-[#3f3f3f]" />
              <p className="text-[#6f6f6f]">{bedrooms} Beds</p>
            </div>

            <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
              <PiBathtub className="text-[20px] text-[#3f3f3f]" />
              <p className="text-[#6f6f6f]">
                {bathrooms ? bathrooms : "No"} Baths
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 font-Nunito text-[14px] ">
              <BsBoundingBoxCircles className="text-[20px] text-[#3f3f3f]" />
              <p className="text-[#6f6f6f]">
                {size} m<sup>2</sup>
              </p>
            </div>
          </div>
        </div>

        {/* Divider  */}
        <div className="bg-gray-300 h-[.5px] mt-0 mb-0"></div>

        {/* Property Owner Info  */}
        <div className="px-5 py-4 flex justify-between">
          <div className="avatar flex items-center gap-4">
            <div className="w-8 rounded-full">
              <img src={profileImage} />
            </div>
            <p className="font-bold">{name}</p>
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
    </Link>
  );
};

export default PropertyCard;

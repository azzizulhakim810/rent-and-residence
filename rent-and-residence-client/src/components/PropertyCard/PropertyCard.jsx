import { useEffect, useState } from "react";
import { toast } from "sonner";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";
import UseAuth from "../../hooks/UseAuth/UseAuth";
import useSignedInUser from "../../hooks/useSignedInUser/useSignedInUser";
import useComparison from "../../hooks/useComparison/useComparison";
import { usePopup } from "../../providers/PopupProvider";

const PropertyCard = ({ property, favourites, refetch }) => {
  const [propertyOwner, setPropertyOwner] = useState([]);
  const [isFavourite, setIsFavourite] = useState();
  const { setIsShow } = usePopup();

  const [, , , , , setSelectedComparePropIds] = useComparison();
  const [{ _id: userId }] = useSignedInUser();
  // console.log(favourites);

  const axiosPublic = useAxiosPublic();
  // const axiosSecure = UseAxiosSecure();
  // Destructure Details from Property
  const {
    _id,
    title,
    price,
    images,
    ownerId,
    listedIn,
    // category,
    propertyStatus,
    propertyDetails,
  } = property || {};

  // console.log(property);

  // Fetch the owner of each Property
  useEffect(() => {
    // Promise.all(
    axiosPublic.get(`/api/users/${ownerId}`).then((res) => {
      // console.log(res.data);
      setPropertyOwner(res.data);
    });
    // );
  }, [ownerId, axiosPublic]);

  // Destructure Details from Owner
  const { name, profileImage } = propertyOwner || {};

  // Add To Favourites
  const handleAddToFavourites = (propertyId) => {
    axiosPublic.patch(`/api/${userId}/favourites/${propertyId}`).then((res) => {
      refetch();
      console.log(res.data);
    });
  };

  // Comparison Properties
  const handleComparison = (propertyId) => {
    setIsShow(true);
    // console.log(isShow);
    // const popUp = document.getElementById("comparisonPopUp");

    // popUp.style.display = "block";
    // popUp.style.animation = "fadeInUp 0.5s ease forwards";

    const isExisting = JSON.parse(localStorage.getItem("properties")) || [];

    if (isExisting.find((id) => id === propertyId)) {
      toast.error("Sorry! Already added to Comparison");
    } else if (isExisting?.length > 1) {
      toast.error("Maximum 2 Properties at a time");
    } else {
      const updated = [...isExisting, propertyId];

      // isExisting.push(propertyId);

      localStorage.setItem("properties", JSON.stringify(updated));
      setSelectedComparePropIds(updated);

      toast.success("Added to Comparison");
      // comparisonRefetch();
    }
  };

  useEffect(() => {
    favourites?.map((eachProp) => setIsFavourite(eachProp.includes(_id)));
  }, [favourites, _id]);

  // console.log(isFavourite);

  return (
    <div className=" bg-white w-full shadow-lg rounded-lg">
      {/* Image  */}
      <Link to={`/propertyDetails/${_id}`}>
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
                {listedIn}
              </span>

              <span className="bg-C_purple text-white text-[12px] rounded  px-4  py-1 capitalize">
                {propertyStatus}
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
      </Link>

      {/* Features  */}
      <div className="card-body ">
        <div className="flex justify-between">
          <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
            <VscHome className="text-[20px] text-[#3f3f3f]" />
            <p className="text-[#6f6f6f]">{propertyDetails?.rooms} Rooms</p>
          </div>

          <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
            <LiaBedSolid className="text-[20px] text-[#3f3f3f]" />
            <p className="text-[#6f6f6f]">{propertyDetails?.bedrooms} Beds</p>
          </div>

          <div className="flex flex-col items-center gap-3 font-Nunito text-[14px]">
            <PiBathtub className="text-[20px] text-[#3f3f3f]" />
            <p className="text-[#6f6f6f]">
              {propertyDetails?.bathrooms ? propertyDetails?.bathrooms : "No"}{" "}
              Baths
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 font-Nunito text-[14px] ">
            <BsBoundingBoxCircles className="text-[20px] text-[#3f3f3f]" />
            <p className="text-[#6f6f6f]">
              {propertyDetails?.sizeInMeter} m<sup>2</sup>
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
            onClick={() => handleAddToFavourites(_id)}
            className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
            data-tip="add to favourites"
          >
            {isFavourite ? (
              <FaHeart className="text-C_purple" />
            ) : (
              <FaRegHeart />
            )}
            {/* <FaRegHeart /> <FaHeart /> */}
          </button>

          <button
            onClick={() => handleComparison(_id)}
            className="btn tooltip text-gray-500 text-lg hover:text-C_purple hover:bg-transparent p-3"
            data-tip="compare"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

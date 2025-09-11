import { useEffect, useState } from "react";

import { BsBoundingBoxCircles } from "react-icons/bs";
import { LiaBedSolid, LiaCartPlusSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";
import UseCart from "../../hooks/UseCart/UseCart";
import useSignedInUser from "../../hooks/useSignedInUser/useSignedInUser";

const FavouritePropCard = ({ favProperty }) => {
  const [propertyOwner, setPropertyOwner] = useState([]);
  // const [isFavourite, setIsFavourite] = useState();
  const [currentUserFromDB] = useSignedInUser();
  const [, refetch] = UseCart();

  const { _id: userId, email: userEmail } = currentUserFromDB;
  // console.log(favProperty);

  const axiosPublic = useAxiosPublic();
  const axiosSecure = UseAxiosSecure();
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
  } = favProperty || {};

  console.log(favProperty);

  // Fetch the owner of each Property
  useEffect(() => {
    // Promise.all(
    axiosPublic.get(`/api/users/${ownerId}`).then((res) => {
      // console.log(res.data);
      setPropertyOwner(res.data);
    });
    // );
  }, [ownerId, axiosPublic]);
  // console.log(propertyOwner);

  // Destructure Details from Owner
  const { name, profileImage } = propertyOwner || {};

  /*   const handleAddToFavourites = (propertyId) => {
    axiosPublic.patch(`/api/${userId}/favourites/${propertyId}`).then((res) => {
      refetch();
      console.log(res.data);
    });
  };

  useEffect(() => {
    favourites.map((eachProp) => setIsFavourite(eachProp.includes(_id)));
  }, [favourites, _id]); */

  // console.log(isFavourite);

  // Add to Cart
  const handleAddToCart = (_id) => {
    if (currentUserFromDB && userEmail) {
      // console.log(_id);

      const cartItem = {
        propertyId: _id,
        userId,
        userEmail,
      };

      axiosSecure
        .post(`/api/carts?userEmail=${userEmail}`, cartItem)
        .then((res) => {
          console.log(res.data.insertedId);
          if (res?.data?.insertedId) {
            refetch();
            toast.success("This property is added to cart");
          } else {
            toast.error("Item already exists in the cart.");
          }
        })
        .catch((err) => {
          toast.error("Item already exists in the cart.");
          console.log(err);
        });
    } else {
      toast.error("You must login to add items");
    }
  };

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
      <div className="px-3 py-4 flex justify-between">
        <div className="avatar flex items-center gap-4">
          <div className="w-8 rounded-full">
            <img src={profileImage} />
          </div>
          <p className="font-bold">{name}</p>
        </div>

        <div className="flex gap-1">
          <button
            onClick={() => handleAddToCart(_id)}
            className=" flex items-center gap-2  border-C_purple border-[1px] bg-transparent text-C_purple hover:bg-C_purple duration-200 hover:text-white font-Nunito_Sans font-[700] shadow-sm text-[14px] rounded px-2 py-2 cursor-pointer"
          >
            <LiaCartPlusSolid className="text-[20px]" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouritePropCard;

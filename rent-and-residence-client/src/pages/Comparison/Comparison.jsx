import { useEffect, useState } from "react";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { VscHome } from "react-icons/vsc";

// import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
const Comparison = () => {
  // const [propertyOwner, setPropertyOwner] = useState([]);

  // const axiosPublic = useAxiosPublic();
  // Destructure Details from Property
  /*  const {
    _id,
    title,
    price,
    images,
    ownerId,
    listedIn,
    category,
    propertyStatus,
    propertyDetails,
  } = property || {}; */

  // console.log(property);

  // Fetch the owner of each Property
  /*   useEffect(() => {
    

    axiosPublic
      .get(`/api/users/${ownerId}`)
      .then((res) => {
        // console.log(res.data);
        setPropertyOwner(res.data);
      });
  }, [ownerId, axiosPublic]); */
  // console.log(propertyOwner);

  // Destructure Details from Owner
  const { name, profileImage } = propertyOwner || {};
  return <div className="grid grid-cols-2 gap-5"></div>;
};

export default Comparison;

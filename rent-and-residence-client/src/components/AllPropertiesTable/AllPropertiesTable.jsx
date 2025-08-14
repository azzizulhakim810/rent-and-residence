import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";
const AllPropertiesTable = ({ property, refetch }) => {
  const [owner, setOwner] = useState();
  const axiosSecure = UseAxiosSecure();

  // Destructure Details from Property
  const { _id, title, price, images, address, propertyStatus, ownerId } =
    property || {};

  const {
    isPending,

    data: ownerInfo,
  } = useQuery({
    queryKey: ["ownerInfo", ownerId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/users/${ownerId}`);
      return res.data;
    },
  });

  console.log(ownerInfo);
  /*   useEffect(() => {
    axiosSecure.get(`/api/users/${ownerId}`).then((res) => setOwner(res.data));
  }, [axiosSecure, ownerId]); */

  // Destructure Details from Property
  const {
    // _id,
    name,
    // profileImage,
  } = ownerInfo || {};

  // console.log(property);
  return (
    <tr className="font-Nunito_Sans text-C_LightGray">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={
                  images
                    ? images[0]
                    : "https://i.ibb.co.com/jkGkX8fs/default-user.png"
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold uppercase">{title.slice(0, 20)}...</div>
            <div className="text-sm opacity-50">
              {address?.city}, {address?.country}
            </div>
          </div>
        </div>
      </td>
      <td className="capitalize text-C_LightGray/90">{name}</td>
      <td className="capitalize text-C_LightGray/90">{propertyStatus}</td>

      <td className="text-C_LightGray/90">Unpaid</td>
      <td className="text-C_LightGray/90">{price}€</td>
      <td>
        <Link to={`/propertyDetails/${_id}`}>
          <button className="btn btn-xs font-Nunito_Sans border-[1px] rounded-lg px-4 py-4 font-[700] hover:bg-C_purple hover:text-white duration-300 uppercase">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllPropertiesTable;

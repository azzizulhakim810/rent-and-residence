// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";
import { toast } from "sonner";

const AllPropertiesTable = ({ property, refetch }) => {
  // const [owner, setOwner] = useState();
  const axiosSecure = UseAxiosSecure();

  // Destructure Details from Property
  const {
    _id,
    title,
    price,
    images,
    address,
    // category,
    // propertyStatus,
    ownerId,
  } = property || {};

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

  // console.log(ownerInfo);
  /*   useEffect(() => {
    axiosSecure.get(`/api/users/${ownerId}`).then((res) => setOwner(res.data));
  }, [axiosSecure, ownerId]); */

  // Destructure Details from Property
  const {
    // _id,
    name,
    // profileImage,
  } = ownerInfo || {};

  const handleDeleteProperty = (id) => {
    console.log(id);

    toast.warning("Are you sure?", {
      action: {
        label: "Yes",

        onClick: () => {
          axiosSecure
            .delete(`/api/properties/${id}`)
            .then((res) => {
              console.log(res.data);
              toast.success("Item has deleted");
              refetch();
            })
            .catch((err) => {
              toast.error(err);
            });
        },
      },
    });
  };

  // console.log(property);
  return (
    <tr className="font-Nunito_Sans text-C_LightGray">
      <td>
        <Link to={`/propertyDetails/${_id}`}>
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
        </Link>
      </td>
      <td className="capitalize text-C_LightGray/90">{name}</td>
      {/* <td className="capitalize text-C_LightGray/90">{category}</td> */}

      <td className="text-C_LightGray/90">Unpaid</td>
      <td className="text-C_LightGray/90">{price}€</td>
      <td>
        {/*  <button className="btn btn-xs font-Nunito_Sans border-[1px] rounded-lg px-4 py-4 font-[700] hover:bg-C_purple hover:text-white duration-300 uppercase">
          Details
        </button> */}
        <form className="filter">
          <input className="btn btn-square" type="reset" value="×" />
          <input
            className="btn bg-yellow-300 py-[1px] px-[15px] rounded-3xl"
            type="radio"
            name="frameworks"
            aria-label="Pending"
          />
          <input
            className="btn bg-green-300 py-[1px] px-[15px] rounded-3xl"
            type="radio"
            name="frameworks"
            aria-label="Approved"
          />
          <input
            onClick={() => handleDeleteProperty(_id)}
            className="btn bg-red-300 py-[1px] px-[15px] rounded-3xl"
            type="radio"
            name="frameworks"
            aria-label="Delete"
          />
        </form>
      </td>
    </tr>
  );
};

export default AllPropertiesTable;

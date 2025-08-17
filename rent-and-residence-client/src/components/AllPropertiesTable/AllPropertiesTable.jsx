// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";

const AllPropertiesTable = ({ property, refetch, idx }) => {
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
    approval,
    ownerId,
  } = property || {};

  // console.log(approval);

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

  // Destructure Details from Property
  const {
    // _id,
    name,
    // profileImage,
  } = ownerInfo || {};

  const handleChangeApproval = (e) => {
    console.log(e.target.innerText);

    const { data: approvalStatus, refetch: approvalRefetch } = useQuery({
      queryKey: ["approvalStatus"],
      queryFn: async () => {
        const res = axiosSecure.patch(`/api/property/approvalUpdate/${_id}`);
        return res.data;
      },
    });
  };

  const handleDeleteProperty = (id) => {
    // console.log(id);

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
      <td className="text-center">{idx + 1}</td>
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
        {approval && approval === "Pending" ? (
          <button
            onClick={(e) => handleChangeApproval(e)}
            className="cursor-pointer bg-yellow-200 text-yellow-800  py-[5px] px-[16px] rounded-3xl"
          >
            Pending
          </button>
        ) : (
          <button
            onClick={(e) => handleChangeApproval(e)}
            className="cursor-pointer bg-green-200 text-green-700 py-[5px] px-[16px] rounded-3xl"
          >
            Approved
          </button>
        )}
      </td>

      <td>
        <button
          onClick={() => handleDeleteProperty(_id)}
          className="btn bg-red-200 text-red-700 py-[1px] px-[16px] rounded-lg"
        >
          <RiDeleteBinLine className="text-lg" /> Delete
        </button>
      </td>
    </tr>
  );
};

export default AllPropertiesTable;

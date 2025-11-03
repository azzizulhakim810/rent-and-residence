import { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { toast } from "sonner";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";

const MyOrdersTable = ({ order, i }) => {
  // const [propertyId, setPropertyId] = useState();
  const axiosSecure = UseAxiosSecure();

  const [properties, setProperties] = useState([]);

  // Click here - https://chatgpt.com/share/68afe875-ad24-8003-9ddf-8d7fee2f8174
  // To see what nothing worked except promise.all
  console.log(order);

  useEffect(() => {
    Promise.all(
      order.propertyIds?.map((id) => axiosSecure.get(`/api/properties/${id}`))
    )
      .then((responses) => setProperties(responses?.map((res) => res.data)))
      .catch((err) => console.error(err));
  }, [order.propertyIds, axiosSecure]);

  // console.log(properties);

  /*   useEffect(() => {
    // order.propertyIds.map((propId) => setPropertyId(propId));
    // order.propertyIds.map((propId) => setPropertyId(propId));

    const fetchPropId = async () => {
      const usingfetch = await order.propertyIds.map((propId) =>
        setPropertyId(propId)
      );
      // setPropertyId(usingfetch);
    };

    fetchPropId();
  }, [order.propertyIds]); */

  // console.log(propertyId);

  /*  const {
    isPending,

    data: property = [],
  } = useQuery({
    queryKey: ["property", propertyId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/properties/${propertyId}`);
      return res.data;
    },
  }); */

  // property?.map((propInfo) => console.log(propInfo));

  // Destructure Details from Property
  /*  const {
    _id,
    title,
    price,
    images,
    address,
    // category,
    approval,
    ownerId,
  } = property || {}; */

  // console.log(approval);

  // Destructure Details from Property
  /*   const {
    // _id,
    name,
    // profileImage,
  } = ownerInfo || {}; */

  /* const handleApproval = (e, id) => {
    // console.log(e.target.value, id);
    const approvalStatus = e.target.value;

    axiosSecure
      .patch(`/api/property/approvalUpdate/${id}`, { approval: approvalStatus })
      .then((res) => {
        console.log(res.data);
        toast.success(`This property is now ${approvalStatus}`);
        refetch();
      })
      .catch((err) => console.log(err));

      const { data: approvalStatus, refetch: approvalRefetch } = useQuery({
      queryKey: ["approvalStatus"],
      queryFn: async () => {
        const res = axiosSecure.patch(`/api/property/approvalUpdate/${_id}`);
        return res.data;
      },
    });
  }; */

  /*  const handleDeleteProperty = (id) => {
    // console.log(id);

    toast.warning("Are you sure?", {
      action: {
        label: "Yes",

        onClick: () => {
          axiosSecure
            .delete(`/api/properties/${id}`)
            .then((res) => {
              console.log(res.data);
              toast.success("Item has been deleted");
              refetch();
            })
            .catch((err) => {
              toast.error(err);
            });
        },
      },
    });
  }; */

  // console.log(property);

  return (
    <>
      {properties?.map((prop, idx) => (
        <tr key={prop[0]?._id}>
          <td className="text-center">{i + 1}</td>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={
                      prop[0]?.images
                        ? prop[0]?.images[0]
                        : "https://i.ibb.co.com/jkGkX8fs/default-user.png"
                    }
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold uppercase">
                  {prop[0]?.title.slice(0, 20)}...
                </div>
                <div className="text-sm opacity-50">
                  {prop[0]?.address?.city}, {prop[0]?.address?.country}
                </div>
              </div>
            </div>
          </td>
          <td>{prop[0]?.category}</td>

          <td>
            {prop[0]?.price}€{prop[0]?.afterPriceLabel}
          </td>
          <td>
            <Link to={`/propertyDetails/${prop[0]?._id}`}>
              <button className="btn btn-xs font-Nunito_Sans border-[1px] rounded-lg px-4 py-4 font-[700] hover:bg-C_purple hover:text-white duration-300 uppercase">
                View
              </button>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default MyOrdersTable;

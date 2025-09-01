import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { toast } from "sonner";
// import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";

const AllOrdersTable = ({ order, i, refetch }) => {
  // const axiosSecure = UseAxiosSecure();
  // const [selectedRole, setSelectedRole] = useState("");
  const [allPropIds, setAllPropIds] = useState([]);

  // Destructure Details from Property
  const { _id, date, price, transactionId, status, cartIds, propertyIds } =
    order || {};

  // setAllPropIds(...propertyIds);

  /*   useEffect(() => {
    if (propertyIds?.length) {
      // const ids = propertyIds?.map((singleId) => singleId);
      setAllPropIds(...propertyIds);
    }
  }, [propertyIds]); */

  // console.log(allPropIds);

  // const chunkSize = 24;
  // const ids = allPropIds?.match(new RegExp(`.{1,${chunkSize}}`, "g"));

  // console.log(ids);

  const orderCreated = new Date(date);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedOrderCreated = orderCreated.toLocaleDateString(
    "en-US",
    options
  );

  // console.log(order.cartIds.length);

  /*  const handleRoleChange = (e, id) => {
    const updatedRole = e.target.value;
    console.log(updatedRole, id);

    axiosSecure
      .patch(`/api/updateUserRole/${id}`, {
        role: updatedRole,
      })
      .then((res) => {
        console.log(res.data);
        toast.success(`${name} is now ${updatedRole}`);
      });
  }; */

  /* const handleDelete = (id) => {
    console.log(id);
    toast.warning("Are you sure?", {
      action: {
        label: "Yes",

        onClick: () => {
          axiosSecure
            .delete(`/api/users/${id}`)
            .then((res) => {
              console.log(res.data);
              toast.success("User Deleted");

              // setLoading(false);
              refetch();
            })
            .catch((err) => {
              toast.error(err);
            });
        },
      },
    });

   
  }; */

  // console.log(user);
  return (
    <tr className="font-Nunito_Sans text-C_LightGray gap-10">
      <td className="capitalize text-C_LightGray/90 text-center">{i + 1}</td>
      <td className="capitalize text-C_LightGray/90">{transactionId}</td>
      <td className="capitalize text-C_LightGray/90">{price}€</td>
      <td className="capitalize text-C_LightGray/90 text-center">
        {cartIds?.length} Items
      </td>
      <td className="capitalize text-C_LightGray/90 text-center">
        {propertyIds?.join(", ")}
      </td>
      <td className="capitalize text-C_LightGray/90">
        {formattedOrderCreated}
      </td>
      <td className="text-center">
        <span
          className={
            status === "Pending"
              ? "bg-yellow-200 text-yellow-600 border-yellow-400 capitalize text-[14px] rounded-full px-3 py-1 border-1"
              : "bg-green-200 text-green-600 border-green-400 capitalize text-[14px] rounded-full px-3 py-1 border-1"
          }
        >
          {status}
        </span>
      </td>

      {/* <td className="capitalize text-C_LightGray/90 text-center">
        {status && (
          <select
            className="border-[1px] px-5 py-2 border-C_purple  focus:border-[1px] focus:outline-0 rounded-lg  focus:rounded-lg"
            onChange={(e) => handleRoleChange(e, _id)}
            defaultValue={status}
          >
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </select>
        )}
      </td> */}

      {/* <td>
   
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-200 text-red-700 py-[1px] px-[16px] rounded-lg"
        >
         
          <RiDeleteBin3Line className="text-lg" />
        </button>
 
      </td> */}
    </tr>
  );
};

export default AllOrdersTable;

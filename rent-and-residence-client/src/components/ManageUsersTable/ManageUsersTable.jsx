// import { useState } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { toast } from "sonner";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";

const ManageUsersTable = ({ user, i, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  // const [selectedRole, setSelectedRole] = useState("");

  // Destructure Details from Property
  const { _id, name, email, profileImage, role } = user || {};

  const handleRoleChange = (e, id) => {
    const updatedRole = e.target.value;
    // setSelectedRole(updatedRole);

    axiosSecure
      .patch(`/api/updateUserRole/${id}`, {
        role: updatedRole,
      })
      .then((res) => {
        console.log(res.data);
        toast.success(`${name} is now ${updatedRole}`);
      });
  };

  const handleDelete = (id) => {
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

    /* toast("My cancel toast", {
      cancel: {
        label: "Cancel",
        onClick: () => console.log("Cancel!"),
      },
    }); */
  };

  // console.log(user);
  return (
    <tr className="font-Nunito_Sans text-C_LightGray">
      <td className="capitalize text-C_LightGray/90 text-center">{i + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={profileImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td className="capitalize text-C_LightGray/90">{name}</td>
      <td className="capitalize text-C_LightGray/90">{email}</td>
      <td className="capitalize text-C_LightGray/90 text-center">
        {/* {role} */}
        <select
          className="border-[1px] px-5 py-2 border-C_purple  focus:border-[1px] focus:outline-0 rounded-lg  focus:rounded-lg"
          onChange={(e) => handleRoleChange(e, _id)}
          defaultValue={role}
        >
          <option value="User">User</option>
          <option value="Agent">Agent</option>
          <option value="Admin">Admin</option>
        </select>
      </td>

      <td>
        {/* <Link to={`/propertyDetails/${_id}`}> */}
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-200 text-red-700 py-[1px] px-[16px] rounded-lg"
        >
          {/* <img className="text-sm w-6" src={deleteBtn} alt="" srcset="" /> */}
          <RiDeleteBin3Line className="text-lg" />
        </button>
        {/* </Link> */}
      </td>
    </tr>
  );
};

export default ManageUsersTable;

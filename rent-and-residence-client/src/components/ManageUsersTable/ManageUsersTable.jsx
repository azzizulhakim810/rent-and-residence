import { useState } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";
import { toast } from "sonner";

const ManageUsersTable = ({ user, i, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const [selectedRole, setSelectedRole] = useState("");

  // Destructure Details from Property
  const { _id, name, email, profileImage, role } = user || {};

  const handleRoleChange = (e, id) => {
    const updatedRole = e.target.value;
    setSelectedRole(updatedRole);

    axiosSecure
      .patch(`/api/updateUserRole/${id}`, {
        role: updatedRole,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Role Updated");
      });
  };

  const handleDelete = (id) => {
    console.log(id);

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
  };

  // console.log(user);
  return (
    <tr className="font-Nunito_Sans text-C_LightGray">
      <td className="capitalize text-C_LightGray/90">{i + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={profileImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td className="capitalize text-C_LightGray/90">{name}</td>
      <td className="capitalize text-C_LightGray/90">{email}</td>
      <td className="capitalize text-C_LightGray/90">
        {/* {role} */}
        <select
          className="border-[1px] px-4 py-1 border-C_LightGray/30 rounded focus:border-[1px] focus:outline-0"
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
          className="btn btn-xs font-Nunito_Sans border-[1px] rounded-lg px-3 py-5 font-[700] bg-red-600/70 hover:bg-red-600 text-white duration-300 uppercase "
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

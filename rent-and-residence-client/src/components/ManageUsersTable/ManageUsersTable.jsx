const ManageUsersTable = ({ user, i }) => {
  // Destructure Details from Property
  const { _id, name, email, profileImage, role } = user || {};

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
        <select>
          <option defaultValue={role}>Select</option>
          <option value="User">User</option>
          <option value="Agent">Agent</option>
          <option value="Admin">Admin</option>
        </select>
      </td>

      <td>
        {/* <Link to={`/propertyDetails/${_id}`}> */}
        <button className="btn btn-xs font-Nunito_Sans border-[1px] rounded-lg px-4 py-4 font-[700] hover:bg-C_purple hover:text-white duration-300 uppercase">
          Details
        </button>
        {/* </Link> */}
      </td>
    </tr>
  );
};

export default ManageUsersTable;

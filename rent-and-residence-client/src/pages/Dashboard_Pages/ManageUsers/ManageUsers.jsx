import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure/UseAxiosSecure";
import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";
import ManageUsersTable from "../../../components/ManageUsersTable/ManageUsersTable";

const ManageUsers = () => {
  const [currentUserFromDB] = useSignedInUser();
  // const { user, loading } = AuthContext(AuthProvider);
  const { _id } = currentUserFromDB;
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = UseAxiosSecure();

  // console.log(user);

  useEffect(() => {
    axiosSecure.get(`http://localhost:5123/api/users`).then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
      setLoading(false);
    });
  }, [_id, axiosSecure]);

  console.log(allUsers);

  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">
        Dashboard – Profile Page
      </h1>

      <div className="grid  grid-cols-12 gap-6 pt-10">
        <div className="lg:col-span-12 col-span-12 lg:order-1 order-2 flex flex-col gap-10">
          {/*Contact Information  */}
          <div className="shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-8 w-full rounded-xl bg-white">
            {/*  <div className="font-Nunito_Sans text-C_LightGray w-full">
              <PropertyCard property={agentOwnedProperty} />
            </div> */}

            {/* Property Table  */}
            <div className="grid lg:grid-cols-1 grid-cols-1 justify-start w-full gap-6 py-0">
              <table className="table rounded-8xl">
                {/* head */}
                <thead className="bg-C_purple rounded-5xl ">
                  <tr className="font-Nunito text-[16px] text-white rounded-4xl">
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {}
                  {loading ? (
                    <p className="text-lg text-C_purple flex items-center mt-5 gap-4">
                      Loading{" "}
                      <span className="loading loading-dots loading-lg"></span>
                    </p>
                  ) : allUsers.length !== 0 ? (
                    allUsers?.map((user) => (
                      <ManageUsersTable key={user._id} user={user} />
                    ))
                  ) : (
                    <span className="text-lg font-Nunito_Sans block mt-4">
                      There is no user!
                    </span>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

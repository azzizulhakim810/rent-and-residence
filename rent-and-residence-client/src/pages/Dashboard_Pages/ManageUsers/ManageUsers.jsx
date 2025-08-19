// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ManageUsersTable from "../../../components/ManageUsersTable/ManageUsersTable";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure/UseAxiosSecure";
import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const ManageUsers = () => {
  const [currentUserFromDB] = useSignedInUser();
  // const { user, loading } = AuthContext(AuthProvider);
  const { _id } = currentUserFromDB;

  const axiosSecure = UseAxiosSecure();

  const {
    isPending,
    refetch,
    data: allUser = [],
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/users");
      return res.data;
    },
    // staleTime: 0, // no stale data
    // cacheTime: 0, // remove data when unused
    // retry: false,
  });

  // console.log(allUser);

  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">Dashboard – All Users</h1>

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
                    <th className="text-center">Serial</th>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th className="text-center">Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {}
                  {isPending ? (
                    <p className="text-lg text-C_purple flex items-center mt-5 gap-4">
                      Loading{" "}
                      <span className="loading loading-dots loading-lg"></span>
                    </p>
                  ) : allUser?.length !== 0 ? (
                    allUser?.map((user, i) => (
                      <ManageUsersTable
                        key={user._id}
                        user={user}
                        i={i}
                        refetch={refetch}
                        // setLoading={setLoading}
                      />
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

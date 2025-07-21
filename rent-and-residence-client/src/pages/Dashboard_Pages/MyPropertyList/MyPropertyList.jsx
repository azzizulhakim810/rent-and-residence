import { useEffect, useState } from "react";
import MyPropertyTable from "../../../components/MyPropertyTable/MyPropertyTable";
import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const MyPropertyList = () => {
  const [currentUserFromDB] = useSignedInUser();
  // const { user, loading } = AuthContext(AuthProvider);
  const { _id } = currentUserFromDB;
  const [agentOwnedProperty, setAgentOwnedProperty] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5123/api/agentOwnedProperty/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setAgentOwnedProperty(data);
        setLoading(false);
      });
  }, [_id]);

  console.log(agentOwnedProperty);

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
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="font-Nunito text-black text-[16px]">
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Pay Status</th>
                    <th>Price</th>
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
                  ) : agentOwnedProperty.length !== 0 ? (
                    agentOwnedProperty?.map((property) => (
                      <MyPropertyTable key={property._id} property={property} />
                    ))
                  ) : (
                    <span className="text-lg font-Nunito_Sans block mt-4">
                      You don't have any properties!
                    </span>
                  )}
                </tbody>
              </table>

              {/*  {agentOwnedProperty?.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))} */}

              {/* {loading ? (
                <div className="flex">
                  <p className="font-Nunito_Sans text-lg text-C_purple pe-2">
                    Properties are loading
                  </p>
                  <br />
                  <span className=" loading loading-ring loading-xl text-C_purple"></span>
                </div>
              ) : (
                agentOwnedProperty?.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPropertyList;

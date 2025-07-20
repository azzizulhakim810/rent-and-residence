import { useEffect, useState } from "react";
import MyPropertyTable from "../../../components/MyPropertyTable/MyPropertyTable";
import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const MyPropertyList = () => {
  const [currentUserFromDB] = useSignedInUser();
  // const { user, loading } = AuthContext(AuthProvider);
  const { _id } = currentUserFromDB;
  const [agentOwnedProperty, setAgentOwnedProperty] = useState([]);

  // console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5123/api/agentOwnedProperty/${_id}`)
      .then((res) => res.json())
      .then((data) => setAgentOwnedProperty(data));
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

            {/* Property Cards  */}
            <div className="grid lg:grid-cols-1 grid-cols-1 justify-start w-full gap-6 py-5">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="font-Nunito text-C_LightGray/60 text-[15px]">
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Pay Status</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {agentOwnedProperty?.map((property) => (
                    <MyPropertyTable key={property._id} property={property} />
                  ))}
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

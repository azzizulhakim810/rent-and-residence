import { useQuery } from "@tanstack/react-query";
import MyPropertyTable from "../../../components/MyPropertyTable/MyPropertyTable";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure/UseAxiosSecure";
import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const MyPropertyList = () => {
  const [currentUserFromDB] = useSignedInUser();
  // const { user, loading } = AuthContext(AuthProvider);
  const { _id } = currentUserFromDB;
  // const [agentOwnedProperty, setAgentOwnedProperty] = useState([]);
  // const [loading, setLoading] = useState(true);

  const axiosSecure = UseAxiosSecure();

  const {
    isPending,
    refetch,
    data: agentOwnedProperties,
  } = useQuery({
    queryKey: ["agentOwnedProperties", _id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/agentOwnedProperty/${_id}`);
      return res.data;
    },
    enabled: !!_id,
  });

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
                <thead className="bg-C_purple rounded-5xl ">
                  <tr className="font-Nunito text-white text-[16px]">
                    <th>Title</th>
                    <th>Category</th>

                    <th className="text-center">Pay Status</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Approval</th>
                    <th className="text-center">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {}
                  {isPending ? (
                    <p className="text-lg text-C_purple flex items-center mt-5 gap-4">
                      Loading{" "}
                      <span className="loading loading-dots loading-lg"></span>
                    </p>
                  ) : (
                    agentOwnedProperties.map((property) => (
                      <MyPropertyTable
                        key={property._id}
                        property={property}
                        refetch={refetch}
                      />
                    ))
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

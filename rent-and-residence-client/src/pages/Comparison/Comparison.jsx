import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";
import useComparison from "../../hooks/useComparison/useComparison";

// import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
const Comparison = () => {
  // const [propertyOwner, setPropertyOwner] = useState([]);
  const [, comparisonProperties, , isPending, isLoading, ,] = useComparison();
  console.log(comparisonProperties);

  // const axiosPublic = useAxiosPublic();
  // Destructure Details from Property
  /*  const {
    _id,
    title,
    price,
    images,
    ownerId,
    listedIn,
    category,
    propertyStatus,
    propertyDetails,
  } = property || {}; */

  // console.log(property);

  // Fetch the owner of each Property
  /*   useEffect(() => {
    

    axiosPublic
      .get(`/api/users/${ownerId}`)
      .then((res) => {
        // console.log(res.data);
        setPropertyOwner(res.data);
      });
  }, [ownerId, axiosPublic]); */
  // console.log(propertyOwner);

  // Destructure Details from Owner
  // const { name, profileImage } = propertyOwner || {};
  return (
    <div className="w-10/12 mx-auto pt-4 ">
      {/* Breadcrumbs */}

      <Breadcrumb pageName={"Comparison"} />

      <div className="bg-white w-full p-0 mb-2  ">
        <h1 className="font-Nunito lg:text-[34px] text-[32px]  font-[700]">
          Compare Listings
        </h1>

        {/* Image  */}
        {/* <div className=" mt-10 w-full">
          <figure className="bg-[url(https://i.ibb.co/DPynHVLF/team.jpg)] lg:h-[350px] h-[300px] w-full bg-cover bg-no-repeat bg-center  rounded-lg"></figure>
        </div> */}
      </div>

      {/* Rest  */}
      {/* <div className="w-full grid grid-cols-12 gap-10 bg-green-200">
        {comparisonProperties?.map((eachProp) => (
          <ComparisonTable key={eachProp._id} eachProp={eachProp} />
        ))}
      </div> */}

      {/* /////////////////////// */}
      {/* Property Table  */}
      <div className=" py-0">
        {/* <table className="table">
          <thead className="border-0">
            <tr className="font-Nunito text-C_DarkGray text-[22px] grid lg:grid-cols-12 grid-cols-1 justify-start w-full gap-0 border-0">
              {comparisonProperties?.map((eachProp) => (
                <th
                  key={eachProp._id}
                  className="col-span-6 w-[600px] h-[350px]"
                >
                  <figure
                    className="w-full h-full bg-cover bg-center relative rounded-lg"
                    style={{
                      backgroundImage: eachProp?.images
                        ? `url(${eachProp?.images?.[0]})`
                        : "none",
                    }}
                  >
                    {!eachProp?.images && (
                      <div className="flex justify-center items-center w-full h-full">
                        <span className="loading loading-ring loading-md text-C_purple"></span>
                      </div>
                    )}
                  </figure>
                </th>
              ))}
            </tr>

            <tr className="font-Nunito text-C_DarkGray text-[22px] grid lg:grid-cols-12 grid-cols-1 justify-start w-full gap-0 border-0">
              {comparisonProperties?.map((eachProp) => (
                <th key={eachProp._id} className="h-10 col-span-6">
                  {eachProp?.title}
                </th>
              ))}
            </tr>

            <tr className="font-Nunito text-C_purple text-[20px] grid lg:grid-cols-12 grid-cols-1 justify-start w-full gap-0 border-0">
              {comparisonProperties?.map((eachProp) => (
                <th key={eachProp._id} className="h-8 col-span-6 font-[600]">
                  {eachProp?.price} € {eachProp?.afterPriceLabel}
                </th>
              ))}
            </tr>

            <tr className="font-Nunito_Sans  text-[16px] grid lg:grid-cols-12 grid-cols-1 justify-start w-full gap-0 border-0">
              {comparisonProperties?.map((eachProp) => (
                <th
                  key={eachProp._id}
                  className=" text-C_LightGray h-10 col-span-6 font-[500]"
                >
                  Type:{" "}
                  <span className=" text-C_DarkGray capitalize">
                    {eachProp?.category}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          {isPending ? (
            <p className="text-lg text-C_purple flex items-center mt-5 gap-4">
              Loading <span className="loading loading-dots loading-lg"></span>
            </p>
          ) : (
            comparisonProperties?.map((eachProp) => (
              <ComparisonTable key={eachProp._id} eachProp={eachProp} />
            ))
          )}
        </table> */}

        {isPending ? (
          <p className="text-lg text-C_purple flex items-center mt-5 gap-4">
            Loading <span className="loading loading-dots loading-lg"></span>
          </p>
        ) : (
          <table className="table">
            <thead className="border-0">
              <tr className="font-Nunito text-C_DarkGray text-[22px] grid lg:grid-cols-12 grid-cols-1 justify-start w-full gap-0 border-0">
                {comparisonProperties?.map((eachProp) => (
                  <th
                    key={eachProp._id}
                    className="col-span-6 w-[600px] h-[350px]"
                  >
                    <figure
                      className="w-full h-full bg-cover bg-center relative rounded-lg"
                      style={{
                        backgroundImage: eachProp?.images
                          ? `url(${eachProp?.images?.[0]})`
                          : "none",
                      }}
                    >
                      {!eachProp?.images && (
                        <div className="flex justify-center items-center w-full h-full">
                          <span className="loading loading-ring loading-md text-C_purple"></span>
                        </div>
                      )}
                    </figure>
                  </th>
                ))}
              </tr>

              <tr className="font-Nunito text-C_DarkGray text-[22px] grid lg:grid-cols-12 grid-cols-1 justify-start w-full gap-0 border-0">
                {comparisonProperties?.map((eachProp) => (
                  <th key={eachProp._id} className="h-10 col-span-6">
                    {eachProp?.title}
                  </th>
                ))}
              </tr>

              <tr className="font-Nunito text-C_purple text-[20px] grid lg:grid-cols-12 grid-cols-1 justify-start w-full gap-0 border-0">
                {comparisonProperties?.map((eachProp) => (
                  <th key={eachProp._id} className="h-8 col-span-6 font-[600]">
                    {eachProp?.price} € {eachProp?.afterPriceLabel}
                  </th>
                ))}
              </tr>

              <tr className="font-Nunito_Sans  text-[16px] grid lg:grid-cols-12 grid-cols-1 justify-start w-full gap-0 border-0">
                {comparisonProperties?.map((eachProp) => (
                  <th
                    key={eachProp._id}
                    className=" text-C_LightGray h-10 col-span-6 font-[500]"
                  >
                    Type:{" "}
                    <span className=" text-C_DarkGray capitalize">
                      {eachProp?.category}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        )}
      </div>
    </div>
  );
};

export default Comparison;

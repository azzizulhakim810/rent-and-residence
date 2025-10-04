import { Link } from "react-router-dom";
import useProperties from "../../hooks/useProperties/useProperties";
const LatestProps = () => {
  const [allPropInfo, , isPending] = useProperties({
    page: 1,
    limit: 2,
    filters: {
      city: "",
      type: "",
      category: "",
      sort: "newest",
    },
  });
  const { allProperties = [] } = allPropInfo || {};

  return (
    <div>
      {isPending ? (
        <div className="flex">
          <p className="font-Nunito_Sans text-lg text-C_purple pe-2">
            Properties are loading
          </p>
          <br />
          <span className=" loading loading-ring loading-xl text-C_purple"></span>
        </div>
      ) : (
        allProperties?.map((property) => (
          <Link key={property._id} to={`/propertyDetails/${property._id}`}>
            <div className="flex justify-between items-center gap-3 pt-2">
              <img
                className="w-[40%] rounded"
                src={property?.images[0]}
                alt=""
              />
              <span className="w-full flex flex-col gap-2">
                <h4 className="font-Nunito font-[700] text-C_gray text-[16px] leading-6">
                  {property?.title}
                </h4>
                <p className=" text-C_purple font-Nunito_Sans font-[600] text-[16px] leading-6">
                  {property?.price} €
                </p>
              </span>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default LatestProps;

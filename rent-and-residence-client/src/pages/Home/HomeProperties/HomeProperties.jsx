// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../../../components/PropertyCard/PropertyCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import useProperties from "../../../hooks/useProperties";
const HomeProperties = () => {
  // const [properties = [], favourites, loading] = useProperties();
  // const [comparisonProperty, setComparisonProperty] = useState();
  // const [p, setP] = useState();
  const [allPropInfo, refetch, isPending] = useProperties();
  const { allProperties = [], favouritePropertyIds = [] } = allPropInfo || {};

  // const axiosPublic = useAxiosPublic();
  // const fetchProperties = JSON.parse(localStorage.getItem("properties"));
  // console.log(fetchProperties);

  /*   useEffect(() => {
    Promise.all(
      fetchProperties.map((propertyId) =>
        axiosPublic.get(`/api/properties/${propertyId}`)
      )
    ).then((res) => setComparisonProperty(res));
  }, [axiosPublic, fetchProperties]); */

  return (
    <div className="grid grid-cols-12 lg:pb-22 lg:pt-0 py-20 relative">
      {/* Section Title Desktop | Hidden on Mobile */}

      <SectionTitle title={"Properties"} />

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-5/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          Discover the latest properties available today in Madrid area
        </h1>

        {/* <div className="w-auto shadow-[0px_0px_20px_rgba(0,0,0,0.25)] p-8 rounded-xl bg-white flex gap-2">
          {comparisonProperty?.map((prop) => (
            <img className="w-16" src={prop?.data[0]?.images?.[0]} />
          ))}
        </div> */}

        {/* Property Cards  */}
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-start w-full gap-6 py-5">
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
              <PropertyCard
                key={property._id}
                property={property}
                favourites={favouritePropertyIds}
                refetch={refetch}
              />
            ))
          )}
        </div>

        <Link className="btn w-1/6 mx-auto my-5 bg-C_purple text-white hover:bg-transparent hover:border-2 hover:border-C_purple hover:text-C_purple border-2 rounded-md hidden lg:flex capitalize text-[15px] font-Nunito_Sans py-5">
          load more listings
        </Link>
      </div>
    </div>
  );
};

export default HomeProperties;

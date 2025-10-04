// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../../../components/PropertyCard/PropertyCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useProperties from "../../../hooks/useProperties/useProperties";
// import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";

const HomeProperties = () => {
  const [allPropInfo, refetch, isPending] = useProperties({
    page: 1,
    limit: 3,
    filters: {
      city: "",
      type: "",
      category: "",
      sort: "newest",
    },
  });
  const { allProperties = [], favouritePropertyIds = [] } = allPropInfo || {};

  return (
    <div className="grid grid-cols-12 lg:pb-22 lg:pt-0 py-20 relative">
      {/* Section Title Desktop | Hidden on Mobile */}

      <SectionTitle title={"Properties"} />

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-5/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          Discover the latest properties available today in Madrid area
        </h1>

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

        <Link
          to="/properties"
          className="btn w-1/6 mx-auto my-5 bg-C_purple text-white hover:bg-transparent hover:border-2 hover:border-C_purple hover:text-C_purple border-2 rounded-md hidden lg:flex capitalize text-[15px] font-Nunito_Sans py-5"
        >
          load more listings
        </Link>
      </div>
    </div>
  );
};

export default HomeProperties;

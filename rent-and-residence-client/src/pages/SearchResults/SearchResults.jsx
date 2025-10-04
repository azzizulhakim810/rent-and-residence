import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ComparisonFeature from "../../components/ComparisonFeature/ComparisonFeature";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Sidebar from "../Shared/Sidebar/Sidebar";

const SearchResults = () => {
  const axiosPublic = useAxiosPublic();
  const [params] = useSearchParams();
  const city = params.get("city");
  const bedroom = params.get("bedroom");
  const room = params.get("room");

  const [filters, setFilters] = useState({
    sort: "",
  });

  const {
    data: foundProperties,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["searchResults", city, bedroom, room],
    queryFn: async () => {
      const result = await axiosPublic.get(
        `/api/search?city=${city}&bedroom=${bedroom}&room=${room}`
      );
      return result.data;
    },
  });

  console.log(filters);

  return (
    <div className="bg-C_LightGray/5 pb-6 ">
      <Helmet>
        <title>R & R | Contact</title>
      </Helmet>
      {/* Map  */}
      {/* <Map
        lat={homeLat}
        lng={homeLng}
        title={title}
        propImg={officeImg}
        price={price}
      /> */}

      <div className="w-10/12 mx-auto pt-4 ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={"Search Results"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <div className="flex  flex-col justify-start w-full gap-6 pb-5">
              {/* <div> */}
              {/* Info & Filter  */}
              <div className=" flex justify-between items-end  bg-white w-full shadow-lg px-8 py-6 mb-2  rounded-md ">
                <span>
                  <h1 className="font-Nunito lg:text-[34px] text-[32px]  font-[700]">
                    {foundProperties?.length ? (
                      `${
                        foundProperties?.length == 1
                          ? foundProperties?.length + " " + "listing"
                          : foundProperties?.length + " " + "listings"
                      }`
                    ) : (
                      <span>0 Listing</span>
                    )}
                  </h1>

                  <p className="flex gap-2 items-center text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[18px] pb-2">
                    Login & mark as favourite to purchase them in future
                  </p>
                </span>

                <select
                  onChange={(e) => setFilters({ sort: e.target.value })}
                  className="select select-ghost join-item block lg:w-[25%] w-full lg:px-4 py-0 bg-white border-[1px] border-C_purple rounded-lg focus:outline-none focus:ring-[1px] focus:ring-C_purple text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
                >
                  <option value="" disabled={true}>
                    Price/Date/Quantity
                  </option>

                  <option value="priceDesc">Price High to Low</option>
                  <option value="priceAsc">Price Low to High</option>
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="bedroomDesc">Bedrooms High to Low</option>
                  <option value="bedroomAsc">Bedrooms Low to high</option>
                </select>
              </div>

              {/* Property Cards  */}
              <div className="grid lg:grid-cols-2 grid-cols-1 justify-start w-full gap-6 py-5">
                {isPending ? (
                  <div className="flex">
                    <p className="font-Nunito_Sans text-lg text-C_purple pe-2">
                      Properties are loading
                    </p>
                    <br />
                    <span className=" loading loading-ring loading-xl text-C_purple"></span>
                  </div>
                ) : (
                  foundProperties?.map((property) => (
                    <PropertyCard
                      key={property._id}
                      property={property}
                      // favourites={favouritePropertyIds}
                      refetch={refetch}
                    />
                  ))
                )}
              </div>

              {/* </div> */}
            </div>
          </div>

          {/* Sidebar  */}
          <div className="lg:col-span-4 col-span-10">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Comparison Popup  */}
      <ComparisonFeature />
    </div>
  );
};

export default SearchResults;

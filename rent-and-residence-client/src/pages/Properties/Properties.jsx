import { useState } from "react";
import { Helmet } from "react-helmet";
import { GrNext, GrPrevious } from "react-icons/gr";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

import SkeletonOfPropertyCard from "../../components/SkeletonOfPropertyCard/SkeletonOfPropertyCard";
import useProperties from "../../hooks/useProperties/useProperties";
import useScrollToTop from "../../hooks/useScrollToTop/useScrollToTop";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Properties = () => {
  useScrollToTop();
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(4);
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    category: "",
    value: "",
    // priceHighToLaw: "",
    // priceLowToHigh: "",
    // newest: "",
    // oldest: "",
  });

  const [allPropInfo, refetch, isPending] = useProperties({
    currentPage,
    limit,
    filters,
  });
  const {
    allProperties = [],
    favouritePropertyIds = [],
    totalCount = 0,
  } = allPropInfo || {};

  const numberOfPages = Math.ceil(totalCount / limit);

  const pages = [...Array(numberOfPages).keys()];

  // const pages = [];
  // for (let i = 1; i < numberOfPages; i++) {
  //   pages.push(i);
  // }

  console.log(filters);

  return (
    <div className="bg-C_LightGray/5 py-6">
      <Helmet>
        <title>R & R | Properties</title>
      </Helmet>
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={"Properties List"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <h1 className="font-Nunito text-[34px] font-[700]">
              Properties List
            </h1>

            {/* Filter  */}
            <div className="lg:flex-row flex flex-col lg:gap-3 gap-5 bg-white lg:px-3 px-8 lg:py-4 py-8 rounded-md shadow-sm mt-6 mb-3 ">
              <select
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, type: e.target.value }))
                }
                defaultValue="Types"
                className="select select-ghost join-item block lg:w-[15%] w-full lg:px-4 py-0 bg-white lg:border-none border-[1px] border-C_purple rounded-full focus:outline-none lg:focus:ring-0 lg:focus:ring-none focus:ring-[1px] focus:ring-C_purple lg:focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Types</option>
                <option>Rentals</option>
                <option>Sales</option>
              </select>

              <select
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, city: e.target.value }))
                }
                defaultValue="Cities"
                className="select select-ghost join-item block lg:w-[15%] w-full lg:px-4 py-0 bg-white lg:border-none border-[1px] border-C_purple rounded-full focus:outline-none lg:focus:ring-0 lg:focus:ring-none focus:ring-[1px] focus:ring-C_purple lg:focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Cities</option>
                <option>Manchester</option>
                <option>Liverpool</option>
                <option>Birmingham</option>
                <option>Leeds</option>
                <option>Bristol</option>
                <option>Oxford</option>
                <option>Edinburgh</option>
                <option>Glasgow</option>
                <option>Cardiff</option>
                <option>Belfast</option>
              </select>

              <select
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, category: e.target.value }))
                }
                defaultValue="Categories"
                className="select select-ghost join-item block lg:w-[20%] w-full lg:px-4 py-0 bg-white lg:border-none border-[1px] border-C_purple rounded-full focus:outline-none lg:focus:ring-0 lg:focus:ring-none focus:ring-[1px] focus:ring-C_purple lg:focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Categories</option>

                <option value="Apartments">Apartments</option>
                <option value="Condos">Condos</option>
                <option value="Duplexes">Duplexes</option>
                <option value="Houses">Houses</option>
                <option value="Industrial">Industrial</option>
                <option value="Land">Land</option>
                <option value="Retail">Retail</option>
                <option value="Villas">Villas</option>
              </select>

              {/* <select
                defaultValue="Areas"
                className="select select-ghost join-item block lg:w-[20%] w-full lg:px-4 py-0 bg-white lg:border-none border-[1px] border-C_purple rounded-full focus:outline-none lg:focus:ring-0 lg:focus:ring-none focus:ring-[1px] focus:ring-C_purple lg:focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Areas</option>
                <option>Calle De Embajadores</option>
                <option>El Cañaveral</option>
                <option>Goya</option>
              </select> */}

              <select
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, value: e.target.value }))
                }
                defaultValue="States"
                className="select select-ghost join-item block lg:w-[25%] w-full lg:px-4 py-0 bg-white lg:border-none border-[1px] border-C_purple rounded-full focus:outline-none lg:focus:ring-0 lg:focus:ring-none focus:ring-[1px] focus:ring-C_purple lg:focus:border-none text-[15px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
              >
                <option disabled={true}>Price/Date/Quantity</option>
                <option>Price High to Low</option>
                <option>Price Low to High</option>
                <option>Newest first</option>
                <option>Oldest first</option>
                <option>Bedrooms High to Low</option>
                <option>Bedrooms Low to high</option>
              </select>
            </div>

            {/* Property Cards  */}
            <div className="grid lg:grid-cols-2 grid-cols-1  w-full mx-auto gap-6 py-5">
              {/* <SkeletonOfPropertyCard /> */}
              {isPending ? (
                <SkeletonOfPropertyCard />
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

            {/* Pagination  */}
            <div className="join py-5">
              {/* Previous Button  */}

              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage > 0 ? currentPage - 1 : currentPage
                  )
                }
                className="join-item btn"
              >
                <GrPrevious />
              </button>

              {pages.map((page) => (
                <button
                  key={page}
                  // onClick={setPage(e.target.value)}
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage == page
                      ? "btn bg-C_purple text-white"
                      : "btn bg-transparent text-C_DarkGray"
                  }
                  // type="radio"
                  // name="options"
                  // aria-label={page}
                >
                  {page + 1}
                </button>
              ))}

              {/* <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="2"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="3"
              />
              <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="4"
              /> */}

              {/* Quantity Per page  */}
              <select
                onChange={(e) => {
                  setLimit(parseInt(e.target.value));
                  setCurrentPage(0);
                }}
                // defaultValue={limit}
                value={limit}
                className="btn join-item select block w-[80px] ms-3 mx-5 bg-transparent border-gray-300 border-[1px] rounded focus:outline-none focus:ring-0 focus:ring-gray-300 focus:border-[1px] text-[14px] text-C_DarkGray focus:text-C_DarkGray font-Nunito_Sans"
              >
                <option value={2}>2</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={10}>10</option>
              </select>

              {/* Next Button  */}
              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage + 1 < numberOfPages
                      ? currentPage + 1
                      : currentPage
                  )
                }
                className="join-item btn"
              >
                <GrNext />
              </button>
            </div>
          </div>

          {/* Sidebar  */}
          <div className="lg:col-span-4 col-span-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;

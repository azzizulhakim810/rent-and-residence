// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PropertyCard from "../../../components/PropertyCard/PropertyCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Properties = () => {
  // const [properties, setProperties] = useState([]);
  const allProperties = useLoaderData([]);
  // setProperties(allProperties);

  /*   useEffect(() => {
    fetch("http://localhost:5123/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []); */

  // console.log(properties.map((property) => console.log(property)));

  // console.log(properties);
  return (
    <div className="grid grid-cols-12 lg:pb-22 lg:pt-0 py-20 relative">
      {/* Section Title Desktop | Hidden on Mobile */}

      <SectionTitle title={"Properties"} />

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-5/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          Discover the latest properties available today in Madrid area
        </h1>

        {/* First Row  */}
        <div className="flex lg:grid  grid-cols-3 justify-start w-full gap-6 py-5">
          {allProperties?.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>

        <Link className="btn w-1/6 mx-auto my-5 bg-C_purple text-white hover:bg-transparent hover:border-2 hover:border-C_purple hover:text-C_purple border-2 rounded-md hidden lg:flex capitalize text-[15px] font-Nunito_Sans py-5">
          load more listings
        </Link>
      </div>
    </div>
  );
};

export default Properties;

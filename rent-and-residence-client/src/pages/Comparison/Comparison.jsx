// import { useState, useEffect } from "react";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import useComparison from "../../hooks/useComparison/useComparison";
import useScrollToTop from "../../hooks/useScrollToTop/useScrollToTop";

// import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
const Comparison = () => {
  // const [properties, setProperties] = useState([]);
  const [, comparisonProperties, , isPending, , ,] = useComparison();
  useScrollToTop();
  // console.log(comparisonProperties);
  const attributeLabels = {
    // Address
    "address.city": "City",
    "address.state": "Area",
    "address.zip": "Zip",

    // Property Details
    "propertyDetails.sizeInMeter": "Size (m²)",
    "propertyDetails.lotInInch": "Lot Size (m²)",
    "propertyDetails.rooms": "Rooms",
    "propertyDetails.bedrooms": "Bedrooms",
    "propertyDetails.bathrooms": "Bathrooms",

    // Energy
    energyIndex: "Energy Index",
    energyClass: "Energy Class",

    // Identity
    _id: "Property ID",

    // Construction
    "propertyDetails.yearBuilt": "Year Built",
    garages: "Garages",
    garageSize: "Garage Size",
    "propertyDetails.availableFrom": "Available From",
    "propertyDetails.basement": "Basement",
    "propertyDetails.externalConstruction": "External Construction",
    "propertyDetails.roofing": "Roofing",

    // Amenities
    "amenities.backYard": "Back Yard",
    "amenities.basketballCourt": "Basketball Court",
    "amenities.centralAir": "Central Air",
    "amenities.chairAccessible": "Chair Accessible",
    "amenities.electricity": "Electricity",
    "amenities.elevator": "Elevator",
    "amenities.equippedKitchen": "Equipped Kitchen",
    "amenities.fireplace": "Fireplace",
    "amenities.garageAttached": "Garage Attached",
    "amenities.gym": "Gym",
    "amenities.heating": "Heating",
    "amenities.hotBath": "Hot Bath",
    "amenities.laundry": "Laundry",
    "amenities.mediaRoom": "Media Room",
    "amenities.naturalGas": "Natural Gas",
    "amenities.pool": "Pool",
    "amenities.smokeDetectors": "Smoke Detectors",
    "amenities.ventilation": "Ventilation",
    "amenities.washerDryer": "Washer & Dryer",
    "amenities.water": "Water",
    "amenities.wifi": "WiFi",
  };

  const getNestedValue = (eachProp, attr) => {
    return attr.split(".").reduce((current, key) => {
      // return current && current[key] !== undefined ? current[key] : null;
      return current[key] == "true" ? (
        <IoMdCheckmark className="text-green-500 text-2xl" />
      ) : current[key] == "false" ? (
        <IoMdClose className="text-red-500 text-2xl" />
      ) : (
        current[key]
      );
    }, eachProp);
  };

  return (
    <div className="w-10/12 mx-auto pt-4 ">
      {/* Breadcrumbs */}

      <Breadcrumb pageName={"Comparison"} />

      <div className="bg-white w-full p-0 mb-6  ">
        <h1 className="font-Nunito lg:text-[34px] text-[32px]  font-[700]">
          Compare Listings
        </h1>
      </div>

      {/* Property Table  */}
      <div className="overflow-x-auto mb-10">
        {isPending ? (
          <p className="text-lg text-C_purple flex items-center mt-5 gap-4">
            Loading <span className="loading loading-dots loading-lg"></span>
          </p>
        ) : (
          <table className="table-auto w-full  border-collapse border-0 border-gray-300">
            <thead className="border-0">
              <tr className="font-Nunito w-full border-0 ">
                <th></th>
                {comparisonProperties?.map((eachProp) => (
                  <th key={eachProp._id} className=" w-[40%] h-[350px]  pe-2">
                    <Link to={`/propertyDetails/${eachProp._id}`}>
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
                    </Link>
                  </th>
                ))}
              </tr>

              <tr className="font-Nunito text-C_DarkGray text-[22px] w-full  border-0 ">
                <th className="border-0 px-4 py-2 text-left"></th>
                {comparisonProperties?.map((eachProp) => (
                  <th
                    key={eachProp._id}
                    className="border-0 px-4 py-2 text-left"
                  >
                    <Link to={`/propertyDetails/${eachProp._id}`}>
                      {eachProp?.title}
                    </Link>
                  </th>
                ))}
              </tr>

              <tr className="font-Nunito text-C_DarkGray text-[22px] w-full  border-0 ">
                <th className="border-0 px-4 py-2 text-left"></th>
                {comparisonProperties?.map((eachProp) => (
                  <th
                    key={eachProp._id}
                    className="border-0 px-4  text-left font-[500] text-C_purple"
                  >
                    {eachProp?.price} €{" "}
                    <span className="text-[18px] ">
                      {eachProp?.afterPriceLabel}
                    </span>
                  </th>
                ))}
              </tr>

              <tr className="font-Nunito text-C_DarkGray text-[17px] w-full  border-0">
                <th className="border-0 px-4 py-2 text-left"></th>
                {comparisonProperties?.map((eachProp) => (
                  <th
                    key={eachProp._id}
                    className="border-0 px-4 py-2 text-left text-C_LightGray font-[500]"
                  >
                    Type:{" "}
                    <span className=" text-C_DarkGray capitalize">
                      {eachProp?.category}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Object.keys(attributeLabels).map((attr) => (
                <tr key={attr} className="even:bg-C_purple/10 text-C_LightGray">
                  <td className="border-0 px-4 py-4 font-semibold text-md">
                    {attributeLabels[attr] || attr}
                  </td>

                  {comparisonProperties?.map((eachProp) => (
                    <td
                      key={eachProp._id}
                      className="border-0 px-4 py-2 text-left  text-md"
                    >
                      {getNestedValue(eachProp, attr) || "--"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Comparison;

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Banner = () => {
  const [selectDivision, setSelectDivision] = useState("");
  const [selectPropertyType, setSelectPropertyType] = useState("");
  const [selectTransactionType, setSelectTransactionType] = useState("");

  // console.log(selectDivision, selectPropertyType, selectTransactionType);
  const divisions = [
    { value: "dhaka", label: "Dhaka" },
    { value: "chittagong", label: "Chittagong" },
    { value: "rajshahi", label: "Rajshahi" },
    { value: "khulna", label: "Khulna" },
    { value: "barisal", label: "Barisal" },
    { value: "sylhet", label: "Sylhet" },
    { value: "rangpur", label: "Rangpur" },
    { value: "mymensingh", label: "Mymensingh" },
  ];

  const propertyTypes = [
    { value: "apartments", label: "Apartments" },
    { value: "condos", label: "Condos" },
    { value: "duplexes", label: "Duplexes" },
    { value: "houses", label: "Houses" },
    { value: "industrial", label: "Industrial" },
    { value: "land", label: "Land" },
    { value: "offices", label: "Offices" },
    { value: "retail", label: "Retail" },
    { value: "villas", label: "Villas" },
  ];

  const transactionTypes = [
    { value: "rentals", label: "Rentals" },
    { value: "sales", label: "Sales" },
  ];

  return (
    <div className="min-h-[80vh] bg-[#EFF4FF] lg:grid lg:grid-cols-12 grid-col-1 justify-between items-center ">
      <div className=" col-span-7 h-full lg:w-8/12 w-10/12 mx-auto flex flex-col justify-center items-start lg:text-left  py-16">
        <div className="lg:text-left text-center">
          <h1 className="text-C_gray lg:text-6xl text-5xl lg:leading-16 leading-13 font-[700] lg:-me-15 font-Nunito">
            Find your next <br />
            Perfect home in Madrid
          </h1>
          <p className=" py-6 font-Nunito_Sans font-normal text-xl text-[#9b9b9b]">
            Through our proprietary platform, WpResidence is changing how agents
            and clients navigate the process of finding or selling a home.
          </p>
        </div>

        {/* Search Field  */}
        <div className="lg:w-[60vw] w-full mt-5 bg-white px-5 ps-10 py-6 lg:rounded-full rounded-3xl lg:flex lg:flex-row flex flex-col items-center justify-around lg:gap-5 gap-6 -me-75 z-10">
          {/* Location  */}
          <div className="lg:w-1/4 w-full ">
            <label
              htmlFor="division"
              className="block text-sm font-medium tracking-wider text-gray-700 mb-2"
            >
              LOCATION
            </label>
            <select
              onChange={(e) => setSelectDivision(e.target.value)}
              className="select join-item block w-full px-4 py-2 bg-white border border-none rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-C_purple focus:border-none text-[16px] text-gray-400 "
            >
              <option disabled selected>
                Choose a division
              </option>
              {divisions.map((division) => (
                <option key={division.value} value={division.value}>
                  {division.label}
                </option>
              ))}
            </select>
          </div>

          {/* Property Type  */}
          <div className="lg:w-1/4 w-full">
            <label
              htmlFor="propertyType"
              className="block text-sm font-medium tracking-wider text-gray-700 mb-2"
            >
              PROPERTY TYPE
            </label>
            <select
              onChange={(e) => setSelectPropertyType(e.target.value)}
              className="select join-item block w-full px-4 py-2 bg-white border border-none rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-C_purple focus:border-none text-[16px] text-gray-400 "
            >
              <option disabled selected>
                Property Type
              </option>
              {propertyTypes.map((property) => (
                <option key={property.value} value={property.value}>
                  {property.label}
                </option>
              ))}
            </select>
          </div>

          {/* Transactional Type  */}
          <div className="lg:w-1/4 w-full ">
            <label
              htmlFor="transactionType"
              className="block text-sm font-medium tracking-wider text-gray-700 mb-2"
            >
              RENT OR SALE
            </label>
            <select
              onChange={(e) => setSelectTransactionType(e.target.value)}
              className="select join-item block w-full px-4 py-2 bg-white border border-none rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-C_purple focus:border-none text-[16px] text-gray-400 "
            >
              <option disabled selected>
                Rend or Sale
              </option>
              {transactionTypes.map((transaction) => (
                <option key={transaction.value} value={transaction.value}>
                  {transaction.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button  */}
          <div className="lg:w-1/4 w-full">
            <button className="btn w-full rounded-full bg-C_purple text-white hover:bg-C_gray font-medium text-lg px-10 lg:py-7 py-6 gap-3">
              <FiSearch />
              <p>Search</p>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image  */}
      <div className="lg:flex hidden bg-white col-span-5  h-screen w-full bg-[url('https://i.ibb.co/ZzSgjqsT/Home-hero.webp')] bg-cover bg-center')]">
        {/* <img
          className="h-screen "
          src="https://i.ibb.co/ZzSgjqsT/Home-hero.webp"
        /> */}
      </div>
    </div>
  );
};

export default Banner;

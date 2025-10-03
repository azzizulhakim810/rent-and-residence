import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";

const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const [searchedProp, setSearchedProp] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    bedroom: "",
    room: "",
  });

  console.log(filters);

  const cities = [
    { value: "Manchester", label: "Manchester" },
    { value: "Liverpool", label: "Liverpool" },
    { value: "Birmingham", label: "Birmingham" },
    { value: "Leeds", label: "Leeds" },
    { value: "Bristol", label: "Bristol" },
    { value: "Oxford", label: "Oxford" },
    { value: "London", label: "London" },
    { value: "Edinburgh", label: "Edinburgh" },
    { value: "Glasgow", label: "Glasgow" },
    { value: "Cardiff", label: "Cardiff" },
    { value: "Belfast", label: "Belfast" },
  ];

  const bedrooms = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6+" },
  ];

  const rooms = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6+" },
  ];

  const handleSearch = async () => {
    const result = await axiosPublic.get(
      `/api/search?city=${filters.city}&bedroom=${filters.bedroom}&room=${filters.room}`
    );

    setSearchedProp(result.data);
  };

  console.log(searchedProp);

  // const propertyTypes = [
  //   { value: "Apartments", label: "Apartments" },
  //   { value: "Condos", label: "Condos" },
  //   { value: "Duplexes", label: "Duplexes" },
  //   { value: "Houses", label: "Houses" },
  //   { value: "Industrial", label: "Industrial" },
  //   { value: "Land", label: "Land" },
  //   { value: "Retail", label: "Retail" },
  //   { value: "Villas", label: "Villas" },
  // ];

  // const transactionTypes = [
  //   { value: "Rentals", label: "Rentals" },
  //   { value: "Sales", label: "Sales" },
  // ];

  return (
    <div className="min-h-[80vh] bg-[#EFF4FF] lg:grid lg:grid-cols-12 grid-col-1 justify-between items-center ">
      <div className=" col-span-7 h-full lg:w-8/12 w-10/12 mx-auto flex flex-col justify-center items-start lg:text-left  py-16">
        <div className="lg:text-left text-center">
          <h1 className="text-C_gray lg:text-6xl text-5xl lg:leading-16 leading-13 font-[700] lg:-me-15 font-Nunito">
            Find your next <br />
            Perfect home in UK
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
              htmlFor="cities"
              className="block text-sm font-medium tracking-wider text-gray-700 mb-2"
            >
              CITIES
            </label>
            <select
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, city: e.target.value }))
              }
              className="select join-item block w-full px-4 py-2 bg-white border border-none rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-C_purple focus:border-none text-[16px] text-gray-400 "
            >
              <option disabled selected>
                Choose a city
              </option>

              {cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bedrooms  */}
          <div className="lg:w-1/4 w-full">
            <label
              htmlFor="bedrooms"
              className="block text-sm font-medium tracking-wider text-gray-700 mb-2"
            >
              BEDROOMS
            </label>
            <select
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, bedroom: e.target.value }))
              }
              className="select join-item block w-full px-4 py-2 bg-white border border-none rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-C_purple focus:border-none text-[16px] text-gray-400 "
            >
              <option disabled selected>
                Bedrooms
              </option>
              {bedrooms.map((bedroom) => (
                <option key={bedroom.value} value={bedroom.value}>
                  {bedroom.label}
                </option>
              ))}
            </select>
          </div>

          {/* Rooms  */}
          <div className="lg:w-1/4 w-full ">
            <label
              htmlFor="transactionType"
              className="block text-sm font-medium tracking-wider text-gray-700 mb-2"
            >
              ROOMS
            </label>
            <select
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, room: e.target.value }))
              }
              className="select join-item block w-full px-4 py-2 bg-white border border-none rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-C_purple focus:border-none text-[16px] text-gray-400 "
            >
              <option disabled selected>
                Rooms
              </option>
              {rooms.map((room) => (
                <option key={room.value} value={room.value}>
                  {room.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button  */}
          <div className="lg:w-1/4 w-full">
            <button
              onClick={handleSearch}
              className="btn w-full rounded-full bg-C_purple text-white hover:bg-C_gray font-medium text-lg px-10 lg:py-7 py-6 gap-3"
            >
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

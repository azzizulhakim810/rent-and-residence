/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    city: "",
    bedroom: "",
    room: "",
  });

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

  const handleSearch = (e) => {
    e.preventDefault();

    // Send the filters through queries
    navigate(
      `/search?city=${filters.city}&bedroom=${filters.bedroom}&room=${filters.room}`
    );

    // <Navigate
    //   to={`/search?city=${filters.city}&bedroom=${filters.bedroom}&room=${filters.room}`}
    //   state={{ from: location }}
    // />;
  };

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 800]);

  return (
    <div className="min-h-[80vh] ">
      <div className=" bg-[#EFF4FF] lg:grid lg:grid-cols-12 grid-col-1 justify-between items-center ">
        <div className="col-span-7 h-full lg:w-8/12 w-10/12 mx-auto flex flex-col justify-center items-start lg:text-left  py-16">
          <motion.div
            // style={{ y }}
            className="lg:text-left text-center"
          >
            <h1 className="text-C_gray lg:text-6xl text-5xl lg:leading-16 leading-13 font-[700] lg:-me-15 font-Nunito">
              Find your next <br />
              Perfect home in UK
            </h1>
            <p className=" py-6 font-Nunito_Sans font-normal text-xl text-[#9b9b9b]">
              Through our proprietary platform, WpResidence is changing how
              agents and clients navigate the process of finding or selling a
              home.
            </p>
          </motion.div>
          {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hello Motion!
        </motion.div> */}

          {/* Search Field  */}
          <motion.form
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSearch}
            className="lg:w-[60vw] w-full mt-5 bg-white px-5 ps-10 py-6 lg:rounded-full rounded-3xl lg:flex lg:flex-row flex flex-col items-center justify-around lg:gap-5 gap-6 -me-75 z-10"
          >
            {/* Cities  */}
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
                value={filters.city}
                className="select join-item block w-full px-4 py-2 bg-white border border-none rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-C_purple focus:border-none text-[16px] text-gray-400 "
              >
                <option value="" disabled selected>
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
                value={filters.bedroom}
                className="select join-item block w-full px-4 py-2 bg-white border border-none rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-C_purple focus:border-none text-[16px] text-gray-400 "
              >
                <option value="" disabled selected>
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
                value={filters.room}
                className="select join-item block w-full px-4 py-2 bg-white border border-none rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-C_purple focus:border-none text-[16px] text-gray-400 "
              >
                <option value="" disabled selected>
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
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="btn w-full rounded-full bg-C_purple/80 hover:bg-C_purple duration-400 text-white hover:bg-C_gray font-medium text-lg px-10 lg:py-7 py-6 gap-3"
              >
                <FiSearch />
                <span>Search</span>
                {/*  <motion.span
                className="absolute"
                initial={{ opacity: 1, y: 0 }}
                whileHover={{ opacity: 0, y: 10 }}
              >
                Search
              </motion.span>
              <motion.span
                className="absolute"
                initial={{ opacity: 0, y: 0 }}
                whileHover={{ opacity: 1, y: -10 }}
              >
                Go
              </motion.span> */}
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Hero Image  */}
        <div className="lg:flex hidden bg-white col-span-5  h-screen w-full bg-[url('https://i.ibb.co/ZzSgjqsT/Home-hero.webp')] bg-cover bg-center')]">
          {/* <img
          className="h-screen "
          src="https://i.ibb.co/ZzSgjqsT/Home-hero.webp"
        /> */}
        </div>
      </div>

      <Link to="/#service">
        <motion.div
          className="-mt-20 flex justify-center"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaAnglesDown className="text-2xl " />
        </motion.div>
      </Link>
    </div>
  );
};

export default Banner;

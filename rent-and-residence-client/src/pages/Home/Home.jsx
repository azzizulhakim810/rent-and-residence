import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import useComparison from "../../hooks/useComparison/useComparison";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import HomeProperties from "./HomeProperties/HomeProperties";
import Location from "./Location/Location";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  // const [comparisonProperty, setComparisonProperty] = useState();
  // const [isShowed, setIsShowed] = useState(true);
  // const [allPropInfo] = useProperties();
  // const { allProperties, favouritePropertyIds } = allPropInfo || [];
  const locationHook = useLocation();
  const [handleRemoveComparison, comparisonProperty, results] = useComparison();

  results.map((q) => console.log(q.data[0]));
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

  useEffect(() => {
    if (locationHook.state?.showModal) {
      document.getElementById("signUpAndInPopUp").showModal();
    }
  }, [locationHook.state]);

  /*   const handleRemoveComparison = () => {
    setIsShowed(!isShowed);
  }; */

  return (
    <div className="relative">
      <Helmet>
        <title>R & R | Home</title>
      </Helmet>

      <Banner />

      <div className="w-10/12 mx-auto">
        <Services />

        <HomeProperties />
      </div>
      <div className="bg-[#F0F5FF]">
        <div className="w-10/12 mx-auto ">
          <Featured />
        </div>
      </div>

      <div className="w-10/12 mx-auto ">
        <Location />
        <Testimonials />
      </div>

      {/* Comparison Popup  */}
      <div
        id="comparisonPopUp"
        className="fixed bottom-0 w-auto shadow-[0px_0px_20px_rgba(0,0,0,0.25)] px-8 py-2 rounded-xl bg-white z-100"
      >
        <div className="flex align-middle items-center">
          <h1 className=" w-full pt-8 pb-2 text-[18px] font-[600] font-Nunito text-title_color lg:text-left text-center">
            Compare Listings
          </h1>

          <button
            onClick={handleRemoveComparison}
            className=" absolute top-0 right-0 bg-C_purple text-white px-4 py-2 rounded-tr-lg rounded-bl-lg cursor-pointer"
          >
            X
          </button>
        </div>
        <div className="flex gap-2">
          {/* {comparisonProperty?.map((prop, i) => (
            <figure
              key={i}
              className="w-20 h-16 bg-cover bg-center relative rounded-lg"
              style={{
                backgroundImage: prop?.data[0]?.images
                  ? `url(${prop?.data[0]?.images?.[0]})`
                  : "none",
                backgroundColor: prop?.data[0]?.images
                  ? undefined
                  : `<div class="flex justify-center items-center ">
                      <span className=" loading loading-ring loading-xl text-C_purple"></span>
                    </div>`,
              }}
            ></figure>
          ))} */}
          {results?.map((prop, i) => (
            <figure
              key={i}
              className="w-20 h-16 bg-cover bg-center relative rounded-lg"
              style={{
                backgroundImage: prop?.data[0]?.images
                  ? `url(${prop?.data[0]?.images?.[0]})`
                  : "none",
                backgroundColor: prop?.data[0]?.images
                  ? undefined
                  : `<div class="flex justify-center items-center ">
                      <span className=" loading loading-ring loading-xl text-C_purple"></span>
                    </div>`,
              }}
            ></figure>
          ))}
        </div>
        <Link className="btn mx-auto my-2 bg-C_purple text-white hover:bg-transparent hover:text-C_purple  border-2 rounded-md hidden lg:flex capitalize text-[15px] font-Nunito_Sans py-2">
          Compare
        </Link>
      </div>
    </div>
  );
};

export default Home;

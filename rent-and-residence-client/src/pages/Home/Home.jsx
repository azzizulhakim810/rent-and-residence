import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ComparisonFeature from "../../components/ComparisonFeature/ComparisonFeature";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import HomeProperties from "./HomeProperties/HomeProperties";
import Location from "./Location/Location";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import useScrollToTop from "../../hooks/useScrollToTop/useScrollToTop";
// import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

const Home = () => {
  useScrollToTop();
  const locationHook = useLocation();

  useEffect(() => {
    if (locationHook.state?.showModal) {
      document.getElementById("signUpAndInPopUp").showModal();
    }
  }, [locationHook.state]);

  // console.log(isShow);

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
      <ComparisonFeature />
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import useProperties from "../../hooks/useProperties";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import HomeProperties from "./HomeProperties/HomeProperties";
import Location from "./Location/Location";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  // const allProperties = useLoaderData([]);
  const [allPropInfo] = useProperties();
  const { allProperties, favouritePropertyIds } = allPropInfo || [];
  const locationHook = useLocation();

  // console.log(allProperties, favouritePropertyIds);

  useEffect(() => {
    if (locationHook.state?.showModal) {
      document.getElementById("signUpAndInPopUp").showModal();
      /* const modal = document.getElementById("signUpAndInPopUp");

      if (modal) {
        modal.showModal();
      } */
    }
  }, [locationHook.state]);

  return (
    <div>
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
    </div>
  );
};

export default Home;

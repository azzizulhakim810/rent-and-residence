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
  const [properties, loading] = useProperties();
  const locationHook = useLocation();

  // console.log(properties);

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
        <HomeProperties properties={properties} loading={loading} />
      </div>
      <div className="bg-[#F0F5FF]">
        <div className="w-10/12 mx-auto ">
          <Featured properties={properties} loading={loading} />
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

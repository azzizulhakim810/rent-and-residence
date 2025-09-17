import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import useProperties from "../../hooks/useProperties";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import HomeProperties from "./HomeProperties/HomeProperties";
import Location from "./Location/Location";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

const Home = () => {
  const [comparisonProperty, setComparisonProperty] = useState();
  const [allPropInfo] = useProperties();
  // const { allProperties, favouritePropertyIds } = allPropInfo || [];
  const locationHook = useLocation();

  const axiosPublic = useAxiosPublic();
  const fetchProperties = JSON.parse(localStorage.getItem("properties"));
  // console.log(fetchProperties);

  useEffect(() => {
    Promise.all(
      fetchProperties.map((propertyId) =>
        axiosPublic.get(`/api/properties/${propertyId}`)
      )
    ).then((res) => setComparisonProperty(res));
  }, [axiosPublic, fetchProperties]);

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
        <div className="w-auto shadow-[0px_0px_20px_rgba(0,0,0,0.25)] p-8 rounded-xl bg-white flex gap-2">
          {comparisonProperty?.map((prop) => (
            <img className="w-16" src={prop?.data[0]?.images?.[0]} />
          ))}
        </div>
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

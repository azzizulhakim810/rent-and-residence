import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Location from "./Location/Location";
import Properties from "./Properties/Properties";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  const allProperties = useLoaderData([]);

  return (
    <div>
      <Banner />
      <div className="w-10/12 mx-auto">
        <Services />
        <Properties allProperties={allProperties} />
      </div>
      <div className="bg-[#F0F5FF]">
        <div className="w-10/12 mx-auto ">
          <Featured allProperties={allProperties} />
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

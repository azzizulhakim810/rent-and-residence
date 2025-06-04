import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Location from "./Location/Location";
import Properties from "./Properties/Properties";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-10/12 mx-auto">
        <Services />
        <Properties />
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

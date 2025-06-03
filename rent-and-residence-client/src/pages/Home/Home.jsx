import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Properties from "./Properties/Properties";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-10/12 mx-auto">
        <Services />
        <Properties />
        <Featured />
      </div>
    </div>
  );
};

export default Home;

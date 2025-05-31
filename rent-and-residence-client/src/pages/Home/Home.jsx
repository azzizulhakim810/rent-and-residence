import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-10/12 mx-auto">
        <Services />
      </div>
    </div>
  );
};

export default Home;

// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
const FeatureCard = ({ featuredProperty }) => {
  // console.log(featuredProperty);

  const { title, price, images } = featuredProperty || {};
  return (
    <div className="w-full ">
      <figure
        className={` bg-[url(${images[0]})] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg`}
      >
        <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
          {price} €
        </span>
      </figure>

      <div className=" py-4 ">
        <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
          {title}
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;

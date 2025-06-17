import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
const FeatureCard = ({ featuredProperty }) => {
  // console.log(featuredProperty);

  const { _id, title, price, images } = featuredProperty || {};
  return (
    <div className="w-full ">
      <Link to={`/propertyDetails/${_id}`}>
        {images?.[0] && (
          <figure
            className={`h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg`}
            style={{
              backgroundImage: images[0] ? `url(${images[0]})` : "none",
              backgroundColor: images[0]
                ? undefined
                : `<div class="flex justify-center items-center ">
                      <span className=" loading loading-ring loading-xl text-C_purple"></span>
                    </div>`,
            }}
          >
            <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
              {price} €
            </span>
          </figure>
        )}

        <div className=" py-4 ">
          <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
            {title}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default FeatureCard;

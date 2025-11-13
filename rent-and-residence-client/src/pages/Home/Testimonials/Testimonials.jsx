import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/api/reviews").then((res) => setReviews(res.data));
  }, [axiosPublic]);

  console.log(reviews);

  return (
    <div className="grid grid-cols-12 lg:py-20 py-20 relative ">
      {/* Section Title Desktop | Hidden on Mobile */}
      <SectionTitle title={"Testimonials"} />

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-6/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          Testimonials from clients who counted on us to buy or sell a home
        </h1>

        {/* First Row  */}
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 pb-5">
          {reviews?.map((review) => (
            <TestimonialCard key={review._id} review={review} />
          ))}
        </div>

        {/* Second Row  */}
        {/* <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 pb-12">
          <div className="col-span-4 w-full shadow-[0px_0px_50px_rgba(100,80,200,0.11)] p-12 flex flex-col gap-5">
            <div className="flex justify-start items-center gap-5">
              <img
                className="size-15 rounded-full"
                src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              />

              <div>
                <h1 className="text-[18px] font-[700] text-C_DarkGray font-Nunito">
                  Dana Gilmore
                </h1>
                <p className="text-[15px] text-C_LightGray font-Nunito_Sans">
                  Excellent team! 🏆
                </p>
              </div>
            </div>
            <p className="text-[15px]  text-C_LightGray font-Nunito_Sans">
              The WP Estate team did an outstanding job helping me buy my first
              home. The high level of service and dedication.
            </p>
            <div className="flex justify-start gap-2 text-[#FFC662] text-lg">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <div className="col-span-4 w-full shadow-[0px_0px_50px_rgba(100,80,200,0.11)] p-12 flex flex-col gap-5">
            <div className="flex justify-start items-center gap-5">
              <img
                className="size-15 rounded-full"
                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
              />

              <div>
                <h1 className="text-[18px] font-[700] text-C_DarkGray font-Nunito">
                  Susan Barkley
                </h1>
                <p className="text-[15px] text-C_LightGray font-Nunito_Sans">
                  happy seller
                </p>
              </div>
            </div>
            <p className="text-[15px]  text-C_LightGray font-Nunito_Sans">
              We hired the WP Estate team as our buyer agent because they are
              specifically trained in Short Sale & Foreclosure.
            </p>
            <div className="flex justify-start gap-2 text-[#FFC662] text-lg">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <div className="col-span-4 w-full shadow-[0px_0px_50px_rgba(100,80,200,0.11)] p-12 flex flex-col gap-5">
            <div className="flex justify-start items-center gap-5">
              <img
                className="size-15 rounded-full"
                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
              />

              <div>
                <h1 className="text-[18px] font-[700] text-C_DarkGray font-Nunito">
                  Dana Gilmore
                </h1>
                <p className="text-[15px] text-C_LightGray font-Nunito_Sans">
                  Excellent team! 🏆
                </p>
              </div>
            </div>
            <p className="text-[15px]  text-C_LightGray font-Nunito_Sans">
              The WP Estate team did an outstanding job helping me buy my first
              home. The high level of service and dedication.
            </p>
            <div className="flex justify-start gap-2 text-[#FFC662] text-lg">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;

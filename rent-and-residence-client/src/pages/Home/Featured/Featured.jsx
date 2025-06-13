// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Pagination } from "swiper/modules";

// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Featured = () => {
  return (
    <div className="grid grid-cols-12 lg:py-20 py-20 relative ">
      {/* Section Title Desktop | Hidden on Mobile */}
      <div className="col-span-1 lg:flex hidden -ms-15 h-[15vw] rotate-270 text-center justify-center items-center gap-5 relative ">
        <span className="relative w-[50px] inline-block before:absolute h-[3px] before:-inset-0  before:block before:bg-C_purple "></span>
        <h1 className="text-[13px] font-[600] font-Nunito_Sans tracking-[5px] uppercase text-title_color">
          Featured
        </h1>
      </div>

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-5/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          Explore the featured properties in our list to find your perfect home
        </h1>

        {/* Carousel  */}
        <div className="flex lg:flex-row flex-col justify-start w-full gap-6 py-5">
          {/* Slider - Desktop */}
          <div className=" w-full h-[500px] lg:flex hidden">
            <Swiper
              // cssMode={true}
              // navigation={true}
              // mousewheel={true}
              keyboard={true}
              slidesPerView={4}
              spaceBetween={20}
              modules={[Pagination, Keyboard]}
              className="mySwiper"
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/1tdWzWmM/pexels-823sl-3190541.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      5.500.000 €
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Villa with Amazing View
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/kVnwv28T/pexels-guiirossi-1755695.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      800 € / month
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Apartment Space for Rent
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/x8mMNkTr/pexels-christa-grover-977018-2121121.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      1800.00 €
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Family Home for Sale
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/dwyX0tPw/pexels-monica-803908.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      500 € / month
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Apartment with Ocean View
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/1tdWzWmM/pexels-823sl-3190541.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      5.500.000 €
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Villa with Amazing View
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/kVnwv28T/pexels-guiirossi-1755695.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      800 € / month
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Apartment Space for Rent
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/x8mMNkTr/pexels-christa-grover-977018-2121121.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      1800.00 €
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Family Home for Sale
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/dwyX0tPw/pexels-monica-803908.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      500 € / month
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Apartment with Ocean View
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Slider - Mobile */}

          <div className=" w-full h-[500px] flex lg:hidden">
            <Swiper
              // cssMode={true}
              // navigation={true}
              // mousewheel={true}
              keyboard={true}
              slidesPerView={1}
              spaceBetween={20}
              modules={[Pagination, Keyboard]}
              className="mySwiper"
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/1tdWzWmM/pexels-823sl-3190541.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      5.500.000 €
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Villa with Amazing View
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/kVnwv28T/pexels-guiirossi-1755695.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      800 € / month
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Apartment Space for Rent
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/x8mMNkTr/pexels-christa-grover-977018-2121121.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      1800.00 €
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Family Home for Sale
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/dwyX0tPw/pexels-monica-803908.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      500 € / month
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Apartment with Ocean View
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/1tdWzWmM/pexels-823sl-3190541.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      5.500.000 €
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Villa with Amazing View
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/kVnwv28T/pexels-guiirossi-1755695.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      800 € / month
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Apartment Space for Rent
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/x8mMNkTr/pexels-christa-grover-977018-2121121.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      1800.00 €
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Family Home for Sale
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full ">
                  <figure className="bg-[url(https://i.ibb.co/dwyX0tPw/pexels-monica-803908.jpg)] h-[400px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay rounded-lg">
                    <span className="absolute bottom-0 left-0 mb-5 ms-5 font-Nunito_Sans bg-C_purple text-white text-[13px] rounded  px-4 py-1 ">
                      500 € / month
                    </span>
                  </figure>

                  <div className=" py-4 ">
                    <button className="btn p-0 bg-transparent hover:shadow-none border-none font-Nunito font-[700] text-[18px] text-C_DarkGray hover:text-C_purple">
                      Apartment with Ocean View
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

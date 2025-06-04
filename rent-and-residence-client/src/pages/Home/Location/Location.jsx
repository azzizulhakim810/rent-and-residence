const Location = () => {
  return (
    <div className="grid grid-cols-12 lg:py-20 py-20 relative ">
      {/* Section Title Desktop | Hidden on Mobile */}
      <div className="col-span-1 lg:flex hidden -ms-15 h-[15vw] rotate-270 text-center justify-center items-center gap-5 relative ">
        <span className="relative w-[50px] inline-block before:absolute h-[3px] before:-inset-0  before:block before:bg-C_purple "></span>
        <h1 className="text-[13px] font-[600] font-Nunito_Sans tracking-[5px] uppercase text-title_color">
          location
        </h1>
      </div>

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-5/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          Explore the most attractive categories and find a property
        </h1>

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 pb-5">
          <div className="col-span-4 w-full shadow-md">
            {/* Image  */}
            <figure className="bg-[url(https://i.ibb.co/kVZkcdjJ/catgeory-9-1.webp)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-lg">
              <div className="absolute top-0 left-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                <h1 className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                  Castellana
                </h1>
              </div>

              <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                <h1 className=" text-white font-Nunito font-[700] text-[15px] rounded px-6 ">
                  1 Listing
                </h1>
              </div>
            </figure>
          </div>

          <div className="col-span-4 w-full shadow-md">
            {/* Image  */}
            <figure className="bg-[url(https://i.ibb.co/7dk9Q5sZ/house-4-1.webp)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-lg">
              <div className="absolute top-0 left-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                <h1 className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                  Castellana
                </h1>
              </div>

              <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                <h1 className=" text-white font-Nunito font-[700] text-[15px] rounded px-6 ">
                  1 Listing
                </h1>
              </div>
            </figure>
          </div>

          <div className="col-span-4 w-full shadow-md">
            {/* Image  */}
            <figure className="bg-[url(https://i.ibb.co/BHykhfHT/house-3-1.webp)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-lg">
              <div className="absolute top-0 left-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                <h1 className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                  Castellana
                </h1>
              </div>

              <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                <h1 className=" text-white font-Nunito font-[700] text-[15px] rounded px-6 ">
                  1 Listing
                </h1>
              </div>
            </figure>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 pb-5">
          <div className="lg:col-span-8 col-span-6 w-full shadow-md">
            {/* Image  */}
            <figure className="bg-[url(https://i.ibb.co/kVZkcdjJ/catgeory-9-1.webp)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-lg">
              <div className="absolute top-0 left-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                <h1 className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                  Castellana
                </h1>
              </div>

              <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                <h1 className=" text-white font-Nunito font-[700] text-[15px] rounded px-6 ">
                  1 Listing
                </h1>
              </div>
            </figure>
          </div>

          <div className="lg:col-span-4 col-span-6 w-full shadow-md">
            {/* Image  */}
            <figure className="bg-[url(https://i.ibb.co/spFLSFLq/house6-1.webp)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-lg">
              <div className="absolute top-0 left-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                <h1 className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                  Castellana
                </h1>
              </div>

              <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                <h1 className=" text-white font-Nunito font-[700] text-[15px] rounded px-6 ">
                  1 Listing
                </h1>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

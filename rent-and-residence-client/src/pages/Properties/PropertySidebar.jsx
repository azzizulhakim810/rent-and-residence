import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
const PropertySidebar = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Tabs  */}
      <div role="tablist" className="tabs tabs-lift tabs-lg -mb-3">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-Nunito font-[700] text-[16px] text-C_DarkGray/70 "
          aria-label="Request Info"
          defaultChecked
        />
        <div className="tab-content">
          {/* Profile  */}
          <div className="shadow-sm lg:p-8 p-5 mb-5 w-full rounded-md bg-white">
            <nav className="flex flex-col gap-2">
              <div className="flex lg:flex-row flex-col justify-start items-center gap-5">
                {/* Image  */}
                <div className=" lg:w-[30%] w-full">
                  <img
                    className="rounded-md "
                    src="https://i.ibb.co/nqCK8B0R/person7-21-1-500x328.webp"
                    alt=""
                  />
                </div>

                {/* Details  */}
                <span className=" w-auto flex flex-col gap-2  ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[22px] leading-6">
                    Michaela Roja
                  </h4>
                  <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]">
                    selling agent
                  </p>
                </span>
              </div>

              {/* Contact Me */}
              <div className="pt-2">
                {/* <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                  Contact Me
                </h4> */}

                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    className="input font-Nunito_Sans font-[600] text-C_LightGray w-full"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="input font-Nunito_Sans font-[600] text-C_LightGray w-full"
                    placeholder="Your Email"
                  />
                  <input
                    type="tel"
                    className="input font-Nunito_Sans font-[600] text-C_LightGray w-full"
                    placeholder="Your Phone"
                  />

                  <textarea className="textarea w-full h-40 "></textarea>

                  <label className="label">
                    <input type="checkbox" className="checkbox" />I consent to
                    the GDPR Terms
                  </label>

                  <button className=" w-full btn bg-C_purple border-2  text-white hover:text-C_purple hover:bg-transparent hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                    Send Email
                  </button>

                  <button className=" w-full btn bg-transparent hover:bg-C_purple border-2 border-C_purple  hover:text-white text-C_purple  hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                    <IoCallOutline />
                    Call
                  </button>

                  <button className=" w-full btn bg-transparent hover:bg-C_purple border-2 border-C_purple  hover:text-white text-C_purple  hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                    <FaWhatsapp />
                    WhatsApp
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-Nunito font-[700] text-[16px] text-C_DarkGray/70 "
          aria-label="Schedule a tour"
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
      </div>

      {/* Our Listings */}
      <div className="shadow-sm  p-8 w-full rounded-md bg-white">
        <label
          htmlFor="propertyType"
          className="block text-[16px] font-[700] font-Nunito tracking-wider text-C_DarkGray mb-5"
        >
          Our Listings
        </label>

        <ul className="list bg-base-100 rounded-box">
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Apartments</h1>
            <p>(2)</p>
          </li>

          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>

          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1>Condos</h1>
            <p>(12)</p>
          </li>

          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>

          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Duplexes</h1>
            <p>(3)</p>
          </li>

          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Houses</h1>
            <p>(2)</p>
          </li>
          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Industrial</h1>
            <p>(1)</p>
          </li>
          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Offices</h1>
            <p>(2)</p>
          </li>
          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Retail</h1>
            <p>(5)</p>
          </li>
        </ul>
      </div>

      {/* Latest Listings */}
      <div className="shadow-sm  p-8 w-full rounded-md bg-white">
        <label
          htmlFor="propertyType"
          className="block text-[16px] font-[700] font-Nunito tracking-wider text-C_DarkGray mb-5"
        >
          Latest Listings
        </label>

        <nav className="flex flex-col gap-2">
          <div className="flex justify-between items-center gap-3 pt-2">
            <img
              className="w-[40%] rounded"
              src="https://i.ibb.co/BHpKRtMm/pexels-fotoaibe-1743229.jpg"
              alt=""
            />
            <span className="w-full flex flex-col gap-2">
              <h4 className="font-Nunito font-[700] text-C_gray text-[16px] leading-6">
                Villa with Amazing View
              </h4>
              <p className=" text-C_purple font-Nunito_Sans font-[600] text-[16px] leading-6">
                5.500.000 €
              </p>
            </span>
          </div>

          <div className="flex justify-between items-center gap-3 mt-3">
            <img
              className="w-[40%] rounded"
              src="https://i.ibb.co/9H0hN0Hh/pexels-fotoaibe-1643383.jpg"
              alt=""
            />
            <span className="w-full flex flex-col gap-2">
              <h4 className="font-Nunito font-[700] text-C_gray text-[16px] leading-6">
                Townhouse for Rent
              </h4>
              <p className=" text-C_purple font-Nunito_Sans font-[600] text-[16px] leading-6">
                2.100 € / month
              </p>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default PropertySidebar;

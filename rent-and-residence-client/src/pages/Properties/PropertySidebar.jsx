import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
const PropertySidebar = ({ ownerId, reviews }) => {
  const [propertyOwner, setPropertyOwner] = useState([]);

  // console.log(reviews);

  // Fetch the owner of each Property
  useEffect(() => {
    fetch(`http://localhost:5123/api/users/${ownerId}`)
      .then((res) => res.json())
      .then((data) => setPropertyOwner(data));
  }, [ownerId]);

  console.log(reviews);

  // Destructure Details from Owner
  const { name, profileImage, email, role, phone } = propertyOwner[0] || {};

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
              <div className="flex flex-row justify-start items-center gap-5">
                {/* Image  */}
                <div className="w-[30%] ">
                  <img className="rounded-md" src={profileImage} alt="" />
                </div>

                {/* Details  */}
                <div className=" w-auto flex flex-col  gap-2  ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[22px] leading-6">
                    {name}
                  </h4>
                  <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] capitalize">
                    {role}
                  </p>
                </div>
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

                  <Link to={`mailto:${email}`}>
                    <button className=" w-full btn bg-C_purple border-2  text-white hover:text-C_purple hover:bg-transparent hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                      Send Email
                    </button>
                  </Link>

                  <Link to={`tel:${phone}`}>
                    <button className=" w-full btn bg-transparent hover:bg-C_purple border-2 border-C_purple  hover:text-white text-C_purple  hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                      <IoCallOutline />
                      Call
                    </button>
                  </Link>

                  <Link to={`https://wa.me/${phone}`}>
                    <button className=" w-full btn bg-transparent hover:bg-C_purple border-2 border-C_purple  hover:text-white text-C_purple  hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                      <FaWhatsapp />
                      WhatsApp
                    </button>
                  </Link>
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
          <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]">
            Coming Soon!
          </p>
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

      {/* Latest Listings */}
      <div className="shadow-sm  p-8 w-full rounded-md bg-white">
        <label
          htmlFor="propertyType"
          className="block text-[16px] font-[700] font-Nunito tracking-wider text-C_DarkGray mb-5"
        >
          Property Reviews
        </label>

        <nav className="flex flex-col gap-2">
          <div className="flex justify-between items-center gap-3 pt-2"></div>
        </nav>

        <div className="grid lg:grid-cols-1 grid-cols-1 gap-5 pb-2">
          {reviews.length !== 0 ? (
            reviews?.map((review) => (
              <TestimonialCard key={review._id} review={review} />
            ))
          ) : (
            <span className="-mt-2 font-Nunito_Sans text-paragraph_colorTwo">
              There are no reviews
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertySidebar;

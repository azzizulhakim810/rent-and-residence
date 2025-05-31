import { AiOutlineToTop } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPrint,
  FaYoutube,
} from "react-icons/fa";
import { FaBuilding, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" bg-footer_color text-C_gray py-5">
        <footer className="footer sm:footer-horizontal py-10 w-10/12 mx-auto">
          <nav>
            <h6 className=" font-semibold text-lg text-C_gray">About Us</h6>
            <p className="w-5/6 text-C_gray text-[16px] leading-6 pt-2">
              WpResidence is committed to delivering a high level of expertise,
              customer service, and attention to detail to the marketing and
              sales of luxury real estate, and rental properties.
            </p>
            <div className="flex justify-between align-middle items-center gap-4 pt-5">
              <button className=" text-C_gray bg-white text-[16px] p-3 rounded hover:bg-C_purple hover:text-white cursor-pointer">
                <FaFacebookF />
              </button>
              <button className=" text-C_gray bg-white text-[16px] p-3 rounded hover:bg-C_purple hover:text-white cursor-pointer">
                <FaLinkedinIn />
              </button>
              <button className=" text-C_gray bg-white text-[16px] p-3 rounded hover:bg-C_purple hover:text-white cursor-pointer">
                <FaXTwitter />
              </button>
              <button className=" text-C_gray bg-white text-[16px] p-3 rounded hover:bg-C_purple hover:text-white cursor-pointer">
                <FaYoutube />
              </button>
            </div>
          </nav>

          {/* Contact Us  */}
          <nav className="flex flex-col ">
            <h6 className=" font-semibold text-lg text-C_gray">Contact Us</h6>
            <span className="flex justify-between items-center gap-3">
              <FaBuilding className="text-lg" />
              <p className=" text-C_gray text-[16px] leading-6 pt-2 me-8">
                Spain Pro Real Estate Group, Viaje Solo, Park Center Office,
                Madrid, 78741
              </p>
            </span>
            <span className="flex justify-between items-center gap-3  pt-1">
              <FaPhoneAlt className="text-lg" />

              <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6  me-5">
                <Link to="tel:+34 912 123 678">+34 912 123 678</Link>
              </p>
            </span>
            <span className="flex justify-between items-center gap-3 pt-1">
              <FaPrint className="text-lg" />
              <p className=" text-C_gray text-[16px] leading-6  me-5">
                +34 912 123 678
              </p>
            </span>
            <span className="flex justify-between items-center gap-3 pt-1">
              <BsEnvelope className="text-lg" />

              <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6">
                <Link mailto="office@realestate.com">
                  office@realestate.com{" "}
                </Link>
              </p>
            </span>
          </nav>

          {/* Latest Properties  */}
          <nav>
            <h6 className=" font-semibold text-lg text-C_gray">
              Latest Properties
            </h6>
            <div className="flex justify-between items-center gap-3 pt-2">
              <img
                className="w-[40%] rounded"
                src="https://i.ibb.co/BHpKRtMm/pexels-fotoaibe-1743229.jpg"
                alt=""
              />
              <span className="w-full flex flex-col gap-2">
                <h4 className=" text-C_gray text-[16px] leading-6">
                  Villa with Amazing View
                </h4>
                <p className=" text-C_gray text-[16px] leading-6">
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
                <h4 className=" text-C_gray text-[16px] leading-6">
                  Townhouse for Rent
                </h4>
                <p className=" text-C_gray text-[16px] leading-6">
                  2.100 € / month
                </p>
              </span>
            </div>
          </nav>
        </footer>
      </div>
      <div>
        <footer className="footer bg-[#F7F4FB] border-base-300 border-t py-6 ">
          <aside className="text-center w-10/12 mx-auto flex justify-between items-center">
            <p className=" text-C_gray text-[16px] leading-6">
              Copyright WP Estate. All Rights Reserved.
            </p>

            <button className=" hover:text-C_gray hover:bg-white text-[20px] p-3 rounded bg-C_purple text-white cursor-pointer">
              <Link to="#top">
                <AiOutlineToTop />
              </Link>
            </button>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;

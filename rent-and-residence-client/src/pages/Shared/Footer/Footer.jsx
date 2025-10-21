import { useEffect, useState } from "react";
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
import LatestProps from "../../../components/LatestProps/LatestProps";

const Footer = () => {
  // Go To Top
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className=" bg-footer_color text-C_gray py-5 border-t-1 border-t-C_DarkGray/10">
        <footer className=" relative footer sm:footer-horizontal py-10 w-11/12 mx-auto">
          <nav>
            <h6 className=" font-semibold text-lg text-C_gray">About Us</h6>
            <p className="w-5/6 text-C_gray text-[16px] leading-6 pt-2">
              WpResidence is committed to delivering a high level of expertise,
              customer service, and attention to detail to the marketing and
              sales of luxury real estate, and rental properties.
            </p>
            <div className="flex justify-between align-middle items-center gap-4 pt-5">
              <button className=" text-C_gray bg-white text-[16px] p-3 rounded hover:bg-C_purple hover:text-white cursor-pointer transition-colors duration-500">
                <FaFacebookF />
              </button>
              <button className=" text-C_gray bg-white text-[16px] p-3 rounded hover:bg-C_purple hover:text-white cursor-pointer transition-colors duration-500">
                <FaLinkedinIn />
              </button>
              <button className=" text-C_gray bg-white text-[16px] p-3 rounded hover:bg-C_purple hover:text-white cursor-pointer transition-colors duration-500">
                <FaXTwitter />
              </button>
              <button className=" text-C_gray bg-white text-[16px] p-3 rounded hover:bg-C_purple hover:text-white cursor-pointer transition-colors duration-500">
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
            <LatestProps />
          </nav>
        </footer>
      </div>

      {/* Absolute Footer  */}

      <footer className="footer bg-[#F7F4FB] border-base-300 border-t py-6 ">
        <aside className="text-center w-10/12 mx-auto flex justify-between items-center">
          <p className=" text-C_gray text-[16px] leading-6">
            Copyright WP Estate. All Rights Reserved.
          </p>

          {isVisible && (
            <button
              onClick={handleGoToTop}
              className="fixed  bottom-5 lg:right-15 right-5 hover:text-C_purple hover:bg-transparent border-2 border-C_purple text-[20px] p-3 rounded bg-C_purple text-white cursor-pointer"
            >
              <AiOutlineToTop />
            </button>
          )}
        </aside>
      </footer>
    </>
  );
};

export default Footer;

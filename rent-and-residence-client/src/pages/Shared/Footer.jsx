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
      <div className="bg-[#5d56660a] text-black">
        <footer className="footer sm:footer-horizontal p-10 w-10/12 mx-auto">
          <nav>
            <h6 className="footer-title">About Us</h6>
            <p className="w-5/6">
              WpResidence is committed to delivering a high level of expertise,
              customer service, and attention to detail to the marketing and
              sales of luxury real estate, and rental properties.
            </p>
            <div className="flex justify-between align-middle items-center gap-5 pt-5">
              <FaFacebookF />
              <FaXTwitter />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </nav>
          <nav>
            <h6 className="footer-title">Contact Us</h6>
            <span className="flex justify-between items-center gap-3 ">
              <FaBuilding className="text-lg" />
              <p>
                Spain Pro Real Estate Group, Viaje Solo, Park Center Office,
                Madrid, 78741
              </p>
            </span>
            <span className="flex justify-between items-center gap-3">
              <FaPhoneAlt className="text-lg" />

              <p>+34 912 123 678</p>
            </span>
            <span className="flex justify-between items-center gap-3">
              <FaPrint className="text-lg" />
              <p>+34 912 123 678</p>
            </span>
            <span className="flex justify-between items-center gap-3">
              <BsEnvelope className="text-lg" />

              <p>
                <Link mailto="office@realestate.com">
                  office@realestate.com{" "}
                </Link>
              </p>
            </span>
          </nav>
          <nav>
            <h6 className="footer-title">Latest Properties</h6>
            <div className="flex justify-between items-center gap-3">
              <img
                className="w-[40%]"
                src="https://i.ibb.co/BHpKRtMm/pexels-fotoaibe-1743229.jpg"
                alt=""
              />
              <span className="w-full flex flex-col gap-2">
                <h4>Villa with Amazing View</h4>
                <p>5.500.000 €</p>
              </span>
            </div>
            <div className="flex justify-between items-center gap-3">
              <img
                className="w-[40%]"
                src="https://i.ibb.co/9H0hN0Hh/pexels-fotoaibe-1643383.jpg"
                alt=""
              />
              <span className="w-full flex flex-col gap-2">
                <h4>Townhouse for Rent</h4>
                <p>2.100 € / month</p>
              </span>
            </div>
          </nav>
        </footer>
      </div>
      <div>
        <footer className="footer bg-[#5d56660a] border-base-300 border-t px-10 py-4 ">
          <aside className="text-center w-10/12 mx-auto">
            <p>Copyright WP Estate. All Rights Reserved.</p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;

import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AgentCard = ({ agent }) => {
  // console.log(user);

  // Destructure Details from Owner
  const { _id, name, profileImage, email, role, phone } = agent || {};
  // console.log(name);

  return (
    <div className=" bg-white w-full shadow-lg rounded-lg">
      {/* Profile  */}
      <Link to={`/agents/${_id}`}>
        <div className=" p-2 mb-1 w-full rounded-md bg-white">
          <nav className="flex flex-col  gap-2">
            <div className="w-full">
              <img className="rounded-md w-full" src={profileImage} alt="" />
            </div>

            {/* Details  */}
            <div className=" w-auto flex flex-col gap-2 p-2 mt-2">
              <div>
                <h4 className=" font-Nunito font-[600] text-C_gray text-[25px]">
                  {name}
                </h4>
                <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                  {role}
                </p>

                <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                  NAN
                </p>
              </div>

              <div className="flex justify-between items-center pt-1">
                {/* Social Icons  */}
                <div className=" flex gap-3 ">
                  <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                    <FaFacebookF />
                  </button>

                  <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                    <FaLinkedinIn />
                  </button>

                  <button className=" text-C_gray bg-transparent text-[16px] rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                    <FaXTwitter />
                  </button>

                  <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                    <FaYoutube />
                  </button>
                </div>

                {/* Contact Info  */}
                <nav className="flex gap-1 text-gray-600 font-Nunito_Sans">
                  <Link to={`tel:${phone}`}>
                    <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaPhoneAlt />
                    </button>
                  </Link>

                  <Link to={`mailto:${email}`}>
                    <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaEnvelope />
                    </button>
                  </Link>
                </nav>
              </div>
            </div>
          </nav>
        </div>
      </Link>
    </div>
  );
};

export default AgentCard;

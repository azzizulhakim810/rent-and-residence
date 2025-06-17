import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className=" bg-white w-full shadow-lg rounded-lg">
      {/* Profile  */}
      <div className=" p-2 mb-1 w-full rounded-md bg-white">
        <nav className="flex flex-col  gap-2">
          <div className="w-full">
            <img
              className="rounded-md"
              src="https://i.ibb.co/nqCK8B0R/person7-21-1-500x328.webp"
              alt=""
            />
          </div>

          {/* Details  */}
          <div className=" w-auto flex flex-col gap-2 p-2 mt-2">
            <div>
              <h4 className=" font-Nunito font-[600] text-C_gray text-[25px]">
                Michaela Roja
              </h4>
              <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                real estate broker
              </p>

              <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                Michaela’s sociability, independent spirit, and incredible
                customer service set him apart ...
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
                <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                  <FaPhoneAlt />
                </button>

                <button className=" text-C_gray bg-transparent text-[16px] p-2 rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                  <FaEnvelope />
                </button>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default UserCard;

import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AgentCard = ({ agent }) => {
  // console.log(user);

  // Destructure Details from Owner
  const {
    _id,
    name,
    profileImage,
    bio,
    email,
    role,
    phone,
    facebookUrl,
    linkedinUrl,
    pinterestUrl,
    twitterUrl,
    // websiteUrl,
  } = agent || {};
  // console.log(agent);

  const handleUrl = (url) => {
    if (!url) return "#";

    /*  if (!/^https?:\/\//i.test(url)) {
      return "https://" + url;
    } */

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return "https://" + url;
    }
    return url;
  };

  const formattedFacebookURL = handleUrl(facebookUrl);
  const formattedLinkedInURL = handleUrl(linkedinUrl);
  const formattedPinterestURL = handleUrl(pinterestUrl);
  const formattedTwitterURL = handleUrl(twitterUrl);

  return (
    <div className=" bg-white w-full shadow-lg rounded-lg">
      {/* Profile  */}
      <Link to={`/agents/${_id}`}>
        <div className=" p-2 mb-1 w-full rounded-md bg-white">
          <nav className="flex flex-col  gap-2">
            <div
              className="w-full h-[280px] bg-cover bg-no-repeat bg-center relative bg-black/0 hover:bg-white/10  overflow-hidden duration-400 bg-blend-overlay cursor-pointer rounded-lg"
              style={{
                backgroundImage: profileImage ? `url(${profileImage})` : "none",
                backgroundColor: profileImage
                  ? undefined
                  : `<div class="flex justify-center items-center ">
                      <span className=" loading loading-ring loading-xl text-C_purple"></span>
                    </div>`,
              }}
            >
              {/*  <img
                className="rounded-md w-full h-[250px] object-cover"
                src={profileImage}
                alt=""
              /> */}
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
                  {bio?.slice(0, 80)}...
                </p>
              </div>

              <div className="flex justify-between items-center pt-1">
                {/* Social Icons  */}
                <div className=" flex gap-3 ">
                  <Link to={formattedFacebookURL}>
                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaFacebookF />
                    </button>
                  </Link>

                  <Link to={formattedLinkedInURL}>
                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaLinkedinIn />
                    </button>
                  </Link>

                  <Link to={formattedTwitterURL}>
                    <button className=" text-C_gray bg-transparent text-[16px] rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaXTwitter />
                    </button>
                  </Link>

                  <Link to={formattedPinterestURL}>
                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaPinterest />
                    </button>
                  </Link>
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

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Contact = () => {
  return (
    <div className="bg-C_LightGray/5 py-6">
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm font-Nunito_Sans font-[500] mb-5">
          <ul>
            <li>
              <a>Home</a>
            </li>

            <li className="text-C_purple">Contact Us</li>
          </ul>
        </div>

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 pb-5">
              <div>
                {/* Contact Info  */}
                <div className="bg-white w-full shadow-lg p-8 mb-2  rounded-md ">
                  <h1 className="font-Nunito text-[34px] font-[700]">
                    Real Estate Agency
                  </h1>

                  <p className="flex gap-2 items-center text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[18px] pb-2">
                    Calle de Toledo, 41, 28005 Madrid, Spain
                  </p>

                  {/* Social Icons  */}
                  <div className="bg-white text-C_LightGray mx-auto rounded flex justify-start align-middle items-center gap-6 py-4">
                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaFacebookF />
                    </button>

                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaLinkedinIn />
                    </button>

                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaXTwitter />
                    </button>

                    <button className=" text-C_gray bg-transparent text-[16px]  rounded-none hover:text-C_purple text-C_LightGray cursor-pointer">
                      <FaYoutube />
                    </button>
                  </div>

                  {/* Details  */}
                  <span className=" w-auto flex flex-col gap-2 ">
                    <nav className="flex flex-col gap-3 text-gray-600 font-Nunito_Sans">
                      <span className="flex justify-start items-center hover:text-C_purple text-[16px] gap-3 pt-1 pointer-cursor">
                        <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6  me-5">
                          Phone:
                          <Link to="tel:+34 912 123 678">+34 912 123 678</Link>
                        </p>
                      </span>

                      <span className="flex justify-start items-center gap-3 pt-1 hover:text-C_purple  text-[16px] pointer-cursor">
                        <p className=" text-C_gray text-[16px] leading-6  me-5">
                          Mobile:
                          <Link to="tel:+34 912 123 678">+34 912 123 678</Link>
                        </p>
                      </span>

                      <span className="flex justify-start items-center gap-3 pt-1 pointer-cursor">
                        <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6">
                          Email:
                          <Link mailto="office@realestate.com">
                            office@realestate.com{" "}
                          </Link>
                        </p>
                      </span>

                      <span className="flex justify-start items-center gap-3 pt-1 hover:text-C_purple ">
                        <p className=" text-C_gray hover:text-C_purple text-[16px] leading-6">
                          Skype:
                          <Link mailto="website.net">website.net</Link>
                        </p>
                      </span>
                    </nav>

                    <p className="flex flex-col gap-4 text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] leading-6 pt-2">
                      <span>
                        Michaela’s sociability, independent spirit, and
                        incredible customer service set him apart as a top agent
                        in the New York real estate market. He works with a
                        range of clients – national and international, as well
                        as investors and local residents.
                      </span>

                      <span>
                        Whether a client is in the market for a single-family
                        home or a luxury penthouse, Michael is there to help
                        out. Between his time in the hospitality and real estate
                        industries, he knows what good service is all about.
                      </span>
                    </p>
                  </span>
                </div>

                {/* Comment Section */}
                <div className="mt-10 bg-white w-full shadow-lg p-8 mb-2  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[25px] leading-6 pb-5">
                    Leave a Reply
                  </h4>
                  <p className="flex gap-2 items-center text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] pb-2">
                    Your email address will not be published.
                  </p>

                  <div className="flex flex-col gap-5 pt-2">
                    <textarea
                      className="textarea w-full h-40 input font-Nunito_Sans text-C_LightGray"
                      placeholder="Comment"
                    ></textarea>

                    <div className="flex lg:flex-row flex-col gap-3">
                      <input
                        type="text"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Name"
                      />
                      <input
                        type="email"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Email"
                      />
                      <input
                        type="tel"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Website"
                      />
                    </div>

                    <label className="label">
                      <input type="checkbox" className="checkbox" />
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>

                    <button className="lg:w-3/12 w-full btn bg-C_purple border-2  text-white hover:text-C_purple hover:bg-transparent hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar  */}
          <div className="lg:col-span-4 col-span-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

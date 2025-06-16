import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Map from "../Shared/Map/Map";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Contact = () => {
  const homeLat = 23.921683;
  const homeLng = 90.258871;
  const title = "OUR ARENA IS HERE 😎";
  const officeImg = "https://i.ibb.co/dDmcr52/Apple.jpg";
  const price = "";

  return (
    <div className="bg-C_LightGray/5 pb-6 ">
      {/* Map  */}
      <Map
        lat={homeLat}
        lng={homeLng}
        title={title}
        propImg={officeImg}
        price={price}
      />

      <div className="w-10/12 mx-auto pt-4 ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={"Contact Us"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 pb-5">
              <div>
                {/* Contact Info  */}
                <div className="bg-white w-full shadow-lg p-8 mb-2  rounded-md ">
                  <h1 className="font-Nunito lg:text-[34px] text-[32px]  font-[700]">
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
                  <div className=" w-auto flex flex-col gap-2 ">
                    <div className="overflow-x-auto  text-gray-600  my-3">
                      <table className=" w-4/12 text-start ">
                        <tbody className="font-Nunito_Sans text-[16px] tracking-wide">
                          {/* row 1  */}
                          <tr>
                            <td className=" text-C_gray font-[700] ">Phone:</td>
                            <td className="text-C_DarkGray">
                              <Link to="tel:+34 912 123 678">
                                (305) 555-4555
                              </Link>
                            </td>
                          </tr>

                          {/* row 2  */}
                          <tr>
                            <td className=" text-C_gray font-[700]  ">
                              Mobile:
                            </td>
                            <td className="text-C_DarkGray">
                              <Link to="tel:+34 912 123 678">
                                (305) 555-4555
                              </Link>
                            </td>
                          </tr>

                          {/* row 3  */}
                          <tr>
                            <td className=" text-C_gray font-[700]  ">
                              Email:
                            </td>
                            <td className="text-C_DarkGray">
                              <Link to="tel:+34 912 123 678">
                                realestate@inc.com
                              </Link>
                            </td>
                          </tr>

                          {/* row 4 */}
                          <tr>
                            <td className=" text-C_gray font-[700]  ">
                              LinkedIn
                            </td>
                            <td className="text-C_DarkGray">
                              <Link to="tel:+34 912 123 678">realestate</Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="flex flex-col gap-4 text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] leading-6 pt-2">
                      <span>
                        Whether you’re looking for property for sale in New York
                        area or property for rent, WP Residence makes searching
                        easy. Use our unique geolocation mapping feature to
                        root-out your ideal villa, townhouse or apartment and
                        contact the owners direct. We will help you find your
                        dream house in just a few seconds.
                      </span>

                      <span>
                        We offer our clients a wealth of knowledge regarding all
                        aspects of purchasing or selling a home. Whether it is
                        helping you search for your dream home, discussing new
                        New York real estate developments, or assisting with the
                        sale of your property, we would love the opportunity to
                        help. Please feel free to contact us with any questions!
                      </span>
                    </p>
                  </div>

                  {/* Image  */}
                  <div className=" mt-10 w-full">
                    <figure className="bg-[url(https://i.ibb.co/DPynHVLF/team.jpg)] lg:h-[350px] h-[300px] w-full bg-cover bg-no-repeat bg-center  rounded-lg"></figure>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mt-10 bg-white w-full shadow-lg p-8 mb-2  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Contact Me
                  </h4>

                  <div className="flex flex-col gap-5 pt-2">
                    <div className="flex lg:flex-row flex-col gap-3">
                      <input
                        type="text"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Your Name"
                      />
                      <input
                        type="email"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Your Email"
                      />
                      <input
                        type="tel"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Your Phone"
                      />
                    </div>

                    <textarea className="textarea w-full h-40 "></textarea>

                    <label className="label">
                      <input type="checkbox" className="checkbox" />I consent to
                      the GDPR Terms
                    </label>

                    <button className="lg:w-3/12 w-full btn bg-C_purple border-2  text-white hover:text-C_purple hover:bg-transparent hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                      Send Email
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

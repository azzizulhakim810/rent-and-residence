import { Helmet } from "react-helmet";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaRegComments, FaXTwitter } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const BlogDetails = () => {
  return (
    <div className="bg-C_LightGray/5 py-6">
      <Helmet>
        <title>R & R | Blog Details</title>
      </Helmet>
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={" Top 10 best appreciating condos in Madrid"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            {/* <h1 className="font-Nunito text-[34px] font-[700]">Blog List</h1> */}

            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 pb-5">
              <div className=" ">
                <div className="bg-white w-full shadow-lg p-10 mb-2  rounded-md ">
                  <nav className="flex flex-col gap-2">
                    <figure className="bg-[url(https://i.ibb.co/7dyjRcyn/interior-grey-bg-e1636449434931.jpg)] h-[400px] w-full bg-cover bg-no-repeat bg-center  rounded-lg"></figure>

                    {/* Details  */}
                    <div className=" w-auto flex flex-col gap-2 p-2">
                      <div>
                        <h4 className=" font-Nunito font-[600] text-title_color text-[34px] leading-8 py-6">
                          Top 10 best appreciating condos in Madrid
                        </h4>

                        <p className="flex gap-2 items-center text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] pb-2">
                          <LuCalendarDays />
                          Posted by NayyarShaikh on March 4, 2016
                        </p>

                        <p className="flex items-center  gap-8 text-C_DarkGray font-Nunito_Sans font-[500] text-[16px] ">
                          <span className="flex items-center gap-2">
                            <TbCategory />
                            Buying Properties, Location, Price, Real Estate
                          </span>

                          <span className="flex items-center gap-2">
                            <FaRegComments />0 Comments
                          </span>
                        </p>

                        <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatibus tenetur maxime illum veniam ab
                          perferendis quod nesciunt eveniet praesentium,
                          voluptas facere aut deleniti quis eum vitae! Soluta
                          temporibus laudantium repellendus. Rem quae,
                          recusandae eius nihil perspiciatis aliquid et nostrum
                          quos eum necessitatibus facilis alias totam animi qui
                          minima tempore officia fugiat modi reprehenderit est
                          beatae illum consequuntur doloremque. Ipsum, minima.
                          Ducimus nostrum adipisci voluptates ea cupiditate
                          earum repudiandae minima, voluptate facilis sint
                          eveniet iure pariatur iste molestiae cumque harum
                          veniam animi, quae dolorem corporis provident
                          consectetur maxime nam magni. Molestiae. Cupiditate
                          maxime cum fuga exercitationem nam. Ab corporis
                          voluptatum odit quod error unde facilis, odio dicta
                          labore consequuntur sequi saepe porro reiciendis
                          reprehenderit aut iure. Corrupti repellat repudiandae
                          commodi molestiae. Pariatur nesciunt modi laudantium
                          autem quia temporibus provident consequatur non quas
                          eius. Accusantium odit mollitia nobis magnam molestiae
                          suscipit soluta cumque neque. Repellat asperiores
                          officiis non modi! Perspiciatis, veniam aliquid? Et,
                          nulla deleniti veniam molestias voluptas dolore dolor
                          suscipit doloremque vero. Culpa laudantium quod
                          expedita voluptatum molestiae ratione ipsa blanditiis,
                          ullam a, soluta inventore odio, neque animi numquam
                          dolorum eos. In ipsa ea ipsam corrupti neque, et ab?
                          Minus repudiandae totam quaerat quia, veniam ipsa
                          quas, debitis officia rerum ea accusantium similique
                          harum alias modi! Quod, explicabo? Est, aspernatur
                          sed. Totam dignissimos nulla nihil unde! Iusto dolor
                          aspernatur vel atque distinctio. Culpa, odit nisi.
                          Quod odit dolore a enim magni repellat libero possimus
                          quo autem? Earum alias laudantium error. Praesentium.
                          Enim, quam. Laboriosam, officia numquam autem ratione
                          sed, sequi dolore consequatur officiis accusantium
                          perspiciatis fugit nihil. Asperiores, quam! Dolorum
                          deserunt, voluptatibus id itaque harum ullam quam
                          ipsum veniam nesciunt quaerat? Consectetur sunt culpa
                          minima quae veritatis consequatur quasi reiciendis ad
                          eos quos tenetur recusandae atque earum numquam id,
                          placeat voluptatum sint molestiae non ea. Quaerat
                          voluptatum velit saepe natus rerum.
                        </p>

                        {/* Social Share  */}
                        <div className="flex justify-between items-center pt-1">
                          <div className="flex justify-between align-middle items-center gap-4 pt-5">
                            <button className=" text-C_LightGray bg-C_LightGray/10 text-[16px] p-3 rounded-full hover:bg-C_purple  hover:text-white cursor-pointer transition-colors duration-500">
                              <FaFacebookF />
                            </button>
                            <button className=" text-C_LightGray bg-C_LightGray/10 text-[16px] p-3 rounded-full hover:bg-C_purple  hover:text-white cursor-pointer transition-colors duration-500">
                              <FaLinkedinIn />
                            </button>
                            <button className=" text-C_LightGray bg-C_LightGray/10 text-[16px] p-3 rounded-full hover:bg-C_purple  hover:text-white cursor-pointer transition-colors duration-500">
                              <FaXTwitter />
                            </button>
                            <button className=" text-C_LightGray bg-C_LightGray/10 text-[16px] p-3 rounded-full hover:bg-C_purple  hover:text-white cursor-pointer transition-colors duration-500">
                              <FaYoutube />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>

                {/* Comment Section */}
                <div className="mt-10 bg-white w-full shadow-lg p-10 mb-2  rounded-md ">
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

export default BlogDetails;

import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Blogs = () => {
  return (
    <div className="bg-C_LightGray/5 py-6">
      <div className="w-10/12 mx-auto ">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={"Blog List"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="lg:col-span-8 col-span-10 ">
            <h1 className="font-Nunito text-[34px] font-[700]">Blog List</h1>

            {/* All Agents  */}
            {/* First Row  */}
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 py-5">
              <Link to="/blogDetails/:id">
                <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                  <div className=" p-3 mb-2 w-full rounded-md bg-white">
                    <nav className="flex flex-col  gap-2">
                      <figure className="bg-[url(https://i.ibb.co/7dyjRcyn/interior-grey-bg-e1636449434931.jpg)] h-[250px] w-full bg-cover bg-no-repeat bg-center  rounded-lg"></figure>

                      {/* Details  */}
                      <div className=" w-auto flex flex-col gap-2 p-2">
                        <div>
                          <h4 className=" font-Nunito font-[600] text-C_gray text-[23px] leading-7 py-1">
                            Top 10 best appreciating condos in Madrid
                          </h4>
                          <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                            March 4, 2016
                          </p>

                          <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                            New York County as a whole covers a total area of
                            33.77 square miles (87.5 km2), of which 22.96 square
                            miles (59.5 ...
                          </p>
                        </div>

                        <div className="flex justify-between items-center">
                          <button className="flex items-center gap-2 text-C_gray bg-transparent  rounded-none hover:text-C_purple cursor-pointer text-C_DarkGray font-Nunito_Sans font-[600] text-[16px] ">
                            Continue reading
                            <FaChevronRight className="text-sm" />
                          </button>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </Link>{" "}
              <Link to="/blogDetails/:id">
                <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                  <div className=" p-3 mb-2 w-full rounded-md bg-white">
                    <nav className="flex flex-col  gap-2">
                      <figure className="bg-[url(https://i.ibb.co/chXfhj9Q/pexels-fotoaibe-1571460.jpg)] h-[250px] w-full bg-cover bg-no-repeat bg-center  rounded-lg"></figure>

                      {/* Details  */}
                      <div className=" w-auto flex flex-col gap-2 p-2">
                        <div>
                          <h4 className=" font-Nunito font-[600] text-C_gray text-[23px] leading-7 py-1">
                            The top 5 most livable Madrid neighbourhoods
                          </h4>
                          <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                            March 4, 2016
                          </p>

                          <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                            New York County as a whole covers a total area of
                            33.77 square miles (87.5 km2), of which 22.96 square
                            miles (59.5 ...
                          </p>
                        </div>

                        <div className="flex justify-between items-center">
                          <button className="flex items-center gap-2 text-C_gray bg-transparent  rounded-none hover:text-C_purple cursor-pointer text-C_DarkGray font-Nunito_Sans font-[600] text-[16px] ">
                            Continue reading
                            <FaChevronRight className="text-sm" />
                          </button>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </Link>
            </div>

            {/* Second Row  */}
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 py-0">
              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                <div className=" p-3 mb-2 w-full rounded-md bg-white">
                  <nav className="flex flex-col  gap-2">
                    <figure className="bg-[url(https://i.ibb.co/7dyjRcyn/interior-grey-bg-e1636449434931.jpg)] h-[250px] w-full bg-cover bg-no-repeat bg-center  rounded-lg"></figure>

                    {/* Details  */}
                    <div className=" w-auto flex flex-col gap-2 p-2">
                      <div>
                        <h4 className=" font-Nunito font-[600] text-C_gray text-[23px] leading-7 py-1">
                          Top 10 best appreciating condos in Madrid
                        </h4>
                        <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                          March 4, 2016
                        </p>

                        <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                          New York County as a whole covers a total area of
                          33.77 square miles (87.5 km2), of which 22.96 square
                          miles (59.5 ...
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <button className="flex items-center gap-2 text-C_gray bg-transparent  rounded-none hover:text-C_purple cursor-pointer text-C_DarkGray font-Nunito_Sans font-[600] text-[16px] ">
                          Continue reading
                          <FaChevronRight className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>

              <div className=" bg-white lg:w-1/2 w-full shadow-lg rounded-lg">
                <div className=" p-3 mb-2 w-full rounded-md bg-white">
                  <nav className="flex flex-col  gap-2">
                    <figure className="bg-[url(https://i.ibb.co/chXfhj9Q/pexels-fotoaibe-1571460.jpg)] h-[250px] w-full bg-cover bg-no-repeat bg-center  rounded-lg"></figure>

                    {/* Details  */}
                    <div className=" w-auto flex flex-col gap-2 p-2">
                      <div>
                        <h4 className=" font-Nunito font-[600] text-C_gray text-[23px] leading-7 py-1">
                          The top 5 most livable Madrid neighbourhoods
                        </h4>
                        <p className=" text-C_LightGray font-Nunito_Sans font-[500] text-[16px] ">
                          March 4, 2016
                        </p>

                        <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]  py-4">
                          New York County as a whole covers a total area of
                          33.77 square miles (87.5 km2), of which 22.96 square
                          miles (59.5 ...
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <button className="flex items-center gap-2 text-C_gray bg-transparent  rounded-none hover:text-C_purple cursor-pointer text-C_DarkGray font-Nunito_Sans font-[600] text-[16px] ">
                          Continue reading
                          <FaChevronRight className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </nav>
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

export default Blogs;

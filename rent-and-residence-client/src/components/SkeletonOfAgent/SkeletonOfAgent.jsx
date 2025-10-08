const SkeletonOfAgent = () => {
  return (
    <div className="shadow-sm lg:p-8 p-5 mb-5 w-full rounded-md bg-white">
      <nav className="flex flex-col gap-2">
        <div className="flex lg:flex-row flex-col justify-start items-top gap-8 ">
          <div className=" lg:w-1/2 w-full ">
            <img
              className=" w-full skeleton h-64 relative border-none rounded-t-lg "
              src=""
              alt=""
            />

            {/* Social Icons  */}
            <div className="bg-white w-10/12 z-10 shadow-xl text-C_LightGray mx-auto rounded flex justify-center align-middle items-center gap-3 py-1 skeleton h-10 relative rounded-t-lg"></div>
          </div>

          {/* Details  */}
          <span className="lg:w-1/2  w-auto flex flex-col gap-3 ps-3 pt-1 ">
            <h4 className="skeleton h-10 w-80"></h4>
            <div className="skeleton h-4 w-26"></div>
            <div className="skeleton h-4 w-60"></div>
            <div className="skeleton h-4 w-60"></div>
            <div className="skeleton h-4 w-60"></div>
            <div className="skeleton h-4 w-60"></div>
          </span>
        </div>

        {/* Bio  */}
        <div className="mt-10 flex lg:flex-col gap-4">
          <h4 className="skeleton h-4 w-20 "></h4>
          <h4 className="skeleton h-16 w-full pb-2"></h4>
        </div>

        {/* Contact Me */}
        {/* <div className="pt-50">
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
              <input type="checkbox" className="checkbox" />I consent to the
              GDPR Terms
            </label>

            <button className="lg:w-3/12 w-full btn bg-C_purple border-2  text-white hover:text-C_purple hover:bg-transparent hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
              Send Email
            </button>
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default SkeletonOfAgent;

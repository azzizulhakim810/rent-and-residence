/* eslint-disable no-unused-vars */
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { PiGavelLight } from "react-icons/pi";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div id="service" className="grid grid-cols-12 lg:py-28 py-20">
      {/* Section Title Desktop | Hidden on Mobile */}
      <SectionTitle title={"Services"} />

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-5/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          We're an agency tailored to all clients' needs that always delivers
        </h1>

        <div className="flex lg:flex-row flex-col justify-start gap-6 py-5">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1 }}
            className="shadow-[0px_0px_30px_rgba(100,84,246,0.2)] hover:shadow-[0px_0px_30px_rgba(119,84,246,0.3)] flex flex-col justify-center items-center gap-5 p-2 py-12 rounded-xl "
          >
            <figure className="p-5 text-4xl bg-[#E0F0FD] text-[#959AF4] rounded-full w-20 h-20">
              <HiOutlineClipboardDocumentList />
            </figure>
            <div className=" items-center text-center pt-3">
              <h2 className=" font-Nunito font-[700] text-[20px]">
                Sell your home
              </h2>
              <p className=" font-Nunito_Sans font-[500] text-[18px] w-10/12 mx-auto leading-8 py-6 text-C_LightGray">
                We sell your home at the best market price.
              </p>
              <div className="">
                <button className="btn border-b-2 border-b-C_purple hover:bg-transparent text-C_purple hover:text-C_purple rounded text-[16px] px-5 py-5">
                  Learn more
                </button>
              </div>
            </div>
          </motion.div>

          <div className="shadow-[0px_0px_30px_rgba(119,84,246,0.2)] hover:shadow-[0px_0px_30px_rgba(119,84,246,0.3)] flex flex-col justify-center items-center gap-5 p-2 py-12 rounded-xl ">
            <figure className="p-5 text-4xl bg-[#F9D9EA] text-[#EF8ABF] rounded-full w-20 h-20">
              <IoHomeOutline />
            </figure>
            <div className=" items-center text-center pt-3">
              <h2 className=" font-Nunito font-[700] text-[20px]">
                Home loans
              </h2>
              <p className=" font-Nunito_Sans font-[500] text-[18px] w-10/12 mx-auto leading-8 py-6 text-C_LightGray">
                We offer you free consultancy to get a loan.
              </p>
              <div className="">
                <button className="btn border-b-2 border-b-C_purple hover:bg-transparent text-C_purple hover:text-C_purple rounded text-[16px] px-5 py-5">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1 }}
            className="shadow-[0px_0px_30px_rgba(119,84,246,0.2)] hover:shadow-[0px_0px_30px_rgba(119,84,246,0.3)] flex flex-col justify-center items-center gap-5 p-2 py-12 rounded-xl "
          >
            <figure className="p-5 text-4xl bg-[#FDE2CD] text-[#F8B282] rounded-full w-20 h-20">
              <PiGavelLight />
            </figure>
            <div className=" items-center text-center pt-3">
              <h2 className=" font-Nunito font-[700] text-[20px]">
                Legal services
              </h2>
              <p className=" font-Nunito_Sans font-[500] text-[18px] w-10/12 mx-auto leading-8 py-6 text-C_LightGray">
                Expert legal help for all related property items
              </p>
              <div className="">
                <button className="btn border-b-2 border-b-C_purple hover:bg-transparent text-C_purple hover:text-C_purple rounded text-[16px] px-5 py-5">
                  Learn more
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;

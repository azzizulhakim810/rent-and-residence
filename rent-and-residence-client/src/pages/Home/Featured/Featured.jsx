import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaPlus, FaRegHeart } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="grid grid-cols-12 lg:py-8 py-20 relative">
      {/* Section Title Desktop | Hidden on Mobile */}
      <div className="col-span-1 lg:flex hidden -ms-15 h-[15vw] rotate-270 text-center justify-center items-center gap-5 relative ">
        <span className="relative w-[50px] inline-block before:absolute h-[3px] before:-inset-0  before:block before:bg-C_purple "></span>
        <h1 className="text-[13px] font-[600] font-Nunito_Sans tracking-[5px] uppercase text-title_color">
          Featured
        </h1>
      </div>

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-5/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          Explore the featured properties in our list to find your perfect home
        </h1>
      </div>
    </div>
  );
};

export default Featured;

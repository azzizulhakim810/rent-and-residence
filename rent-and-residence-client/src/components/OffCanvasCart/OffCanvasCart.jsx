/* eslint-disable no-unused-vars */
// import { RiDeleteBin3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const OffCanvasCart = ({ item, handleDeleteItem }) => {
  // Destructure Details from Property
  const { _id, title, price, category } = item || {};

  const propImg = item?.images?.[0];

  // console.log(item);

  return (
    <div className=" w-full flex items-center justify-end gap-3 pt-2">
      <motion.button
        whileTap={{ y: 1 }}
        onClick={() => handleDeleteItem(_id)}
        className="bg-red-200 text-xl text-red-700 hover:text-white hover:bg-red-600 py-[20px] px-[10px] rounded-lg cursor-pointer"
      >
        {/* <RiDeleteBin3Line className="text-lg" /> */}X
      </motion.button>

      <AnimatePresence initial={false}>
        <motion.Link
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 0 }}
          className="flex gap-4"
          to={`/propertyDetails/${item._id}`}
        >
          <div
            style={{ backgroundImage: `url(${propImg})` }}
            className="bg-cover bg-center w-[60px] h-[60px] rounded"
          />
          <span className="w-full flex flex-col gap-1">
            <h4 className="font-Nunito font-[700] text-C_gray text-[15px] leading-6">
              {title}
            </h4>

            <span className="flex gap-2">
              <p className=" text-C_purple font-Nunito_Sans font-[600] text-[15px] leading-6">
                {category} |
              </p>

              <p className=" text-C_purple font-Nunito_Sans font-[600] text-[15px] leading-6">
                Cost: {price} €
              </p>
            </span>
          </span>
        </motion.Link>
      </AnimatePresence>
    </div>
  );
};

export default OffCanvasCart;

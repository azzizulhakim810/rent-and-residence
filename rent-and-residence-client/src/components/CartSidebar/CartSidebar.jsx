const CartSidebar = ({ item }) => {
  // Destructure Details from Property
  const { title, price } = item || {};

  const propImg = item?.images?.[0];

  console.log(item);

  return (
    <nav className="flex flex-col gap-4 ">
      <div className="flex justify-between items-center gap-3 pt-2">
        <button className="p-1 w-10 border-[1px] text-C_purple rounded-full hover:bg-C_purple hover:text-white cursor-pointer">
          X
        </button>
        <img className="w-[18%] rounded" src={propImg} alt="" />
        <span className="w-full flex flex-col gap-1">
          <h4 className="font-Nunito font-[700] text-C_gray text-[15px] leading-6">
            {title.slice(0, 20) + "..."}
          </h4>
          <p className=" text-C_purple font-Nunito_Sans font-[600] text-[15px] leading-6">
            {price} €
          </p>
        </span>
      </div>
    </nav>
  );
};

export default CartSidebar;

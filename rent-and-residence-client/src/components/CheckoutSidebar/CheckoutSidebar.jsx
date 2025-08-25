// import { Link } from "react-router-dom";

const CheckoutSidebar = ({ item }) => {
  console.log(item);
  // Destructure Details from Property
  const { _id, title, price, category, address, description } = item || {};

  const propImg = item?.images?.[0];

  return (
    <div>
      {/* <Link to={`/propertyDetails/${item._id}`}> */}
      <div className=" flex justify-between items-center gap-1 mb-5">
        <div className="flex justify-between items-center  gap-4 pe-30">
          <div
            style={{ backgroundImage: `url(${propImg})` }}
            className="bg-cover bg-center w-[90px] h-[65px] rounded"
          />

          <span>
            <h4 className="font-Nunito font-[700] text-C_gray text-[18px] leading-6">
              {title}
            </h4>

            <p className=" text-C_LightGray/80 font-Nunito_Sans font-[600] text-[15px] leading-5 pt-2">
              {description}
            </p>
          </span>
        </div>

        <p className=" text-C_purple  font-Nunito_Sans font-[700] text-[18px] leading-6">
          {price}€
        </p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default CheckoutSidebar;

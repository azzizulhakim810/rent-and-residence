import { Helmet } from "react-helmet";
import { RiRefund2Fill } from "react-icons/ri";
import { TbHomeDollar } from "react-icons/tb";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Cart = () => {
  return (
    <div className="bg-C_LightGray/5 py-6">
      <Helmet>
        <title>R & R | Checkout</title>
      </Helmet>
      <div className="w-10/12 mx-auto ">
        <div className="grid grid-cols-12 gap-10">
          {/* Info column  */}
          <div className="lg:col-span-5 col-span-10 ">
            <div className=" flex justify-start">
              <img
                className=" w-[50%] hidden rotate-35  lg:flex"
                src="https://i.ibb.co.com/MXQshqk/checkout-One.png"
                alt="logo"
              />
            </div>
            <div className="flex  flex-col justify-start w-full py-5">
              {/* { <Link className="lg:w-1/2 w-full" to="/blogDetails">
                <div className=" bg-white  shadow-lg rounded-lg">
                  <div className=" p-3 mb-2 w-full rounded-md bg-white">
                    <nav className="flex flex-col  gap-2">
                      <figure className="bg-[url(https://i.ibb.co/7dyjRcyn/interior-grey-bg-e1636449434931.jpg)] h-[250px] w-full bg-cover bg-no-repeat bg-center  rounded-lg"></figure>

                   
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
              </Link>} */}

              <h1 className="font-Nunito text-[50px] leading-15 font-[700]">
                Checkout & <br />
                Make the Payment
              </h1>

              <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px] py-4">
                You’re just one step away from confirming your rental! Review
                your booking details, select your preferred payment method, and
                complete your reservation securely. Our checkout process is
                fast, safe, and simple—giving you peace of mind as you lock in
                your new home.
              </p>
            </div>

            {/* Refund & Obligation  */}
            <div className="grid grid-cols-2 gap-2">
              <div className=" flex flex-col gap-2 p-2">
                <RiRefund2Fill className="text-4xl text-C_purple" />
                <h4 className=" font-Nunito font-[800] text-C_gray text-[18px] py-2 uppercase">
                  100% refund guarentee
                </h4>

                <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]">
                  If you're not completely satisfied with your purchase, you can
                  receive a full refund with no questions asked.
                </p>
              </div>
              <div className=" flex flex-col gap-2 p-2">
                <TbHomeDollar className="text-4xl text-C_purple" />
                <h4 className=" font-Nunito font-[800] text-C_gray text-[18px] py-2 uppercase">
                  No Obligation Pricing
                </h4>

                <p className=" text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[16px]">
                  If you find another provider next year with a better pricing
                  or nay reasons. You're free to move to others.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Form  */}
          <div className="lg:col-span-7 col-span-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

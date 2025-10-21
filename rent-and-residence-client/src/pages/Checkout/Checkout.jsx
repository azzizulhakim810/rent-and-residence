import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";
import { RiRefund2Fill } from "react-icons/ri";
import { TbHomeDollar } from "react-icons/tb";
import CheckoutSidebar from "../../components/CheckoutSidebar/CheckoutSidebar";
import UseCart from "../../hooks/UseCart/UseCart";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [cart] = UseCart();
  const { cartProperties, cartItems } = cart;

  const totalPrice = cartProperties?.reduce((total, item) => {
    return total + parseInt(item.price);
  }, 0);

  // Create Publishing Key
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

  return (
    <div className="bg-C_LightGray/5 py-6 pt-30 pb-16">
      <Helmet>
        <title>R & R | Checkout</title>
      </Helmet>
      <div className="w-10/12 mx-auto ">
        <div className="grid grid-cols-12 gap-10">
          {/* Info column  */}
          <div className="lg:col-span-5 col-span-10 ">
            {/* <div className=" relative flex justify-end z-0 opacity-50">
              <img
                className=" w-[30%] rotate-35 lg:flex   -mb-20"
                src="https://i.ibb.co.com/gLtdNHKv/checkout-One.png"
                alt="logo"
              />
            </div> */}
            <div className="relative flex flex-col justify-start w-full py-5 z-100">
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
            <div className="grid grid-cols-1 gap-2">
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

          {/* Order Details & Payment Form  */}
          <div className="lg:col-span-7 col-span-10 bg-white px-10 py-6 rounded">
            <h1 className="font-Nunito text-[25px] leading-15 font-[700] pb-3">
              Order Summery
            </h1>

            {/* Cart items  */}
            {cartProperties?.map((item) => (
              <div
                key={item._id}
                className="bg-transparent border-none hover:bg-transparent active:bg-transparent focus:outline-none no-animation active:border-none"
              >
                <CheckoutSidebar item={item} />
              </div>
            ))}
            <div className="divider h-[1px]"></div>
            <div className="text-lg flex justify-between font-Nunito font-bold  ">
              <h2>Total Price :</h2>
              <span>{totalPrice?.toFixed(2)} €</span>
            </div>

            {/* Checkout Form  */}
            <div>
              <Elements
                stripe={stripePromise}
                // options={options}
              >
                <CheckoutForm totalPrice={totalPrice} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

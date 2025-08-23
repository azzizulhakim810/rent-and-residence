const Cart = () => {
  return (
    <div className=" bg-white">
      <div className="grid grid-cols-12 gap-10 w-11/12 mx-auto pt-1">
        <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
        <h1 className="font-Nunito text-5xl font-[800]">Cart Page</h1>
      </div>

      {/* Property Table  */}
      <div className="grid lg:grid-cols-1 grid-cols-1 justify-start w-full gap-6 py-0">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-Nunito text-black text-[16px]">
              <th>Title</th>
              <th>Category</th>

              <th className="text-center">Pay Status</th>
              <th className="text-center">Price</th>
              <th className="text-center">Approval</th>
              <th className="text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-Nunito_Sans text-C_LightGray">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://i.ibb.co.com/jkGkX8fs/default-user.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold uppercase">...</div>
                    <div className="text-sm opacity-50">address?.country</div>
                  </div>
                </div>
              </td>
              <td className="capitalize text-C_LightGray/90">category</td>

              <td className="text-C_LightGray/90  text-center">Unpaid</td>
              <td className="text-C_LightGray/90  text-center">price€</td>
              <td className="capitalize text-center text-black/70">
                <span className="bg-green-300 py-1 px-[13px] rounded-4xl">
                  Approved
                </span>
              </td>
              <td className="text-center">
                {/* <Link to={`/propertyDetails/${_id}`}> */}
                <button className="btn btn-xs font-Nunito_Sans border-[1px] rounded-lg px-4 py-4 font-[700] hover:bg-C_purple hover:text-white duration-300 uppercase">
                  View
                </button>
                {/* </Link> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;

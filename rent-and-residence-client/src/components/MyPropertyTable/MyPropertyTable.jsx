import { Link } from "react-router-dom";
const MyPropertyTable = ({ property }) => {
  // Destructure Details from Property
  const { _id, title, price, images, address, category, propertyStatus } =
    property || {};

  console.log(property);
  return (
    <tr className="font-Nunito_Sans text-C_LightGray">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={
                  images
                    ? images[0]
                    : "https://i.ibb.co.com/jkGkX8fs/default-user.png"
                }
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold uppercase">{title.slice(0, 20)}...</div>
            <div className="text-sm opacity-50">
              {address?.city}, {address?.country}
            </div>
          </div>
        </div>
      </td>
      <td className="capitalize text-C_LightGray/90">{category}</td>

      <td className="text-C_LightGray/90  text-center">Unpaid</td>
      <td className="text-C_LightGray/90  text-center">{price}€</td>
      <td className="capitalize text-center text-black/70">
        <span className="bg-green-200 text-green-600 border-green-400 py-1 px-[13px] rounded-4xl">
          Approved
        </span>
      </td>
      <td className="text-center">
        <Link to={`/propertyDetails/${_id}`}>
          <button className="btn btn-xs font-Nunito_Sans border-[1px] rounded-lg px-4 py-4 font-[700] hover:bg-C_purple hover:text-white duration-300 uppercase">
            View
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyPropertyTable;

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
              <img src={images[0]} alt="Avatar Tailwind CSS Component" />
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
      <td className="capitalize">{category}</td>
      <td className="capitalize">{propertyStatus}</td>

      <td>Unpaid</td>
      <td>{price}€</td>
      <td>
        <Link to={`/propertyDetails/${_id}`}>
          <button className="btn btn-xs border-[1px] rounded-lg px-4 py-3 font-medium hover:bg-C_purple hover:text-white duration-300">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyPropertyTable;

const ComparisonTable = ({ eachProp }) => {
  // console.log(eachProp);

  // Destructure Details from Property
  const {
    title,
    description,
    price,
    ownerId,
    images,
    propertyStatus,
    listedIn,
    afterPriceLabel,
    category,
    address,

    propertyDetails,

    amenities,

    neighborhood,

    energyClass,
    energyIndex,

    garages,
    garageSize,
  } = eachProp || {};

  const propImg = eachProp?.images?.[0];

  return (
    <div className="bg-yellow-200 col-span-6">
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={
                    eachProp?.images
                      ? propImg
                      : "https://i.ibb.co.com/jkGkX8fs/default-user.png"
                  }
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {eachProp?.price}€{eachProp?.afterPriceLabel}
        </td>
      </tr>
      <tr>
        <td>
          <td>{eachProp?.category}</td>
        </td>
      </tr>
      <tr>
        <td>
          {/* <td>
          <Link to={`/propertyDetails/${prop[0]?._id}`}>
          <button className="btn btn-xs font-Nunito_Sans border-[1px] rounded-lg px-4 py-4 font-[700] hover:bg-C_purple hover:text-white duration-300 uppercase">
            View
          </button>
          </Link>
        </td> */}
        </td>
      </tr>
    </div>
  );
};

export default ComparisonTable;

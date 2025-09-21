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

  // const propImg = eachProp?.images?.[0];

  console.log(eachProp);

  return (
    <>
      <tr className="font-Nunito_Sans text-C_LightGray flex justify-between">
        <td className="capitalize text-C_LightGray/90  bg-amber-400">
          {listedIn}
        </td>
      </tr>
    </>
  );
};

export default ComparisonTable;

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";
import useComparison from "../../hooks/useComparison/useComparison";

// import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
const Comparison = () => {
  // const [propertyOwner, setPropertyOwner] = useState([]);
  const [, comparisonProperties, , isPending, isLoading, ,] = useComparison();
  console.log(comparisonProperties);

  // const axiosPublic = useAxiosPublic();
  // Destructure Details from Property
  /*  const {
    _id,
    title,
    price,
    images,
    ownerId,
    listedIn,
    category,
    propertyStatus,
    propertyDetails,
  } = property || {}; */

  // console.log(property);

  // Fetch the owner of each Property
  /*   useEffect(() => {
    

    axiosPublic
      .get(`/api/users/${ownerId}`)
      .then((res) => {
        // console.log(res.data);
        setPropertyOwner(res.data);
      });
  }, [ownerId, axiosPublic]); */
  // console.log(propertyOwner);

  // Destructure Details from Owner
  // const { name, profileImage } = propertyOwner || {};
  return (
    <div className="w-10/12 mx-auto pt-4 ">
      {/* Breadcrumbs */}

      <Breadcrumb pageName={"Comparison"} />

      {/* Rest  */}
      <div className="w-full grid grid-cols-12 gap-10 bg-green-200">
        {comparisonProperties?.map((eachProp) => (
          <ComparisonTable key={eachProp._id} eachProp={eachProp} />
        ))}
        {/* <div className="bg-yellow-200 col-span-6">Hello</div> */}
        {/* <div className="bg-blue-200 col-span-6">Hello</div> */}

        {/* Sidebar  */}
        {/* <div className="lg:col-span-4 col-span-10"></div> */}
      </div>
    </div>
  );
};

export default Comparison;

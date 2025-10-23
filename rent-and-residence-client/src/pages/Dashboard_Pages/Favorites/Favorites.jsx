import { useQuery } from "@tanstack/react-query";
import FavouritePropCard from "../../../components/FavouritePropCard/FavouritePropCard";
import SkeletonOfPropertyCard from "../../../components/SkeletonOfPropertyCard/SkeletonOfPropertyCard";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure/UseAxiosSecure";
import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const Favorites = () => {
  // const [favouriteProperties, setFavouriteProperties] = useState();
  const value = "favourites";

  const axiosSecure = UseAxiosSecure();
  const [{ _id }] = useSignedInUser();

  const {
    data: favouriteProperties,
    isPending,
    refetch: refetchFavProperty,
  } = useQuery({
    queryKey: ["favouriteProperties", _id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/favouriteProperties/${_id}`);
      return res.data;
    },
  });

  // Fetch the Property
  /*   useEffect(() => {
    axiosSecure
      .get(`/api/favouriteProperties/${_id}`)
      .then((res) => setFavouriteProperties(res.data));
  }, [axiosSecure, _id]);

  console.log(favouriteProperties); */
  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">
        Dashboard - Favourites
      </h1>

      <div className="grid grid-cols-12 gap-0 pt-10">
        <div className="lg:col-span-12 col-span-12 flex flex-col gap-8">
          {/* Account Summary  */}
          <div className="shadow-[0px_4px_20px_rgba(0,0,0,0.1)] lg:p-8 p-4 w-full rounded-xl bg-white">
            <div>
              {isPending ? (
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 ">
                  <SkeletonOfPropertyCard value={value} />
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-6 ">
                  {favouriteProperties?.map((favProperty) => (
                    <FavouritePropCard
                      key={favProperty?.propertyItems._id}
                      // property={property}
                      favProperty={favProperty?.propertyItems}
                      refetchFavProperty={refetchFavProperty}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

import { toast } from "sonner";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import UseCart from "../UseCart/UseCart";
import useSignedInUser from "../useSignedInUser/useSignedInUser";

const useAddToCard = () => {
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCart();
  const [currentUserFromDB] = useSignedInUser();

  const { _id, email: userEmail } = currentUserFromDB;

  const handleAddToCart = (propertyItem) => {
    if (currentUserFromDB && userEmail) {
      // console.log(_id);

      const cartItem = {
        propertyId: propertyItem,
        userId: _id,
        userEmail,
      };

      axiosSecure
        .post(`/api/carts?userEmail=${userEmail}`, cartItem)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            toast.success("This property is added to cart");
            refetch();
          } else {
            toast.error("Item already exists in the cart.");
          }
        })
        .catch((err) => {
          toast.error("Item already exists in the cart.");
          console.log(err);
        });
    } else {
      toast.error("You must login to add items");
    }
  };
  return [handleAddToCart];
};

export default useAddToCard;

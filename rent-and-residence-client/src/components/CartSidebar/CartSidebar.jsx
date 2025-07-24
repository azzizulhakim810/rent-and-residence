import { useState, useEffect } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure/UseAxiosSecure";

const CartSidebar = ({ item }) => {
  const [items, setItems] = useState();
  const axiosSecure = UseAxiosSecure();

  console.log(item);

  /* useEffect(() => {
    axiosSecure
      .get(`/api/properties/${items}`)
      .then((res) => console.log(res.data));
  }, [axiosSecure, items]); */
  return (
    <div>
      <h1>CartSidebar</h1>
    </div>
  );
};

export default CartSidebar;

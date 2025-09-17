import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

const TestimonialCard = ({ review }) => {
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();

  // console.log(review);

  const { rating, comment, designation, name } = review;

  // console.log(review);

  const { data: eachUser, isLoading } = useQuery({
    queryKey: ["eachUser", review.userId],
    queryFn: async () => {
      const result = await axiosPublic.get(`/api/users/${review.userId}`);
      return result;
    },
  });

  // console.log(eachUser?.data);

  useEffect(() => {
    /* fetch(`http://localhost:5123/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data)); */

    /* if (review) {
      axiosPublic.get(`/api/users/${userId}`).then((res) => {
        // console.log(res.data);
        setUser(res.data);
      });
    } */

    // Promise.all(axiosPublic.get(`/api/users/${userId}`))
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    /*     const loadReviewer = async () => {
      const res = await axiosPublic.get(`/api/users/${userId}`);
      // console.log(res.data);
      setUser(res.data);
    };
    loadReviewer(); */

    setUser(eachUser?.data);
  }, [eachUser?.data]);

  // console.log(user);
  // const { profileImage } = user || {};

  return (
    <div className="col-span-4 w-full shadow-[0px_0px_50px_rgba(100,80,200,0.11)] p-12 flex flex-col gap-5">
      <div className="flex justify-start items-center gap-5">
        <img
          className="size-15 rounded-full"
          src={
            isLoading
              ? "https://i.ibb.co/jkGkX8fs/default-user.png"
              : user?.profileImage
          }
        />

        <div>
          <h1 className="text-[18px] font-[700] text-C_DarkGray font-Nunito">
            {name}
          </h1>
          <p className="text-[15px] text-C_LightGray font-Nunito_Sans">
            {designation}
          </p>
        </div>
      </div>
      <p className="text-[15px]  text-C_LightGray font-Nunito_Sans">
        {comment}
      </p>
      <Rating readOnly style={{ maxWidth: 100 }} value={rating} />
    </div>
  );
};

export default TestimonialCard;

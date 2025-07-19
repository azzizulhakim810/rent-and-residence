import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const TestimonialCard = ({ review }) => {
  const [user, setUser] = useState(null);

  const { userId, rating, comment, designation, name } = review || {};

  // console.log(review);

  useEffect(() => {
    fetch(`http://localhost:5123/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  // console.log(user);
  const { profileImage } = user || {};

  return (
    <div className="col-span-4 w-full shadow-[0px_0px_50px_rgba(100,80,200,0.11)] p-12 flex flex-col gap-5">
      <div className="flex justify-start items-center gap-5">
        <img className="size-15 rounded-full" src={profileImage} />

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

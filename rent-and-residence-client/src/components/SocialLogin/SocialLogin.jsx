import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import UseAuth from "../../hooks/UseAuth/UseAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/dashboard/myProfile";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        // toast.success("Signed In Successfully");
        // console.log(res.user);

        const { displayName, email, phoneNumber, photoURL, metadata } =
          res.user || {};

        const newUser = {
          name: displayName,
          email,
          phone: phoneNumber,
          role: "user",
          profileImage: photoURL,
          isVerified: "false",
          createdAt: new Date(parseFloat(metadata.createdAt)),
        };

        axiosPublic
          .post("/api/auth/register", newUser)
          .then((res) => {
            if (res.statusText !== "OK") {
              toast.error("There is having issues to POST");
              return;
            }
            console.log(res.data);
          })
          .catch((error) => {
            toast.error(error);
            console.log(error);
          });

        toast.success("Signed In Successfully");
        navigate(from, { replace: true });

        // Close the modal
        document.getElementById("signUpAndInPopUp").close();
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className=" flex select-none items-center gap-3 rounded-md border border-C_LightGray py-3 w-full justify-center align-middle font-Nunito_Sans text-sm font-bold uppercase text-C_DarkGray hover:text-C_purple cursor-pointer transition-all hover:opacity-75 focus:ring focus:ring-text-C_purple active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-dark="true"
    >
      <FcGoogle></FcGoogle>
      Continue with Google
    </button>
  );
};

export default SocialLogin;

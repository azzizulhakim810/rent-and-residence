import { useContext, useState } from "react";

import { AuthContext } from "../../../providers/AuthProvider";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";

const SignInAndUp = () => {
  const [switchToSignIn, setSwitchToSignIn] = useState(true);
  const { user, signOutUser, loading } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign Out Successfully");
        loading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {user ? (
        <button
          className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md hidden lg:flex"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md hidden lg:flex"
          onClick={() =>
            document.getElementById("signUpAndInPopUp").showModal()
          }
        >
          Sign In
        </button>
      )}

      {/* Form  */}
      <dialog id="signUpAndInPopUp" className="modal">
        <div className="modal-box p-0 bg-white w-11/12 max-w-4xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {switchToSignIn ? (
            // {/* Body - Sign In  */}

            <SignIn
              setSwitchToSignIn={setSwitchToSignIn}
              switchToSignIn={switchToSignIn}
            />
          ) : (
            // {/* Body - Sign Up  */}
            <SignUp
              setSwitchToSignIn={setSwitchToSignIn}
              switchToSignIn={switchToSignIn}
            />
          )}
        </div>
      </dialog>
    </div>
  );
};

export default SignInAndUp;

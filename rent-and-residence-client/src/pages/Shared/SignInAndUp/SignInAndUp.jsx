import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../../providers/AuthProvider";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";
import UseAuth from "../../../hooks/UseAuth/UseAuth";

const SignInAndUp = () => {
  const [switchToSignIn, setSwitchToSignIn] = useState(true);
  const { user, signOutUser, setLoading, setUser } = UseAuth();

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signed Out Successfully");
        console.log("Sign Out Successfully");
        setUser(null);
        navigate("/", { state: { showModal: true }, replace: true });
        setLoading(false);
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
        <div className="modal-box p-10 bg-white w-11/12 max-w-4xl">
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

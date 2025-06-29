import { useState } from "react";

import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";

const SignInAndUp = () => {
  const [switchToSignIn, setSwitchToSignIn] = useState(true);

  return (
    <div>
      <button
        className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md hidden lg:flex"
        onClick={() => document.getElementById("pop-up").showModal()}
      >
        Sign In
      </button>

      {/* Form  */}
      <dialog id="pop-up" className="modal ">
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

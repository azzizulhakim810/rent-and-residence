import { useEffect, useState } from "react";

import { useSignInAndUp } from "../../../providers/SignInAndUpProvider";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";

const SignInAndUp = () => {
  const [switchToSignIn, setSwitchToSignIn] = useState(true);

  const { isPopVisible, setIsPopVisible } = useSignInAndUp();

  const uniqueId = `global_user_captcha_input`;

  useEffect(() => {
    const modal = document.getElementById("signUpAndInPopUp");
    if (!modal) return;
    if (isPopVisible) modal.showModal();
    else modal.close();
  }, [isPopVisible]);

  return (
    <dialog id="signUpAndInPopUp" className="modal">
      <div className="modal-box lg:p-0 bg-white w-11/12 max-w-4xl">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute text-xl right-3 top-3 font-medium"
          onClick={() => setIsPopVisible(false)}
        >
          X
        </button>

        {switchToSignIn ? (
          // {/* Body - Sign In  */}
          <SignIn
            setSwitchToSignIn={setSwitchToSignIn}
            switchToSignIn={switchToSignIn}
            uniqueId={uniqueId}
          />
        ) : (
          // {/* Body - Sign Up  */}
          <SignUp
            setSwitchToSignIn={setSwitchToSignIn}
            switchToSignIn={switchToSignIn}
            uniqueId={uniqueId}
          />
        )}
      </div>
    </dialog>
  );
};

export default SignInAndUp;

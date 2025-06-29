import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
const SignUp = ({ setSwitchToSignIn, switchToSignIn }) => {
  const [disabled, setDisabled] = useState(true);
  const [disAllowCaptcha, setDisAllowCaptcha] = useState(true);

  const handleValidateBtn = (e) => {
    e.preventDefault();
    // console.log(validateCaptcha(e.target.value));
    setDisAllowCaptcha(false);
  };

  // Captcha Added
  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  // Captcha Validation
  const handleCaptcha = () => {
    let user_captcha_value =
      document.getElementById("user_captcha_input").value;
    // console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
      document.getElementById("user_captcha_input").value = " ";
    } else {
      setDisabled(true);
    }
  };

  //  Toggle Password Visibility
  const handleShowPass = () => {
    const passField = document.getElementById("passwordInput");

    if (passField.type === "password") {
      passField.type = "text";
    } else {
      passField.type = "password";
    }
  };

  // Sign In Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="flex items-center w-full">
      <div className="bg-[url(https://i.ibb.co/LXKsFNwk/couple-login-modal.jpg)] w-1/2"></div>
      {/* <img
        className="w-1/2 h-[100%]"
        src="https://i.ibb.co/LXKsFNwk/couple-login-modal.jpg"
        alt=""
      /> */}
      <form
        onSubmit={handleSubmit}
        className="w-1/2 gap-3 fieldset border-none rounded-box  border m-10"
      >
        <h1 className="text-2xl font-[700] font-Nunito mb-2">
          Create an account
        </h1>

        {/* <Google Button  */}
        <div className="flex justify-center w-full pt-5">
          <button
            // onClick={handleGoogleSignin}
            className=" flex select-none items-center gap-3 rounded-md border border-C_LightGray py-3 w-full justify-center align-middle font-Nunito_Sans text-sm font-bold uppercase text-C_DarkGray hover:text-C_purple cursor-pointer transition-all hover:opacity-75 focus:ring focus:ring-text-C_purple active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-dark="true"
          >
            <FcGoogle></FcGoogle>
            Continue with Google
          </button>
        </div>

        <div className="divider">OR</div>

        {/* Form Field  */}
        <div className="w-full flex gap-2">
          <input
            name="firstName"
            type="text"
            className="input focus:outline-0 outline-C_purple w-full font-Nunito_Sans"
            placeholder="First Name"
          />

          <input
            name="lastName"
            type="text"
            className="input focus:outline-0 outline-C_purple w-full font-Nunito_Sans"
            placeholder="Last Name"
          />
        </div>

        <input
          name="email"
          type="email"
          className="input focus:outline-0 outline-C_purple w-full font-Nunito_Sans"
          placeholder="Email"
        />
        {/* <label className="label">Password</label> */}
        <div className="flex relative">
          <input
            id="passwordInput"
            name="password"
            type="password"
            className="input focus:outline-0 outline-C_purple w-full font-Nunito_Sans"
            placeholder="Password"
          />

          <label className="text-lg swap absolute right-0 bottom-0 -translate-y-3 -translate-x-3 z-10">
            {/* this hidden checkbox controls the state */}
            <input onClick={handleShowPass} type="checkbox" />

            {/* Show Password */}
            <FiEye className="swap-on" />

            {/* Hide Password */}
            <FiEyeOff className="swap-off" />
          </label>
        </div>
        <p className="mt-0 block text-right font-sans text-base font-normal leading-relaxed text-C_LightGray antialiased">
          Already Registered?{" "}
          <Link
            className="font-medium text-C_purple transition-colors hover:underline"
            onClick={() => setSwitchToSignIn(!switchToSignIn)}
          >
            Sign In
          </Link>
        </p>

        {/* Captcha  */}
        <div className="grid grid-cols-3 items-center gap-4 my-3">
          <LoadCanvasTemplate />
          <input
            onChange={handleValidateBtn}
            id="user_captcha_input_signup"
            className="border-1 p-2 rounded border-gray-300 outline-0 font-Nunito_Sans"
            type="text"
            placeholder="Type the captcha value"
          />

          <Link
            onClick={handleCaptcha}
            disabled={disAllowCaptcha}
            className="btn bg-C_purple/80 text-white  hover:bg-[#40384B] rounded-md font-Nunito_Sans text-sm px-2 py-2 cursor-pointer"
          >
            Validate
          </Link>
        </div>

        <button
          disabled={disabled}
          className="btn bg-C_purple text-white  hover:bg-[#40384B] rounded-md hidden lg:flex py-5 mt-2"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;

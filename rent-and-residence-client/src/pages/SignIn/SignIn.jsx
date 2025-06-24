import { useEffect, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

import { FiEye, FiEyeOff } from "react-icons/fi";

const SignIn = () => {
  const [disabled, setDisabled] = useState(true);

  // Captcha Added
  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);
  const handleCaptcha = () => {
    let user_captcha_value =
      document.getElementById("user_captcha_input").value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
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
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md hidden lg:flex"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Sign In
      </button>

      {/* Form  */}
      <dialog id="my_modal_3" className="modal  ">
        <div className="modal-box p-0 bg-white w-11/12 max-w-4xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* Body  */}
          <div className="flex items-center w-full">
            <img
              className="w-1/2"
              src="https://i.ibb.co/LXKsFNwk/couple-login-modal.jpg"
              alt=""
            />
            <form
              onSubmit={handleSubmit}
              className="w-1/2 gap-3 fieldset border-none rounded-box  border m-10"
            >
              {/*  <legend className="fieldset-legend">Sign In</legend> */}
              {/* <label className="label">Email</label> */}
              <h1 className="text-2xl font-[700] font-Nunito mb-2">
                Sign into your account
              </h1>
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

              {/* Captcha  */}
              <div className="grid grid-cols-3 items-center gap-4 my-3">
                <LoadCanvasTemplate />
                <input
                  id="user_captcha_input"
                  className="border-1 p-2 rounded border-gray-300 outline-0 font-Nunito_Sans"
                  type="text"
                  placeholder="Type the captcha value"
                />

                <button
                  onClick={handleCaptcha}
                  className=" bg-C_purple/80 text-white  hover:bg-[#40384B] rounded-md font-Nunito_Sans text-sm px-2 py-2 cursor-pointer"
                >
                  Validate
                </button>
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
        </div>
      </dialog>
    </div>
  );
};

export default SignIn;

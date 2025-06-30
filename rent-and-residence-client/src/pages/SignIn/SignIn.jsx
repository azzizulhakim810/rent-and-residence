import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

import { useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = ({ setSwitchToSignIn, switchToSignIn }) => {
  const { user, signIn } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);
  const [disAllowCaptcha, setDisAllowCaptcha] = useState(true);

  // Extract Info form Hook Form
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("email", {
        message: "This Email is already taken",
      });
    }
  };
  // console.log(watch("email")); // watch input value by passing the name of it

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
  /* const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error.message));
  }; */

  return (
    <div className="lg:flex block items-center w-full ">
      <div className="lg:h-screen lg:flex hidden h-[50vw] lg:w-1/2 w-full bg-[url('https://i.ibb.co/LXKsFNwk/couple-login-modal.jpg')] bg-cover bg-no-repeat bg-center')]"></div>
      <form
        // onSubmit={handleSubmit}
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-1/2 w-full gap-3 fieldset border-none rounded-box border p-10"
      >
        <h1 className="text-2xl font-[700] font-Nunito mb-2">
          Sign into your account
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

        {/* Email Field  */}
        <input
          // name="email"
          // type="email"
          placeholder="Email"
          className="input focus:outline-0 outline-C_purple w-full font-Nunito_Sans"
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Eamil must include @";
              }
              return true;
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        {/* Password Field  */}
        <div className="flex relative">
          <input
            // name="password"
            placeholder="Password"
            id="passwordInput"
            type="password"
            className="input focus:outline-0 outline-C_purple w-full font-Nunito_Sans"
            {...register("password", {
              required: "Password is required",
              pattern: /^[A-Za-z]+$/i,
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />

          {/* Eye Icon  */}
          <label className="text-lg swap absolute right-0 bottom-0 -translate-y-3 -translate-x-3 z-10">
            {/* this hidden checkbox controls the state */}
            <input onClick={handleShowPass} type="checkbox" />

            {/* Show Password */}
            <FiEye className="swap-on" />

            {/* Hide Password */}
            <FiEyeOff className="swap-off" />
          </label>
        </div>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <p className="mt-0 block text-right font-sans text-base font-normal leading-relaxed text-C_LightGray antialiased">
          Don't Have An Account?{" "}
          <Link
            className="font-medium text-C_purple transition-colors hover:underline"
            onClick={() => setSwitchToSignIn(!switchToSignIn)}
          >
            SignUp
          </Link>
        </p>

        {/* Captcha  */}
        <div className="grid grid-cols-3 items-center gap-4 my-3">
          <LoadCanvasTemplate />
          <input
            onChange={handleValidateBtn}
            id="user_captcha_input"
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
          // disabled={disabled}
          className="btn bg-C_purple text-white  hover:bg-[#40384B] rounded-md py-5 mt-2"
          type="submit"
        >
          {isSubmitting ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;

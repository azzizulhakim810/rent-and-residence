import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate } from "react-simple-captcha";
import { toast } from "sonner";

import { useForm } from "react-hook-form";

import { FiEye, FiEyeOff } from "react-icons/fi";
import UseAuth from "../../hooks/UseAuth/UseAuth";
// import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignIn = ({
  setSwitchToSignIn,
  switchToSignIn,
  handleValidateBtn,
  handleCaptcha,
  disabled,
  setDisabled,
  disAllowCaptcha,
}) => {
  const { signIn } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const from = location.state?.from?.pathname || "/dashboard/myProfile";

  // Destructure props form Hook
  const {
    register,
    handleSubmit,
    // watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Sleeper Expression - Sleep for one second xD
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      const { email, password } = data;

      signIn(email, password)
        .then((res) => {
          console.log(res.user);
          setDisabled(true);
          reset();
          // navigate("/");

          toast.success("Signed In Successfully");
          // navigate("/dashboard/myProfile");
          navigate(from, { replace: true });
          {
            /* <Navigate
            to="/dashboard/myProfile"
            state={{ from: location }}
            replace
          />; */
          }

          // Close the modal
          document.getElementById("signUpAndInPopUp").close();
        })
        .catch((error) => {
          console.log(error.message);
          setErrorMessage(error.message);
        });

      // console.log(data);
    } catch (error) {
      setError("root", {
        message: error,
      });
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="lg:flex block items-center w-full ">
      <div className="lg:h-screen lg:flex hidden h-[50vw] lg:w-1/2 w-full bg-[url('https://i.ibb.co/LXKsFNwk/couple-login-modal.jpg')] bg-cover bg-no-repeat bg-center')]"></div>

      <div className="lg:w-1/2 w-full gap-3 fieldset border-none rounded-box border p-10">
        <h1 className="text-2xl font-[700] font-Nunito mb-2">
          Sign into your account
        </h1>

        {/* <Google Button  */}
        <div className="flex justify-center w-full pt-5">
          <SocialLogin />
        </div>

        {/* Divider  */}
        <div className="divider">OR</div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full gap-3 fieldset "
        >
          {/* Email */}
          <input
            placeholder="Email"
            className="input focus:outline-0 outline-C_purple w-full font-Nunito_Sans"
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must include @";
                }
                return true;
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          {/* Password  */}
          <div className="flex relative">
            <input
              placeholder="Password"
              type={showPass ? "text" : "password"}
              // type="password"
              className="input focus:outline-0 outline-C_purple w-full font-Nunito_Sans"
              {...register("password", {
                required: "Password is required",
              })}
            />

            {/* Eye Icon  */}
            <label className="text-lg absolute right-0 bottom-0 -translate-y-3 -translate-x-3 z-10">
              <span
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {!showPass ? <FiEyeOff /> : <FiEye />}
              </span>
            </label>
          </div>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
          {errorMessage && <span className="text-red-500">{errorMessage}</span>}
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

            <button
              onClick={handleCaptcha}
              disabled={disAllowCaptcha}
              className="btn bg-C_purple/80 text-white  hover:bg-[#40384B] rounded-md font-Nunito_Sans text-sm px-2 py-2 cursor-pointer"
            >
              Validate
            </button>
          </div>

          {/* Submit Button  */}
          <button
            disabled={disabled}
            className="btn bg-C_purple text-white  hover:bg-[#40384B] rounded-md py-5 mt-2"
            type="submit"
          >
            {isSubmitting ? "Loading..." : "Sign In"}
          </button>
          {errors.root && (
            <span className="text-red-500">{errors.root.message}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;

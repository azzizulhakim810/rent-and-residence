import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "sonner";

import { useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../providers/AuthProvider";
import UseAuth from "../../hooks/UseAuth/UseAuth";

const SignIn = ({ setSwitchToSignIn, switchToSignIn }) => {
  const { signIn, googleSignIn } = UseAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [disabled, setDisabled] = useState(true);
  const [disAllowCaptcha, setDisAllowCaptcha] = useState(true);
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
  // console.log(watch("email")); // watch input value by passing the name of it

  // Google Sign In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        // toast.success("Signed In Successfully");
        console.log(res.user);

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

        // Save the user to Database
        fetch("http://localhost:5123/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => {
            if (!res.ok) {
              toast.error("There is having issues to POST");
              return;
            }
            // console.log(res);

            res.json();
          })
          .then((data) => {
            // toast.success("Signed In Successfully");
            console.log(data);
          })
          .catch((error) => {
            toast.error(error);
            console.log(error);
          });

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
        toast.error(error);
        console.log(error);
      });
  };

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
  const handleCaptcha = (e) => {
    e.preventDefault;
    let user_captcha_value =
      document.getElementById("user_captcha_input").value;
    // console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
      setDisAllowCaptcha(true);
      document.getElementById("user_captcha_input").value = " ";
    } else {
      setDisabled(true);
    }
  };

  //  Toggle Password Visibility

  /*  const handleShowPass = () => {

    setShowPass(!showPass);
    
  }; */

  return (
    <div className="lg:flex block items-center w-full ">
      <div className="lg:h-screen lg:flex hidden h-[50vw] lg:w-1/2 w-full bg-[url('https://i.ibb.co/LXKsFNwk/couple-login-modal.jpg')] bg-cover bg-no-repeat bg-center')]"></div>

      <div className="lg:w-1/2 w-full gap-3 fieldset border-none rounded-box border p-10">
        <h1 className="text-2xl font-[700] font-Nunito mb-2">
          Sign into your account
        </h1>

        {/* <Google Button  */}
        <div className="flex justify-center w-full pt-5">
          <button
            onClick={handleGoogleSignIn}
            className=" flex select-none items-center gap-3 rounded-md border border-C_LightGray py-3 w-full justify-center align-middle font-Nunito_Sans text-sm font-bold uppercase text-C_DarkGray hover:text-C_purple cursor-pointer transition-all hover:opacity-75 focus:ring focus:ring-text-C_purple active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-dark="true"
          >
            <FcGoogle></FcGoogle>
            Continue with Google
          </button>
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

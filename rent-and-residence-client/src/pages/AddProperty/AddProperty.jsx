import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const AddProperty = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="bg-C_LightGray/5 pb-6 ">
      <Helmet>
        <title>R & R | New Property</title>
      </Helmet>
      <div className="w-10/12 mx-auto pt-4">
        {/* Breadcrumbs */}

        <Breadcrumb pageName={"Add a Property"} />

        {/* Rest  */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 ">
            <div className="flex lg:flex-row flex-col justify-start w-full gap-6 pb-5">
              <div>
                {/* Contact Info  */}
                <div className="bg-white w-full shadow-lg p-8 mb-2  rounded-md ">
                  <h1 className="font-Nunito lg:text-[34px] text-[32px]  font-[700]">
                    Real Estate Agency
                  </h1>
                  <p className="flex gap-2 items-center text-paragraph_colorTwo font-Nunito_Sans font-[500] text-[18px] pb-2">
                    Calle de Toledo, 41, 28005 Madrid, Spain
                  </p>
                  {/* Form  */}
                  {/*  "handleSubmit" will validate your inputs before invoking
                  "onSubmit" */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue="test" {...register("example")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input
                      {...register("exampleRequired", { required: true })}
                    />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <input type="submit" />
                  </form>
                </div>

                {/* Contact Section */}
                <div className="mt-10 bg-white w-full shadow-lg p-8 mb-2  rounded-md ">
                  <h4 className=" font-Nunito font-[600] text-C_gray text-[20px] leading-6 pb-2">
                    Contact Me
                  </h4>

                  <div className="flex flex-col gap-5 pt-2">
                    <div className="flex lg:flex-row flex-col gap-3">
                      <input
                        type="text"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Your Name"
                      />
                      <input
                        type="email"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Your Email"
                      />
                      <input
                        type="tel"
                        className="input font-Nunito_Sans font-[600] text-C_LightGray"
                        placeholder="Your Phone"
                      />
                    </div>

                    <textarea className="textarea w-full h-40 "></textarea>

                    <label className="label">
                      <input type="checkbox" className="checkbox" />I consent to
                      the GDPR Terms
                    </label>

                    <button className="lg:w-3/12 w-full btn bg-C_purple border-2  text-white hover:text-C_purple hover:bg-transparent hover:border-C_purple rounded-md py-5 text-[16px] font-Nunito_Sans font-[600]">
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;

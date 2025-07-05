import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";

import { RxCross2, RxUpdate } from "react-icons/rx";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const { uid, displayName, email, photoURL } = user || {};
  const firstName = displayName?.split(" ")?.[0];
  const lastName = displayName?.split(" ")?.[1];
  // console.log(displayName?.split(" ")?.[0]);

  const [profilePreview, setProfilePreview] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const getImgData = () => {
    const chooseFile = document.getElementById("choose-file");

    const files = chooseFile.files[0];

    if (files) {
      const imageURL = URL.createObjectURL(files);
      setProfilePreview(imageURL);
    } else {
      setProfilePreview(null);
    }
  };
  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">
        Dashboard – Profile Page
      </h1>

      <div className="grid grid-cols-12 gap-6 pt-10">
        <div className="lg:col-span-8 col-span-12 flex flex-col gap-10">
          {/*Contact Information  */}
          <div className="shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-8 w-full rounded-xl bg-white">
            <div className="font-Nunito_Sans text-C_LightGray w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="fieldset flex flex-col gap-5 bg-white w-full "
              >
                {/*  User Details */}
                <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 ">
                  User Details
                </h1>

                {/* Title/Position  */}
                <div className="flex gap-5 w-full">
                  <div className="flex flex-col w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Title/Position
                    </label>

                    <select
                      className=" text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-3 px-3 me-3 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("title/position", { required: true })}
                    >
                      <option disabled value="Select One">
                        Select One
                      </option>
                      <option value="agent">Agent</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>

                <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mt-5">
                  Contact Information
                </h1>

                {/* Name  */}
                <div className="flex gap-5 w-full">
                  <div className=" w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      First Name
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      defaultValue={firstName}
                      {...register("firstName", { required: true })}
                    />
                  </div>

                  <div className=" w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Last Name
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      defaultValue={lastName}
                      {...register("lastName", { required: true })}
                    />
                  </div>
                </div>

                {/* Email + Phone  */}
                <div className="flex gap-5 w-full">
                  <div className=" w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Email
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      defaultValue={email}
                      {...register("email", { required: true })}
                    />
                  </div>

                  <div className=" w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Phone
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("phone", { required: true })}
                    />
                  </div>
                </div>

                {/* Mobile + Skype */}
                <div className="flex gap-5 w-full">
                  <div className=" w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Mobile
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("mobile", { required: true })}
                    />
                  </div>

                  <div className=" w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Skype
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("skype", { required: true })}
                    />
                  </div>
                </div>

                {/* Social Media */}
                <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mt-6">
                  Social Media
                </h1>

                {/* Facebook + Twitter */}
                <div className="flex gap-5 w-full">
                  <div className=" w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Facebook Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("facebookUrl", { required: true })}
                    />
                  </div>

                  <div className=" w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      X - Twitter Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("twitterUrl", { required: true })}
                    />
                  </div>
                </div>

                {/* Linkedin  + Instagram  */}
                <div className="flex gap-5 w-full">
                  <div className=" w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Linkedin Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("linkedinUrl", { required: true })}
                    />
                  </div>

                  <div className=" w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Instagram Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("instagramUrl", { required: true })}
                    />
                  </div>
                </div>

                {/* Pinterest + Website  */}
                <div className="flex gap-5 w-full">
                  <div className=" w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Pinterest Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("pinterestUrl", { required: true })}
                    />
                  </div>

                  <div className=" w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Website Url (without http)
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("websiteUrl", { required: true })}
                    />
                  </div>
                </div>

                {/* Update + Delete  */}
                <div className="flex lg:flex-row flex-col justify-between gap-2 w-full mt-5">
                  <button className="btn flex items-center justify-center  gap-2 bg-C_purple text-white hover:bg-[#40384B] py-6 px-8 text-[16px] rounded-md">
                    <RxUpdate /> Update Profile
                  </button>

                  <button className="btn flex items-center justify-center  gap-2 bg-C_purple text-white hover:bg-[#40384B] py-6 px-8 text-[16px] rounded-md">
                    <RxCross2 /> Delete Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-12 ">
          {/* Photo */}
          <div className="shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-8 w-full rounded-xl bg-white">
            <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-4">
              Photo
            </h1>

            <div className="avatar w-full">
              <div
                className="lg:w-full w-full rounded-md
              mb-5"
              >
                <img
                  className="w-full object-fill "
                  src={
                    profilePreview
                      ? profilePreview
                      : "https://i.ibb.co/jkGkX8fs/default-user.png"
                  }
                />

                <div id="img-preview"></div>
              </div>
            </div>

            <fieldset className="fieldset">
              <input
                name="choose-file"
                id="choose-file"
                onChange={getImgData}
                type="file"
                accept=".jpg, .jpeg, .png"
                className="btn font-Nunito_Sans w-full pt-3 pb-9 bg-C_purple text-white hover:bg-[#40384B] rounded-md "
              />
              {/* <input
                onChange={getImgData}
                name="choose-file"
                id="choose-file"
                type="file"
                accept=".jpg, .jpeg, .png"
                className="btn font-Nunito_Sans w-full pt-3 pb-9 bg-C_purple text-white hover:bg-[#40384B] rounded-md "
              /> */}
              <label className="label font-Nunito_Sans">Max size 2MB</label>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

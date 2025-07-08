import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { RxCross2, RxUpdate } from "react-icons/rx";

import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const MyProfile = () => {
  // Custom hook to load the current user from DB
  const [currentUserFromDB] = useSignedInUser();

  console.log(currentUserFromDB.name);

  const [profilePreview, setProfilePreview] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  // const [currentUserFromDB, setCurrentUserFromDB] = useState(null);

  const fileInputRef = useRef();
  // console.log(fileInputRef.current.value);

  const { _id, name, email, profileImage, phone, role } = currentUserFromDB;
  const firstName = name?.split(" ")?.[0];
  const lastName = name?.split(" ")?.[1];
  // console.log(firstName, lastName);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      _id: "",
      name: "",
      email: "",
      phone: "",
      role: "",
      profileImage: "",
      bio: "",
      facebookUrl: "",
      instagramUrl: "",
      linkedinUrl: "",
      pinterestUrl: "",
      twitterUrl: "",
      websiteUrl: "",
    },
  });

  // Form Data
  const onSubmit = (data) => {
    const chooseFile = document.getElementById("choose-file");

    const files = chooseFile.files[0];

    data.file = files;
    // console.log(data);

    const {
      email,
      role,
      bio,
      firstName,
      lastName,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
      pinterestUrl,
      twitterUrl,
      websiteUrl,
      phone,
      file,
    } = data;

    const fullName = firstName + " " + lastName;

    const updateUser = {
      _id,
      name: fullName,
      email,
      phone,
      role,
      profileImage: file,
      bio,
      facebookUrl,
      instagramUrl,
      linkedinUrl,
      pinterestUrl,
      twitterUrl,
      websiteUrl,
    };

    console.log(updateUser);

    /* fetch("http://localhost:5123/api/users/:id", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: updateUser,
    }); */
  };

  // console.log(profilePreview);

  const getImgData = () => {
    const chooseFile = document.getElementById("choose-file");

    const files = chooseFile.files[0];

    const maxFileSize = 1 * 1024 * 1024;

    // console.log(fileInputRef.current.value);

    if (files?.size > maxFileSize) {
      alert("File size exceeds 1 MB limit.");
      fileInputRef.current.value = null;
      return;
    }

    if (!files) return;

    const imageURL = URL.createObjectURL(files);
    setImageSize((files.size * 0.001).toFixed(2) + "kb");
    setProfilePreview(imageURL);
  };

  // Check Web Url by Regex
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );

  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">
        Dashboard – Profile Page
      </h1>

      <div className="grid  grid-cols-12 gap-6 pt-10">
        <div className="lg:col-span-8 col-span-12 lg:order-1 order-2 flex flex-col gap-10">
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
                      Role
                    </label>

                    <select
                      className=" text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-3 px-3 me-3 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      value={role}
                      {...register("role", { required: true })}
                    >
                      <option value="user">User</option>
                      <option value="agent">Agent</option>
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
                      defaultValue={name?.split(" ")?.[0]}
                      {...register("firstName", {
                        required: firstName ? false : true,
                      })}
                    />
                  </div>

                  <div className=" w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Last Name
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      defaultValue={lastName}
                      {...register("lastName", {
                        required: lastName ? false : true,
                      })}
                    />
                  </div>
                </div>

                {/* Email + Phone  */}
                <div className="flex lg:flex-row flex-col  gap-5 w-full">
                  <div className=" lg:w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Email
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      value={email}
                      {...register("email", {
                        required: email ? null : "This is required",
                        validate: (value) => {
                          if (!email && !value.includes("@")) {
                            return "Email must include @";
                          }
                          return true;
                        },
                      })}
                    />

                    {errors.email && (
                      <span className="w-1/2 text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className=" lg:w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Phone
                    </label>

                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300  mb-2"
                      type="tel"
                      {...register("phone", {
                        required: "This is required",
                        minLength: {
                          value: 8,
                          message: "Number must be at least 8 Character",
                        },
                        maxLength: {
                          value: 16,
                          message: "Number must be more than 16 Character",
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className="w-1/2 text-red-500">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div className="flex flex-col w-full">
                  <label className="label mb-2 text-sm font-[600]">Bio</label>
                  {/* <input
                      className="textarea text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      type="textarea"
                      {...register("bio", { required: true })}
                    /> */}
                  <textarea
                    className="textarea w-full text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md  border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                    {...register("bio", {
                      required: "This is required",
                      maxLength: {
                        value: 150,
                        message: "Bio should be less than 150 Characters",
                      },
                      minLength: {
                        value: 50,
                        message: "Bio should be more than 50 Characters",
                      },
                    })}
                  ></textarea>
                  {errors.bio && (
                    <span className="w-1/2 text-red-500">
                      {errors.bio.message}
                    </span>
                  )}
                </div>

                {/* Social Media */}
                <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mt-6">
                  Social Media
                </h1>

                {/* Facebook + Twitter */}
                <div className="flex lg:flex-row flex-col  gap-5 w-full">
                  <div className=" lg:w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Facebook Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      {...register("facebookUrl", {
                        required: "This is required",
                        validate: (value) => {
                          if (!pattern.test(value)) {
                            return "Invalid Url";
                          }

                          return true;
                        },
                      })}
                    />
                    {errors.facebookUrl && (
                      <span className="w-1/2 text-red-500">
                        {errors.facebookUrl.message}
                      </span>
                    )}
                  </div>

                  <div className=" lg:w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      X - Twitter Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("twitterUrl", {
                        required: "This is required",
                        validate: (value) => {
                          if (!pattern.test(value)) {
                            return "Invalid Url";
                          }

                          return true;
                        },
                      })}
                    />
                    {errors.twitterUrl && (
                      <span className="w-1/2 text-red-500">
                        {errors.twitterUrl.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Linkedin  + Instagram  */}
                <div className="flex lg:flex-row flex-col  gap-5 w-full">
                  <div className=" lg:w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Linkedin Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      {...register("linkedinUrl", {
                        required: "This is required",
                        validate: (value) => {
                          if (!pattern.test(value)) {
                            return "Invalid Url";
                          }

                          return true;
                        },
                      })}
                    />
                    {errors.linkedinUrl && (
                      <span className="w-1/2 text-red-500">
                        {errors.linkedinUrl.message}
                      </span>
                    )}
                  </div>

                  <div className=" lg:w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Instagram Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      {...register("instagramUrl", {
                        required: "This is required",
                        validate: (value) => {
                          if (!pattern.test(value)) {
                            return "Invalid Url";
                          }

                          return true;
                        },
                      })}
                    />
                    {errors.instagramUrl && (
                      <span className="w-1/2 text-red-500">
                        {errors.instagramUrl.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Pinterest + Website  */}
                <div className="flex lg:flex-row flex-col gap-5 w-full">
                  <div className=" lg:w-1/2 ">
                    <label className="label mb-2 text-sm font-[600]">
                      Pinterest Url
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      {...register("pinterestUrl", {
                        required: "This is required",
                        validate: (value) => {
                          if (!pattern.test(value)) {
                            return "Invalid Url";
                          }

                          return true;
                        },
                      })}
                    />
                    {errors.pinterestUrl && (
                      <span className="w-1/2 text-red-500">
                        {errors.pinterestUrl.message}
                      </span>
                    )}
                  </div>

                  <div className=" lg:w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Website Url (without http)
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-6 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      {...register("websiteUrl", {
                        required: "This is required",
                        validate: (value) => {
                          if (!pattern.test(value)) {
                            return "Invalid Url";
                          }

                          return true;
                        },
                      })}
                    />
                    {errors.websiteUrl && (
                      <span className="w-1/2 text-red-500">
                        {errors.websiteUrl.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Update + Delete  */}
                <div className="flex lg:flex-row flex-col justify-between gap-2 w-full mt-5">
                  <button
                    type="submit"
                    className="btn flex items-center justify-center  gap-2 bg-C_purple text-white hover:bg-[#40384B] py-6 px-8 text-[16px] rounded-md"
                  >
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

        {/* Second Column */}
        <div className="lg:col-span-4 col-span-12 lg:order-2 order-1">
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
                ref={fileInputRef}
                type="file"
                accept=".jpg, .jpeg, .png"
                className="btn font-Nunito_Sans w-full pt-3 pb-9 bg-C_purple text-white hover:bg-[#40384B] rounded-md "
              />

              {profilePreview ? (
                <label className="label font-Nunito_Sans mt-2">
                  File Size- {imageSize}
                </label>
              ) : (
                <label className="label font-Nunito_Sans mt-2">
                  File Size Must be up to 1Mb
                </label>
              )}
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

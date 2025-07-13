import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { RxCross2, RxUpdate } from "react-icons/rx";

import useSignedInUser from "../../../hooks/useSignedInUser/useSignedInUser";

const AddNewProperty = () => {
  // Custom hook to load the current user from DB
  const [currentUserFromDB] = useSignedInUser();

  // console.log(currentUserFromDB.name);

  const [profilePreview, setProfilePreview] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  // const [currentUserFromDB, setCurrentUserFromDB] = useState(null);

  const fileInputRef = useRef();
  // console.log(fileInputRef.current.value);

  const { _id, name, email, profileImage, phone, role } = currentUserFromDB;
  const firstName = name?.split(" ")?.[0];
  const lastName = name?.split(" ")?.[1];
  // console.log(firstName, lastName, role);

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // console.log(currentUserFromDB);

  // Form Data
  const onSubmit = (data) => {
    const chooseFile = document.getElementById("choose-file");

    const files = chooseFile.files[0];

    data.file = files;
    // console.log(data);

    const fullName = data.firstName + " " + data.lastName;

    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("email", data.email);
    formData.append("role", data.role);
    formData.append("bio", data.bio);
    formData.append("profileImage", data.file);
    formData.append("phone", data.phone);
    formData.append("facebookUrl", data.facebookUrl);
    formData.append("twitterUrl", data.twitterUrl);
    formData.append("instagramUrl", data.instagramUrl);
    formData.append("linkedinUrl", data.linkedinUrl);
    formData.append("pinterestUrl", data.pinterestUrl);
    formData.append("websiteUrl", data.websiteUrl);

    console.log(Object.fromEntries(formData.entries()));

    fetch(`http://localhost:5123/api/user/${_id}`, {
      method: "POST",
      /* headers: {
        "content-type": "multipart/form-data",
      }, */
      body: formData,
    })
      .then((res) => res)
      .then((data) => {
        console.log(data);
        if (data.ok) {
          toast.success("Profile Updated Successfully");
        }
      })
      .catch((error) => console.log(error));
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

  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">
        Dashboard – Add Property
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
                <div className="p-4 font-Nunito_Sans text-sm bg-red-400 text-white rounded-md">
                  These fields are mandatory. Title, Property Category Submit,
                  Property Action Category, Property Media
                </div>

                <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mt-3">
                  Property Description
                </h1>

                {/* Title  */}
                <div className="flex flex-col w-full">
                  <label className="label mb-2 text-sm font-[600]">
                    *Title (mandatory)
                  </label>
                  <input
                    className="input w-full text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-7 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                    {...register("title", {
                      required: true,
                    })}
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col w-full">
                  <label className="label mb-2 text-sm font-[600]">
                    Description
                  </label>

                  <textarea
                    className="textarea  w-full h-40 text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                    {...register("description", {
                      required: "This is required",
                      maxLength: {
                        value: 500,
                        message:
                          "Description should be less than 500 Characters",
                      },
                      minLength: {
                        value: 50,
                        message:
                          "Description should be more than 50 Characters",
                      },
                    })}
                  ></textarea>
                  {errors.description && (
                    <span className="w-1/2 text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </div>

                {/* ///////////////////////////////////// */}

                {/* Property Price */}
                <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mt-3">
                  Property Price
                </h1>

                {/* Price  */}
                <div className="flex lg:flex-row flex-col  gap-5 w-full">
                  <div className=" lg:w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Price in € (only numbers)
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-7 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      type="number"
                      {...register("price", {
                        required: "This is required",
                      })}
                    />
                    {errors.price && (
                      <span className="w-1/2 text-red-500">
                        {errors.price.message}
                      </span>
                    )}
                  </div>

                  <div className=" lg:w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      After Price Label (ex: "/month")
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-7 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("afterPriceLabel", {
                        required: "This is required",
                      })}
                    />
                    {errors.afterPriceLabel && (
                      <span className="w-1/2 text-red-500">
                        {errors.afterPriceLabel.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* ///////////////////////////////////// */}

                {/* Select Categories  */}
                <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700  mt-3">
                  Select Categories
                </h1>

                {/* categories */}
                <div className="flex lg:flex-row flex-col  gap-5 w-full">
                  <div className="flex flex-col w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Category
                    </label>

                    <select
                      className=" text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-5 px-3 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      {...register("category", { required: true })}
                    >
                      <option value="none">None</option>
                      <option value="apartments">Apartments</option>
                      <option value="condos">Condos</option>
                      <option value="duplexes">Duplexes</option>
                      <option value="houses">Houses</option>
                      <option value="industrial">Industrial</option>
                      <option value="land">Land</option>
                      <option value="retail">Retail</option>
                      <option value="villas">Villas</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Listed In
                    </label>

                    <select
                      className=" text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-5 px-3 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      {...register("listedIn", { required: true })}
                    >
                      <option value="none">None</option>
                      <option value="rentals">Rentals</option>
                      <option value="sales">Sales</option>
                    </select>
                  </div>
                </div>

                {/* /////////////////////////////// */}

                {/* Listing Location */}

                <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mt-5">
                  Listing Location
                </h1>

                {/* Address */}
                <div className="flex flex-col w-full">
                  <label className="label mb-2 text-sm font-[600]">
                    *Address
                  </label>
                  <input
                    placeholder="Enter Address"
                    className="input w-full text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-7 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                    {...register("address", {
                      required: true,
                    })}
                  />
                </div>

                {/* County / State + City */}
                <div className="flex lg:flex-row flex-col  gap-5 w-full">
                  <div className=" lg:w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Country / State
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-7 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      {...register("countryORstate", {
                        required: "This is required",
                      })}
                    />
                    {errors.countryORstate && (
                      <span className="w-1/2 text-red-500">
                        {errors.countryORstate.message}
                      </span>
                    )}
                  </div>

                  <div className=" lg:w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      City
                    </label>
                    <input
                      placeholder="Enter City"
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-7 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("city", {
                        required: "This is required",
                      })}
                    />
                    {errors.city && (
                      <span className="w-1/2 text-red-500">
                        {errors.city.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Neighborhood + Zip */}
                <div className="flex lg:flex-row flex-col  gap-5 w-full">
                  <div className=" lg:w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Neighborhood
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-7 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2"
                      {...register("neighborhood", {
                        required: "This is required",
                      })}
                    />
                    {errors.neighborhood && (
                      <span className="w-1/2 text-red-500">
                        {errors.neighborhood.message}
                      </span>
                    )}
                  </div>

                  <div className=" lg:w-1/2">
                    <label className="label  mb-2 text-sm font-[600]">
                      Zip
                    </label>
                    <input
                      className="input text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-7 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300"
                      {...register("zip", {
                        required: "This is required",
                      })}
                    />
                    {errors.zip && (
                      <span className="w-1/2 text-red-500">
                        {errors.zip.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* ////////////////////////////// */}

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
                    {isSubmitting ? (
                      "Updating..."
                    ) : (
                      <span className="flex gap-2 items-center">
                        {" "}
                        <RxUpdate /> Update Profile
                      </span>
                    )}
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
                  src={profilePreview ? profilePreview : profileImage}
                />

                <div id="img-preview"></div>
              </div>
            </div>

            <fieldset className="fieldset">
              <input
                name="image"
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

export default AddNewProperty;

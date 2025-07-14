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
                      County / State
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

                {/* Country */}
                <div className="flex lg:flex-row flex-col  gap-5 w-full">
                  <div className="flex flex-col w-1/2">
                    <label className="label mb-2 text-sm font-[600]">
                      Country
                    </label>

                    <select
                      className=" text-C_LightGray/40 focus:text-C_LightGray/80  border-2  focus:border-2 bg-[#F1F1F1] focus:bg-[#ffffff] rounded-md py-5 px-3 border-[#F1F1F1] focus:border-C_purple focus:outline-0 font-Nunito_Sans font-[500] duration-300 mb-2 me-3"
                      {...register("country", { required: true })}
                    >
                      <option value="none">None</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cabo Verde">Cabo Verde</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo (Congo-Brazzaville)">
                        Congo (Congo-Brazzaville)
                      </option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic Republic of the Congo">
                        Democratic Republic of the Congo
                      </option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Ivory Coast">Ivory Coast</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia">Micronesia</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="North Korea">North Korea</option>
                      <option value="North Macedonia">North Macedonia</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Vincent and the Grenadines">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Korea">South Korea</option>
                      <option value="South Sudan">South Sudan</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-Leste">Timor-Leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City">Vatican City</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
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

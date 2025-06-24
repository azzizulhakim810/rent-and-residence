const SignIn = () => {
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
            <fieldset className="w-1/2 gap-3 fieldset border-none rounded-box  border m-10">
              {/*  <legend className="fieldset-legend">Sign In</legend> */}

              {/* <label className="label">Email</label> */}
              <h1 className="text-2xl font-[600] font-Nunito ">
                Sign into your account
              </h1>
              <input
                type="email"
                className="input focus:outline-0 outline-C_purple  w-full"
                placeholder="Email"
              />

              {/* <label className="label">Password</label> */}
              <input
                type="password"
                className="input focus:outline-0 outline-C_purple  w-full"
                placeholder="Password"
              />

              <button className="btn bg-C_purple text-white hover:bg-[#40384B] rounded-md hidden lg:flex mt-5">
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SignIn;

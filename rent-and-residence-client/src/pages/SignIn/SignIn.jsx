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
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default SignIn;

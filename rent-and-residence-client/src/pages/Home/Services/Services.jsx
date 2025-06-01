import { TbGavel } from "react-icons/tb";

const Services = () => {
  return (
    <div>
      {/* <div className=" py-20 text-center flex justify-center items-center gap-5">
        <div className="w-[70px] h-[4px] bg-C_purple text-white">
          <hr />
        </div>
        <h1 className="text-lg font-Nunito_Sans tracking-wider uppercase text-title_color">
          Services
        </h1>
      </div> */}

      <h1 className="w-5/12 py-6 text-[30px] font-[600] font-Nunito text-title_color">
        We're an agency tailored to all clients' needs that always delivers
      </h1>

      <div className="flex justify-start gap-6 py-5">
        <div className="card  w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="shadow-[0px_0px_150px_rgba(119,84,246,0.2)] flex flex-col justify-center items-center gap-5 p-6 px-20 ">
          <figure className="p-5 text-4xl bg-[#FDE2CD] rounded-full w-20 h-20">
            <TbGavel className="" />
          </figure>
          <div className=" items-center text-center">
            <h2 className=" font-Nunito font-[600] text-[20px]">
              Legal services
            </h2>
            <p className=" font-Nunito_Sans font-[500] text-[18px]">
              Expert legal help for all related property items
            </p>
            <div className="">
              <button className="btn ">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCategories from "../../../hooks/UseCategories/useCategories";

const Location = () => {
  const [categories] = useCategories();
  console.log(categories);
  return (
    <div className="grid grid-cols-12 lg:py-20 py-20 relative ">
      {/* Section Title Desktop | Hidden on Mobile */}
      <SectionTitle title={"Locations"} />

      <div className="lg:col-span-11 col-span-12">
        <h1 className="lg:w-5/12 w-full py-6 text-[30px] font-[600] font-Nunito text-title_color lg:text-left text-center">
          Explore the most attractive categories and find a property
        </h1>

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 pb-5">
          {categories?.map((category, i) => (
            <div key={i} className="col-span-4 w-full shadow-md">
              {/* Image  */}
              <figure className="bg-[url(https://i.ibb.co/kVZkcdjJ/catgeory-9-1.webp)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-lg">
                <div className="absolute top-0 left-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                  <h1 className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                    {category._id}
                  </h1>
                </div>

                <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                  <h1 className=" text-white font-Nunito font-[700] text-[15px] rounded px-6 ">
                    {category.totalItems} Listing
                  </h1>
                </div>
              </figure>
            </div>
          ))}
        </div>

        {/* <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 pb-5">
          <div className="lg:col-span-8 col-span-6 w-full shadow-md">
       
            <figure className="bg-[url(https://i.ibb.co/kVZkcdjJ/catgeory-9-1.webp)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-lg">
              <div className="absolute top-0 left-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                <h1 className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                  Castellana
                </h1>
              </div>

              <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                <h1 className=" text-white font-Nunito font-[700] text-[15px] rounded px-6 ">
                  1 Listing
                </h1>
              </div>
            </figure>
          </div>

          <div className="lg:col-span-4 col-span-6 w-full shadow-md">
      
            <figure className="bg-[url(https://i.ibb.co/spFLSFLq/house6-1.webp)] h-[250px] w-full bg-cover bg-no-repeat relative bg-black/20 hover:bg-black/10 duration-400 bg-blend-overlay cursor-pointer rounded-lg">
              <div className="absolute top-0 left-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
                <h1 className=" text-white font-Nunito font-[700] text-[18px] rounded px-6 ">
                  Castellana
                </h1>
              </div>

              <div className="absolute bottom-0 left-0 mb-5 flex flex-col gap-1">
                <h1 className=" text-white font-Nunito font-[700] text-[15px] rounded px-6 ">
                  1 Listing
                </h1>
              </div>
            </figure>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Location;

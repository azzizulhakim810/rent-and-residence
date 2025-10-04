import AllCategories from "../../../components/AllCategories/AllCategories";
import LatestProps from "../../../components/LatestProps/LatestProps";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Change Currency */}
      <div className="shadow-sm  p-8 w-full rounded-md bg-white">
        <label
          htmlFor="propertyType"
          className="block text-[16px] font-[700] font-Nunito tracking-wider text-gray-700 mb-2"
        >
          Change Currency
        </label>
        <select
          defaultValue="USD"
          className=" join-item select block w-full bg-transparent border-gray-300 border-[1px] rounded-md focus:outline-none focus:ring-0 focus:ring-gray-300 focus:border-[1px] text-[14px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
        >
          <option disabled={true}>Choose Here</option>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>

      {/* Change Measurement */}
      <div className="shadow-sm  p-8 w-full rounded-md bg-white">
        <label
          htmlFor="propertyType"
          className="block text-[16px] font-[700] font-Nunito tracking-wider text-gray-700 mb-2"
        >
          Change Measurement
        </label>
        <select
          defaultValue="square feet - ft2"
          className=" join-item select block w-full bg-transparent border-gray-300 border-[1px] rounded-md focus:outline-none focus:ring-0 focus:ring-gray-300 focus:border-[1px] text-[14px] text-gray-500 focus:text-gray-500 font-Nunito_Sans"
        >
          <option disabled={true}>Choose Here</option>
          <option>square feet - ft2</option>
          <option>square meters - m2</option>
          <option>acres - ac</option>
          <option>square yards - yd2</option>
          <option>hectares - ha</option>
        </select>
      </div>

      {/* Our Listings */}
      <div className="shadow-sm  p-8 w-full rounded-md bg-white">
        <label
          htmlFor="propertyType"
          className="block text-[16px] font-[700] font-Nunito tracking-wider text-C_DarkGray mb-5"
        >
          Our Listings
        </label>

        <AllCategories />
      </div>

      {/* Latest Listings */}
      <div className="shadow-sm  p-8 w-full rounded-md bg-white">
        <label
          htmlFor="propertyType"
          className="block text-[16px] font-[700] font-Nunito tracking-wider text-C_DarkGray mb-5"
        >
          Latest Listings
        </label>

        <nav className="flex flex-col gap-2">
          <LatestProps />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

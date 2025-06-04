const Sidebar = () => {
  return (
    <div className="flex flex-col gap-6">
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

      <div className="shadow-sm  p-8 w-full rounded-md bg-white">
        <label
          htmlFor="propertyType"
          className="block text-[16px] font-[700] font-Nunito tracking-wider text-C_DarkGray mb-5"
        >
          Our Listings
        </label>

        <ul className="list bg-base-100 rounded-box">
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Apartments</h1>
            <p>(2)</p>
          </li>

          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>

          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1>Condos</h1>
            <p>(12)</p>
          </li>

          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>

          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Duplexes</h1>
            <p>(3)</p>
          </li>

          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Houses</h1>
            <p>(2)</p>
          </li>
          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Industrial</h1>
            <p>(1)</p>
          </li>
          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Offices</h1>
            <p>(2)</p>
          </li>
          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>
          <li className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray">
            <h1 className="">Retail</h1>
            <p>(5)</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

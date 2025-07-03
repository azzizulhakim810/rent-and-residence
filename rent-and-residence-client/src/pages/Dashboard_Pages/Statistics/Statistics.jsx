const Statistics = () => {
  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">Dashboard - Main</h1>

      <div className="grid grid-cols-12 gap-4 pt-5">
        <div className="lg:col-span-8 col-span-10 ">
          <div className="shadow-[0_8px_8px_rgba(0,0,0,0.10)] p-8 w-full rounded-md bg-white">
            <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-4">
              Account Summary
            </h1>

            <div className="grid grid-cols-3 gap-3 font-Nunito_Sans text-C_LightGray">
              <h3>Total Properties: 0</h3>
              <h3>Total Properties: 0</h3>
              <h3>Total Properties: 0</h3>
              <h3>Total Properties: 0</h3>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-10 ">
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
        </div>
      </div>
    </div>
  );
};

export default Statistics;

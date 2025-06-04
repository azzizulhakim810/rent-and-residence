const Sidebar = () => {
  return (
    <div>
      <div className="shadow-lg">
        <h1>Sidebar</h1>
        <select
          defaultValue="USD"
          className=" join-item select block w-full ms-3 mx-5 bg-transparent border-gray-300 border-[1px] rounded focus:outline-none focus:ring-0 focus:ring-gray-300 focus:border-[1px] text-[14px] text-C_DarkGray focus:text-C_DarkGray font-Nunito_Sans"
        >
          <option disabled={true}>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;

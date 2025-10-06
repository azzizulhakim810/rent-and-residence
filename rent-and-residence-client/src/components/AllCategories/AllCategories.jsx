import useCategoriesAndCities from "../../hooks/useCategoriesAndCities/useCategoriesAndCities";

const AllCategories = () => {
  const [categoriesAndCities] = useCategoriesAndCities();
  const { allCategories } = categoriesAndCities || [];

  return (
    <ul className="list bg-base-100 rounded-box">
      {allCategories?.map((category, i) => (
        <>
          <li
            key={i}
            className=" flex justify-between font-Nunito_Sans text-[15px] text-C_LightGray"
          >
            <h1 className="">{category._id}</h1>
            <p>({category.totalItems})</p>
          </li>

          <span className="bg-gray-400/50 h-[0.5px] my-4"></span>
        </>
      ))}
    </ul>
  );
};

export default AllCategories;

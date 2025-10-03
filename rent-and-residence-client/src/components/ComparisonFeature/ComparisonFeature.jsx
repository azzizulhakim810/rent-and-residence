import { Link } from "react-router-dom";
import { usePopup } from "../../providers/PopupProvider";
import useComparison from "../../hooks/useComparison/useComparison";

const ComparisonFeature = () => {
  const { isShow } = usePopup();
  const [handleRemoveComparison, comparisonProperties, , , isLoading, ,] =
    useComparison();
  return (
    <div>
      {isShow ? (
        <div
          id="comparisonPopUp"
          className="fixed bottom-0 w-auto shadow-[0px_0px_20px_rgba(0,0,0,0.25)] px-8 py-2 rounded-xl bg-white z-100"
        >
          <div className="flex align-middle items-center">
            <h1 className=" w-full pt-8 pb-2 text-[18px] font-[600] font-Nunito text-title_color lg:text-left text-center">
              Compare Listings
            </h1>

            <button
              onClick={handleRemoveComparison}
              className=" absolute top-0 right-0 bg-C_purple text-white px-4 py-2 rounded-tr-lg rounded-bl-lg cursor-pointer"
            >
              X
            </button>
          </div>
          <div className="flex gap-2">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <span className="loading loading-ring loading-xl text-C_purple"></span>
              </div>
            ) : (
              comparisonProperties?.map((eachProp) => (
                <figure
                  key={eachProp?._id}
                  className="w-20 h-16 bg-cover bg-center relative rounded-lg"
                  style={{
                    backgroundImage: eachProp?.images
                      ? `url(${eachProp?.images?.[0]})`
                      : "none",
                  }}
                >
                  {!eachProp?.images && (
                    <div className="flex justify-center items-center w-full h-full">
                      <span className="loading loading-ring loading-md text-C_purple"></span>
                    </div>
                  )}
                </figure>
              ))
            )}
          </div>

          <Link
            to="/comparison"
            className="btn mx-auto my-2 bg-C_purple text-white hover:bg-transparent hover:text-C_purple  border-2 rounded-md hidden lg:flex capitalize text-[15px] font-Nunito_Sans py-2"
          >
            Compare
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ComparisonFeature;

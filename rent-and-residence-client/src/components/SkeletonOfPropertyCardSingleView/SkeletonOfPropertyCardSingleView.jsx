const SkeletonOfPropertyCardSingleView = () => {
  return (
    <>
      <div className="w-full grid grid-cols-2 shadow-lg rounded-lg">
        {/* Image  */}
        <figure className="w-full skeleton h-64 relative rounded-l-lg">
          <div className="absolute top-0 right-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
            <div className="skeleton h-4 w-20"></div>

            <div className="skeleton h-4 w-20"></div>
          </div>
        </figure>

        {/* Features  */}
        <div>
          <div className="card-body ">
            {/* Price & Title  */}
            <div className=" mb-10 flex flex-col gap-1">
              <div className="skeleton h-4 w-60 mb-3"></div>

              <div className="skeleton h-4 w-40"></div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="skeleton h-4 w-20"></div>

              <div className="skeleton h-4 w-20"></div>

              <div className="skeleton h-4 w-20"></div>

              <div className="skeleton h-4 w-20"></div>
            </div>
          </div>

          {/* Divider  */}
          <div className="bg-gray-300 h-[.5px] mt-0 mb-0"></div>

          {/* Property Owner Info  */}
          <div className="px-5 py-4 flex items-center justify-between">
            <div className="avatar flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="skeleton h-4 w-40"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 shadow-lg rounded-lg">
        {/* Image  */}
        <figure className="w-full skeleton h-64 relative rounded-l-lg">
          <div className="absolute top-0 right-0 mr-3 mt-5 flex gap-3 font-Nunito_Sans">
            <div className="skeleton h-4 w-20"></div>

            <div className="skeleton h-4 w-20"></div>
          </div>
        </figure>

        {/* Features  */}
        <div>
          <div className="card-body ">
            {/* Price & Title  */}
            <div className=" mb-10 flex flex-col gap-1">
              <div className="skeleton h-4 w-60 mb-3"></div>

              <div className="skeleton h-4 w-40"></div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="skeleton h-4 w-20"></div>

              <div className="skeleton h-4 w-20"></div>

              <div className="skeleton h-4 w-20"></div>

              <div className="skeleton h-4 w-20"></div>
            </div>
          </div>

          {/* Divider  */}
          <div className="bg-gray-300 h-[.5px] mt-0 mb-0"></div>

          {/* Property Owner Info  */}
          <div className="px-5 py-4 flex items-center justify-between">
            <div className="avatar flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="skeleton h-4 w-40"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonOfPropertyCardSingleView;

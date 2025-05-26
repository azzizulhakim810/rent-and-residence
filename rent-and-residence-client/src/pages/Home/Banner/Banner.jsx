const Banner = () => {
  return (
    <div className="min-h-[80vh] bg-[#F0F5FF] grid grid-cols-6 justify-between items-center">
      <div className="p-10 bg-[#F0F5FF] col-span-4">
        <h1 className="text-6xl font-semibold">
          Find your next <br />
          Perfect home in Madrid
        </h1>
        <p className="py-6 font-normal text-xl text-[#9b9b9b]">
          Through our proprietary platform, WpResidence is changing how agents
          and clients navigate the process of finding or selling a home.
        </p>
      </div>

      <div className="col-span-2">
        <img
          src="https://i.ibb.co/ZzSgjqsT/Home-hero.webp"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Banner;

const SectionTitle = ({ title }) => {
  return (
    <div className="col-span-1 lg:flex hidden -ms-15 h-[15vw] rotate-270 text-center justify-center items-center gap-5 relative ">
      <span className="relative w-[50px] inline-block before:absolute h-[3px] before:-inset-0  before:block before:bg-C_purple "></span>
      <h1 className="text-[13px] font-[600] font-Nunito_Sans tracking-[5px] uppercase text-title_color">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;

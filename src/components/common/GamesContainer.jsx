function GamesContainer({ children }) {
  return (
    <div className="w-[80%] flex justify-center">
      <div className="w-[90%]">
        <div className="pt-[82px]">
          <h2 className="text-[40px] font-bold ">
            Explore Fun & Educational Games
          </h2>
          <p className="text-[30px] font-medium text-[#333333]">
            Select and upload the files of your choice
          </p>
        </div>
        <h3 className="text-[33px] font-medium font-poppins pt-3 pb-3">
          Games
        </h3>
        <div className="flex justify-between">{children}</div>
      </div>
    </div>
  );
}

export default GamesContainer;

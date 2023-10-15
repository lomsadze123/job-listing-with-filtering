import remove from "../assets/icon-remove.svg";

const Filter = () => {
  return (
    <div className="relative mt-[-55px] left-0 bg-white bottom-[25px] flex justify-between w-full py-5 pl-[19px] pr-[25px] rounded-[5px] shadow-custom lg:px-10">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center">
          <h4 className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5]">
            HTML
          </h4>
          <img
            className="bg-[#5CA5A5] p-2 cursor-pointer hover:bg-[#2B3939]"
            src={remove}
            alt="remove icon"
          />
        </div>
        <div className="flex items-center">
          <h4 className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5]">
            Javascript
          </h4>
          <img
            className="bg-[#5CA5A5] p-2 cursor-pointer hover:bg-[#2B3939]"
            src={remove}
            alt="remove icon"
          />
        </div>
      </div>
      <button className="text-[#7C8F8F] hover:text-[#5CA5A5] hover:underline ">
        Clear
      </button>
    </div>
  );
};

export default Filter;

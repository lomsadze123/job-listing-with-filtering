import remove from "../assets/icon-remove.svg";

interface Types {
  filter: string[];
  filterRole: string;
  filterLevel: string;
  filterTool: string[];
  handleClear: (filters: string) => void;
  setChoice: (value: boolean) => void;
}

const Filter = ({
  filter,
  filterRole,
  filterLevel,
  filterTool,
  setChoice,
  handleClear,
}: Types) => {
  return (
    <div className="relative mt-[-55px] left-0 bg-white bottom-[25px] flex justify-between w-full py-5 pl-[19px] pr-[25px] rounded-[5px] shadow-custom lg:px-10">
      <div
        className="flex flex-wrap gap-4"
        onClick={(e) => {
          if (e.currentTarget.childElementCount <= 1) {
            setChoice(false);
          }
        }}
      >
        {filterRole && (
          <FilterTag
            text={filterRole}
            onClear={() => handleClear("filterRole")}
          />
        )}
        {filterLevel && (
          <FilterTag
            text={filterLevel}
            onClear={() => handleClear("filterLevel")}
          />
        )}
        {filter.map((i, index) => (
          <FilterTag key={index} text={i} onClear={() => handleClear(i)} />
        ))}
        {filterTool.map((i, index) => (
          <FilterTag key={index} text={i} onClear={() => handleClear(i)} />
        ))}
      </div>
      <button
        onClick={() => handleClear("")}
        className="text-[#7C8F8F] hover:text-[#5CA5A5] hover:underline "
      >
        Clear
      </button>
    </div>
  );
};

const FilterTag = ({
  text,
  onClear,
}: {
  text: string;
  onClear: () => void;
}) => {
  return (
    <div className="flex items-center">
      <h4 className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5]">
        {text}
      </h4>
      <img
        onClick={onClear}
        className="bg-[#5CA5A5] p-2 cursor-pointer hover:bg-[#2B3939]"
        src={remove}
        alt="remove icon"
      />
    </div>
  );
};

export default Filter;

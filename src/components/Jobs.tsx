import { Fragment, useState } from "react";
import Data from "./Data";
import Filter from "./Filter";

const Jobs = () => {
  const [choice, setChoice] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [filterRole, setFilterRole] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [filterTool, setFilterTool] = useState<string[]>([]);

  const handleChoose = (languages: string) => {
    if (!filter.includes(languages)) {
      setFilter([...filter, languages]);
    }
  };

  const handleFilterRole = (role: string) => {
    setFilterRole(role);
  };

  const handleFilterLevel = (level: string) => {
    setFilterLevel(level);
  };

  const handleFilterTool = (item: string) => {
    if (!filterTool.includes(item)) {
      setFilterTool([...filterTool, item]);
      console.log(item);
    }
  };

  return (
    <main className="px-6 mx-auto my-14 flex flex-col gap-10 max-w-[1110px] lg:px-0">
      {choice && <Filter />}
      {Data.map(
        (data) =>
          (filter.length === 0 ||
            filter.every((tool) => data.languages.includes(tool))) &&
          (filterRole === "" || data.role === filterRole) &&
          (filterLevel === "" || data.level === filterLevel) &&
          (filterTool.length === 0 ||
            filterTool.every((tool) => data.tools.includes(tool))) && (
            <div
              key={data.id}
              className={`bg-white ${
                (data.postedAt === "1d ago" || data.postedAt === "2d ago") &&
                data.featured === true &&
                `border-l-[5px]`
              } rounded-[5px] border-[#5CA5A5] shadow-custom px-5 pt-8 pb-6 lg:flex lg:items-center justify-between`}
            >
              <div className="relative lg:flex lg:items-center lg:gap-6">
                <img
                  className="max-w-[3rem] absolute top-[-3.5rem] lg:static lg:max-w-[88px]"
                  src={data.logo}
                  alt={data.company}
                />
                <div>
                  <div className="flex gap-8 items-center lg:gap-4">
                    <h2 className="text-[#5CA5A5] text-base lg:text-lg">
                      {data.company}
                    </h2>
                    <div className="flex gap-2 text-white text-ms">
                      {(data.postedAt === "1d ago" ||
                        data.postedAt === "2d ago") && (
                        <p className="pb-[3px] px-2 pt-[7px] bg-[#5CA5A5] rounded-xl">
                          NEW!
                        </p>
                      )}
                      {data.featured === true && (
                        <p className="pt-[6px] px-2 pb-1 bg-[#2B3939] rounded-xl">
                          FEATURED
                        </p>
                      )}
                    </div>
                  </div>
                  <h3 className="my-[9px] text-[15px] leading-6 text-[#2B3939] lg:text-[22px] cursor-pointer hover:text-[#5CA5A5]">
                    {data.position}
                  </h3>
                  <ul className="flex gap-[10px] font-medium text-[#7C8F8F] tracking-[-0.123px] lg:text-lg">
                    <li>{data.postedAt}</li>
                    <li className="list-disc list-inside">{data.contract}</li>
                    <li className="list-disc list-inside">{data.location}</li>
                  </ul>
                </div>
                <hr className="my-4 bg-[#B7C4C4] border-0 h-[1px] lg:hidden" />
              </div>
              <div className="flex gap-4 flex-wrap text-[#5CA5A5] tracking-[-0.123px]">
                {/* temporary styles. I could make it with just one class. */}
                <h4
                  onClick={() => handleFilterRole(data.role)}
                  className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5] cursor-pointer hover:bg-opacity-100 hover:text-white"
                >
                  {data.role}
                </h4>
                <h4
                  onClick={() => handleFilterLevel(data.level)}
                  className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5] cursor-pointer hover:bg-opacity-100 hover:text-white"
                >
                  {data.level}
                </h4>
                {data.languages.map((languages, index) => (
                  <h4
                    onClick={() => handleChoose(languages)}
                    key={index}
                    className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5] cursor-pointer hover:bg-opacity-100 hover:text-white"
                  >
                    {languages}
                  </h4>
                ))}

                {data.tools.map((tool, index) => (
                  <Fragment key={index}>
                    {data.tools.length > 0 && (
                      <h4
                        onClick={() => handleFilterTool(tool)}
                        className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5] cursor-pointer hover:bg-opacity-100 hover:text-white"
                      >
                        {tool}
                      </h4>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          )
      )}
    </main>
  );
};

export default Jobs;

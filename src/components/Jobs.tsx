import { Fragment } from "react";
import Data from "./Data";

const Jobs = () => {
  return (
    <main className="mx-6 mt-14 flex flex-col gap-10">
      {Data.map((data) => (
        <div
          key={data.id}
          className={`bg-white ${
            (data.postedAt === "1d ago" || data.postedAt === "2d ago") &&
            data.featured === true &&
            `border-l-[5px]`
          } rounded-[5px] border-[#5CA5A5] shadow-custom px-5 pt-8 pb-6`}
        >
          <div className="relative">
            <img
              className="max-w-[3rem] absolute top-[-3.5rem]"
              src={data.logo}
              alt={data.company}
            />
            <div className="flex gap-8 items-center">
              <h2 className="text-[#5CA5A5] text-base">{data.company}</h2>
              <div className="flex gap-2 text-white text-ms">
                {(data.postedAt === "1d ago" || data.postedAt === "2d ago") && (
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
            <h3 className="my-[9px] text-[15px] leading-6 text-[#2B3939]">
              {data.position}
            </h3>
            <ul className="flex gap-[10px] font-medium text-[#7C8F8F] tracking-[-0.123px]">
              <li>{data.postedAt}</li>
              <li className="list-disc list-inside">{data.contract}</li>
              <li className="list-disc list-inside">{data.location}</li>
            </ul>
            <hr className="my-4 bg-[#B7C4C4] border-0 h-[1px]" />
          </div>
          <div className="flex gap-4 flex-wrap text-[#5CA5A5] tracking-[-0.123px]">
            {/* temporary styles. I could make it with just one class. */}
            <h4 className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5]">
              {data.role}
            </h4>
            <h4 className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5]">
              {data.level}
            </h4>
            {data.languages.map((languages, index) => (
              <h4
                key={index}
                className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5]"
              >
                {languages}
              </h4>
            ))}

            {data.tools.map((tool, index) => (
              <Fragment key={index}>
                {data.tools.length > 0 && (
                  <h4 className="pt-[5px] pr-[11px] pb-[3px] pl-2 bg-[#5CA5A5] bg-opacity-10 rounded text-[#5CA5A5]">
                    {tool}
                  </h4>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Jobs;

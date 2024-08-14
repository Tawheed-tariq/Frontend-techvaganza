import { Link } from "react-router-dom";

const ScheduleItem = ({title, startTime, endTime, venue, registerUrl, exploreUrl}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 pl-5 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="mt-2 lg:mt-0 lg:ml-4">{startTime} - {endTime}</span>
      </div>
      <div className="mt-2 lg:mt-0">{venue}</div>
      <div className="mt-2 lg:mt-0 space-x-2 py-6 px-5 flex">
        <button className="px-8 py-1 ShadowBlur text-base rounded font-medium text-white bg-[#a2834b] hover:bg-[#f0ecdf] hover:text-black border border-[#a2834b] focus:outline-none text-center">
          <Link to={exploreUrl}>
            EXPLORE
          </Link>
        </button>
      
        <button className="px-8 py-1 ShadowBlur text-base rounded font-medium text-white bg-[#a2834b] hover:bg-[#f0ecdf] hover:text-black border border-[#a2834b] focus:outline-none text-center">
          <Link to={registerUrl}>
            REGISTER
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ScheduleItem;
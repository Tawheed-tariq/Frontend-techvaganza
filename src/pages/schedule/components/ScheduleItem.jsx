import { Link } from "react-router-dom";

const ScheduleItem = ({title, startTime, endTime, venue, registerUrl, exploreUrl}) => {
    return (
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 px-4 py-4 bg-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="mt-2 lg:mt-0 lg:ml-4">{startTime} - {endTime}</span>
        </div>
        <div className="mt-2 lg:mt-0">{venue}</div>
        <div className="mt-2 lg:mt-0 space-x-2">
          <Link to={exploreUrl}>
            <button className="px-8 py-1 text-base text-sm rounded font-medium text-white bg-[#a2834b] hover:bg-[#f0ecdf] hover:text-black hover:transition-[500ms] border border-[#a2834b] focus:ring-4 focus:outline-none focus:ring-[#a2834b] text-center">
              EXPLORE
            </button>
          </Link>
          <Link to={registerUrl}>
            <button className="px-8 py-1 text-base text-sm rounded font-medium text-white bg-[#a2834b] hover:bg-[#f0ecdf] hover:text-black hover:transition-[500ms] border border-[#a2834b] focus:ring-4 focus:outline-none focus:ring-[#a2834b] text-center">
              REGISTER
            </button>
          </Link>
        </div>
      </div>
    );
  };

  
export default ScheduleItem;
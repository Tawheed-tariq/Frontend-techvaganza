import { Link } from "react-router-dom";

const ScheduleItem = ({title, startTime, endTime, venue, registerUrl, exploreUrl}) => {
    return (
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 px-4 py-4 bg-gray-100">
        <div class="flex flex-col lg:flex-row lg:items-center">
          <h3 class="text-xl font-bold">{title}</h3>
          <span class="mt-2 lg:mt-0 lg:ml-4">{startTime} - {endTime}</span>
        </div>
        <div class="mt-2 lg:mt-0">{venue}</div>
        <div class="mt-2 lg:mt-0 space-x-2">
          <Link to={exploreUrl}>
            <button class="border border-gray-500 font-bold py-2 px-4 rounded">
              Explore
            </button>
          </Link>
          <Link to={registerUrl}>
            <button class="border border-gray-500 font-bold py-2 px-4 rounded">
              Register
            </button>
          </Link>
        </div>
      </div>
    );
  };

  
export default ScheduleItem;
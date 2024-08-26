import { Link } from "react-router-dom";

const ScheduleItem = ({title, startTime, endTime, venue, registerUrl, exploreUrl}) => {
  const Titles = title.split(", ");
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 pl-5 py-4 md:py-0 bg-gray-100 font-kodeMono">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <h3 className="text-2xl font-bold text-primary font-neotriad py-2 max-w-72">
          {
            Titles.map((title, index) => (
              <span key={index} className="block">{title}</span>
            ))
          }
        </h3>
        <span className="mt-2 lg:mt-0 lg:ml-4">{startTime} - {endTime}</span>
      </div>
      <div className="mt-2 lg:mt-0">{venue}</div>
      <div className="mt-2 lg:mt-0 space-x-2 py-2 md:py-6 md:px-5 flex">
        <button className="px-4 md:px-8 py-1 ShadowBlur text-sm md:text-base rounded-md font-medium text-white bg-primary border border-primary focus:outline-none text-center">
          <Link to={exploreUrl}>
            EXPLORE
          </Link>
        </button>
      
        <button className="px-4 md:px-8 py-1 ShadowBlur text-sm md:text-base rounded-md font-medium text-white bg-primary border border-primary focus:outline-none text-center">
          <Link to={registerUrl}>
            REGISTER
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ScheduleItem;
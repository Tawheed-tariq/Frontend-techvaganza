import { Link } from "react-router-dom";

const Card = ({ event, index }) => {
  return (
    <div
      className={`relative flex flex-col ${
        index % 2 == 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } items-center sm:space-x-6`}
    >
      <figure
        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 h-auto"
      >
        <a href="#">
          <img
            src={event.image}
            alt="Mr-mrs rang e chinar"
            className="w-full h-[460px] object-cover"
          />
        </a>
      </figure>

      <div
        className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 relative sm:-translate-x-12"
      >
        <div className="p-6 md:p-8 lg:p-10 bg-background shadow-lg h-full">
          <div className="text-xl sm:text-2xl font-semibold mb-4 text-customBrown">
            {event.title}
          </div>
          <p className="mb-4 sm:mb-6">{event.description}</p>
          <Link
            to={event.link}
            className=""
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

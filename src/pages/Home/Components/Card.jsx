import { Link } from "react-router-dom";

const Card = ({ event, index }) => {
  return (
    <div
      className={`relative flex flex-col ${
        index % 2 == 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } items-center sm:space-x-6`}
    >
      <img
        src={event.image}
        alt="Mr-mrs rang e chinar"
        className="w-full sm:max-w-sm h-[460px] object-cover"
      />

      <div
        className={`w-full md:max-w-2xl relative ShadowLarge ${index%2 == 0? 'sm:-translate-x-20': 'sm:translate-x-20'}`}
      >
        <div className="p-6 md:p-8 lg:p-10 bg-background shadow-lg h-full">
          <div className="text-2xl sm:text-3xl font-semibold mb-4 text-primary overflow-visible">
            {event.title}
          </div>
          <p className="mb-6 md:mb-8">{event.description}</p>
          <Link
            to={event.link}
            className="px-3 md:px-6 py-3 ShadowBlur text-sm md:text-base rounded-md font-medium text-white bg-primary border border-primary text-center"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

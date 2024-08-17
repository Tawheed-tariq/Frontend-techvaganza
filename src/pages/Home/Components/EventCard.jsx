import { FaDiamond } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EventCard = ({ title, time, location, backgroundImage, link, index }) => {
    return (
      <div
        className="w-96 text-center md:w-1/2 lg:w-1/3 sm:text-center p-4"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay = {50*index}
      >
        <div
          className="relative bg-cover bg-center flex flex-col justify-between rounded-lg text-secondary items-center
           font-semibold m-auto md:max-w-96 brightness-75 bg-blend-overlay px-4 py-6 transition-transform transform hover:scale-105 hover:z-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="w-full h-72 text-left flex flex-col justify-between">
            <h1 className="text-secondary text-4xl font-serif font-semibold overflow-visible">
              {title}
            </h1>
            <ul className="text-white text-lg font-serif">
              <li className="flex items-center">
                <FaDiamond className="w-4 h-4 text-secondary mr-2" />
                {time}
              </li>
              <li className="flex items-center">
                <FaDiamond className="w-4 h-4 text-secondary mr-2" />
                {location}
              </li>
            </ul>
          </div>
          <div className="link absolute top-2 right-2 overflow-visible">
            <Link to={link}>
              <img
                src="/box.png"
                alt="link"
                className="rounded-full transform z-40 hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
export default EventCard;

  // PropTypes validation
  EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };
  


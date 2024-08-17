import { FaDiamond } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// EventCard Component
const EventCard = ({ title, time, location, backgroundImage, link }) => {
  return (
    <div
      className="w-96 text-center md:w-1/2 lg:w-1/3 sm:text-center p-4"
      data-aos="fade-down"
      data-aos-duration="1000"
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

// PropTypes validation
EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

// EventsSection Component
const EventsSection = () => {
  return (
    <div className="flex flex-col  md:p-10">
      {/* Section Header */}
      <div className="text-left px-10 pb-5">
        <p className="text-gray pt-[2%]">Just the best</p>
        <h2 className="text-black text-4xl md:text-5xl font-semibold font-playfair overflow-visible">
          SOME OTHER EVENTS
        </h2>
      </div>

      {/* Event Cards Container */}
      <div className="relative flex flex-wrap justify-center h-auto items-center">
        {/* Example of EventCard usage */}

        <EventCard
          title="BEAT BOX"
          time="DAY 2 - 2:30PM"
          location="Open mic stage"
          backgroundImage="/card-bg1.jpg"
          link="#"
        />

        <EventCard
          title="CLAY ART"
          time="DAY 1 - 2:00PM"
          location="Drawing Hall"
          backgroundImage="/card-bg1.jpg"
          link="#"
        />

        <EventCard
          title="SOLO DANCE"
          time="DAY 1 - 1:00PM"
          location="Main Stage"
          backgroundImage="/card-bg1.jpg"
          link="#"
        />

        <EventCard
          title="PAPER MACHE"
          time="DAY 1 - 1:00PM"
          location="Main Stage"
          backgroundImage="/card-bg1.jpg"
          link="#"
        />

        <EventCard
          title="GAMING ZONE"
          time="DAY 1 - 1:00PM"
          location="Main Stage"
          backgroundImage="/card-bg1.jpg"
          link="#"
        />

        <EventCard
          title="STANDUP COMEDY"
          time="DAY 1 - 9:30AM"
          location="COMMON HALL"
          backgroundImage="/card-bg1.jpg"
          link="#"
        />

        <EventCard
          title="DANCE BATTLE"
          time="DAY 1 - 10:00AM"
          location="OPEN MIC STAGE"
          backgroundImage="/card-bg1.jpg"
          link="#"
        />

        <EventCard
          title="30S REEL MAKING"
          time="8:00AM BOTH DAYS"
          location="CAMPUS"
          backgroundImage="/card-bg1.jpg"
          link="#"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 py-8 justify-center items-center pt-10">
        <Link
          to="/events"
          className="bg-primary text-white font-sanchez px-8 py-3 rounded-full text-base ShadowBlur"
        >
          SEE ALL EVENTS
        </Link>
        <Link
          to="#"
          className="bg-primary text-white font-sanchez px-8 py-3 rounded-full text-base ShadowBlur"
        >
          SPOC&apos;S
        </Link>
        <Link
          to="#"
          className="bg-primary text-white font-sanchez px-8 py-3 rounded-full text-base ShadowBlur"
        >
          AMBASSADORS
        </Link>
      </div>
    </div>
  );
};

export default EventsSection;

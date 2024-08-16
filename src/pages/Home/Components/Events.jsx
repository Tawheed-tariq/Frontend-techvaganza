import { FaDiamond } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




// EventCard Component
const EventCard = ({ title, time, location, backgroundImage, link }) => {
  return (
    <div 

      className="w-64 text-center md:w-1/2 lg:w-1/3 sm:text-center p-4" 
      data-aos="fade-down" 
      data-aos-duration="1000"
    >
      <div 
        className="relative bg-cover bg-center flex flex-col justify-between rounded-lg text-[#A2834B] items-center
         font-semi-bold max-w-xs m-auto shadow-lg box-border p-[5.5%] h-auto transition-transform transform hover:scale-105 hover:z-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full text-left flex flex-col">
          <h1 className="text-[#A2834B] text-4xl font-serif mt-[2%] font-semibold overflow-visible">{title}</h1>
          <ul className="text-white text-lg font-serif pt-[52%]">
            <li className="flex items-center">
              <FaDiamond className="w-4 h-4 text-[#A2834B] mr-2" />
              {time}
            </li>
            <li className="flex items-center">
              <FaDiamond className="w-4 h-4 text-[#A2834B] mr-2" />
              {location}
            </li>
          </ul>
        </div>
        <div className='link absolute top-3 right-[1px] overflow-visible'>
          <Link to={link} className="box-link">
            <img 
              src="/box.png" 
              alt="link" 
              className='rounded-full transform z-40 hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out' 
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
  link: PropTypes.string.isRequired
};

// EventsSection Component
const EventsSection = () => {
  return (
    <div className="container  flex flex-col p-10" id="exciting-events">
      {/* Section Header */}
      <div className="text-left pb-5">
        <p className="text-gray pt-[2%]">Just the best</p>
        <h2 className="text-black text-5xl font-cinzel overflow-y-hidden">SOME OTHER EVENTS</h2>
      </div>

      {/* Event Cards Container */}
      <div className="the-complete-lineup relative flex flex-wrap justify-center h-auto items-center">
        {/* Example of EventCard usage */}

        <EventCard 
          title="BEAT BOX"
          time="DAY 2 - 2:30PM"
          location="Open mic stage"
          backgroundImage="/card-bg.png"
          link="#"
        />
        

        <EventCard
          title="CLAY ART"
          time="DAY 1 - 2:00PM"
          location="Drawing Hall"
          backgroundImage="/card-bg.png"
          link="#"
        />

        <EventCard 
          title="SOLO DANCE"
          time="DAY 1 - 1:00PM"
          location="Main Stage"
          backgroundImage="/card-bg.png"
          link="#"
        />

        <EventCard 
          title="PAPER MACHE"
          time="DAY 1 - 1:00PM"
          location="Main Stage"
          backgroundImage="/card-bg.png"
          link="#"
        />

        <EventCard 
          title="GAMING ZONE"
          time="DAY 1 - 1:00PM"
          location="Main Stage"
          backgroundImage="/card-bg.png"
          link="#"
        />

        <EventCard 
          title="STANDUP COMEDY"
          time="DAY 1 - 9:30AM"
          location="COMMON HALL"
          backgroundImage="/card-bg.png"
          link="#"
        />

        <EventCard 
          title="DANCE BATTLE"
          time="DAY 1 - 10:00AM"
          location="OPEN MIC STAGE"
          backgroundImage="/card-bg.png"
          link="#"
        />

        <EventCard 
          title="30S REEL MAKING"
          time="8:00AM BOTH DAYS"
          location="CAMPUS"
          backgroundImage="/card-bg.png"
          link="#"
        />

      </div>
      <div className='buttons flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 my-8 justify-center pt-0 m-0'>

      <Link to="/events" className="bg-[#a2834b] text-white font-cinzel px-8 py-3 rounded-full text-xs hover:bg-white hover:text-[#a2834b] transition duration-300 ease-in-out hover: shadow-md hover:shadow-[#dbc7ae] ">
        SEE ALL EVENTS
      </Link>
      <Link to="/spocs" className="bg-[#a2834b] text-white font-cinzel px-8 py-3 rounded-full text-xs hover:bg-white hover:text-[#a2834b] transition duration-300 ease-in-out hover: shadow-md  hover:shadow-[#dbc7ae] ">
        SPOC&apos;S
      </Link>
      <Link to="/ambassadors" className="bg-[#a2834b] text-white font-cinzel px-8 py-3 rounded-full text-xs hover:bg-white hover:text-[#a2834b] transition duration-300 ease-in-out hover: shadow-md  hover:shadow-[#dbc7ae] ">
        AMBASSADORS
      </Link>
      </div>
    </div>
  );
};

export default EventsSection;

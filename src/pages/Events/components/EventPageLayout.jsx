import EventCard from "./EventCard";
const EventsPageLayout = ({events}) => {
    return (
      <div className="bg-[#edffcc]">
        <div className="font-playfair px-8 pt-8 ">
          <p className="text-base text-black text-opacity-80">Explore</p>
          <p className="text-primary font-extrabold text-5xl leading-normal">
            Event List
          </p>
        </div>
        <div className="px-10 flex flex-wrap justify-center gap-8 pt-20 pb-10 relative ">
          {events.map((item, index) => (
              <EventCard
                key={index}
                title={item.event}
                time={item.time}
                venue={item.venue}
                img={item.image}
                url={item.url}
              />
          ))}
        </div>
      </div>
    );
  };

  
export default EventsPageLayout;
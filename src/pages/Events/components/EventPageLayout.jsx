import EventCard from "./EventCard";
const EventsPageLayout = ({events}) => {
    return (
      <>
        <div className="font-playfair mb-4">
          <p className="text-base text-secondary text-opacity-80">Explore</p>
          <p className="text-primary font-extrabold text-5xl leading-normal">
            Event List
          </p>
        </div>
        <div className="px-10 flex flex-wrap justify-center gap-8 pt-20 pb-10 relative bg-white">
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
      </>
    );
  };

  
export default EventsPageLayout;
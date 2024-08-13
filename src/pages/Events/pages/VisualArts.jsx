import PageLayout from "../../../Components/PageLayout";
import EventCard from '../components/EventCard'

const eventsd1 = [
  {
    event: "Live Photography",
    time: "9:00 am onwards, Both Days",
    venue: "Campus",
    image: "",
    url: ""
  },
  {
    event: "30 Sec Reels Making Competition",
    time: "9:00 am onwards, Both Days",
    venue: "Campus",
    image: "",
    url: ""
  },
  {
    event: "Wall Painting (Theme- Beautiful Kashmir)",
    time: "9:00 am, Day-1",
    venue: "Compound Wall",
    image: "",
    url: ""
  },
  {
    event: "Face Painting",
    time: "9:00 am, Day-1",
    venue: "LH",
    image: "",
    url: ""
  },
  {
    event: "Stone Painting",
    time: "9:00 am, Day-1",
    venue: "LH",
    image: "",
    url: ""
  },
  {
    event: "Portrait Sketching",
    time: "2:00 pm, Day-1",
    venue: "DH-3",
    image: "",
    url: ""
  },
  {
    event: "Clay Art",
    time: "2:00 pm, Day-1",
    venue: "LH",
    image: "",
    url: ""
  },
  {
    event: "Wall Painting (Theme - Festival of India)",
    time: "9:00 am, Day-2",
    venue: "Compound Wall",
    image: "",
    url: ""
  },
  {
    event: "Meme Making",
    time: "3:30 pm, Day-2",
    venue: "HT-1",
    image: "",
    url: ""
  },
];

export default function VisualArts() {
  return (
    <PageLayout title={"Visual Arts"} imgUrl={"/BattleOfBands.png"}>
      <div className="px-[380px] py-32">
        <div className="font-playfair">
          <p className="text-base text-secondary text-opacity-80">Explore</p>
          <p className="text-primary font-extrabold text-5xl leading-normal">Event List</p>
        </div>
        <div className="px-10 flex flex-wrap justify-center gap-8 py-10 relative bg-white">
          {
            eventsd1.map((item, index) => (
              <EventCard key={index} title={item.event} time={item.time} venue={item.venue} />
            ))
          }
        </div>
      </div>
    </PageLayout>
  );
}



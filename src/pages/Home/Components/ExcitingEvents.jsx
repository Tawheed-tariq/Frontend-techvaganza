import {cards} from "../../../constants/home-events";
import Card from "./Card";

const ExcitingEvents = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <div className="text-left mb-20">
          <p className="text-lg font-semibold text-gray-600">JUST THE BEST</p>
          <h2 className="text-4xl font-bold uppercase overflow-hidden">
            The Most Exciting Event Lineup
          </h2>
        </div>

        <div className="space-y-8">
            {
                cards.map((card, index) =>(<Card key={index} index={index} event={card} />))
            }
        </div>
      </div>
    </div> 
  );
};

export default ExcitingEvents;


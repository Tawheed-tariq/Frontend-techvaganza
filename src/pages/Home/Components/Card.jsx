import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ event, index }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-center",
      disable: "Phone",
      startEvent: "DOMContentLoaded",
      easing: "ease-out",
      mirror: true,
    });
  }, []);

  return (
    <div
      className={`relative flex flex-col ${
        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } items-center sm:space-x-6`}
    >
      <div
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay="250"
        className="w-full sm:max-w-sm"
      >
        <img
          src={event.image}
          alt="Mr-mrs rang e chinar"
          className="w-full h-[460px] object-cover"
        />
      </div>
      <div
        className={`w-full py-20 px-20 md:max-w-4xl relative  ${
          index % 2 === 0 ? 'sm:-translate-x-40' : 'sm:translate-x-40'
        }`}
      >
        <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} className="p-6 ShadowLarge md:p-8 lg:p-10 bg-background h-full">
          <div className="text-2xl  sm:text-3xl font-semibold mb-4 text-primary overflow-visible">
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
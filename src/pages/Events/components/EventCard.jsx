import { Link } from "react-router-dom";

export default function EventCard({title, time, venue, url, image}) {
  return (
    <>
      <Link to={url} className="rounded-xl bg-white flex flex-col items-center BoxShadow w-[250px] md:w-[310px] px-4 py-4 mb-6">
          <img
            className="w-[220px] h-[300px] md:w-[280px] md:h-[360px] overflow-hidden z-20 absolute -mt-10 rounded-xl ImgShadow transform hover:scale-105 transition duration-200 ease-in-out"
            src="/events/meme.jpg"
            alt=""
          />
        <div className="mt-[280px] md:mt-[340px] w-full font-playfair">
          <p className="font-semibold text-2xl">
            {title}
          </p>
          <p className="text-sm md:text-base text-opacity-80 font-semibold">{time}</p>
          <p className="text-base text-opacity-80 mt-3">{venue}</p>
        </div>
      </Link>
    </>
  );
}

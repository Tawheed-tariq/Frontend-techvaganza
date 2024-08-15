import { Link } from "react-router-dom";

export default function EventCard({title, time, venue, url, image}) {
  return (
    <>
      <Link to={url} className="rounded-xl flex flex-col items-center h-[500px] BoxShadow w-[310px] px-3 py-2 mb-6">
          <img
            className="w-[280px] h-[360px] overflow-hidden z-20 absolute -mt-10 rounded-xl ImgShadow transform hover:scale-105 transition duration-200 ease-in-out"
            src="/events/meme.jpg"
            alt=""
          />
        <div className="mt-[340px] w-full font-playfair">
          <p className="font-semibold text-2xl">
            {title}
          </p>
          <p className="text-base text-opacity-80">{time}</p>
          <p className="text-base text-opacity-80">{venue}</p>
        </div>
      </Link>
    </>
  );
}

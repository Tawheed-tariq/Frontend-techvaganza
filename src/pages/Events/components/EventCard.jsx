export default function EventCard({title, time, venue}) {
  return (
    <>
      <div className="rounded-xl flex flex-col items-center h-[500px] shadow-xl shadow-slate-400 w-[310px] px-3 py-2 mb-4">
          <img
            className="w-[280px] h-[360px] z-30 absolute -mt-5 rounded-xl shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
            src="/events/meme.jpg"
            alt=""
          />
        <div className="mt-auto w-full mb-6 font-playfair">
          <p className="font-semibold text-2xl">
            {title}
          </p>
          <p className="text-base text-opacity-80">{time}</p>
          <p className="text-base text-opacity-80">{venue}</p>
        </div>
      </div>
    </>
  );
}

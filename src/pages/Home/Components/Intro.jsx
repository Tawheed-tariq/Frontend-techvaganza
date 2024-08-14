import React from 'react';

function Intro() {
  return (
    <div className='flex items-center justify-center overflow-hidden text-white'>
      <div className='max-w-screen-lg h-auto px-6 py-16 text-center'>
        <h1 className="text-4xl md:text-6xl text-primary font-bold pb-4">
          Techvaganza 2024:
        </h1>
        <h1 className="text-4xl md:text-6xl text-primary font-bold pb-4">
          Where Innovation
        </h1>
        <h1 className="text-4xl md:text-6xl text-primary font-bold pb-12">
          Meets Sustainability
        </h1>

        <p className='text-secondary font-averia text-2xl'>
          Join J&K's Largest Tech Fest for a Fusion <br /> of Eco-Friendly Innovation, Exciting <br /> Competitions, and Unforgettable Fun!
        </p>
        <button className='w-36 text-lg font-averia bg-primary rounded-2xl text-black pt-3 pb-3 pl-4 pr-4 mt-20 shadow-[inset_5px_2px_5px_rgba(255,255,255,0.6),inset_-5px_0px_5px_rgba(255,255,255,0.6)]'>
          Join Now
        </button>
      </div>
      <div className='pt-16 ml-12'>
        <img src="hackersvg.png" alt="hacker" className='w-9/12 h-9/12' />
      </div>
    </div>
  );
}

export default Intro;



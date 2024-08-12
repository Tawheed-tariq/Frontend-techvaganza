import React from 'react';

function Highlights() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-primary font-bold mb-2 text-center pb-2 text-5xl">Highlights</h1>
      <hr className="border-t-8 border-primary w-60 mx-auto mb-7" />

      <div className="grid grid-cols-3 gap-12  justify-items-center">
          <div className="relative w-56 p-2 h-56 border border-secondary bg-highlightColor rounded-3xl mb-4 flex flex-col items-center">
            <img
              src="hackathon.png"
              alt="highlight"
              className=" h-5/6 w-5/6 opacity-45"
            />
            <p className='text-secondary font-averia font-bold text-3xl  overflow-hidden'>Hackathon</p>
          </div>
          <div className="relative w-56 p-2 h-56 border border-secondary bg-highlightColor rounded-3xl mb-4 flex flex-col items-center">
            <img
              src="project.png"
              alt="highlight"
              className="h-4/6 w-4/6  opacity-45"
            />
           <p className='text-secondary font-averia font-bold text-3xl text-center overflow-hidden'>Project Showcase</p>

          </div>

          <div className="relative w-56 p-2 h-56 border border-secondary bg-highlightColor rounded-3xl mb-4 flex flex-col items-center">
            <img
              src="speech-bubble.png"
              alt="highlight"
              className="h-5/6 w-5/6  opacity-45"
            />
                        <p className='text-secondary font-averia font-bold text-3xl  overflow-hidden'>Trivia</p>

          </div>
          <div className="relative w-56 p-2 h-56 border border-secondary bg-highlightColor rounded-3xl mb-4 flex flex-col items-center">
            <img
              src="dancing.png"
              alt="highlight"
              className="h-5/6 w-5/6  opacity-45"
            />
                        <p className='text-secondary font-averia font-bold text-3xl  overflow-hidden'>Dancing</p>

          </div>

          <div className="relative w-56 p-2 h-56 border border-secondary bg-highlightColor rounded-3xl mb-4 flex flex-col items-center">
            <img
              src="karaoke.png"
              alt="highlight"
              className="h-5/6 w-5/6  opacity-45"
            />
                        <p className='text-secondary font-averia font-bold text-3xl  overflow-hidden'>Singing</p>

          </div>
          <div className="relative w-56 p-2 h-56 border border-secondary bg-highlightColor rounded-3xl mb-4  flex flex-col items-center">
            <img
              src="game-console.png"
              alt="highlight"
              className="h-5/6 w-5/6  opacity-45"
            />
                        <p className='text-secondary font-averia font-bold text-3xl  overflow-hidden'>Gaming</p>

          </div>
        </div>
        <button className='w-36 text-lg font-averia bg-primary rounded-2xl text-black pt-3 pb-3 pl-4 pr-4 mt-20 shadow-[inset_5px_2px_5px_rgba(255,255,255,0.6),inset_-5px_0px_5px_rgba(255,255,255,0.6)]'>
          Show more
        </button>
      </div>
  );
}

export default Highlights;


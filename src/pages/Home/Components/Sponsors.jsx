import React from 'react'

function Sponsors() {
  return (
    <div className='flex flex-col items-center pt-28'>
       <h1 className="text-primary font-bold mb-2 text-center pb-2 text-5xl">Sponsors</h1>
       <hr className="border-t-8 border-primary w-60 mx-auto mb-7" />
    <div>
      <div className='flex justify-center items-center gap-7'>
        
        <img src="ted.png" alt="sponsors" className='h-40 w-32 pt-7 ' />
        <img src="airbnb.png" alt="sponsors" className='h-32 w-28' />
        <img src="motors.png" alt="sponsors" className='h-32 w-28' />
        <img src="audi.png" alt="sponsors" className='h-32 w-28' />
        <img src="chase.png" alt="sponsors" className='h-32 w-28' />
        <img src="bp.png" alt="sponsors" className='h-56 w-40 pt-16' />
        
      </div>
      <div className='flex justify-center items-center gap-12'>
      <img src="rings.png" alt="sponsors" className='h-32 w-28' />
        <img src="spotify.png" alt="sponsors" className='h-32 w-28' />
        <img src="tiktok.png" alt="sponsors" className='h-32 w-28' />
      </div>
    </div>
    </div>
  )
}

export default Sponsors
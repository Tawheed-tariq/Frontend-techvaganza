import React from 'react'

function Events() {
  return (
    <div className='flex flex-col items-center pt-28'>
      <h1 className="text-primary font-bold mb-2 text-center pb-2 text-5xl">Past Event Highlights</h1>
      <hr className="border-t-8 border-primary w-2/6 mx-auto mb-7" />
      <div className='flex flex-row gap-7 justify-center items-center'>
        <img src="next.png" alt="next" className='w-12 h-12 scale-x-[-1] items-center'/>
        <img src="event1.jpeg" alt="event" className='w-56 h-80 border border-eventBorder
        rounded-3xl'/>
        <img src="event2.jpeg" alt="event" className='w-56 h-80 border border-eventBorder
        rounded-3xl'/>
        <img src="event3.jpeg" alt="event" className='w-56 h-80 border border-eventBorder
        rounded-3xl'/>
          <img src="next.png" alt="next" className='w-12 h-12 items-center'/>

    </div>
    <div className="flex space-x-2 mt-4">
  <div className="w-3 h-3 bg-secondary rounded-full"></div>
  <div className="w-3 h-3 bg-secondary rounded-full"></div>
  <div className="w-3 h-3 bg-secondary rounded-full"></div>
</div>
    </div>
  )
}

export default Events
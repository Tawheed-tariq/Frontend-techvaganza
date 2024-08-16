import React, { useState, useEffect } from 'react';
import Header from '../../../Components/Header';
import { Link } from 'react-router-dom';

function Intro() {
  const targetDate = '2024-09-20T00:00:00';

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    } else {
      timeLeft = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='bg-hero-background bg-cover bg-center bg-blend-overlay backdrop-filter backdrop-brightness-100'>
      <div>
        <Header />
      </div>
      <div id='introText' className='min-h-screen pt-32 p-7 md:p-32'>
        <div id='dateText' className='date-text text-white text-2xl md:text-4xl text-center overflow-hidden xs:whitespace-nowrap'>
          20 
          <sup className='font-lora text-white text-xl md:text-2xl'>th </sup>  
          &  21
          <sup className='font-lora text-white text-xl md:text-2xl'>st </sup> 
          Sep 2024
        </div>
        <p className='text-center text-5xl md:text-9xl mt-4 text-white font-playfair font-extrabold overflow-hidden leading-normal' >Techvaganza</p>
        <div id='timerContainer' className='timer-container mt-6 md:mt-10 flex justify-center'>
          <div className='w-full min-w-150 mb-7 px-4 md:px-4 lg:px-40 flex flex-wrap justify-between text-white font-bold overflow-hidden'>
            <div id='daysTimer' className='timer-item text-center'>
              <div className='block text-4xl md:text-9xl font-semibold leading-none overflow-hidden '>{timeLeft.days}</div>
              <div className='timer-label block text-md md:text-3xl font-light overflow-hidden'>DAYS</div>
            </div>
            <div id='hoursTimer' className='timer-item text-center'>
              <div className='block text-4xl md:text-9xl font-semibold leading-none overflow-hidden'>{timeLeft.hours}</div>
              <div className='timer-label block text-md md:text-3xl font-light overflow-hidden'>HOURS</div>
            </div>
            <div id='minutesTimer' className='timer-item text-center'>
              <div className='block text-4xl md:text-9xl font-semibold leading-none overflow-hidden'>{timeLeft.minutes}</div>
              <div className='timer-label block text-md md:text-3xl font-light overflow-hidden'>MINUTES</div>
            </div>
            <div id='secondsTimer' className='timer-item text-center'>
              <div className='block text-4xl md:text-9xl font-semibold leading-none overflow-hidden'>{timeLeft.seconds}</div>
              <div className='timer-label block text-md md:text-3xl font-light overflow-hidden'>SECONDS</div>
            </div>
          </div>
        </div>
        {/* <div id='buttonContainer' className='button-container text-center flex flex-col justify-center md:flex-row gap-4 md:gap-7 min-w-24 mt-20 md:mt-32'>
          <Link>
            <button id='instituteRegistrationButton' className='button bg-introBtnColor rounded-30 text-black font-semibold py-4 px-10 md:py-4 md:px-10 mb-4 font-lora'>Institute Registration</button> 
          </Link>
          <Link>
            <button id='attendeeRegistrationButton' className='button bg-introBtnColor rounded-30 text-black font-semibold py-4 px-10 mb-4 font-lora'>Attendee Registration</button> 
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Intro;



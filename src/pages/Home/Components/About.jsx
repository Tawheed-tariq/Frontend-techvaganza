import React from 'react';

function About() {
  return (
    <div className='bg-about-background  bg-cover bg-center backdrop-filter backdrop-brightness-100 min-h-[80vh] xs:min-h-[90vh] sm:min-h-screen flex justify-center items-center'>
      <div 
        id='about-box' 
        className='p-10 mt-24 mb-24  sm:p-12 md:p-12 md:pr-10 bg-white w-4/5  md:w-3/5 sm:w-4/5'>
        <div>
          <p className='text-grayText text-xs sm:text-sm font-lora font-semibold'>
            NIT Srinagar's Annual Cultural Fest
          </p>
          <h2 className='text-introBtnColor text-3xl   sm:text-4xl md:text-5xl overflow-hidden font-semibold font-lora mt-2 mb-6 sm:mb-8 md:mb-12'>
            RANG-E-CHINAR
          </h2>
        </div>
        <div id='about-description'>
          <p className='text-entryDescription text-xl sm:text-base md:text-base font-lora'>
            The Annual Cultural Fest at the National Institute of Technology,
            Srinagar, aptly named "Rang-e-Chinar," is a dazzling spectacle of
            talent and creativity that leaves no stone unturned in showcasing
            the vibrant spirit of our institution. "Rang-e-Chinar" is an
            unparalleled celebration of the performing arts. The art
            exhibitions and installations demonstrate the depth of creativity
            among our students. Furthermore, the fest fosters a spirit of
            inclusivity by hosting engaging workshops, thought-provoking
            discussions, and even culinary experiences that reflect the
            diversity of our nation. "Rang-e-Chinar" at NIT Srinagar is an
            unmatched blend of art, culture, and innovation, making it an event
            that leaves a lasting mark on the hearts and minds of all who
            attend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

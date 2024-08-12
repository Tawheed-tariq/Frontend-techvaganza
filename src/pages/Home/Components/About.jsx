import React from 'react';

function About() {
  return (
    <div>
      <h1 className="text-primary font-bold mb-2 text-center  overflow-hidden text-5xl">About</h1>
      <hr className="border-t-8 border-primary w-40 mx-auto mb-7" />

      <div className="flex justify-center items-start min-h-screen overflow-hidden mt-12">
        <div className="relative w-96  items-center flex-shrink-0 min-h-screen pt-2">
          <img
            src="yawar.jpeg"
            alt="yawar"
            className="w-60 h-80 rounded-br-3xl rounded-tr-3xl relative z-10"
          />
          <img
            src="about-back.jpeg"
            alt="background"
            className="w-64 h-40 rounded-br-3xl rounded-tr-3xl absolute top-64 left-20  z-0"
          />
        </div>

        <div className="w-3/12  leading-8 flex items-start text-secondary font-averia font-semibold pl-10">
          <p>
            Welcome to Techvaganza 2024, the premier technical fest of Jammu & Kashmir! This year, we're bringing together the best of innovation and sustainability under one roof. Techvaganza is not just a celebration of technology; it's a movement towards a greener future. With a wide range of tech competitions, interactive workshops, and eco-friendly initiatives, this fest offers something for everyone. Whether you're a tech enthusiast, an environmental advocate, or just looking for some fun, Techvaganza 2024 is the place to be. Join us as we explore the intersection of technology and nature, and pave the way for a sustainable tomorrow!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;



import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import EventsSection from "./Components/Events";
import Intro from "./Components/Intro";
import About from "./Components/About";


import Highlights from "./Components/EventsLineup";


export default function Home() {
  return (
    <>
      <div className="background-image bg-[url('/group5.png')] w-screen top-[100%] md:top-[50%] h-[110rem] "></div>
      <div className="background-image bg-[url('/group8.png')] w-[34rem] h-[40rem] top-[290%] -left-[8%]  "></div>
      <div className="background-image hidden md:block bg-[url('/group6.png')] w-[20rem] h-[20rem] top-[230%] -right-[8%] "></div>

      <div className="content">

        <div className="">
          
          <Intro />
          <About />
          <EventsSection />
        
          <Highlights />
         
        </div>
        <Footer />
      </div>
    </>
  );
}

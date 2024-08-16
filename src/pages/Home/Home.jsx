import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import EventsSection from "./Components/Events";

export default function Home() {
  return (
    <>
      {/*<div className="background-image bg-1"></div>
      <div className="background-image bg-2"></div>
      <div className="background-image bg-3"></div>

      <div className="glass-layer"></div>*/}

      <div className="content">
        <Header />

        <div className="py-10">
          <EventsSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

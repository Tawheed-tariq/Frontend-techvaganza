import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-20 text-white py-6 font-averia fixed bottom-0 left-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-playfair text-primary font-extrabold mb-4 overflow-hidden">Techvaganza 2024</h2>
            <p className="text-xl sm:text-2xl font-playfair text-secondary font-extrabold mb-4 break-words">Where Innovation Meets Sustainability</p>
          </div>

          <div className=" md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-playfair text-primary mb-3">Exciting Activities</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-2">
  <Link to="/" className="text-secondary hover:underline text-sm font-playfair">Hackathons</Link>
  <Link to="/" className="text-secondary hover:underline text-sm font-playfair">Gaming Arena</Link>
  <Link to="/" className="text-secondary hover:underline text-sm font-playfair">Project Showcase</Link>
  <Link to="/" className="text-secondary hover:underline text-sm font-playfair">Dancing</Link>
  <Link to="/" className="text-secondary hover:underline text-sm font-playfair">Workshops</Link>
  <Link to="/" className="text-secondary hover:underline text-sm font-playfair">Karaoke</Link>
  <Link to="/" className="text-secondary hover:underline text-sm font-playfair">Tech Talks</Link>
  <Link to="/" className="text-secondary hover:underline text-sm font-playfair">Singing</Link>
  <Link to="/" className="text-secondary hover:underline text-sm font-playfair">Trivia</Link>
</div>

          </div>

          <div className="w-1/4  md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl text-primary font-playfair mb-3">Location</h3>
            <div className="relative w-full h-36 md:h-48 mt-2 rounded-lg overflow-hidden ">
              <MapContainer center={[34.083656, 74.797372]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[34.083656, 74.797372]}>
                  <Popup>This is us!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary my-4 sm:my-6" /> {/* Solid line spanning full width */}
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <p className="text-sm sm:text-lg font-playfair mb-2 sm:mb-0 text-center">© Techvaganza 2024, all rights reserved.</p>
          <div className="flex space-x-3 sm:space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" className="w-6 sm:w-8 h-6 sm:h-8"/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 sm:w-8 h-6 sm:h-8"/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.png" alt="Twitter" className="w-6 sm:w-8 h-6 sm:h-8"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

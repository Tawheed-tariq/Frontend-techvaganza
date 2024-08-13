import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-20 text-white py-8 font-averia fixed bottom-0 left-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Techvaganza Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-4xl font-playfair text-primary font-extrabold mb-6 overflow-hidden">Techvaganza 2024</h2>
            <p className="text-2xl font-playfair text-secondary font-extrabold mb-6 break-words">Where Innovation Meets Sustainability</p>
          </div>

          {/* Exciting Activities Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-playfair text-primary mb-4">Exciting Activities</h3>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-2">
              <ul className="text-sm flex-1 font-playfair mb-4 sm:mb-0 space-y-2">
                <li><Link to="/" className="text-secondary hover:underline">Hackathons</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Project Showcase</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Workshops</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Tech Talks</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Trivia</Link></li>
              </ul>
              <ul className="text-sm flex-1 font-playfair mb-4 sm:mb-0 space-y-2">
                <li><Link to="/" className="text-secondary hover:underline">Gaming Arena</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Dancing</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Karaoke</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Singing</Link></li>
              </ul>
            </div>
          </div>

          {/* Location Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
            <h3 className="text-2xl text-primary font-playfair mb-4">Location</h3>
            <div className="relative w-full lgh-48 mt-4 rounded-lg overflow-hidden">
              <MapContainer center={[34.083656, 74.797372]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[34.083656, 74.797372]}>
                  <Popup>this is us!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary my-6" /> {/* Solid line spanning full width */}

        <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mb-0">
          <p className="text-lg font-playfair mb-4 sm:mb-0">© Techvaganza 2024, all rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" className="w-8 h-8"/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8"/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.png" alt="Twitter" className="w-8 h-8"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

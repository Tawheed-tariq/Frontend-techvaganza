import React from 'react'
import { Link } from 'react-router-dom';


const ExcitingEvents = () => {
    return (
      <div className="exciting-events-container">

        <div className="container mx-auto px-4 py-8">
            <div className="text-left mb-20">
                <p className="text-lg font-semibold text-gray-600">JUST THE BEST</p>
                <h2 className="text-4xl font-bold uppercase overflow-hidden">The Most Exciting Event Lineup</h2>
            </div>           

            <div className="space-y-8">
                {/* Event 1 */}
                <div className="relative flex flex-col sm:flex-row items-center sm:space-x-6">
                    <figure 
                        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 h-auto" 
                        data-aos="fade-right" 
                        data-aos-duration="1000" 
                        data-aos-delay="250"
                    >
                        <a href="#">
                            <img 
                                src="/public/mr-ms-rang-e-chinar.jpg" 
                                alt="Mr-mrs rang e chinar" 
                                className="w-full h-auto object-cover" 
                            />
                        </a>
                    </figure>

                    <div 
                        className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 relative sm:-translate-x-12"
                        data-aos="fade-left" 
                        data-aos-duration="1000"
                    >
                        <div className="p-6 md:p-8 lg:p-10 bg-white shadow-lg h-full">
                            <div className="text-xl sm:text-2xl font-semibold mb-4 text-customBrown">
                                Mr & Ms Rang-e-Chinar
                            </div>
                            <p className="mb-4 sm:mb-6">
                                The Mr. and Ms. Rang-e-Chinar is a platform for young and talented individuals to express themselves and celebrate their diverse cultures. You will get a chance to compete in various rounds such as talent, fashion, trivia, and interview.
                            </p>
                            <Link 
                                to="../events/mr-ms-rang-e-chinar.html" 
                                className="custom-glow-button uppercase"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                EXPLORE
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Event 2 */}
                <div className="relative flex flex-col sm:flex-row-reverse items-center sm:space-x-6">
                    <figure 
                        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 h-auto" 
                        data-aos="fade-left" 
                        data-aos-duration="1000" 
                        data-aos-delay="250"
                    >
                        <a href="#">
                            <img 
                                src="/public/battle-of-bands.jpg" 
                                alt="Battle of the Bands" 
                                className="w-full h-auto object-cover rounded-none" 
                            />
                        </a>
                    </figure>

                    <div 
                        className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 relative sm:translate-x-20"
                        data-aos="fade-right" 
                        data-aos-duration="1000"
                    >
                        <div className="p-6 md:p-8 lg:p-10 bg-white shadow-lg rounded-none h-full">
                            <div className="text-xl sm:text-2xl font-semibold mb-4 text-customBrown">
                                Battle of the Bands
                            </div>
                            <p className="mb-4 sm:mb-6">
                                A clash that everyone will be pleased to see, a clash that will lead to victory of music on either side with an aim of making people get mesmerized with the synchronized melodies of instruments and vocals.
                            </p>
                            <Link 
                                to="../events/battle-of-bands.html" 
                                className="custom-glow-button uppercase"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                EXPLORE
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Event 3 */}
                <div className="relative flex flex-col sm:flex-row items-center sm:space-x-6">
                    <figure 
                        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 h-auto" 
                        data-aos="fade-right" 
                        data-aos-duration="1000" 
                        data-aos-delay="250"
                    >
                        <a href="#">
                            <img 
                                src="/public/choreonights.jpg" 
                                alt="Choreonight" 
                                className="w-full h-auto object-cover" 
                            />
                        </a>
                    </figure>

                    <div 
                        className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 relative sm:-translate-x-12"
                        data-aos="fade-left" 
                        data-aos-duration="1000"
                    >
                        <div className="p-6 md:p-8 lg:p-10 bg-white shadow-lg h-full">
                            <div className="text-xl sm:text-2xl font-semibold mb-4 text-customBrown">
                                Choreonight
                            </div>
                            <p className="mb-4 sm:mb-6">
                                Calling all those who can't stop moving when the music starts! All you need is a costume of confidence to unveil your moves and leave your signature. Put on your dancing shoes, assemble your team, and get ready to battle it out for the crown of Choreo Night.
                            </p>
                            <Link 
                                to="../events/Choreonight.html" 
                                className="custom-glow-button uppercase"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                EXPLORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> //for bg
    );
};

export default ExcitingEvents;

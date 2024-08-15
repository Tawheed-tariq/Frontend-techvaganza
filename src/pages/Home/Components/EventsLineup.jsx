import React from 'react';
import { Link } from 'react-router-dom';
const ExcitingEvents = () => {
    return (
        <div className="container mx-auto px-4 py-8" id="exciting-events">
           <div className="text-left mb-20 ">
    <p className="text-lg font-semibold text-gray-600">JUST THE BEST</p>    {/*   will look okay on lighter bg */}
    <h2 className="text-4xl font-bold uppercase overflow-hidden">The Most Exciting Event Lineup</h2>        
</div>           

            <div className="space-y-8">
                {/* Event 1 */}
                <div className="relative flex flex-col md:flex-row items-center md:space-x-6">
                    <figure className="flex-shrink-0 w-full md:w-1/3 h:1/2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250">
                        <a href="#">
                            <img src="/public/mr-ms-rang-e-chinar.jpg" alt="Mr & Ms Rang-e-Chinar" className="w-full h-auto object-cover" />
                        </a>
                    </figure>

                    <div className="w-full md:w-1/2  relative md:ml-6 md:-translate-x-20" data-aos="fade-left" data-aos-duration="1000">
                        <div className="p-10 bg-white shadow-lg">
                            <div className="text-2xl font-semibold mb-4 text-customBrown">Mr & Ms Rang-e-Chinar</div>
                            <p className="mb-6">
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

      
                {/* Event 2: Battle of the Bands */}
                <div className="relative flex flex-col md:flex-row-reverse items-center md:space-x-6">
                    <figure className="flex-shrink-0 w-full md:w-1/3" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="250">
                        <a href="#">
                            <img src="/public/battle-of-bands.jpg" alt="Battle of the Bands" className="w-full h-auto object-cover rounded-none" />
                        </a>
                    </figure>

                    <div className="w-full md:w-1/2 relative md:translate-x-20" data-aos="fade-right" data-aos-duration="1000">
                        <div className="p-10 bg-white shadow-lg rounded-none"> {/* Changed to rounded-none */}
                            <div className="text-2xl font-semibold mb-4 text-customBrown">
                                Battle of the Bands
                            </div>
                            <p className="mb-6">
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


                {/* Event 3: Choreonight */}
                <div className="relative flex flex-col md:flex-row items-center md:space-x-6">
                    <figure className="flex-shrink-0 w-full md:w-1/3" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250">
                        <a href="#">
                            <img src="/public/choreonights.jpg" alt="Choreonight" className="w-full h-auto object-cover" />
                        </a>
                    </figure>

                    <div className="w-full md:w-1/2 relative md:-translate-x-12" data-aos="fade-left" data-aos-duration="1000">
                        <div className="p-10 bg-white shadow-lg"> {/* Changed padding to p-10 */}
                            <div className="text-2xl font-semibold mb-4 text-customBrown"> {/* Changed text size to text-2xl */}
                                Choreonight
                            </div>
                            <p className="mb-6"> {/* Increased margin bottom to mb-6 */}
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
    );
};

export default ExcitingEvents;

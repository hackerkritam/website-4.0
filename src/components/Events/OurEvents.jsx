import React, { useState } from 'react';
import EventCard from './EventCard';
import { Poppins, Montserrat } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { events } from '../../../data/data';

const poppins = Poppins({
  weight: ['400', '200', '100', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
const montserrat = Montserrat({
  weight: ['400', '200', '100', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const OurEvents = () => {
  const [displayedEvents, setDisplayedEvents] = useState(events.slice(0, 4));

  const handleLoadMore = () => {
    const startIndex = displayedEvents.length;
    const endIndex = startIndex + 4;

    // Slice the events array to get the next 4 events
    const moreEvents = events.slice(startIndex, endIndex);

    setDisplayedEvents([...displayedEvents, ...moreEvents]);
  };
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex justify-center">
        <h3
          className={`mt-[4.5rem] font-extrabold text-black border-b-2 mb-8 mx-auto text-[40px] border-[#1f1b4e] ${poppins.className} `}
        >
          Our <span className="text-[#1f1b4e]">Events</span>
        </h3>
      </div>
      <div
        className={` ${montserrat.className} w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14 mb-10 text-white `}
      >
        {displayedEvents?.map((item, index) => (
          <div className="w-full flex justify-center" key={index}>
            <EventCard item={item} />
          </div>
        ))}
      </div>
      {displayedEvents.length !== events.length && (
        <div className="flex justify-center mb-16">
          <button
            className={` text-[#1f1b4e] border-2 border-[#1f1b4e] rounded-md font-semibold py-3 ${montserrat.className} px-7 text-base rounded hover:bg-[#1f1b4e] hover:text-white duration-300`}
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default OurEvents;

import React, { useEffect, useState } from 'react';
import { Poppins, Montserrat } from 'next/font/google';
import Image from 'next/image';
import EventCard from './Events/EventCard';
import { AnimatePresence, motion } from 'framer-motion';
import useScrollBlock from '../../customHooks/useScrollBlock';
import { featuredEvents } from '../../data/data';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const Events = () => {
  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`${montserrat.className} mb-9 w-full flex justify-center pt-8 pb-8 bg-[white] text-[#1f1b4e] `}
    >
      <div className="w-[80%]">
        <motion.div
          className={`mb-9 flex items-center justify-center flex-col ${poppins.className}`}
        >
          <motion.h3
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="uppercase font-medium text-3xl flex items-center justify-center w-full lg:text-5xl "
          >
            Featured Events
          </motion.h3>
          <motion.span
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center justify-center  font-light text-sm w-full lg:text-2xl lg:leading-[3rem]"
          >
            Check out some of our featured events!
          </motion.span>
        </motion.div>
        <div
          className={`${montserrat.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:py-4 px-2 gap-2 border-[#1f1b4e] rounded-md text-white `}
        >
          {featuredEvents.map((item, index) => (
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full flex justify-center "
              key={index}
            >
              <EventCard item={item} key={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

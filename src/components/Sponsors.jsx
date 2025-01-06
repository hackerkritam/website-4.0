import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { societies, prevsponsors } from '../../data/data';
import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const Sponsors = () => {
  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <section
        id="organizers"
        className="relative flex flex-col w-full h-max text-center justify-around items-center bg-[#1f1b4e] mb-[2px] border-t-2 border-b-2 border-white pt-9 pb-5"
      >
        <div
          className={`mb-9 flex items-center justify-center text-white flex-col ${poppins.className}`}
        >
          <motion.h3
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="uppercase font-medium text-3xl flex items-center justify-center w-full lg:text-5xl "
          >
            Sponsors
          </motion.h3>
          <motion.span
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center justify-center  font-light text-sm w-full lg:text-2xl lg:leading-[3rem]"
          >
            Check out who helped us during DELTA 3.0!
          </motion.span>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ml-4 mr-4 mb-10 sm:gap-3 gap-9 lg:gap-9 md:gap-20 items-center justify-center text-center">
          {prevsponsors?.map((item, i) => (
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[8rem] md:h-[5rem] w-[15rem] bg-white border-1 border-[#1f1b4e] p-2 rounded-lg"
              key={item.id}
            >
              <Image
                src={item.src}
                width={10}
                height={10}
                // alt={item ? item.name : "Organizers"}
                alt="Society"
                unoptimized
                priority
                className="rounded-lg border-gray-300 duration-300 hover:scale-110 mx-auto w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Sponsors;

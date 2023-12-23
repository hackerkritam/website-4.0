import React from 'react';
import Image from 'next/image';
import { Poppins, Montserrat } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { prevsponsors } from '../../data/data';

const poppins = Poppins({
  weight: ['400', '200', '100', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
const montserrat = Montserrat({
  weight: ['400', '200', '100', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const Sponsors = () => {
  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full h-[100%] pt-28 pb-20 mx-auto flex flex-col items-center relative bg-neutral-100 ">
      <div className=" text-center  ">
        <motion.h3
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className={`font-extrabold text-2xl md:text-3xl lg:text-4xl ${poppins.className} text-center text-[black] border-[#1f1b4e] border-b-2 mb-8 mx-auto `}
        >
          Meet our <span className="text-[#1f1b4e]">sponsors</span>
        </motion.h3>
      </div>
      <div className="rounded p-4 text-center mx-10 w-[50%] flex flex-col items-center relative">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="w-[100%] h-fit md:h-[32rem] flex justify-center mb-2 "
        >
          <Image
            src="/images/Delta_4th_comittee_images\Kalyan Baskota(1).jpg"
            alt="nabin Shrestha"
            width={500}
            height={300}
            className="rounded-lg object-contain h-full w-fit  "
            unoptimized
            priority
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="min-w-[20%] max-w-full flex flex-col items-center bg-white rounded-xl shadow-xl px-4 py-1 mt-2 font-[Montserrat]"
        >
          <h3 className="text-xl font-bold text-center">Title Sponsor</h3>
          <p>President</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-0 md:gap-10">
        {prevsponsors?.map((item, index) => (
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            key={item.id}
            className="rounded flex flex-col justify-center relative"
          >
            <div className=" flex justify-center bg-white rounded-lg ">
              <Image
                src={item.src}
                alt="Sponsors"
                width={150}
                height={150}
                className=" w-[15rem] h-[10rem] object-contain rounded-lg p-4"
              />
            </div>
            <div className="min-w-[40%] max-w-full flex flex-col items-center bg-white rounded-xl shadow-xl px-4 py-1 mt-2 font-[Montserrat]">
              <h3 className="text-[0.9rem] font-bold text-center lg:text-[1.1rem]">
                Delta
              </h3>
              <p className="lg:text-[1rem] text-[0.7rem] text-neutral-400 ">
                Co-Sponsor
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

import Link from 'next/link';
import React from 'react';
import { Poppins, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import CountdownTimer from './CountDownTimer';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const Hero = () => {
  const targetDate = new Date('2023-12-31T23:59:59');
  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-center ${montserrat.className} bg-hero_background bg-cover bg-no-repeat bg-center `}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-[80%] h-full flex flex-col items-center justify-center "
      >
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="leading-[8rem] xl:text-[100px] sm:text-[70px] text-[40px] text-[white] font-semibold  "
        >
          DELTA 4.0
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`xl:text-[40px] sm:text-[30px] text-[20px] ${poppins.className} text-white font-light md:pb-6 pb-2`}
        >
          Empowering the future!
        </motion.p>
        <div className="text-white w-full flex flex-col items-center ">
          <h1 className="text-xl sm:text-2xl md:text-6xl font-bold text-[#5ae65a]">
            New Year Countdown
          </h1>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <Link href="/about">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`bg-[#5ae65a] ${poppins.className} text-[#1f1b4e] xl:px-6 px-3 xl:py-3 py-2 rounded-md xl:text-lg sm:text-base text-sm duration-300 font-normal w-fit  hover:bg-[#1f1b4e] hover:text-[#5ae65a] tracking-wider`}
          >
            Learn More
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import { useRouter } from 'next/router';
import { Poppins, Montserrat } from 'next/font/google';
import useScrollBlock from '../../customHooks/useScrollBlock';

const poppins = Poppins({
  weight: ['400', '200', '100', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
const montserrat = Montserrat({
  weight: ['400', '200', '100', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname;
  const [openNav, setOpenNav] = useState(false);
  const [openClass, setOpenClass] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const [isScrolled, setIsScrolled] = useState(false);
  // console.log(path);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (openNav) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [openNav]);

  const handleNavChange = (e) => {
    // console.log(e.target.value);
  };

  return (
    <div
      className={`text-white flex justify-center fixed  duration-500 py-4 w-full z-[100] ${
        isScrolled
          ? 'bg-[#1f1b4e]'
          : path == '/'
          ? 'bg-transparent'
          : 'bg-[#1f1b4e]'
      }  mt-0
      `}
    >
      <AnimatePresence>
        {openNav && <Sidebar openNav={openNav} setOpenNav={setOpenNav} />}
      </AnimatePresence>
      <AnimatePresence>
        <div
          className={`w-[80%] flex justify-between items-center lg:flex-row 
        `}
        >
          <Link
            href="/"
            className="flex font-medium items-center text-white md:mb-0 my-auto w-[40%]"
          >
            <p className="uppercase xl:text-2xl text-lg my-auto text-white flex flex-col items-center">
              <Image
                src="/images/Delta 4.0 profile logo white.png"
                alt="Delta"
                width={10}
                height={10}
                className="cursor-pointer w-[2.5rem] md:w-[3.5rem] lg:w-[3.5rem] object-contain "
                unoptimized
              />
            </p>
          </Link>
          <div
            className={`flex lg:hidden cursor-pointer ${poppins.className}`}
            onClick={() => {
              setOpenNav(true);
            }}
          >
            <Image
              width={30}
              height={30}
              src={'/icons/menu-white.png'}
              alt="Menu"
              className="w-[1.5rem] md:w-[2.5rem] "
            />
          </div>
          <div className="w-[45%] hidden lg:flex items-center lg:justify-end ">
            <div
              className={` flex items-center justify-center text-sm ${poppins.className}`}
            >
              <Link
                href="/"
                className={`${
                  path == '/' && 'text-[#5ae65a] hover:border-[#5ae65a]'
                } hover:border-b-2  mr-8 text-base  `}
              >
                Home
              </Link>
              <Link
                href="/about"
                value="/about"
                className={`${
                  path == '/about' && 'text-[#5ae65a] hover:border-[#5ae65a]'
                } relative mr-8 text-base hover:border-b-2 `}
              >
                About
              </Link>
              <Link
                href="/events"
                value="/events"
                className={`${
                  path.includes('/events') &&
                  'text-[#5ae65a] hover:border-[#5ae65a]'
                } mr-8 text-base hover:border-b-2 `}
              >
                Events
              </Link>
              {/* <Link
                href="/sponsors"
                value="/sponsors"
                className={`${
                  path.includes('/sponsors') &&
                  'text-[#5ae65a] hover:border-[#5ae65a]'
                } mr-8 text-base hover:border-b-2 `}
              >
                Sponsors
              </Link> */}
              <Link
                href="/members"
                value="/members"
                className={`${
                  path == '/members' && 'text-[#5ae65a] hover:border-[#5ae65a]'
                } mr-8 text-base hover:border-b-2 `}
              >
                Members
              </Link>
              <Link
                href="/gallery"
                value="/gallery"
                className={`${
                  path == '/gallery' && 'text-[#5ae65a] hover:border-[#5ae65a]'
                } mr-8 text-base hover:border-b-2 `}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                value="/contact"
                className={`${
                  path == '/contact' && 'text-[#5ae65a] hover:border-[#5ae65a]'
                }  text-base hover:border-b-2 `}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Info from '@/components/Info';
import FEvents from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Sponsors from '@/components/Sponsors';
import Societies from '@/components/Societies';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="w-full h-full  ">
      <div className="w-full h-[40rem] md:h-[50rem] lg:h-[60rem]">
        <Hero />
      </div>
      <div className="w-full">
        <Info />
      </div>
      <div className="w-full ">
        <FEvents />
      </div>
      <Sponsors />
      <Societies />
      <Testimonials />
    </div>
  );
}

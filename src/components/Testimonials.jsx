import React, { useRef } from "react"
import Image from "next/image"
import { Poppins, Montserrat } from "next/font/google"
import { testimonials } from "../../data/data"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { motion } from "framer-motion"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

const Testimonials = () => {
  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  }
  const sliderRef = useRef(null)

  const scrollSlider = (direction) => {
    // Use slickNext and slickPrev methods to scroll the slider
    if (sliderRef.current) {
      if (direction === "next") {
        sliderRef.current.slickNext()
      } else if (direction === "prev") {
        sliderRef.current.slickPrev()
      }
    }
  }
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 800, // screens smaller than 1024px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200, // screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500, // screens smaller than 1200px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 2600, // screens smaller than 1200px
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }
  return (
    <div
      className={`${montserrat.className} w-full h-full flex justify-center pt-9 pb-9 mb-10 `}>
      <div className="w-[80%] h-full ">
        <div
          className={`mb-9 w-full flex items-center justify-center flex-col ${poppins.className}`}>
          <motion.h3
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="uppercase font-medium text-3xl flex items-center justify-center w-full lg:text-5xl text-[#1f1b4e]">
            Testimonials
          </motion.h3>
          <motion.span
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className=" flex items-center justify-center  font-light text-sm w-full lg:text-2xl lg:leading-[3rem] text-[#1f1b4e] ">
            Check out what people have to say!
          </motion.span>
        </div>
        <div className="w-full h-full flex items-center ">
          <div className="w-[5%] h-full flex items-center justify-center ">
            <div
              className="cursor-pointer "
              onClick={() => scrollSlider("prev")}>
              <ArrowBackIosNew />
            </div>
          </div>
          <div className="w-[90%] h-full  ">
            <Slider {...settings} className="" ref={sliderRef}>
              {testimonials?.map((item, i) => (
                <div key={item.id} className=" w-full h-fit px-4 ">
                  <div className="w-full min-h-[10rem] md:min-h-[12rem] lg:min-h-[25rem] flex flex-col justify-between shadow-md rounded-md bg-[#f1f2f7] px-5 py-2 gap-2">
                    <div className="text-[10px] lg:text-[15px]">
                      <Image
                        src="/images/quote-left.png"
                        width={30}
                        height={30}
                        alt="quote"
                      />
                      {item.desc}
                      <Image
                        src="/images/quote-right.png"
                        width={30}
                        height={30}
                        alt="quote"
                        className=" ml-auto"
                      />
                    </div>
                    <div className="">
                      <div className="w-full h-[30%] flex justify-center ">
                        <Image
                          src={item.src}
                          alt="Delta"
                          height={30}
                          width={20}
                          className="w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[8rem] border-[1px] border-[#1f1b4e] rounded-full object-cover object-top "
                          unoptimized
                          priority
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center ">
                        <h3 className="sm:text-lg text-[15px] lg:text-xl font-medium">
                          {item.name}
                        </h3>
                        <p className="sm:text-[12px] text-[10px] lg:text-[15px] mt-[-5px] ">
                          {item.pos}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="w-[5%] h-full flex items-center justify-center ">
            <div
              className="cursor-pointer "
              onClick={() => scrollSlider("next")}>
              <ArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

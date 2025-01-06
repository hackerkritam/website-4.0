import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { societies } from "../../data/data"
import { Poppins, Montserrat } from "next/font/google"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

const Societies = () => {
  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <>
      <section
        id="organizers"
        className="relative flex flex-col w-full h-max text-center items-center text-[#1f1b4e] mb-[2px] pt-16 pb-5">
        <div
          className={`mb-9 flex items-center justify-center flex-col ${poppins.className}`}>
          <motion.h3
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="uppercase font-medium text-3xl md:text-4xl flex items-center justify-center w-full lg:text-5xl ">
            Societies
          </motion.h3>
          <motion.span
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center justify-center  font-light text-sm w-full lg:text-2xl lg:leading-[3rem]">
            Check out societies that support Delta!
          </motion.span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 w-[80%] md:w-[60%] lg:w-[70%] mb-10 justify-around gap-5 lg:gap-9">
          {societies?.map((item, i) => (
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.05 * (i + 1), duration: 0.2 }}
              viewport={{ once: true }}
              className="h-[9rem] w-[70%] text-center ml-[20%]"
              // className={`h-[12rem] w-[50%] lg:w-[25%] border-[#1f1b4e] ${
              //   i === 4 ? "lg:ml-[12.5%]" : ""
              // } ${i === 6 ? "lg:mr-[12.5%]" : ""}`}
              key={item.id}>
              <Image
                src={item.src}
                width={10}
                height={10}
                alt="Society"
                unoptimized
                priority
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Societies

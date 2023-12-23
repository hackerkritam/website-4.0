import React from "react"
import Image from "next/image"
import { Poppins, Montserrat } from "next/font/google"
import { motion } from "framer-motion"
import Link from "next/link"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

const Info = () => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <div
      className={`bg-white w-full flex justify-center ${montserrat.className} pt-16 md:pb-16 `}>
      <div className="w-[80%] flex flex-col-reverse lg:flex-row items-center lg:items-start ">
        <div className="w-full lg:w-[60%] mb-4 mt-4 flex flex-col gap-4 py-5">
          <div className="w-full flex flex-col gap-2">
            <motion.h1
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-[#1f1b4e] font-semibold text-xl md:text-4xl lg:text-3xl tracking-wide">
              Our Theme
            </motion.h1>
            <span className="font-bold text-[#5ae65a] text-3xl sm:text-3xl md:text-6xl  uppercase tracking-wide">
              Green Technology
            </span>
          </div>

          <div className="w-full flex flex-col gap-4 mt-9">
            <h2 className="text-lg md:text-2xl font-semibold tracking-wide">
              Sub Themes
            </h2>
            <div className="flex flex-col text-2xl gap-4 ">
              <span>1. Sustainable Structure</span>
              <span>2. Renewable Energy Integration</span>
              <span>3. Waste-to-Energy</span>
              <span>4. Energy Efficient Design</span>
            </div>
          </div>

          <Link
            className="px-7 py-[12px] bg-transparent text-[#5ae65a] border-2 border-[#5ae65a] mt-3 hover:bg-[#5ae65a] hover:text-[#1f1b4e] duration-300 font-medium w-max"
            href="/theme/ThemeBookDELTA.pdf"
            target="_blank">
            <div>Theme Book</div>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="flex w-full md:w-[80%] lg:w-[40%] items-center justify-center  rounded-md">
          <Image
            src="/images/theme.png"
            alt="Delta"
            height={30}
            width={30}
            className="w-full rounded-lg  "
            unoptimized
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Info

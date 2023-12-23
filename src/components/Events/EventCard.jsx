import Image from "next/image"
import React, { useState } from "react"
import useScrollBlock from "../../../customHooks/useScrollBlock"
import { motion } from "framer-motion"
import Link from "next/link"

const EventCard = ({ item }) => {
  const [viewMore, setViewMore] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock(false)

  const handleViewMore = () => {
    setViewMore(true)
    blockScroll()
  }
  const handleViewLess = () => {
    setViewMore(false)
    allowScroll()
  }

  const handleRegister = () => {
    //Register Logic Here...
  }

  return (
    <div className="max-w-[18rem] h-[22rem] border-[#1f1b4e] border-[3px] px-6 pt-3 pb-1 rounded-lg flex flex-col items-center ">
      <motion.div className=" w-full h-[12rem]  mb-2 ">
        <Image
          width={10}
          height={10}
          alt="event"
          src={item.image}
          className="w-full h-full object-cover  "
          unoptimized
          priority
        />
      </motion.div>
      <div className="w-full h-[3rem] text-center mb-6 font-bold text-lg text-[#1f1b4e]">
        <span>{item.name}</span>
      </div>
      {/* <div className="w-full h-[4.5rem] text-center overflow-hidden mb-6 text-sm text-[#1f1b4e] ">
        <div className="line-clamp-3 ">{item.desc}</div>
      </div> */}
      <div className="w-full flex justify-between flex-row items-center gap-3">
        <div>
          <Link href={`${item.formLink}`} target="_blank">
            <button
              className="py-[2px] font-medium px-4 border-2 border-[#1f1b4e] text-[#1f1b4e] hover:bg-[#1f1b4e]  hover:text-[white] text-sm rounded duration-300"
              // onClick={handleRegister}
            >
              Register
            </button>
          </Link>
        </div>
        <div>
          <Link href={`${item.fbLink}`} target="_blank">
            <button
              className="py-[2px] font-medium px-3 text-[#1f1b4e] border-2 border-[#1f1b4e] hover:bg-[#1f1b4e]  hover:text-[white] text-sm rounded duration-300"
              // onClick={handleViewMore}
            >
              View More
            </button>
          </Link>
        </div>
      </div>
      {viewMore && (
        <div className="z-[100] w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center">
          <div className="h-[90%] w-[80%] bg-[#f1f2f7] rounded-lg flex flex-col items-center p-4  justify-center sm:px-6">
            <div className=" sm:w-[18rem] w-[10rem] sm:h-[18rem] h-[10rem] rounded-full mb-2 mt-4  text-[#1f1b4e]">
              <Image
                width={500}
                height={500}
                alt={item ? item.name : "Event"}
                src={item.image}
                className="w-full h-full object-cover rounded-full "
                unoptimized
                loading="lazy"
              />
            </div>
            <div className="w-full h-[3rem] text-center sm:mb-6 mb-14 font-bold text-lg ">
              <span className="sm:text-3xl text-xl text-[#1f1b4e]">
                {item.name}
              </span>
            </div>
            <div className="w-full max-h-[12rem] overflow-scroll lg:overflow-auto lg:h-[20rem] text-center mb-6 sm:text-sm text-xs text-[#1f1b4e] ">
              <div className="">{item.desc}</div>
            </div>
            <div className="w-full flex justify-between items-center sm:flex-row flex-col gap-3">
              <div>
                <button
                  className="py-[5px] px-6 border-[#1f1b4e] border-2  text-md rounded-lg font-medium text-[#1f1b4e] hover:bg-[#1f1b4e] hover:text-[#f1f2f7] duration-300"
                  onClick={handleRegister}>
                  Register
                </button>
              </div>
              <div>
                <button
                  className="py-[5px] px-6 border-[#1f1b4e] border-2  text-md rounded-lg font-medium text-[#1f1b4e] hover:bg-[#1f1b4e] hover:text-[#f1f2f7] duration-300"
                  onClick={handleViewLess}>
                  View Less
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventCard

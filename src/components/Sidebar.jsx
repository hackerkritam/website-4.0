import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
// import { useOutsideClick } from "@/customHooks/useOutsideClick"
import { useRouter } from "next/router"
import { Poppins, Montserrat } from "next/font/google"
// import { formLink } from '@/data/data';

const poppins = Poppins({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
const montserrat = Montserrat({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Sidebar = ({ openNav, setOpenNav }) => {
  const [openClass, setOpenClass] = useState(false)

  const handleClickOutside = () => {
    setOpenClass(false)
  }
  //   const ref = useOutsideClick(handleClickOutside)

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      setOpenNav(false)
    }

    router.events.on("routeChangeStart", handleRouteChange)
    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
      className={`absolute flex  ${poppins.className} items-center justify-center w-[100vw] h-[100vh] bg-[#1f1b4e] z-[100]  `}>
      <div
        className="absolute left-10 top-10 cursor-pointer"
        onClick={() => {
          setOpenNav(false)
        }}>
        <Image
          alt="closebtn"
          width={10}
          height={10}
          src="/icons/close-white.png"
          className="w-[1.5rem] md:w-[4rem] object-contain "
        />
      </div>
      <div className="relative flex flex-col text-white">
        <div className="flex justify-center items-center mb-20">
          <Image
            alt="Delta"
            src="/images/Delta 4.0 profile logo white.png"
            width={250}
            height={250}
            priority
            unoptimized
            className="w-[8rem] h-[8rem] "
          />
        </div>
        <div className="relative flex flex-col items-center text-base justify-center ">
          <Link
            href="/"
            className="w-[15rem] flex justify-center items-center h-[3rem] border-white py-2">
            Home
          </Link>
          <Link
            href="/about"
            className="w-[15rem] flex justify-center items-center h-[3rem] border-white py-2">
            About
          </Link>
          <Link
            href="/events"
            className="w-[15rem] flex justify-center items-center h-[3rem] border-white py-2">
            Events
          </Link>
          {/* <Link
            href="/sponsors"
            className="w-[15rem] flex justify-center items-center h-[3rem] border-white py-2"
          >
            Sponsors
          </Link> */}
          <Link
            href="/members"
            className="w-[15rem] flex justify-center items-center h-[3rem] border-white py-2">
            Members
          </Link>
          <Link
            href="/gallery"
            className="w-[15rem] flex justify-center items-center h-[3rem] border-white py-2">
            Gallery
          </Link>
          <Link
            href="/contact"
            className="w-[15rem] flex justify-center items-center h-[3rem] border-white py-2 mb-3">
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar

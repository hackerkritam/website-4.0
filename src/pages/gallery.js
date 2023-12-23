import React, { useEffect, useState } from "react"
// import { gallery } from "../data/data"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { Poppins, Montserrat } from "next/font/google"
import Head from "next/head"
import { gallery } from "../../data/data"
import { promises as fs } from "fs"
import path from "path"
import { AnimatePresence, motion } from "framer-motion"

const poppins = Poppins({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
const montserrat = Montserrat({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Gallery = ({ galleryFolders }) => {
  const [loading, setLoading] = useState(false)

  const loader = [1, 2, 3, 4, 5]
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  // console.log(galleryFolders);
  galleryFolders.reverse()

  return (
    <>
      <Head>
        <title>Gallery | Delta 5.0 </title>
      </Head>
      <section
        className="flex flex-col w-[100%] min-h-[100vh] h-max text-center items-center md:px-5 px-3 mb-16 pt-24 "
        id="events">
        <div className=" text-center mt-[3rem] ">
          <motion.h3
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className={`font-extrabold text-2xl md:text-4xl lg:text-5xl ${poppins.className}  text-center text-[black] border-[#1f1b4e] border-b-2 mb-8 mx-auto `}>
            Our <span className="text-[#1f1b4e]">Gallery</span>
          </motion.h3>
        </div>
        <div className="h-[3rem] w-[80%] mb-2 flex items-center px-2 text-neutral-400 md:text-lg lg:text-xl ">
          <Link className=" flex " href="/gallery">
            <div className="text-left  hover:text-black ">gallery</div>
          </Link>
          <div>/</div>
        </div>
        <div className="lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 justify-items-center ">
          {loading ? (
            loader.map((item, i) => (
              <div key={i} className="rounded w-[90%] mx-auto">
                <Skeleton className="h-[14rem] mb-4" />
                <Skeleton className="h-[1.8rem]" width={"80%"} />
              </div>
            ))
          ) : (
            // <>
            //   {gallery &&
            //     gallery.map((item, i) => {
            //       return (
            //         <div key={i} className="rounded w-[90%] h-max">
            //           <div className="group relative flex flex-col border-gray-300 w-[100%] h-[20rem] duration-500  overflow-hidden rounded-xl shadow-xl">
            //             <Link
            //               href={`/gallery/${item._id}`}
            //               className="w-full h-full "
            //             >
            //               <div className="w-full h-full ">
            //                 <Image
            //                   src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${item.image[0]}`}
            //                   height={20}
            //                   width={20}
            //                   alt="Gallery"
            //                   className="w-full h-full object-cover border-2 rounded-lg "
            //                   unoptimized
            //                   priority
            //                 />
            //               </div>
            //             </Link>
            //           </div>
            //           <Link
            //             href={`/gallery/${item._id}`}
            //             className={`text-2xl hover:text-[#B7002B] cursor-pointer font-semibold uppercase ${montserrat.className} rounded mt-2 `}
            //           >
            //             {item.event}
            //           </Link>
            //         </div>
            //       );
            //     })}
            // </>
            <AnimatePresence>
              {galleryFolders.map((folder, index) => (
                <div key={index} className="rounded w-[90%] h-max">
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative flex flex-col border-gray-300 w-full h-[20rem] overflow-hidden rounded-xl shadow-xl">
                    <Link
                      href={`/gallery/${folder}`}
                      className="h-full w-full ">
                      <Image
                        src={`/galleries/${folder}/${"thumbnail.jpg"}`}
                        width={400}
                        height={400}
                        alt={folder}
                        className="h-full object-contain border-2 rounded-lg "
                        unoptimized
                      />
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      delay: 0.2 * (index + 1) + 0.1,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className={`text-[#1f1b4e] text-4xl font-bold mt-2 ${montserrat.className} `}>
                    {folder}
                  </motion.div>
                </div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </section>
    </>
  )
}

export default Gallery

export async function getStaticProps() {
  const galleriesDirectory = path.join(process.cwd(), "public", "galleries")
  const galleryFolders = await fs.readdir(galleriesDirectory)

  return {
    props: {
      galleryFolders,
    },
  }
}

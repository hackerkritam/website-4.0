import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Poppins, Montserrat } from 'next/font/google';
import useScrollBlock from '../../../../customHooks/useScrollBlock';
import fs from 'fs';
import path from 'path';

const poppins = Poppins({
  weight: ['400', '200', '100', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
const montserrat = Montserrat({
  weight: ['400', '200', '100', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

// const GallerysubslugSlug = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [gallery, setGallery] = useState();
//   const [popupIndex, setPopupIndex] = useState();
//   const [blockScroll, allowScroll] = useScrollBlock();
//   const [selectedId, setSelectedId] = useState();
//   const [loading, setLoading] = useState(true);
//   const loader = [1, 2, 3, 4, 5, 6, 7, 8];

//   const getGallery = async () => {
//     try {
//       const data = await fetch(
//         `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/gallery/${slug}`
//       ).then((r) => {
//         return r.json();
//       });
//       setGallery(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (slug) {
//       getGallery();
//     }
//   }, [slug]);

//   const showImagePopup = (index) => {
//     setPopupIndex(index);
//     blockScroll();
//   };

//   const hideImagePopup = () => {
//     setPopupIndex(null);
//     allowScroll();
//   };

//   const showNextImage = () => {
//     setPopupIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
//   };

//   const showPrevImage = () => {
//     setPopupIndex((prevIndex) =>
//       prevIndex === 0 ? imageNames.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative flex flex-col items-center min-h-[100vh] w-[100%] pt-20 ">
//       <div className="w-[95%] mt-6 flex">
//         <svg
//           width={40}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           className="cursor-pointer rounded-full hover:scale-110 duration-300"
//           onClick={() => {
//             router.push('/gallery');
//           }}
//         >
//           <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" />
//         </svg>
//       </div>
//       <div className="flex items-center justify-center relative w-[80%] h-max">
//         <div
//           className={`text-[3rem] text-[#B7002B] font-bold min-h-[4.5rem] ${montserrat.className} `}
//         >
//           {gallery && gallery.slug}
//         </div>
//       </div>
//       <div className="flex flex-wrap w-[80vw] mt-8 justify-between p-2 ">
//         {loading ? (
//           loader.map((item, i) => (
//             <div
//               key={i}
//               className="w-[100%] md:w-[45%] lg:w-[23%] h-[20rem] mb-8 shadow-2xl rounded-lg "
//             >
//               <Skeleton className="h-full" />
//             </div>
//           ))
//         ) : (
//           <div className="flex flex-wrap w-full h-full lg:justify-start md:justify-around ">
//             {gallery &&
//               imageNames.map((image, i) => {
//                 return (
//                   <motion.div
//                     layoutId={image}
//                     key={i}
//                     className="h-max w-[100%] md:w-[45%] lg:w-[25%] mb-8 rounded-lg"
//                   >
//                     <Image
//                       src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${image}`}
//                       alt="image"
//                       width={200}
//                       height={10}
//                       className="lg:h-[20rem] w-full object-center lg:w-[95%] mx-auto object-cover rounded-lg cursor-pointer hover:scale-95 duration-300 "
//                       onClick={() => {
//                         setSelectedId(image);
//                         showImagePopup(i);
//                       }}
//                       unoptimized
//                       priority
//                     />
//                   </motion.div>
//                 );
//               })}
//           </div>
//         )}
//       </div>

//       {popupIndex != null && (
//         <motion.div className="fixed inset-0 flex flex-col items-center justify-center z-[100] bg-[rgba(0,0,0,0.7)]">
//           <div className="relative w-[100vw] ">
//             <button
//               className="absolute right-10 bg-white p-2 rounded-full"
//               onClick={hideImagePopup}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                 <line x1="6" y1="6" x2="18" y2="18"></line>
//               </svg>
//             </button>
//           </div>
//           <button
//             className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full"
//             onClick={() => {
//               showNextImage();
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="5" y1="12" x2="19" y2="12"></line>
//               <polyline points="12 5 19 12 12 19"></polyline>
//             </svg>
//           </button>
//           <button
//             className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full"
//             onClick={() => {
//               showPrevImage();
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="19" y1="12" x2="5" y2="12"></line>
//               <polyline points="12 19 5 12 12 5"></polyline>
//             </svg>
//           </button>
//           <AnimatePresence initial={false}>
//             {selectedId != null && (
//               <motion.div
//                 layoutId={imageNames[popupIndex]}
//                 // key={imageNames[popupIndex]} // Use the image URL as the key
//               >
//                 <Image
//                   src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${imageNames[popupIndex]}`}
//                   alt="popup-image"
//                   width={400}
//                   height={400}
//                   className="object-contain w-[80vw] h-[90vh]"
//                   unoptimized
//                   priority
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default GallerysubslugSlug;

const GallerysubslugSlug = ({ imageNames }) => {
  const [loading, setLoading] = useState();
  const [popupIndex, setPopupIndex] = useState();
  const [blockScroll, allowScroll] = useScrollBlock();
  const [selectedId, setSelectedId] = useState();

  const router = useRouter();
  const slug = router.query.slug;
  const subslug = router.query.subslug;

  // imageNames = imageNames.filter((str) => !str.includes('thumbnail'));
  
  // Ensure imageNames is an array and filter if defined
  if (imageNames) {
    imageNames = imageNames.filter((str) => !str.includes('thumbnail'));
  } else {
    imageNames = []; // Initialize as an empty array if undefined
  }

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const showImagePopup = (index) => {
    setPopupIndex(index);
    blockScroll();
  };

  const hideImagePopup = () => {
    setPopupIndex(null);
    allowScroll();
  };

  const showNextImage = () => {
    setPopupIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
  };

  const showPrevImage = () => {
    setPopupIndex((prevIndex) =>
      prevIndex === 0 ? imageNames.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="flex flex-col w-[100%] min-h-[100vh] h-max text-center items-center md:px-5 px-3 mb-16 pt-24 ">
      <div className="w-[95%] flex h-[3rem] ">
        <svg
          width={40}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="cursor-pointer rounded-full hover:scale-110 duration-300"
          onClick={() => {
            router.push(`/gallery/${slug}`);
          }}
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" />
        </svg>
      </div>
      <div className=" text-center">
        <motion.h3
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className={`font-extrabold text-2xl md:text-4xl lg:text-5xl ${poppins.className}  text-center text-[black] border-[#1f1b4e] border-b-2 mb-8 mx-auto`}
        >
          <span className="text-[#1f1b4e]">{subslug}</span>
        </motion.h3>
      </div>
      <div className="h-[3rem] w-[80%] mb-2 flex items-center px-2 text-neutral-400 md:text-lg lg:text-xl ">
        <Link className=" flex " href="/gallery">
          <div className="text-left  hover:text-black ">gallery</div>
        </Link>
        <div>/</div>
        <Link className=" flex " href={`/gallery/${slug}`}>
          <div className="text-left  hover:text-black ">{slug}</div>
        </Link>
        <div>/</div>
        <Link className=" flex " href={`/gallery/${slug}/${subslug}`}>
          <div className="text-left  hover:text-black ">{subslug}</div>
        </Link>
        <div>/</div>
      </div>
      <div className="flex flex-wrap w-[80vw] justify-between px-4 ">
        {loading ? (
          loader.map((item, i) => (
            <div
              key={i}
              className="w-[100%] md:w-[45%] lg:w-[23%] h-[20rem] mb-8 shadow-2xl rounded-lg "
            >
              <Skeleton className="h-full" />
            </div>
          ))
        ) : (
          <div className="flex flex-wrap w-full h-full lg:justify-start md:justify-around ">
            {imageNames &&
              imageNames.map((image, i) => {
                return (
                  <motion.div
                    layoutId={image}
                    key={i}
                    className="h-max w-[100%] md:w-[45%] lg:w-[25%] mb-8 rounded-lg"
                  >
                    <Image
                      src={`/galleries/${slug}/${subslug}/${image}`}
                      alt="image"
                      width={200}
                      height={10}
                      className="lg:h-[20rem] w-full object-center lg:w-[95%] mx-auto object-cover rounded-lg cursor-pointer hover:scale-95 duration-300 "
                      onClick={() => {
                        setSelectedId(image);
                        showImagePopup(i);
                      }}
                      unoptimized
                      priority
                    />
                  </motion.div>
                );
              })}
          </div>
        )}
      </div>

      {popupIndex != null && (
        <motion.div className="fixed inset-0 flex flex-col items-center justify-center z-[100] bg-[rgba(0,0,0,0.7)]">
          <div className="relative w-[100vw] ">
            <button
              className="absolute right-10 bg-white p-2 rounded-full"
              onClick={hideImagePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full"
            onClick={() => {
              showNextImage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full"
            onClick={() => {
              showPrevImage();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <AnimatePresence initial={false}>
            {selectedId != null && (
              <motion.div
                layoutId={imageNames[popupIndex]}
                // key={imageNames[popupIndex]} // Use the image URL as the key
              >
                <Image
                  src={`/galleries/${slug}/${subslug}/${imageNames[popupIndex]}`}
                  alt="popup-image"
                  width={400}
                  height={400}
                  className="object-contain w-[80vw] h-[90vh]"
                  unoptimized
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default GallerysubslugSlug;

// export async function getServerSideProps({ params }) {
//   // console.log(params);
//   const publicPath = path.join(
//     process.cwd(),
//     "public",
//     "galleries",
//     params.slug,
//     params.subslug
//   )

//   // Read the contents of the public folder dynamically
//   const imageNames = fs.readdirSync(publicPath)

//   return {
//     props: {
//       imageNames,
//     },
//   }
// }

// Function to get possible paths
export async function getStaticPaths() {
  const galleryBasePath = path.join(process.cwd(), 'public', 'galleries');
  const galleryFolders = fs.readdirSync(galleryBasePath);

  const paths = galleryFolders.reduce((acc, gallery) => {
    const subFolderPath = path.join(galleryBasePath, gallery);

    // Ensure the path is a directory before reading its contents
    if (fs.statSync(subFolderPath).isDirectory()) {
      const subFolders = fs.readdirSync(subFolderPath);
      const subPaths = subFolders.map((subFolder) => ({
        params: {
          slug: gallery,
          subslug: subFolder,
        },
      }));
      return [...acc, ...subPaths];
    }
    return acc; // If it's not a directory, just return the accumulator
  }, []);

  return {
    paths,
    fallback: false, // Or 'blocking' if you want to use Incremental Static Regeneration
  };
}

// Function to get data for each path
export async function getStaticProps({ params }) {
  const publicPath = path.join(
    process.cwd(),
    'public',
    'galleries',
    params.slug,
    params.subslug
  );

  // Ensure the path is a directory before reading its contents
  if (fs.statSync(publicPath).isDirectory()) {
    const imageNames = fs.readdirSync(publicPath);
    return {
      props: {
        imageNames,
      },
    };
  }

  // If it's not a directory, return an empty props object or handle it as appropriate for your use case
  return {
    props: {},
  };
}

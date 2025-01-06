import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Poppins, Montserrat } from "next/font/google"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

const Footer = () => {
  return (
    <div className="w-[100%] pt-7 ">
      <div
        className={`text-white flex gap-7 py-7 xl:flex-row flex-col items-center ${montserrat.className}`}>
        <div className="my-auto text-center xl:pb-0 pb-12">
          <Image
            src="/images/delta_5.0_profile_logo_white.png"
            alt="Delta"
            height={100}
            width={100}
          />
        </div>
        <div className="flex flex-col  xl:gap-12 gap-20 xl:ml-auto items-center justify-center">
          <ul className="flex md:flex-row flex-col items-center justify-between xl:gap-5 gap-3 xl:w-[800px] w-full">
            <li className="text-[18px] font-semibold xl:w-[200px]">
              Quick Links
            </li>
            <Link href="/">
              <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                About
              </li>
            </Link>
            <Link href="/events">
              <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                Events
              </li>
            </Link>
            {/* <Link href="/sponsors">
              <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                Sponsors
              </li>
            </Link> */}
            <Link href="/members">
              <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                Members
              </li>
            </Link>
            <Link href="/gallery">
              <li className="cursor- duration-300 hover:text-[#5ae65a]">
                Gallery
              </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                Contact
              </li>
            </Link>
          </ul>
          <ul className="flex md:flex-row flex-col items-center justify-between xl:gap-12 gap-6 xl:w-[800px] w-full">
            <li className="text-[18px] font-semibold xl:w-[200px]">
              Connect with us
            </li>
            <div className="flex flex-row xl:gap-12 sm:gap-10 gap-5">
              <Link href="https://www.facebook.com/delta.ioe" target="_blank">
                <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25">
                    <path
                      d="M7.5 14.5a7 7 0 110-14 7 7 0 010 14zm0 0v-8a2 2 0 012-2h.5m-5 4h5"
                      stroke="currentColor"></path>
                  </svg>
                </li>
              </Link>
              <Link href="https://www.instagram.com/delta.ioe/" target="_blank">
                <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25">
                    <path
                      d="M11 3.5h1M4.5.5h6a4 4 0 014 4v6a4 4 0 01-4 4h-6a4 4 0 01-4-4v-6a4 4 0 014-4zm3 10a3 3 0 110-6 3 3 0 010 6z"
                      stroke="currentColor"></path>
                  </svg>
                </li>
              </Link>
              {/* <Link href="/events">
                <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25">
                    <path
                      d="M9.5 0v11A3.5 3.5 0 116 7.5m8-2A4.5 4.5 0 019.5 1"
                      stroke="currentColor"></path>
                  </svg>
                </li>
              </Link> */}
              {/* <Link href="/members">
                <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25">
                    <path
                      d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
                      fill="currentColor"></path>
                  </svg>
                </li>
              </Link> */}
              <Link
                href="https://www.youtube.com/@deltaevent3395"
                target="_blank">
                <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25">
                    <path
                      d="M1.61 12.738l-.104.489.105-.489zm11.78 0l.104.489-.105-.489zm0-10.476l.104-.489-.105.489zm-11.78 0l.106.489-.105-.489zM6.5 5.5l.277-.416A.5.5 0 006 5.5h.5zm0 4H6a.5.5 0 00.777.416L6.5 9.5zm3-2l.277.416a.5.5 0 000-.832L9.5 7.5zM0 3.636v7.728h1V3.636H0zm15 7.728V3.636h-1v7.728h1zM1.506 13.227c3.951.847 8.037.847 11.988 0l-.21-.978a27.605 27.605 0 01-11.568 0l-.21.978zM13.494 1.773a28.606 28.606 0 00-11.988 0l.21.978a27.607 27.607 0 0111.568 0l.21-.978zM15 3.636c0-.898-.628-1.675-1.506-1.863l-.21.978c.418.09.716.458.716.885h1zm-1 7.728a.905.905 0 01-.716.885l.21.978A1.905 1.905 0 0015 11.364h-1zm-14 0c0 .898.628 1.675 1.506 1.863l.21-.978A.905.905 0 011 11.364H0zm1-7.728c0-.427.298-.796.716-.885l-.21-.978A1.905 1.905 0 000 3.636h1zM6 5.5v4h1v-4H6zm.777 4.416l3-2-.554-.832-3 2 .554.832zm3-2.832l-3-2-.554.832 3 2 .554-.832z"
                      fill="currentColor"></path>
                  </svg>
                </li>
              </Link>
              <Link href="mailto:delta@ioepc.edu.np" target="_blank">
                <li className="cursor-pointer duration-300 hover:text-[#5ae65a]">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25">
                    <path
                      d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                      stroke="currentColor"></path>
                  </svg>
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      <div
        className={`text-white text-[13px] ${montserrat.className} mx-auto flex flex-col py-50`}>
        <p className="text-center py-3">
          Copyright © 2023 Delta IOEPC | Designed and developed by{" "}
          <Link
            href="https://www.ghimiresuzan.com.np/"
            className="hover:text-[#5ae65a] duration-300"
            target="_blank">
            Sujan
          </Link>{" "}
          and{" "}
          <Link
            href="https://swikarneupane.com.np"
            className="hover:text-[#5ae65a] duration-300"
            target="_blank">
            Swikar
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Footer

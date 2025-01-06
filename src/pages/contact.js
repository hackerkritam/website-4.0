import React, { useState } from "react"
import { Poppins, Montserrat } from "next/font/google"
import Image from "next/image"
import Head from "next/head"

const poppins = Poppins({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
const montserrat = Montserrat({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Contact = () => {
  const [message, setMessage] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const text = document.getElementById("message")

    // const formData = new FormData();
    // formData.append("name", name.value);
    // formData.append("email", email.value);
    // formData.append("message", message.value);

    const data = {
      name: name.value,
      email: email.value,
      message: text.value,
    }
    console.log(data)
    if (!name.value || !email.value || !text.value) {
      setMessage("Fill all the fields!!!")
      return
    }
    try {
      setMessage("Thank you for your response")
      name.value = null
      email.value = null
      text.value = null
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then((r) => {
        return r.json()
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us | Delta 5.0 </title>
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Get in touch with us at Delta! Contact our team for inquiries, support via mail or you can directly contact us through social media. We're here to assist you with any questions or feedback you may have."
        />
      </Head>
      <section
        className={`flex flex-col w-[100%] lg:w-[80%] h-max mx-auto text-center justify-between items-center pt-[5rem] sm:pt-[7rem] pb-20 ${poppins.className}`}
        id="events">
        <div className=" text-center mt-[3rem] ">
          <div
            className={`font-extrabold text-2xl md:text-4xl lg:text-5xl ${poppins.className}  text-center text-[black] border-[#1f1b4e] border-b-2 mb-[50px] mx-auto `}>
            Contact <span className="text-[#1f1b4e]">Us</span>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col w-[100%] gap-2 lg:gap-3 xl:gap-5 mx-auto justify-around">
          <div className="w-[90%] sm:w-[70%] lg:w-[500px] mx-auto xl:w-[40%]  mb-[25px] lg:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.59246814814034!2d87.29206143020757!3d26.792861756065967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b606ce89f9%3A0x7423e72f8e139e05!2z4KSq4KWB4KSw4KWN4KS14KS-4KSe4KWN4KSa4KSyIOCkleCljeCkr-CkvuCkruCljeCkquCkuA!5e0!3m2!1sne!2snp!4v1700927488584!5m2!1sne!2snp"
              width="600"
              height="450"
              // style="border:0;"
              className="w-[100%]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="w-[90%] sm:w-[70%] lg:w-[500px] mx-auto xl:w-[40%] py-10 bg-[#f1f2f7]">
            <div>
              <p className="uppercase font-medium text-xl flex items-center justify-center w-full lg:text-3xl">
                Our Contact Details
              </p>
              <p className=" mb-[10px] flex items-center justify-center  font-light text-sm w-full lg:text-lg lg:leading-[3rem] mt-[-5px]">
                Stay in touch with us!
              </p>
            </div>
            <div className="xl:w-[100%] flex flex-col items-start justify-center mt-[50px] mb-[20px]">
              <div className="px-5 flex flex-row items-center justify-center mb-9 mx-auto">
                <div>
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20">
                    <path
                      d="M4.72.5H2.5a2 2 0 00-2 2v2c0 5.523 4.477 10 10 10h2a2 2 0 002-2v-1.382a1 1 0 00-.553-.894l-2.416-1.208a1 1 0 00-1.396.578l-.297.893a1.21 1.21 0 01-1.385.804A6.047 6.047 0 013.71 6.547a1.21 1.21 0 01.804-1.385l1.108-.37a1 1 0 00.654-1.19L5.69 1.257A1 1 0 004.72.5z"
                      stroke="currentColor"></path>
                  </svg>
                </div>
                <span className="text-[15px] lg:text-[20px] ml-5">
                  +977 9817183081
                </span>
              </div>
              <div className="px-5 flex flex-row mx-auto items-center justify-center mb-9">
                <div>
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20">
                    <path
                      d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
                      stroke="currentColor"></path>
                  </svg>
                </div>
                <span className="text-[15px] lg:text-[20px] ml-5">
                  delta@ioepc.edu.np
                </span>
              </div>
              <div className="px-5 flex flex-row mx-auto items-center justify-center">
                <div>
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20">
                    <path
                      clip-rule="evenodd"
                      d="M7.5 8.495a2 2 0 002-1.999 2 2 0 00-4 0 2 2 0 002 1.999z"
                      stroke="currentColor"
                      stroke-linecap="square"></path>
                    <path
                      clip-rule="evenodd"
                      d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 017.5.5c3.313 0 6 2.685 6 5.996z"
                      stroke="currentColor"
                      stroke-linecap="square"></path>
                  </svg>
                </div>
                <span className="text-[15px] lg:text-[20px] ml-5">
                  Tinkune, Dharan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

import Image from "next/image"
import React from "react"
import { Poppins, Montserrat } from "next/font/google"
import Head from "next/head"
import { motion } from "framer-motion"

const poppins = Poppins({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
const montserrat = Montserrat({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <Head>
        <title>About Us | Learn more about Delta 5.0 </title>
        <meta property="og:description" content="" />
        <meta property="og:type" content="article" />
      </Head>
      <section
        className="flex flex-col w-full h-fit text-center justify-around items-center pt-[7rem] pb-7"
        id="events">
        <div className=" text-center">
          <motion.h3
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className={`font-extrabold text-[40px] ${poppins.className} text-center text-[black] border-[#1f1b4e] border-b-2 mb-8 mx-auto`}>
            About <span className="text-[#1f1b4e]">Delta 4.0</span>
          </motion.h3>
        </div>
        <div
          className={`xl:w-[70%] lg:w-[80%] w-[90%] md:p-6 p-1 text-xl ${poppins.className} text-left rounded-lg h-max `}>
          <div className="flex xl:flex-row flex-col-reverse gap-4 min-h-[24rem] xl:gap-7">
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-base text-justify xl:w-[70%] justify-between my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start mt-4 ">
                  Welcome to Delta 4.0!
                </motion.div>
                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-xl ${poppins.className} mb-4 mt-2 ">
                  <span>
                    Welcome to Delta, an organization fueled by the passion and
                    ingenuity of engineering students at Purwanchal Campus in
                    Dharan, Sunsari. Established as a collaborative effort by
                    students from seven diverse faculties—Agricultural,
                    Architecture, Computer, Civil, Electrical, Electronics,
                    Information & Communication, and Mechanical—Delta stands as
                    a testament to the power of unity in education.
                  </span>
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:w-[200%] max-w-[400px] max-h-[400px] mx-auto  w-full items-center my-auto">
              <Image
                src="/images/About Page/1.jpg"
                alt="Delta Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg border-2 "
                unoptimized
                priority
              />
            </motion.div>
          </div>
          <br />
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/6.jpg"
                alt="Delta Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start  ">
                  Our Mission
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-xl ${poppins.className} mt-2">
                  At Delta, we go beyond the traditional boundaries of
                  education. Each faculty boasts its own society, driven by
                  students with a shared goal: to provide training beyond the
                  standard curriculum. This training equips students with skills
                  essential for success in their respective fields. Led by
                  seniors and industry experts, these sessions offer practical
                  insights and real-world knowledge to the next generation of
                  engineers.
                </motion.p>
              </div>
            </div>
          </div>

          <br />
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start  ">
                  Delta: An Umbrella of Excellence
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-xl ${poppins.className} mt-2">
                  Delta is more than an organization; it's an umbrella that
                  shelters seven distinct societies, each representing a faculty
                  at Purwanchal Campus. These societies form the backbone of
                  Delta, and their representatives play crucial roles in the
                  organization's dynamic and collaborative organizing committee.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/2.jpg"
                alt="Delta Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
          </div>
          <br />
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/5.jpg"
                alt="Delta Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start  ">
                  Annual Transformation
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-xl ${poppins.className} mt-2">
                  Every year, Delta undergoes a transformation, marked by a
                  change in nomenclature from Delta3.0 to Delta4.0. This
                  evolution signifies our commitment to progress and innovation.
                  Last year, under the theme of "Sustainable Modern
                  Agriculture," Delta3.0 hosted a grand National Technological
                  Event, setting the stage for an annual tradition of
                  exploration and advancement.
                </motion.p>
              </div>
            </div>
          </div>
          <br />
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start  ">
                  Events that Define Excellence
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-xl ${poppins.className} mt-2">
                  In our main events, we bring together all seven faculties for
                  competitions that challenge the boundaries of innovation and
                  creativity. From Software Hackathons to Popsicles Bridge
                  Competitions, each event is a testament to the diverse talents
                  within our organization. Our dedication to fostering
                  creativity extends to pre-events like Delta Champs, designed
                  to engage school and +2 level students in art, speech, quiz
                  contests, and more.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/4.jpg"
                alt="Delta Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
          </div>
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/3.jpg"
                alt="Delta Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start  ">
                  Training for Success
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-xl ${poppins.className} mt-2">
                  Delta is not just an event organizer; it's a training ground.
                  We believe in nurturing talent by inviting experts to provide
                  specialized training to our students. This commitment extends
                  to pre-events, where participants are immersed in three days
                  of creative and technological activities.
                </motion.p>
              </div>
            </div>
          </div>

          <div className="flex xl:flex-row flex-col-reverse gap-4  xl:gap-7">
            <div className=" w-[100%] xl:ml-auto xl:text-lg text-sm md:text-md mx-auto items-center text-justify mt-9">
              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-left text-[1.15rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start mt-4 ">
                Get Ready for the Ultimate Technical Adventure!
              </motion.div>
              <motion.p
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-2 text-base md:text-md lg:text-xl">
                Join us on our journey of growth, collaboration, and excellence.
                Delta is more than an organization; it's a community dedicated
                to shaping the future of engineering.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

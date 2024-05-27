"use client"

import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '@/app/style'
import { services } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { fadeIn, textVariant } from '@/utils/motion'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full sm:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain ' />
          <h3 className='text-primary text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >

        I am a passionate and dedicated final-year undergraduate student majoring in Computer Science, currently seeking opportunities to leverage my diverse skill set in software development. My expertise spans a wide range of technologies, including web development, backend systems, database management, and mobile app development. With a solid foundation in both frontend and backend development, I am proficient in creating dynamic, responsive, and user-friendly applications.

       
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
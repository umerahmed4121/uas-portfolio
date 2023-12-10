"use client"

import React from 'react'
import { Tilt }  from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '@/app/style'
import { services } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { fadeIn, textVariant } from '@/utils/motion'


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="w-full sm:w-[250px]">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain '/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

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
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vehicula nunc a consectetur. Fusce fringilla mi non metus tempor, nec posuere nunc facilisis. Mauris in tempus dolor. Nunc facilisis nisl quis velit eleifend, vel sagittis lorem rutrum. Nullam semper gravida dui, a malesuada neque. Ut placerat metus velit. Phasellus viverra augue vitae sapien dignissim, vel mattis mauris gravida. Nulla facilisi. Donec vel vehicula enim, in convallis metus. Nulla eros mauris, efficitur eu interdum ut, consectetur a purus. Pellentesque imperdiet tincidunt lorem ac consequat. Sed non ante efficitur, facilisis dui vitae, pretium turpis. In hac habitasse platea dictumst. Sed in.</motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");
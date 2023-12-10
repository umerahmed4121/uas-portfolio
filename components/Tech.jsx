"use client"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "@/hoc"
import { technologies } from "@/constants"
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <Tilt className="w-28 h-28  rounded-full p-2 " key={technology.name}>
          {/* <BallCanvas icon={technology.icon}/> */}
          <motion.img
            whileHover={{ scale: 1.1 }}
            className="w-full h-auto object-cover"
            src={technology.icon}
            alt={technology.name}
            variants={fadeIn("right", "spring", 0.05 * index, 0.75)}
          />
        </Tilt>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
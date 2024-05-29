"use client"

import { SectionWrapper } from '@/hoc'
import React from 'react'

import {
    markupAndStyling,
    programmingLanguages,
    frontend,
    backend,
    databases,
    frameworks,
    versionControl,
    others

} from "@/constants";

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import { styles } from '@/app/style';

const TechStackCard = ({ tech, title, center }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}
            className="w-60 bg-tertiary text-white p-2 m-1   rounded-md z-10">
            <motion.div

            >
                <h1 className='text-2xl font-bold text-center'>{title}</h1>
                <div className=''>
                    {
                        tech.map((item, index) => (
                            <div key={index} className='flex items-center gap-4 py-2'>
                                <img src={item.icon} alt={item.name} className='w-8 h-8' />
                                <p className='text-center'>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}
const TechStackCenterCard = ({ tech, title, center }) => {
    return (
        <div className="bg-tertiary text-white p-6 m-1 rounded-full h-80 w-80 flex flex-col justify-center">
            <h1 className='text-2xl font-bold text-center'>{title}</h1>
            <div className=''>
                {
                    tech.map((item, index) => (
                        <div key={index} className='flex items-center gap-4 py-2 pl-[25%]'>
                            <img src={item.icon} alt={item.name} className='w-8 h-8' />
                            <p className='text-center'>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const Lines = ({width, translateX, translateY, rotate}) => {

    

    return (
        <motion.span
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            tr
            transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}
            // transformTemplate={({ rotate, rotateX, rotateY, rotateZ, scale, x, y, z }) => {
            //     return `rotate(${rotate}) translateX(${x}) translateY(${y})`
            // }}
            className={`absolute w-[${width}px] h-2 bg-tertiary ${translateX > 0 ? `translate-x-[${parseInt(translateX)}px]` : `-translate-x-[${translateX}px]`} ${translateY > 0 ? `translate-y-[${translateY}px]` : `-translate-y-[${translateY}px]`} rotate-[${rotate}deg]`}>
                
                
        </motion.span>
    )
}




const TechStack = () => {
    return (
        <>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
            Tech Stack
        </h2>
      </motion.div>
        <motion.div
            className=' w-full p-2 mt-12'
        >

            <motion.div
                className=' grid grid-cols-3 justify-items-center'>
                <TechStackCard tech={markupAndStyling} title="Markup & Styling" />
                <TechStackCard tech={frontend} title="Frontend" />
                <TechStackCard tech={backend} title="Backend" />



            </motion.div>
            <div className='grid justify-center py-10'>
                {/* <Lines width={320} translateX={152} translateY={54} rotate={45} />
                <Lines width={64} translateX={530} translateY={-24} rotate={90} />
                <Lines width={320} translateX={666} translateY={48} rotate={315} /> */}

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <TechStackCenterCard tech={programmingLanguages} title="Programming Languages" center={true} />
                </motion.div>
                {/* <Lines width={262} translateX={202} translateY={279} rotate={315} />
                <Lines width={64} translateX={530} translateY={342} rotate={90} />
                <Lines width={262} translateX={673} translateY={279} rotate={45} /> */}

                

            </div>

            <div className=' grid grid-cols-3 justify-items-center'>
                <TechStackCard tech={databases} title="Databases" />
                <TechStackCard tech={versionControl} title="Version Control" />
                <TechStackCard tech={frameworks} title="Frameworks" />
            </div>

        </motion.div>
    
        </>
        )
}

export default SectionWrapper(TechStack, "")
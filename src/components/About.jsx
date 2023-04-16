import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
       variants={fadeIn("right","spring",
       0.5 * index,0.75)}  
       className="w-full green-pink-gradient p-[1px]
       rounded-[20px] shadow-card"
       >

        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tetiary rounded-[20px] py-5 -x-12 min-h-[280px]
          flex justify-evenly items-center flex-col"
        >

          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white tex-[20px] font-bold text-center">{title}</h3>
        </div>
      </ motion.div>
      
    </Tilt>
  )
 }
 

const About = () => {
  return (
    <>
    <motion.div  variants={textVariant()}>
    <p className={styles.sectionSubText}
    >Introduction</p>
    <h2 className={styles.sectionHeadText}>
      Overview.
    </h2>

    </motion.div>
    

    <motion.p
     variants={fadeIn("", "",0.1,1)}
     className="mt-4 text-secondary tex-[17px] max-w-3xl leading-[30px]"
    >
     An engineer by training, a data scientist by passion. Have 2+ years working in the drone industry but have been studying and building Machine
Learning models since my time in college. Interested in finding a way to bring solutions to businesses using Data Science and interested in 
optimization to improve existing products, processes, and services to create value for businesses. I can follow instructions and execute, but ideation
is my real strength. 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) => (
      <ServiceCard key={service.title} index={index}
      {...service} />
      ))}


    </div>
    </>
  )
}

export default SectionWrapper (About, "about")
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evently items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold
          text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a software developer, I bring a dynamic blend of technical expertise,
        creative problem-solving, and a passion for innovation to any team. I have experience
        in Javascript and Typescript, and frameworks such as React, Node.js, and Next.js.
        I have successfully designed and implemented robust, scalable
        solutions across various projects.
        I thrive in environments that encourage continuous learning and collaboration, always
        seeking new challenges to push my skills further. My strong analytical mindset and
        attention to detail, combined with a dedication to delivering high-quality software,
        make me a valuable asset for any organization looking to drive technological excellence.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title}
            index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
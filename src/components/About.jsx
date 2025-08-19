import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

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
      >
        Full-stack developer with 4 years of experience in front-end, back-end, and DevOps technologies. 
        Proficient in JavaScript, HTML, CSS, React, Next.js, NestJS, Ruby on Rails, and Python. 
        Skilled in building responsive interfaces, developing RESTful APIs, and managing databases such as SQL, MongoDB, and DynamoDB. 
        Experienced in version control (Git), automated testing, and CI/CD deployment processes. 
        I collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
      </motion.p>

      {/* Services Slider */}
      <div className='mt-20 relative overflow-hidden'>
        <div className='flex gap-10 services-slider'>
          {services.concat(services).map((service, index) => (
            <div key={`service-${index}`} className='flex-shrink-0'>
              <ServiceCard index={index} {...service} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-slider {
          animation: slide 30s linear infinite;
          will-change: transform;
        }
        
        .services-slider:hover {
          animation-play-state: paused;
        }
        
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${services.length * 270}px);
          }
        }
        
        @media (max-width: 768px) {
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${services.length * 220}px);
            }
          }
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(About, "about");

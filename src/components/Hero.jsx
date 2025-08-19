import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for 3D model and content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleModelLoad = () => {
    setModelLoaded(true);
  };

  if (isLoading) {
    return (
      <section className={`relative w-full h-screen mx-auto overflow-hidden bg-gradient-to-br from-primary via-black-200 to-black-100`}>
        {/* Loading Content */}
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="text-center">
            {/* Loading Animation */}
            <div className="relative mb-8">
              <div className="w-24 h-24 border-4 border-secondary border-t-white rounded-full animate-spin mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">MT</span>
                </div>
              </div>
            </div>
            
            {/* Loading Text */}
            <h2 className="text-white text-2xl font-bold mb-2">Muhammad Tayyab</h2>
            <p className="text-secondary text-lg mb-4">Full Stack Developer</p>
            
            {/* Loading Progress */}
            <div className="w-64 bg-black-200 rounded-full h-2 mx-auto">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
            
            <p className="text-secondary text-sm mt-4">Loading 3D Portfolio...</p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Hero Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Muhammad Tayyab</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Full Stack Web & mobile applications, AI <br className='sm:block hidden' />
            agents and DevOps Solutions
          </p>
        </div>
      </motion.div>

      {/* 3D Canvas Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-10"
      >
        <ComputersCanvas onLoad={handleModelLoad} />
      </motion.div>

      {/* Fallback Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-black-200 to-black-100 z-0" />

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30 pointer-events-auto'
      >
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-white transition-colors duration-300'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

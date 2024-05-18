'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image src='/hero.png' alt='' fill className='object-contain' />
        </div>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
          {/* TITLE */}
          <h1 className='text-4xl md:text-6xl font-bold'>
            Hey there! I'm Sanjay, a passionate full stack developer
          </h1>
          {/* DESC */}
          <p className='md:text-xl'>
            Welcome to my digital realm, where every line of code is a stroke of
            innovation. As a passionate full stack developer, I merge artistry
            with technology to craft immersive experiences that redefine
            tomorrow.
          </p>
          {/* BUTTONS */}
          <div className='w-full flex gap-4'>
            <button
              className='p-4 rounded-lg ring-1 ring-black bg-black text-white'
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1i3J2n1ZcWSeXmdZW3uOrYH-4eCZoHSWJ/view?usp=drive_link',
                  '_blank'
                )
              }
            >
              View My Resume
            </button>
            <button className='p-4 rounded-lg ring-1 ring-black'>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

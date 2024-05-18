import { skills } from '@/data/skills';
import React from 'react';

const SkillsCard = () => {
  return (
    <div
      id='skills'
      className='flex flex-col justify-center items-center relative z-10'
    >
      <div className='flex flex-col justify-center items-center w-full max-w-screen-lg space-y-12'>
        <h2 className='text-4xl md:text-5xl font-semibold text-center text-primary-dark'>
          Skills
        </h2>
        <p className='text-lg md:text-xl text-center text-secondary-dark max-w-lg'>
          Here are some of my skills on which I have been working for the past 2
          years.
        </p>
        <div className='w-full flex flex-wrap justify-center gap-12'>
          {skills.map((skill) => (
            <div
              key={skill.title}
              className='w-full md:w-1/2 lg:w-1/3 max-w-sm rounded-lg bg-yellow-200 shadow-md overflow-hidden'
            >
              <h3 className='text-xl md:text-2xl font-semibold text-secondary-dark text-center p-6'>
                {skill.title}
              </h3>
              <div className='flex flex-wrap justify-center gap-4 p-6'>
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className='flex items-center justify-center bg-primary-light text-primary-dark rounded-lg py-2 px-4'
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-6 h-6 mr-2'
                    />
                    <span className='text-sm md:text-base'>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;

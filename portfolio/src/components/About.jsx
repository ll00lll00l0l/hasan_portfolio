import React from 'react';
import Myself from "../Assets/myself.svg";
import TypingText from './TypingText';

const About = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">NABEEL HASSAN.</h1>
                {/* <span className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-2xl dark:text-gray-400">A FULL STACK WEB DEV.</span> */}
                <TypingText/>
              <p className='max-w-2xl my-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              I'm a self-taught React developer passionate about building dynamic, user-friendly web applications. With a strong foundation in JavaScript and modern front-end technologies, I specialize in creating responsive interfaces and seamless user experiences. My learning journey is driven by curiosity and a commitment to continuous improvement—whether it's exploring new tools in the React ecosystem, refining UI/UX skills, or contributing to real-world projects. I believe in writing clean, maintainable code and staying up to date with the latest trends in web development.
              </p>
            </div>
        <div className='w-100 col-span-4 h-auto flex justify-center align-center flex-wrap'>
          <img src={Myself} alt="Myself" className='rounded-b-[30%]'/>
        </div>
        </div>
    </section>
    </>
  );
};

export default About;

import { Typewriter } from 'react-simple-typewriter';

const TypingText = () => {
  return (
    <span className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-2xl dark:text-gray-400">
      <Typewriter
        words={["Fullstack Developer",'React Developer', 'MERN Stack Developer','Frontend Explorer']}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  );
};

export default TypingText;

import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
      <TypeAnimation
      sequence={[
        1000, 
        " I am an undergraduate student at SLIIT",
        1000,
        " I am developer passionate about programming and innovation.. ",
        1000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
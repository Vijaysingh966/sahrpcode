import "./hero.scss";
import { motion } from "framer-motion";
 
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x:  0,
 
  },
  animate: {
    x: "-200%", 
    transition: {
      repeatType:"mirror",
      repeat:Infinity,
      duration: 20, 
    },
  },

  
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>VIJAY SINGH</motion.h2>
          <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See the latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            animate="scrollButton" // Corrected this line
            variants={textVariants}
          />
        </motion.div>
      </div>
      <motion.div className="slideTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator and Influencer
      </motion.div>
      <div className="imageContainer" >
        <motion.img src="/hero2.png" alt="" variants={sliderVariants} />
      </div>
    </div>
  );
};

export default Hero;

 

import "./portfolio.scss"

import { useRef } from 'react';
import { motion, transform, useScroll, useSpring, useTransform } from 'framer-motion';

const item = [
    {
        id: 1,
        title: "HTML & Css and JavaScript Blog",
        img:   ' /project_1.png',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellat quod asperiores, sapiente voluptas alias distinctio molestias aliquam dolorum beatae."
    },
    {
        id: 2,
        title: "PHP & sql Log-in System ",
        img: "/project_2.png " ,
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellat quod asperiores, sapiente voluptas alias distinctio molestias aliquam dolorum beatae."
    },
    {
        id: 3,
        title: "React Netflix Clon",
        img: " /project_3.png",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellat quod asperiores, sapiente voluptas alias distinctio molestias aliquam dolorum beatae."
    },
    {
        id: 4,
        title: "React E-Commerce",
        img: " /project_4.png",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellat quod asperiores, sapiente voluptas alias distinctio molestias aliquam dolorum beatae."
    },
    {
        id: 5,
        title: "PHP Exam Panel Application",
        img: "/project_5.png",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellat quod asperiores, sapiente voluptas alias distinctio molestias aliquam dolorum beatae."
    }
];

const Single = ({ item }) => {
    
    const ref = useRef ();
    const { scrollYProgress } = useScroll({ 
        target: ref, 
        // offset:["start start","end start"]
     });

     const y=useTransform(scrollYProgress,[0,1],[-100,150]);
       
    return (
        <section>
            
            <div className="container">
                <div className="wrapper">
                <div className="imgContainer"  ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>    
                </div>
            </div>    
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>

            {item.map((singleItem) => (
                <Single item={singleItem} key={singleItem.id} />
            ))}
        </div>
    );
};

export default Portfolio;
 
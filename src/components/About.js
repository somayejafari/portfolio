import React from 'react';
// motion
import { motion } from 'framer-motion';
//vartant
import { fadeIn} from "../variants"


const About = () => {

  return (
  <section className= "section" id='about' >
    <div className=' container mx-about'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* {img} */}
        <motion.div 
         variants={fadeIn("right", 0.3)} 
         initial="hidden"
          whileInView={"show"}
         viewport={{ once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top rounded-full'>
          
          </motion.div>
        {/* {text} */}
        <motion.div
         variants={fadeIn("left", 0.5)} 
         initial="hidden"
          whileInView={"show"}
         viewport={{ once: false, amount: 0.7}}
        className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>
I am interested in learning, motivated and self-taught. I have a strong ability
 to understand and solve problems, and I have the spirit of team work, creative and responsible.
 I can mention Js, Css, Html and React from the things I have learned by myself
 </h3>
          </motion.div>
      </div>
    </div>
    </section>);
};

export default About;

import React from 'react';
// motion
import { motion } from 'framer-motion';
//vartant
import { fadeIn} from "../variants"
//img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
  <section className= "section" id='work'>
    <div className='container mx-auto'>
<div className='flex flex-col lg:flex-row gap-x-10'>
  <motion.div
  variants={fadeIn("right", 0.5)} 
  initial="hidden"
   whileInView={"show"}
  viewport={{ once: false, amount: 0.3}}
  className='flex-1 flex flex-col gap-y-20 mb-10 lg:mb-0'>
    {/* text */}
    <div> 
      <h2 className='h2 leading-tight text-acccent'>
        My Latest <br />
        Work.
      </h2>
      <p className='max-w-sm mb-16'>
        Lorem20
        </p>
        <button className='btn btn-sm'> View all project</button>
       </div>
       {/* image */}
       <div className='group relativ overflow-hidden border-2 border-white/50 rounded-xl'>
        {/* overlay */}
{/*     
        <div className='group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300'></div> */}
    {/* img */}
    <img
    className='group-hover:scale-125 transition-all duration-500'
    src={Img1}alt='' />
    {/* pretitle */}
    <div className='group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300'>
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '> 
   <span className='text-gradient'>Portfolio Website</span>
     </div> 
    {/* title */}
    {/* <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
      <span className='taxt-3xl text-white'>Project Title</span>
    </div> */}
    </div>
    </div>
  </motion.div>
  <motion.div 
  variants={fadeIn("left", 0.5)} 
  initial="hidden"
   whileInView={"show"}
  viewport={{ once: false, amount: 0.3}}
  className='flex-1 flex flex-col gap-y-2'>
    {/* image */}
    <div className='group relativ overflow-hidden border-2 border-white/50 rounded-xl'>
        {/* overlay */}
    
        
    {/* img */}
    <img
    className='group-hover:scale-125 transition-all duration-500'
    src={Img2}alt='' />
    <div className='group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300'>
    {/* pretitle */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '> 
   <span className='text-gradient'> Shopping cart project</span>
     </div>
    {/* title */}
    {/* <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
      <span className='taxt-3xl text-white'>Project Title</span>
    </div> */}
    </div>
    </div>
     {/* image */}
     <div className='group relativ overflow-hidden border-2 border-white/50 rounded-xl'>
        {/* overlay */}
    
        
    {/* img */}
    <img
    className='group-hover:scale-125 transition-all duration-500'
    src={Img3}alt='' />
    <div className='group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300'>
    {/* pretitle */}
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '> 
   <span className='text-gradient'> Chat Application</span>
     </div>
    {/* title */}
    {/* <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 '>
      <span className='taxt-3xl text-white'>Project Title</span>
    </div> */}
    </div>
    </div>
  </motion.div>
</div>
    </div>
    </section>);
};

export default Work;

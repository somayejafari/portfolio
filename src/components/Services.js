import React from 'react';
//icon 
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
//vartant
import { fadeIn} from "../variants"

const services = [
  {
    name : 'Html & Css',
    description : 'I learned Html and Css with YouTube training clips and Sabz Learn training site.',
    link : 'Read more'
  },
  {
    name : 'JavaScript',
    description : 'I learned JavaScript with the educational clips of Mr. Saidi Rad.',
    link : 'Read more'
  },
  {
    name : 'React',
    description : ' I started teaching Ex6 and React project-oriented and I am doing new projects.',
    link : 'Read more'
  },
] 
const Services = () => {
  return (<section className= "section" id='services'>
    <div className='container mx-auto'>
<div className='flex flex-col lg:flex-row'>
  {/* text */}
  <motion.div 
   variants={fadeIn("right", 0.3)} 
   initial="hidden"
    whileInView={"show"}
   viewport={{ once: false, amount: 0.7}}
  className=' flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
    <h2 className='h2 text-accent mb-6'>what I Do</h2>
    <h3 className='h3 max-w-[455px] mb-16'>
      I am interested in learning, motivated and self-taught. I have a strong ability
 to understand and solve problems, and I have the spirit of team work, creative and responsible.
 I can mention Js, Css, Html and React from the things I have learned by myself
 </h3>
  <button className='btn btn-sm'>See my work</button>
  </motion.div>
  {/* services */}
  <motion.div 
   variants={fadeIn("left", 0.5)} 
   initial="hidden"
    whileInView={"show"}
   viewport={{ once: false, amount: 0.7}}
  className='flex-1'>
    {/* services list */}
    <div>
      {services.map((service,index) => {
        //destructure service
        const {name, description, link} = service;
        return (
        <div 
        className='border-b border-white/20 h-[146px] mb-[38px] flex'
        key={index}>
          <div className='max-w-[476px]'>
            <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
              {name}
              </h4>
            <p className='font-secondary leading-tight'>{description}</p>
            </div>
          <div className='flex flex-col flex-1 items-end'>
            <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
              <BsArrowUpRight />
            </a>
            <a href='#' className='text-gradient text-sm'>{link}</a>
          </div>
        </div>);
      })}
    </div>
  </motion.div>
</div>
    </div>
    </section>);
};

export default Services;

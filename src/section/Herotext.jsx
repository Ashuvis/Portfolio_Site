import React from 'react'
import { Flipwords } from './FlipWords'
import { motion } from 'motion/react'
const Herotext = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className='z-10 mt-20 text-centre md:mt-40 md:text-left rounded-3xl bg-clip-text'>
      {/* {desktop view} */}
      <div className='flex-col hidden md:flex c-space '>
        <motion.h1 className='text-4xl font-medium' variants={variants} initial={"hidden"} animate={"visible"} transition={{delay:0.5}}> Hi,I'm Ashutosh </motion.h1>
        <motion.div className='flex flex-col items-start'> <motion.p className='text-5xl font-medium text-neutral-400' variants={variants} initial={"hidden"} animate={"visible"} transition={{delay:0.7}}> A Learning Developer <br /> Dedicated to Crafting</motion.p>
        <motion.div variants={variants} initial={"hidden"} animate={"visible"} transition={{delay:0.9}} > <Flipwords words={["Secure...","Modern...","Scalable..."]} className="font-black text-7xl text-neutral-200"  /> </motion.div>
        <motion.p className='text-4xl font-medium text-neutral-300' variants={variants} initial={"hidden"} animate={"visible"} transition={{delay:1.1}}>Web Solution </motion.p> </motion.div>
      </div>

      {/* mobile view */}
      <motion.div className='flex- flex-col space-y-4 md:hidden'>
        <motion.p className='text-4xl font-bold' variants={variants} initial={"hidden"} animate={"visible"} transition={{delay:0.5}}>Hi,I'm Ashutosh</motion.p>
        <motion.div>
          <motion.p className='text-5xl font-black text-neutral-400' variants={variants} initial={"hidden"} animate={"visible"} transition={{delay:0.7}}>Building</motion.p>
          <motion.div variants={variants} initial={"hidden"} animate={"visible"} transition={{delay:0.9}}> <Flipwords words={["Secure...","Modern...","Scalable..."]} className='text-4xl font-black text-shadow-white' /> </motion.div>
          <motion.p className='text-4xl font-black text-neutral-400' variants={variants} initial={"hidden"} animate={"visible"} transition={{delay:1.1}}>Web Applications</motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Herotext

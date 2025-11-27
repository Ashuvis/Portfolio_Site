import { section } from 'motion/react-client'
import { motion,useScroll, useSpring, useTransform } from 'motion/react'
import { use } from 'react';
  const Background = () => { 
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, {damping: 50,});
    const mountain3y = useTransform(x, [0, 0.5], ['0%', '70%']);
    const planets = useTransform(x, [0, 0.5], ['0%', '-20%']);
    const mountain2y = useTransform(x, [0, 0.5], ['0%', '30%']);
    const mountain1y = useTransform(x, [0, 0.5], ['0%', '0%']);
    return (
    <section className='absolute inset-0 bg-black/40'> 
    <div className='relative h-screen overflow-y-hidden'> 
      {/* backgroung sky */} 
      <div className='absolute inset-0 w-full h-screen -z-50'
      style={{ backgroundImage: "url('assets/sky.jpg')", 
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      }} />
       {/* mountain layer 3 */}
        <motion.div className='absolute inset-0 -z-40'
         style={{ backgroundImage: "url('assets/mountain-3.png')", 
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        y: mountain3y,
      }} /> 
        {/* planets */} 
        <motion.div className='absolute inset-0 -z-30'
         style={{ backgroundImage: "url('assets/planets.png')", 
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        x: planets
      }}/> 
        {/* mountain layer 2 */}
         <motion.div className='absolute inset-0 -z-20'
         style={{ backgroundImage: "url('assets/mountain-2.png')", 
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        y: mountain2y
      }}/> 
         {/* mountain layer 1 */} 
         <motion.div className='absolute inset-0 -z-10'
         style={{ backgroundImage: "url('assets/mountain-1.png')", 
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      y: mountain1y
      }}/> 
      
      </div> 
            </section>
         ) 
         } 
         export default Background
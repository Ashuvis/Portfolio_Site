import React from 'react'
import Herotext from '../section/Herotext'
import Background1 from '../section/Background1'
import { Model } from '../section/Model'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
const Hero = () => {
    const isMobile=useMediaQuery({maxWidth:853})
    return (
        <section className='flex items-start justify-center md:items-start md:justify-self-start min-h-screen overflow-hidden c-space'>
            <Herotext />
            <figure className='absolute inset-0' style={{width:"100vw", height:"100vh"}}>
               <Canvas className="absolute inset-0 z-10" // <-- ADD z-10 or higher
  style={{width: "100vw", height: "100vh"}} camera={{position:[0,1,3]}}>
                <Model scale={isMobile && 0.23} position={isMobile && [0,-1.5,0] } />
                <OrbitControls/>
               </Canvas>
            </figure>
            <Background1 />
        </section>
    )
}

export default Hero

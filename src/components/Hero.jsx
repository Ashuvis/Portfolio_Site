import React from 'react'
import Herotext from '../section/Herotext'
import Background1 from '../section/Background1'
import Model from '../section/Model'
const Hero = () => {
    return (
        <section className='flex items-start justify-center md:items-start md:justify-self-start min-h-screen overflow-hidden c-space'>
            <Herotext />
            <figure className='absolute inset-0' style={{width:"100vw", height:"100vh"}}>
                <canvas>
                    <Model/>
                </canvas>
            </figure>
            <Background1 />
        </section>
    )
}

export default Hero

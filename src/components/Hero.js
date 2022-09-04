import React from 'react';
import Heroimg from '../images/header.png'
import './Hero.css'

export default function Hero(){
    return(
        <section className='hero'>
            <img src={Heroimg} alt='hero' className='hero--photo'/>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by <br/> one-of-a-kind hosts—all without leaving <br/> home.
</p>
        </section>
    )
}
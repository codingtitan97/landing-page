import React from 'react'
import hero from "../../assets/right_hero.png"

import "./hero.css"
const Hero = () => {
    return (
        <div className='hero_container'>
            <div className='hero_left'>
                <span className='hero_left-textheader'><b>Lorem ipsum</b> is placeholder </span>
                <h1 className='hero_left-mainheading'>
                Tempor incididunt
                Tempor incid.
                </h1>

                <p className="hero_left-para">
                Tempor incididunt ut labore et dolore magna aliqua
                Tempor incididunt ut labore et dolore magna aliqua
                Tempor incididunt ut labore et dolore magna aliqua
                </p>
                <button className='left_navbar-getstarted'>
                    Get Started
                </button>
            </div>
            <div className='hero_right'>
                <img className='nav_right-hero' src={hero} alt="hero" />
            </div>

        </div>
    )
}

export default Hero
import React from 'react'
import AboutImgLeft from './AboutImgLeft'
import AboutNoImg from './AboutNoImg'
import AboutImgRight from './AboutImgRight'
import './About.css'

const About = (props) => {
    // do something with props
    return (
        <div className="about">
            <AboutImgLeft/>
            <AboutImgRight/>
            <AboutNoImg/>
        </div>
    )
}

export default About
import React from 'react'
import AboutImgLeft from './AboutImgleft'
import AboutNoImg from './AboutNoImg'
import AboutImgRight from './AboutImgRight'

const About = (props) => {
    return (
        <div>
            <AboutImgLeft/>
            <AboutImgRight/>
            <AboutNoImg/>
        </div>
    )
}

export default About
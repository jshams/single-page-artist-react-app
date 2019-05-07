import React from 'react'
import AboutImgLeft from './AboutImgLeft'
import AboutNoImg from './AboutNoImg'
import AboutImgRight from './AboutImgRight'

const About = (props) => {
    // do something with props
    return (
        <div>
            <AboutImgLeft/>
            <AboutImgRight/>
            <AboutNoImg/>
        </div>
    )
}

export default About
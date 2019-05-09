import React from 'react'
import AboutImgLeft from './AboutImgLeft'
import AboutNoImg from './AboutNoImg'
import AboutImgRight from './AboutImgRight'
import './About.css'
// props takes in an array of objects
// objects should look like this:
// section = { backgroung: "red"
//             heading: "About me"
//             text: "long paragraph"
//             img: "https://facebook.com" }

const About = (props) => {
    const abouts = props.section.map((section, i) => {
        if (i % 3 === 0) {
            return (
                <AboutImgRight
                background = {section.background}
                heading = {section.heading}
                text = {section.text}
                img = {section.img}
                />
            )
        }
        else if (i % 3 === 1) {
            if (section.img != null) {
                console.log(`${section.heading} has a photo, but due to its placement it wont display`)
            }
            return (
                <AboutNoImg
                background = {section.background}
                heading = {section.heading}
                text = {section.test}
                />
                )
        }
        // if i % 3 == 2
        else {
            return (
                <AboutImgLeft
                background = {section.background}
                heading = {section.heading}
                text = {section.text}
                img = {section.img}
                />
            )
        }
    })

    return (
        <div className="about">
            {abouts}
        </div>
    )
}

export default About
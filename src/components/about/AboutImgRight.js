import React from 'react'
import './About.css'

const AboutImgRight = (props) => {
    return (
        <div className={props.backgroung}>
            <h1 className="header">{props.heading}</h1>
            <div className="text-left">
                {props.text}
            </div>
            <img src={props.imgLink} alt={props.heading} className="img-right" />
        </div>
    )
}

export default AboutImgRight
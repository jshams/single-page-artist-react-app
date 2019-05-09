import React from 'react'
import './About.css'

const AboutImgLeft = (props) => {
    return (
        <div className={props.backgroung}>
            <h1 className="header">{props.heading}</h1>
            <div className="text-right">
                {props.text}
            </div>
            <img src={props.imgLink} alt={props.heading} className="img-left" />
        </div>
    )
}

export default AboutImgLeft
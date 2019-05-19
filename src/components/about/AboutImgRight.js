import React from 'react'
import './About.css'

const AboutImgRight = (props) => {
    return (
        <div className={props.backgroung}>
            <h1 className="header">{props.heading}</h1>
            <div className="content-left">
                <p className="text-left">{props.text}</p>
                <img src={props.img} alt={props.heading} className="img-right" />
            </div>
        </div>
    )
}

export default AboutImgRight
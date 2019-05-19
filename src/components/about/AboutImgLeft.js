import React from 'react'
import './About.css'

const AboutImgLeft = (props) => {
    return (
        <div className={props.backgroung}>
            <h1 className="header">{props.heading}</h1>
            <div className="content-right">
                <p className="text-right">{props.text}</p>
                <img src={props.img} alt={props.heading} className="img-left" />
            </div>
        </div>
    )
}

export default AboutImgLeft
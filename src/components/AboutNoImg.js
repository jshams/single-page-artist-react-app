import React from 'react'

const AboutNoImg = (props) => {
    return (
        <div className={props.backgroung}>
            <h1 className="header">{props.heading}</h1>
            <div className="text-center">
                {props.text}
            </div>
        </div>
    )
}

export default AboutNoImg
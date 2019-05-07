import React from 'react'

const Song = (props) => {
    return (
        <div className="song">
            <img src={props.imgUrl} alt={props.title} />
            <title>{props.title}</title>
        </div>
    )
}

export default Song
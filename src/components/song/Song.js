import React from 'react'
import './Song.css'

const Song = (props) => {
    return (
        <div className="song">
            <img className="song-art" src="https://i.scdn.co/image/66647fd660ee85b5ffe2e36ff827168bf0b9dc48" alt={props.title} />
            <p className="song-title" >{props.title}</p>
        </div>
    )
}

export default Song
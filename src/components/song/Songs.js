import React from 'react'
import Song from './Song'
import './Song.css'

const Songs = (props) => {
    const songs = props.songs.map((song) => {
        return (
            <Song
                title={song.title}
                key={song.title}
            />
        )
      })
// TO FIGURE OUT HOW CLICKS WORK VISIT PRODUCT LIST CATEGORY BUTTON

    return (
        <div>
            {songs}
        </div>
    )
}

export default Songs
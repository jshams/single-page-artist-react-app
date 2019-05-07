import React from 'react'
import Song from './Song'

const Songs = (props) => {
    const songs = props.songs.map((song) => {
        return (
            <Song
                title={song.title}
                imgUrl={song.url}
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
import React from 'react'
import Song from './Song'

const Songs = (props) => {
    const songs = props.songs.map((song) => {
        return (
            <Song
                title={props.title}
                imgUrl={props.url}
                key={props.title}
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
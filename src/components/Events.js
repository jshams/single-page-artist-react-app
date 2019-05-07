import React from 'react'
import Event from './Event'

const Events = (props) => {
    const events = props.events.map((event) => {
        return (
            <Event
                date={props.date}
                location={props.location}
            />
        )
      })

    return (
        <div className="Events">
            {events}
        </div>
    )
}

export default Events
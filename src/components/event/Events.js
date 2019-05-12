import React from 'react'
import Event from './Event'
import './Event.css'

const Events = (props) => {
    const events = props.events.map((event) => {
        return (
            <Event
                date={event.date}
                location={event.location}
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
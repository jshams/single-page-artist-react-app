import React from 'react'
import './Event.css'

const Event = (props) => {
    return (
        <div className="event">
            <h3 className="date">{props.date}</h3>
            <h3 className="location">{props.location}</h3>
            <button className="btn-right">Tickets</button>
        </div>
    )
}

export default Event
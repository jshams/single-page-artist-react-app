import React from 'react'

const Event = (props) => {
    return (
        <div className="Event">
            <h3 className="Date">{props.date}</h3>
            <h3 className="Location">{props.location}</h3>
            <button className="btn-right">Tickets</button>
        </div>
    )
}

export default Event
import React from 'react'

const Contact = (props) => {
    return (
        <div>
            <a className="email" href={'mailto:' + props.email}>{props.name}</a>
        </div>
    )
}

export default Contact
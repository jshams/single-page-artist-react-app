import React from 'react'

const Contact = (props) => {
    return (
        <div>
            <p className="name">{props.contact.name}</p>
            <a className="email" href={'mailto:' + props.contact.email}>{props.contact.email}</a>
        </div>
    )
}

export default Contact
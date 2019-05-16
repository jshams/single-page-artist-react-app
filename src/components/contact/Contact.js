import React from 'react'
import './Contact.css'

const Contact = (props) => {
    return (
        <div className="contact">
            <p className="name">{props.contact.name}</p>
            <a className="email" href={'mailto:' + props.contact.email}>{props.contact.email}</a>
        </div>
    )
}

export default Contact
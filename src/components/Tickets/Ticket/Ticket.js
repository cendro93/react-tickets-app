import React from 'react'
import './Ticket.css'
const ticket = props => {
    return (
        <div className="Ticket">
            <div className = "ticket-content">{props.content}</div>
            <button className = "ticket-button">X</button>
        </div>
    )
}

export default ticket;
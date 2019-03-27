import React from 'react'
import Ticket from './Ticket/Ticket'
const tickets = props => {
    return props.tickets.map((ticket, index) => {
        return (
            <Ticket
            content = {ticket.content}
            state = {ticket.state}
            key = {ticket.id}
            />
        )
    })
}

export default tickets
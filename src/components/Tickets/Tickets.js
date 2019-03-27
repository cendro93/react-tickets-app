import React from 'react'
import Ticket from './Ticket/Ticket'
import Aux from '../../hoc/Aux'
const tickets = props => {
    return props.tickets.map((ticket, index) => {
        return (
            <Aux key = {ticket.key}>
                {ticket.state === props.state ? (
                    <Ticket
                    content = {ticket.content}
                    state = {ticket.state}
                    key = {ticket.key}
                    />
                ) : ''
                }
            </Aux>
            
        )
    })
}

export default tickets
import React from "react";
import { TicketCard } from "../../Style/ContentStyle"

function StudentItem(props) {
  
  return (
    <TicketCard>
      <h2>#{props.ticket.id}</h2>
      <h4>{`${props.ticket.student_first_name} ${props.ticket.student_last_name}`}</h4>
      <h4>Category: {props.ticket.category}</h4>
      <p>Description: {props.ticket.description}</p>
      <p>What I've Tried: {props.ticket.tried}</p>
    </TicketCard>
  )
}

export default StudentItem
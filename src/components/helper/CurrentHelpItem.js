import React from "react";
import { TicketCard } from "../../Style/ContentStyle";
import { useHistory } from 'react-router-dom'

import {ResolvedButton,ThrowButton,ButtonDiv} from '../../Style/TicketFormStyle';
import { useDispatch } from 'react-redux';
import { deleteTicket } from "../../actions/TicketsAction";


function HelpItem({ ticket }) {

  const { id, student_first_name, student_last_name, category, description, tried, } = ticket

  const history = useHistory();
  const dispatch = useDispatch();
  const resolveTicket = ticket => {
    dispatch(deleteTicket(id))
  }
  return (
    <TicketCard>
      <h2>#{id}</h2>
      <h4>{`${student_first_name} ${student_last_name}`}</h4>
      <h4>Category: {category}</h4>
      <p>Description: {description}</p>
      <p>What I've Tried: {tried}</p>
      <ButtonDiv>
        <ThrowButton>Throw Back</ThrowButton>
        <ResolvedButton onClick={() => resolveTicket()}>Resolved</ResolvedButton>
      </ButtonDiv>
      
    </TicketCard>
  )
}

export default HelpItem
import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../utils/axiosWithAuth';

import CurrentHelpItem from "./CurrentHelpItem";

import { ContentDiv, H2 } from "../../Style/HelperAppStyle"
import { GridDiv } from "../../Style/ContentStyle";

function CurrentHelpList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get("/tickets")
    .then(res => {
        console.log("Getting CURRENT HELP LIST response data", res.data);
        setTickets(res.data)
    })
    .catch(err => {
        console.log("Getting CURRENT HELP LIST response data", err);
    })
}, []);

  return(
    <ContentDiv>
      <H2> Dashboard </H2>
      <GridDiv>
        {tickets.map(ticket => {         
          return (
            <CurrentHelpItem 
                ticket={ticket} 
                key={ticket.id} 
            />
          )}
        )} 
      </GridDiv> 
    </ContentDiv>     
  );
}

export default CurrentHelpList;
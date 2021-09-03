import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import useApi from "../../hooks/useApi";

import { OptionBoxWrapper } from "./OptionBoxWrapper";
import { OptionBox, Description, Price } from "./OptionBox";

import TotalTicketPrice from "./TotalTicketPrice";

export default function Tickets({ selectedTicket, setSelectedTicket }) {
  const [tickets, setTickets] = useState();
  const { ticket } = useApi();

  const onlineTicketName = "Online";

  function selectTicket(type) {
    setSelectedTicket(type);
  }

  useEffect(() => {
    ticket.getTicketsInfo().then((response) => {
      if (response.status !== 200) {
        return;
      }
      setTickets(response.data); 
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h6">
        Primeiro, escolha sua modalidade de ingresso
      </StyledTypography>
      <OptionBoxWrapper>
        {tickets?.map((ticket) => (
          <OptionBox
            key={ticket.id}
            onClick={(e) => {
              console.log(ticket);
              selectTicket(ticket);
            }}
            active={selectedTicket?.name === ticket.name ? true : false}
          >
            <Description>{ticket.name}</Description>
            <Price>R$ {ticket.price}</Price>
          </OptionBox>
        ))}
      </OptionBoxWrapper>
      {selectedTicket?.name === onlineTicketName ? (
        <TotalTicketPrice selectedTicket={selectedTicket} />
      ) : (
        ""
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 17px !important;
  color: #8e8e8e;
  margin-top: 37px !important;
`;

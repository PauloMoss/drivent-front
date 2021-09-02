import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";

import { OptionBoxWrapper } from "./OptionBoxWrapper";
import { OptionBox, Description, Price } from "./OptionBox";

export default function Tickets({ selectedTicket, setSelectedTicket }) {
  const [tickets, setTickets] = useState();
  const { ticket } = useApi();

  function selectTicket(type) {
    setSelectedTicket(type);
  }

  useEffect(() => {
    ticket.getTicketsInfo().then(response => {
      setTickets(response.data);
    }).catch((error) => {
      toast("Não foi possível");
      /* eslint-disable-next-line no-console */
      console.log(error);
    });
  }, []);

  return (
    <>
      <StyledTypography variant="h6">Primeiro, escolha sua modalidade de ingresso</StyledTypography>
      <OptionBoxWrapper>
        {tickets?.map(ticket => (
          <OptionBox key={ticket.id} onClick={(e) => selectTicket(ticket.name)} active={selectedTicket === ticket.name ? true : false}>
            <Description>{ticket.name}</Description>
            <Price>R$ {ticket.price}</Price>
          </OptionBox>
        ))}
      </OptionBoxWrapper>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 17px!important;
  color: #8E8E8E;
  margin-top: 37px!important;
`;

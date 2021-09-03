import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";

import { OptionBoxWrapper } from "./OptionBoxWrapper";
import { OptionBox, Description, Price } from "./OptionBox";
import  SectionTitle  from "../Form/SectionTitle";

import TotalTicketPrice from "./TotalTicketPrice";

export default function Tickets({ selectedTicket, setSelectedTicket }) {
  const [tickets, setTickets] = useState();
  const { ticket } = useApi();

  const onlineTicketName = "Online";

  function selectTicket(type) {
    setSelectedTicket(type);
  }

  useEffect(() => {
    ticket.getTicketsInfo().then(response => {
      setTickets(response.data);
    }).catch((error) => {
      toast("Não foi possível");
    });
  }, []);

  return (
    <>
      <SectionTitle>Primeiro, escolha sua modalidade de ingresso</SectionTitle>
      <OptionBoxWrapper>
        {tickets?.map((ticket) => (
          <OptionBox
            key={ticket.id}
            onClick={(e) => { 
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


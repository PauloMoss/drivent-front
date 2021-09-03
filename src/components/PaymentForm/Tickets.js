import useApi from "../../hooks/useApi";

import TicketOptions from "./TicketOptions";

export default function Tickets({ selectedTicket, setSelectedTicket }) {
  const { ticket } = useApi();

  const title = "Primeiro, escolha sua modalidade de ingresso";
  const apiFunction = ticket.getTicketsInfo;

  return (
    <TicketOptions title={title} selectedOption={selectedTicket} setSelectedOption={setSelectedTicket} apiFunction={apiFunction}/>
  );
}


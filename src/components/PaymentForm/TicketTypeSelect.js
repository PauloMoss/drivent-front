import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

export default function TicketTypeSelect() {
  const [ticketType, setTicketType] = useState();

  function selectTicketType(type) {
    setTicketType(type);
    console.log(type);
  }

  return (
    <>
      <StyledTypography variant="h6">Primeiro, escolha sua modalidade de ingresso</StyledTypography>
      <OptionBoxContainer>
        <OptionBox onClick={(e) => selectTicketType("Presencial")} active={ticketType === "Presencial" ? true : false}>
          <Description>Presencial</Description>
          <Price>R$ 250</Price>
        </OptionBox>
        <OptionBox onClick={(e) => selectTicketType("Online")} active={ticketType === "Online" ? true : false}>
          <Description>Online</Description>
          <Price>R$ 100</Price>
        </OptionBox>
      </OptionBoxContainer>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 17px!important;
  color: #8E8E8E;
  margin-top: 37px!important;
`;

const OptionBoxContainer = styled.div`
  display: flex;
`;

const OptionBox = styled.div`
  width: 145px;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${props => props.active ? "none" : "1px solid #CECECE"};
  border-radius: 20px;
  margin-right: 24px;
  cursor: pointer;
  background-color: ${props => props.active ? "#FFEED2" : "transparent"};
`;

const Description = styled.span`
  font-size: 16px;
  color: #454545;
  margin-bottom: 5px;
`;

const Price = styled.div`
  font-size: 14px;
  color: #898989;
`;

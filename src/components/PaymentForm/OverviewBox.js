import styled from "styled-components";

export function OverviewBox({ ticket }) {
  const { type, hasHotel, price } = ticket;

  console.log(ticket);
  return (<Container>
    <Description>{type} + {hasHotel?"Com Hotel":"Sem Hotel"}</Description>
    <Price>R$ {price}</Price>
  </Container>);
} 

const Container = styled.div`
  width: 290px;
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  margin-right: 24px;
  background-color: #FFEED2;
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

import React from "react";
import CreditCard from "./CreditCard";
import { StyledPayment } from "./styles";

const FinalizePayment = () => {
  return (
    <StyledPayment>
      <h2>Ingresso escolhido</h2>
      <div className="ticket">
        <p>Presencial + Com Hotel</p>
        <p>R$ 600</p>
      </div>
      <h2>Pagamento</h2>
      <CreditCard />
    </StyledPayment>
  );
};

export default FinalizePayment;

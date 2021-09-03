import React from "react";
import CreditCard from "./CreditCard";
import PaymentDone from "./PaymentDone";
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
      <PaymentDone />
    </StyledPayment>
  );
};

export default FinalizePayment;

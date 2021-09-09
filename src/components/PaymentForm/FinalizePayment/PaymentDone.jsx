import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { StyledPaymentDone } from "./styles";

const PaymentDone = () => {
  return (
    <StyledPaymentDone>
      <AiFillCheckCircle />
      <div>
        <p>Pagamento confirmado!</p>
        <p>Prossiga para escolha de hospedagem e atividades</p>
      </div>
    </StyledPaymentDone>
  );
};

export default PaymentDone;

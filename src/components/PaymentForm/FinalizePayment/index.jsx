import React from "react";
import CreditCard from "./CreditCard";
import PaymentDone from "./PaymentDone";
import { StyledPayment } from "./styles";

const FinalizePayment = (props) => {
  return (
    <div>
      <CreditCard button={props.children} />
      {/* <PaymentDone /> */}
    </div>
  );
};

export default FinalizePayment;

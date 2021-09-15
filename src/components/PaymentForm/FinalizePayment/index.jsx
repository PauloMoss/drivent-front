import React from "react";

import CreditCard from "./CreditCard";
import PaymentDone from "./PaymentDone";

const FinalizePayment = (props) => {
  return (
    <div>
      {props.isPaid ? <PaymentDone /> : <CreditCard button={props.children} />}
    </div>
  );
};

export default FinalizePayment;

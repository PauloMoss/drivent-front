import React, { useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import CreditCard from "./CreditCard";
import PaymentDone from "./PaymentDone";

const FinalizePayment = (props) => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      {userData.paid ? <PaymentDone /> : <CreditCard button={props.children} />}
    </div>
  );
};

export default FinalizePayment;

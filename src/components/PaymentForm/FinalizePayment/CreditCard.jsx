import { useContext, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import UserContext from "../../../contexts/UserContext";
import useApi from "../../../hooks/useApi";
import { StyledCreditCard } from "./styles";

const CreditCard = (props) => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { booking } = useApi();
  const { userData, setUserData } = useContext(UserContext);

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = { headers: { Authorization: `Bearer ${userData.token}` } };
    const expiryMembers = expiry.split("/");
    const expiryDate = new Date(`20${expiryMembers[1]}`, expiryMembers[0]);
    const paymentInfo = {
      cvc,
      expiry: expiryDate.getTime(),
      name,
      cardNumber: number,
    };

    booking
      .payBooking(userData.bookingId, paymentInfo, config)
      .then((res) => {
        setUserData({ ...userData, paid: true });
      })
      .catch((err) => {
        alert("Erro! Tente novamente!");
      });
  };

  return (
    <StyledCreditCard>
      <form onSubmit={handleSubmit}>
        <div className="payment">
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
          <div className="inputs">
            <input
              minlength="16"
              maxlength="16"
              required
              type="tel"
              name="number"
              placeholder="Card Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={handleInputFocus}
            />
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={handleInputFocus}
            />
            <div className="double">
              <input
                minlength="5"
                maxlength="5"
                required
                type="text"
                pattern="[0-3][0-9]/[0-9][0-9]"
                name="expiry"
                placeholder="Valid Thru"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={handleInputFocus}
              />
              <input
                minlength="3"
                maxlength="3"
                required
                type="number"
                name="cvc"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
        </div>
        {props.button}
      </form>
    </StyledCreditCard>
  );
};

export default CreditCard;

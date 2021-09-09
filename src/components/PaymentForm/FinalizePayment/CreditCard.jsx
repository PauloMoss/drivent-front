import { useContext, useState } from "react";
import Cards from "react-credit-cards";
import { toast } from "react-toastify";
import "react-credit-cards/es/styles-compiled.css";
import UserContext from "../../../contexts/UserContext";
import useApi from "../../../hooks/useApi";
import { StyledCreditCard } from "./styles";

const CreditCard = (props) => {
  const { booking } = useApi();
  const { userData, setUserData } = useContext(UserContext);
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setData({ ...data, focus: e.target.name });
  };

  const handleChange = (e, name) => {
    const newData = { ...data };
    newData[name] = e.target.value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = { headers: { Authorization: `Bearer ${userData.token}` } };
    const { cvc, expiry, name, number } = data;
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
        toast("Erro! Tente novamente!");
      });
  };

  return (
    <StyledCreditCard>
      <form onSubmit={handleSubmit}>
        <div className="payment">
          <Cards
            cvc={data.cvc}
            expiry={data.expiry}
            focused={data.focus}
            name={data.name}
            number={data.number}
          />
          <div className="inputs">
            <input
              minlength="16"
              maxlength="16"
              pattern="[0-9]{16}"
              required
              type="tel"
              name="number"
              placeholder="Card Number"
              value={data.number}
              onChange={(e) => handleChange(e, "number")}
              onFocus={handleInputFocus}
            />
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={(e) => handleChange(e, "name")}
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
                value={data.expiry}
                onChange={(e) => handleChange(e, "expiry")}
                onFocus={handleInputFocus}
              />
              <input
                minlength="3"
                maxlength="3"
                pattern="[0-9]{3}"
                required
                type="text"
                name="cvc"
                placeholder="CVC"
                value={data.cvc}
                onChange={(e) => handleChange(e, "cvc")}
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

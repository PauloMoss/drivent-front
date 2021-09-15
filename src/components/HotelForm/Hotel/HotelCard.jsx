import React from "react";
import { StyledHotelCard } from "./styles";

const HotelCard = (props) => {
  const {
    pictureURL,
    name,
    accomodations,
    vacancies,
    setHotel,
    selected,
    setSelected,
  } = props;

  const handleClick = () => {
    setHotel();
    setSelected();
  };

  return (
    <StyledHotelCard
      className={selected ? "selected" : ""}
      onClick={handleClick}
    >
      <img src={pictureURL} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <div className="details">
          <p>Tipo de acomodação</p>
          <p>{accomodations}</p>
        </div>
        <div className="details">
          <p>Vagas disponíveis</p>
          <p>{vacancies}</p>
        </div>
      </div>
    </StyledHotelCard>
  );
};

export default HotelCard;

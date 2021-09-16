import React from "react";
import { StyledHotelCard } from "./styles";

const HotelCard = (props) => {
  const {
    pictureURL,
    name,
    accomodationsName,
    availableVacancies,
    setHotel,
    selected,
    setSelected,
  } = props;

  return (
    <StyledHotelCard
      className={selected ? "selected" : ""}
      onClick={setSelected}
    >
      <img src={pictureURL} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <div className="details">
          <p>Tipo de acomodação</p>
          <p>
            {accomodationsName.reduce((acc, cur, index) => {
              return index === 0
                ? `${cur}`
                : index === accomodationsName.length - 1
                  ? `${acc} e ${cur}`
                  : `${acc}, ${cur}`;
            }, "")}
          </p>
        </div>
        <div className="details">
          <p>Vagas disponíveis</p>
          <p>{availableVacancies}</p>
        </div>
      </div>
    </StyledHotelCard>
  );
};

export default HotelCard;

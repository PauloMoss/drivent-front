import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useApi from "../../../hooks/useApi";
import SectionTitle from "../../Form/SectionTitle";
import HotelRoom from "../HotelRoom/HotelRooms";
import HotelCard from "./HotelCard";
import { StyledHotels } from "./styles";

const Hotel = () => {
  const [selected, setSelected] = useState();
  const [hotels, setHotels] = useState([]);
  const { hotel } = useApi();

  useEffect(() => {
    hotel
      .getHotels()
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        toast("Erro! Tente novamente!");
      });
  }, []);

  return (
    <>
      <SectionTitle>Primeiro, escolha seu hotel</SectionTitle>
      <StyledHotels>
        {hotels.map((hotel) => (
          <HotelCard
            selected={hotel.id === selected}
            setSelected={() => setSelected(hotel.id)}
            key={hotel.id}
            pictureURL={hotel.img}
            name={hotel.name}
            accomodationsName={hotel.accomodationsName}
            availableVacancies={hotel.availableVacancies}
          />
        ))}
      </StyledHotels>
      {selected !== undefined && <HotelRoom />}
    </>
  );
};

export default Hotel;

import React, { useState } from "react";
import SectionTitle from "../../Form/SectionTitle";
import HotelRoom from "../HotelRoom/HotelRooms";
import HotelCard from "./HotelCard";
import { StyledHotels } from "./styles";

const Hotel = () => {
  const [hotel, setHotel] = useState();
  const [selected, setSelected] = useState();
  const [hotels, setHotels] = useState([
    {
      pictureURL:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
      name: "Driven Resort",
      accomodations: "Single e Double",
      vacancies: 103,
    },
    {
      pictureURL:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
      name: "Driven Resort",
      accomodations: "Single e Double",
      vacancies: 103,
    },
    {
      pictureURL:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
      name: "Driven Resort",
      accomodations: "Single e Double",
      vacancies: 103,
    },
    {
      pictureURL:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
      name: "Driven Resort",
      accomodations: "Single e Double",
      vacancies: 103,
    },
    {
      pictureURL:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
      name: "Driven Resort",
      accomodations: "Single e Double",
      vacancies: 103,
    },
  ]);

  return (
    <>
      <SectionTitle>Primeiro, escolha seu hotel</SectionTitle>
      <StyledHotels>
        {hotels.map((hotel, index) => (
          <HotelCard
            selected={index === selected}
            setSelected={() => setSelected(index)}
            key={index}
            setHotel={() => setHotel(index)}
            pictureURL={hotel.pictureURL}
            name={hotel.name}
            accomodations={hotel.accomodations}
            vacancies={hotel.vacancies}
          />
        ))}
      </StyledHotels>
      {hotel !== undefined && <HotelRoom />}
    </>
  );
};

export default Hotel;

import SectionTitle from "../../Form/SectionTitle";
import HotelBox from "./HotelBox";

export default function HotelSummary({ hotelInfo }) {
  return (
    <>
      <SectionTitle>Você já escolheu seu quarto:</SectionTitle>
      <HotelBox hotelInfo={hotelInfo} />
    </>
  );
}

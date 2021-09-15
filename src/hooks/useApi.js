import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";
import TicketApi from "../services/TicketApi";
import BookingApi from "../services/BookingApi";
import HotelApi from "../services/HotelApi";
import RoomsApi from "../services/RoomsApi";

export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    ticket: new TicketApi(),
    booking: new BookingApi(),
    hotel: new HotelApi(),
    rooms: new RoomsApi()
  };
}

import api from "./api";

export default class BookingApi {
  postBookingInfo(bookingInfo, config) {
    return api.post("/booking", bookingInfo, config);
  }

  payBooking(bookingId, paymentInfo, config) {
    return api.post(`/booking/${bookingId}/pay`, paymentInfo, config);
  }
}

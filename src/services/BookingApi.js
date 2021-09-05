import api from "./api";

export default class BookingApi {
  postBookingInfo(bookingInfo, config) {
    return api.post("/booking", bookingInfo, config);
  }
}

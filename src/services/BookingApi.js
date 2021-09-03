import api from "./api";

export default class BookingApi {
  postBookingInfo() {
    return api.post("/booking");
  }
}

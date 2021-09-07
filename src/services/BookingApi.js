import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class BookingApi extends AuthenticatedApi {
  postBookingInfo(bookingInfo, config) {
    return api.post("/booking", bookingInfo, config);
  }

  getBookingInfo() {
    return api.get("/booking", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}


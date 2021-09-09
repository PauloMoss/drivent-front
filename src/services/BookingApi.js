import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class BookingApi extends AuthenticatedApi {
  postBookingInfo(bookingInfo) {
    return api.post("/booking", bookingInfo, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getBookingInfo() {
    return api.get("/booking", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  payBooking(bookingId, paymentInfo) {
    return api.post(`/booking/${bookingId}/pay`, paymentInfo, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}


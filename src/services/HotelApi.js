import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class HotelApi extends AuthenticatedApi {
  getHotelRooms(hotelId) {
    return api.get(`/hotel/${hotelId}/rooms`, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getHotels() {
    return api.get("/hotel", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
};

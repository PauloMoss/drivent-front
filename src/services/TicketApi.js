import api from "./api";

export default class TicketApi {
  getTicketsInfo(token) {
    return api.get("/tickets", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getAccommodationsInfo(token) {
    return api.get("/tickets/accommodation", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}

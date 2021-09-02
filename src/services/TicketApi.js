import api from "./api";

export default class TicketApi {
  getTicketsInfo() {
    return api.get("/tickets");
  }
}

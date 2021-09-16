import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class ActivitiesApi extends AuthenticatedApi {
  getActivities() {
    return api.get("/activities", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  enrollUser(body) {
    return api.post("/activities", body, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
};

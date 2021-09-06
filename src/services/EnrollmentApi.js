import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class EnrollmentApi extends AuthenticatedApi {
  save(body) {
    return api.post("/enrollments", body, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getPersonalInformations(user) {
    return api.get("/enrollments", {
      headers: {
        ...this.getAuthorizationHeader()
      },
    }, { user });
  }
}

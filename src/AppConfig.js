const baseUrl = "none";

const api = {
    session: baseUrl + "/session"
};

export default angular.module("app.config", [])
    .constant("API", api)
    .name;

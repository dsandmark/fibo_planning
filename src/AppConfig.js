const baseUrl = "http://localhost:8000/api";

const api = {
    session: {
        get: baseUrl + "/session/",
        create: baseUrl + "/session/create",
        clear: baseUrl + "/session/clear",
        vote: baseUrl + "/session/vote"
    }
};

export default angular.module("app.config", [])
    .constant("API", api)
    .name;

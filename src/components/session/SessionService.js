class SessionService {
    constructor($http, API) {
        this.$http = $http;
        this.API = API;
    }

    create() {
        return this.$http.post(this.API.session.create);
            // this.session.push({
            //     id: this.sessionId,
            //     votes: []
            // });
    }

    get(sessionId) {
        return this.$http.get(this.API.session.get + sessionId);
    }

    // vote(name, points) {
    //     const session = this.getSession(this.sessionId);

    //     session.votes.push({
    //         name,
    //         points
    //     });

    //     console.log(name, "voted", points, "points.");
    // }

    // createMockSession(sessionId) {
    //     this.sessionId = sessionId;

    //     this.create();
    // }
}

export default SessionService;

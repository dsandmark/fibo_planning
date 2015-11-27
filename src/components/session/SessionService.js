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

    // getSession(sessionId) {
    //     return _.find(this.sessions, (session) => {
    //         return session.id === sessionId;
    //     });
    // }

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

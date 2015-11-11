class SessionService {
    constructor() {
        this.sessions = [];
    }

    create() {
        this.sessions.push({
            id: this.sessionId,
            votes: []
        });
    }

    getSession(sessionId) {
        return _.find(this.sessions, (session) => {
            return session.id === sessionId;
        });
    }

    vote(sessionId, name, points) {
        const session = this.getSession(sessionId);

        session.votes.push({
            name,
            points
        });

        console.log(name, "voted", points, "points.");
    }

    createMockSession(sessionId) {
        this.create();

        return this.sessionId;
    }
}

export default SessionService;

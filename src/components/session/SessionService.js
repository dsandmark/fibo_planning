class SessionService {
    constructor() {
        this.sessions = [];

        this.nextId = 1000;
    }

    create() {
        this.nextId++;

        this.sessions.push({
            id: this.nextId,
            votes: []
        });

        return this.nextId;
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
}

export default SessionService;

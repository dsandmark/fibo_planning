class Session {
    constructor(properties) {
        this.name = properties.name;
        this.episodes = properties.episodes;
        this.actors = properties.actors;
        this.originalRelease = properties.originalRelease;
    }
}

export default Session;

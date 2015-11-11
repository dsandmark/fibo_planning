class SessionController {
    constructor(sessionService) {
    // constructor() {
        const sessionId = sessionService.create();

        sessionService.vote(sessionId, "Charles", 5);
    }
}

export default SessionController;

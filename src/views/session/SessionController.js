class SessionController {
    constructor($stateParams, sessionService) {
        this.sessionId = $stateParams.sessionId;

        sessionService.createMockSession(this.sessionId);

        sessionService.vote(this.sessionId, "Charles", 5);
    }
}

export default SessionController;

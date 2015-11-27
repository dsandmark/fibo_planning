class SessionController {
    constructor($state, $stateParams, sessionService) {
        this.sessionService = sessionService;
        this.$state = $state;

        if (!$stateParams.sessionId) {
            this.createNewSession();
            return;
        }

        this.sessionId = $stateParams.sessionId;
    }

    createNewSession() {
        this.sessionService.create().then(response => {
            this.$state.go("session", {
                sessionId: response.data.sessionId
            });
        });
    }

    // vote(points) {
    //     this.sessionService.vote()
    // }
}

export default SessionController;

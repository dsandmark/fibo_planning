class JoinController {
    constructor(sessionService) {
        this.sessionService = sessionService;

        this.displaySessionNotFoundMessage = false;
    }

    joinButtonActioned(formIsValid) {
        if (!formIsValid) {
            return;
        }

        let handleSessionFound = (response) => {
            console.log("response", response);
            console.log("Session found.");
        };

        let handleSessionNotFound = () => {
            this.displaySessionNotFoundMessage = true;
        };

        this.sessionService.get(this.sessionId).then(
            handleSessionFound,
            handleSessionNotFound
        );
    }
}

export default JoinController;

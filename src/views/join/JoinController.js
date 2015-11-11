class JoinController {
    constructor() {

    }

    joinButtonActioned(formIsValid) {
        console.log("Wants to join session:", this.sessionId);

        if (formIsValid) {
            console.log("Joining");
        } else {
            console.log("Form isn't valid.");
            // TODO Handle invalid form (show ngMessages)
        }
    }
}

export default JoinController;

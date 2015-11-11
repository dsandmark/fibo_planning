import angular from "angular";

import SessionController from "./SessionController";

let sessionModule = angular.module("sessionModule")
    .controller("SessionController", SessionController);

export const sessionRouteInfo = {
    // url: "/{sessionId:[0-9]{5}}",
    url: "/session",
    controller: "SessionController",
    controllerAs: "vm",
    templateUrl: "session/template.html"
};

export default sessionModule.name;

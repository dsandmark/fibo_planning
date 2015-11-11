import angular from "angular";

import JoinController from "./JoinController";

const joinModule = angular.module("joinModule", [])
    .controller("JoinController", JoinController);

export const joinRouteInfo = {
    url: "/join",
    controller: "JoinController",
    controllerAs: "vm",
    templateUrl: "join/template.html"
};

export default joinModule.name;

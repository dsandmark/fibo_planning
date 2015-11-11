import angular from "angular";

import HomeController from "./HomeController";

let homeModule = angular.module("homeModule", [])
    .controller("HomeController", HomeController);

export const homeRouteInfo = {
    url: "/",
    controller: "HomeController",
    controllerAs: "vm",
    templateUrl: "home/template.html"
};

export default homeModule.name;

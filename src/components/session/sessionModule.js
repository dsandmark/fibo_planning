import angular from "angular";

import SessionService from "./SessionService";

const sessionModule = angular.module("sessionModule", [])
    .service("sessionService", SessionService);

export default sessionModule.name;

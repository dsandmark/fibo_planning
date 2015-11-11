import angular from "angular";

import sessionModule from "./session/sessionModule";

const componentsModule = angular.module("app.components", [
    sessionModule
]);

export default componentsModule.name;

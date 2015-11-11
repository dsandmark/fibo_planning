import angular from "angular";

import sessionModule from "./session/sessionModule";
import headerModule from "./header/headerModule";

const componentsModule = angular.module("app.components", [
    headerModule,
    sessionModule
]);

export default componentsModule.name;

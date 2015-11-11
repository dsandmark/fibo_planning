import angular from "angular";

import homeModule from "./home/homeModule";
import sessionModule from "./session/sessionModule";

let viewsModule = angular.module("app.views", [
    homeModule,
    sessionModule
]);

export default viewsModule.name;

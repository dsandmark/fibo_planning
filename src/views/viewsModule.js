import angular from "angular";

import homeModule from "./home/homeModule";
import joinModule from "./join/joinModule";
import sessionModule from "./session/sessionModule";

let viewsModule = angular.module("app.views", [
    homeModule,
    joinModule,
    sessionModule
]);

export default viewsModule.name;

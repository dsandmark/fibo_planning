import {homeRouteInfo} from "./views/home/homeModule";
import {joinRouteInfo} from "./views/join/joinModule";
import {sessionRouteInfo} from "./views/session/sessionModule";

function Routes($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state("home", homeRouteInfo)
        .state("join", joinRouteInfo)
        .state("session", sessionRouteInfo);

    $urlRouterProvider.otherwise("/");
}

export default Routes;

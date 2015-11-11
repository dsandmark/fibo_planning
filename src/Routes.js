import {homeRouteInfo} from "./views/home/homeModule";
import {sessionRouteInfo} from "./views/session/sessionModule";

function Routes($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state("home", homeRouteInfo)
        .state("session", sessionRouteInfo);

    $urlRouterProvider.otherwise("/");
}

export default Routes;

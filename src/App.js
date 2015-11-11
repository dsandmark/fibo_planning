import angular from "angular";
import "angular-ui-router";
import "angular-material";
import "angular-material-icons";
import "angular-resource";

// import modelsModule from "./models/modelsModule";
import componentsModule from "./components/componentsModule";
import viewsModule from "./views/viewsModule";
import appConfig from "./AppConfig";

import Routes from "./Routes";

import templatesModule from "./templates";

const dependencies = [
    "ui.router",
    "ngMaterial",
    "ngMdIcons",
    "ngResource",
    componentsModule,
    templatesModule.name,
    // modelsModule,
    viewsModule,
    appConfig
];

const app = angular
    .module("app", dependencies)
    .config(Routes);

angular.element(document).ready(() => {
    angular.bootstrap(document, ["app"]);
});

export default app;

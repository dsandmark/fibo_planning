import controller from "./HeaderController";

function headerDirective() {
    return {
        controller,
        templateUrl: "header/template.html",
        restrict: "E",
        controllerAs: "vm",
        scope: {},
        bindToController: true
    };
}

export default headerDirective;

import angular from "angular";
import headerDirective from "./headerDirective";

const headerModule = angular.module("fpHeader", [])
    .directive("fpHeader", headerDirective);

export default headerModule.name;

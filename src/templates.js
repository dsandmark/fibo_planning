'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("header/template.html","<div layout=\"column\">\n    <md-content flex>\n        <md-card>\n            <md-card-content ui-sref=\"home\">\n                <h2>Fibo Planning</h2>\n            </md-card-content>\n        </md-card>\n    </md-content>\n</div>\n");
$templateCache.put("home/template.html","<md-content>\n    <section layout-sm=\"column\">\n        <md-button class=\"md-primary\"\n                   ui-sref=\"join\">\n            Join session\n        </md-button>\n\n        <md-button>Start session</md-button>\n    </section>\n</md-content>\n");
$templateCache.put("join/template.html","<md-content layout-sm layout-align=\"center center\">\n\n    <form name=\"joinSessionForm\" novalidate layout-fill layout-padding>\n        <h1 class=\"md-title\">Join Session</h1>\n\n        <md-input-container>\n            <label>Session ID</label>\n            <input required name=\"sessionId\" ng-model=\"vm.sessionId\"\n                   type=\"text\" ng-pattern=\"/^\\d{5}$/\">\n\n            <div ng-messages=\"joinSessionForm.sessionId.$error\">\n                <div ng-message=\"pattern\">\n                    Session ID needs to be five digits.\n                </div>\n            </div>\n        </md-input-container>\n\n        <div layout-sm=\"row\" layout-align-sm=\"end\">\n            <md-button class=\"md-primary\"\n                       ng-click=\"vm.joinButtonActioned(joinSessionForm.$valid)\">\n                Join\n            </md-button>\n        </div>\n    </form>\n\n</md-content>\n");
$templateCache.put("session/template.html","");}]);
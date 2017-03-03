var novatrox;
(function(ns) {
    ns.detailsDirective = function($injector) {
        return {
            scope: true,
            link: function(scope, element, attrs, controller) {
                var ctrl = $injector.instantiate(novatrox.DetailsController, { $scope: scope });
                scope[attrs.novatroxDetails] = ctrl;

                scope.$on("$destroy", function() {
                    ctrl.onUnload();
                });
            }
        }
    }
})(novatrox || (novatrox = {}));
var novatrox;
(function(ns) {
    ns.appDirective = function($injector) {
        return {
            scope: true,
            link: function(scope, element, attrs, controller) {
                var ctrl = $injector.instantiate(novatrox.AppController, { $scope: scope });
                scope[attrs.novatroxApp] = ctrl;

                var watch = scope.$watch(function() { return ctrl.query; }, function(newVal, oldVal) {
                    if (newVal === oldVal) return;
                    
                    ctrl.onQueryChanged(newVal);
                });
                scope.$on("$destroy", function() {
                    watch();
                });
            }
        }
    }
})(novatrox || (novatrox = {}));
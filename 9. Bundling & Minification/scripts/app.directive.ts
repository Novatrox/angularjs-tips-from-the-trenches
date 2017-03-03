import * as angular from 'angular';

import { AppController } from './app.controller';

export class AppDirective implements ng.IDirective {
    constructor(private $injector: any) { }

    static create($injector: any) {
        return new AppDirective($injector);
    }

    scope = true;
    link = function(scope: ng.IScope, element: any, attrs: any, controller: any) {

        var ctrl: AppController = this.$injector.instantiate(AppController, { $scope: scope });
        scope[attrs.novatroxApp] = ctrl;

        var watch = scope.$watch(function() { return scope[attrs.novatroxApp].query; }, function(newVal, oldVal) {
            if (newVal === oldVal) return;
            
            ctrl.onQueryChanged(newVal);
        });

        scope.$on("$destroy", function() {
            watch();
        });
    }
}
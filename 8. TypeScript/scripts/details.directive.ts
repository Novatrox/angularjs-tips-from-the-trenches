import * as angular from 'angular';

import { DetailsController } from './details.controller';

export class DetailsDirective implements ng.IDirective {
    constructor(private $injector: any) { }

    static create($injector: any) {
        return new DetailsDirective($injector);
    }

    scope = true;
    link = function(scope: ng.IScope, element: any, attrs: any, controller: any) {

        var ctrl: DetailsController = this.$injector.instantiate(DetailsController, { $scope: scope });
        scope[attrs.novatroxDetails] = ctrl;

        scope.$on("$destroy", function() {
            ctrl.onUnload();
        });
    }
}
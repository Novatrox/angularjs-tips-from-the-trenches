System.register(["angular"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular, AppConfig;
    return {
        setters: [
            function (angular_1) {
                angular = angular_1;
            }
        ],
        execute: function () {
            AppConfig = (function () {
                function AppConfig() {
                }
                AppConfig.config = function (spotifyServiceProvider) {
                    var defaults = {
                        delay: 0
                    };
                    var config = angular.extend(defaults, window['appConfig'] || {});
                    spotifyServiceProvider.setDelay(config.delay);
                };
                return AppConfig;
            }());
            exports_1("AppConfig", AppConfig);
        }
    };
});
//# sourceMappingURL=app.config.js.map
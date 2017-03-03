System.register(["angular", "./app.config", "./spotify.service", "./spotify-search.component", "./spotify-list.component", "./spotify-details.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular, app_config_1, spotify_service_1, spotify_search_component_1, spotify_list_component_1, spotify_details_component_1;
    return {
        setters: [
            function (angular_1) {
                angular = angular_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (spotify_service_1_1) {
                spotify_service_1 = spotify_service_1_1;
            },
            function (spotify_search_component_1_1) {
                spotify_search_component_1 = spotify_search_component_1_1;
            },
            function (spotify_list_component_1_1) {
                spotify_list_component_1 = spotify_list_component_1_1;
            },
            function (spotify_details_component_1_1) {
                spotify_details_component_1 = spotify_details_component_1_1;
            }
        ],
        execute: function () {
            angular.module("novatrox.ng", [])
                .provider("spotifyService", spotify_service_1.SpotifyServiceProvider)
                .component("spotifySearch", {
                templateUrl: "/scripts/spotify-search.template.html",
                controller: spotify_search_component_1.SpotifySearchComponent,
                controllerAs: "ctrl",
                bindings: {
                    title: '<'
                }
            })
                .component("spotifyList", {
                templateUrl: "/scripts/spotify-list.template.html",
                controller: spotify_list_component_1.SpotifyListComponent,
                controllerAs: "ctrl",
                bindings: {
                    items: '<',
                    onItemSelected: '&'
                }
            })
                .component("spotifyDetails", {
                templateUrl: "/scripts/spotify-details.template.html",
                controller: spotify_details_component_1.SpotifyDetailsComponent,
                controllerAs: "ctrl",
                bindings: {
                    item: '<'
                }
            })
                .config(app_config_1.AppConfig.config);
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['novatrox.ng']);
            });
        }
    };
});
//# sourceMappingURL=app.js.map
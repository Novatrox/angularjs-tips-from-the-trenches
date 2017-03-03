import * as angular from 'angular';

import { AppConfig } from './app.config';
import { SpotifyServiceProvider } from './spotify.service';
import { SpotifySearchComponent } from './spotify-search.component';
import { SpotifyListComponent } from './spotify-list.component';
import { SpotifyDetailsComponent } from './spotify-details.component';

angular.module("novatrox.ng", [])
    .provider("spotifyService", SpotifyServiceProvider)
    .component("spotifySearch", {
        templateUrl: "/scripts/spotify-search.template.html",
        controller: SpotifySearchComponent,
        controllerAs: "ctrl",
        bindings: {
            title: '<'
        }
    })
    .component("spotifyList", {
        templateUrl: "/scripts/spotify-list.template.html",
        controller: SpotifyListComponent,
        controllerAs: "ctrl",
        bindings: {
            items: '<',
            onItemSelected: '&'
        }
    })
    .component("spotifyDetails", {
        templateUrl: "/scripts/spotify-details.template.html",
        controller: SpotifyDetailsComponent,
        controllerAs: "ctrl",
        bindings: {
            item: '<'
        }
    })
    .config(AppConfig.config);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['novatrox.ng']);
});
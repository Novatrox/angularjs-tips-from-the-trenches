import * as angular from 'angular';

import { AppConfig } from './app.config';
import { MessagingService } from './messaging.service';
import { SpotifyServiceProvider } from './spotify.service';
import { AppDirective } from './app.directive';
import { DetailsDirective } from './details.directive';

angular.module("novatrox.ng", [])
    .service("messagingService", MessagingService)
    .provider("spotifyService", SpotifyServiceProvider)
    .directive("novatroxApp", AppDirective.create)
    .directive("novatroxDetails", DetailsDirective.create)
    .config(AppConfig.config);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['novatrox.ng']);
});
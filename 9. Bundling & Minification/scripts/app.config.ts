import * as angular from 'angular';

export class AppConfig {
    public static config(spotifyServiceProvider) {
        var defaults = {
            delay: 0
        }

        var config = angular.extend(defaults, window['appConfig'] || {});
        
        spotifyServiceProvider.setDelay(config.delay);
    }
}
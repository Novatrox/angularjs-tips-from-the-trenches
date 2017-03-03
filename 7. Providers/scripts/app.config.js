var novatrox;
(function(ns) {
    ns.appConfig = function(spotifyServiceProvider) {
        var defaults = {
            delay: 0
        }

        var config = angular.extend(defaults, window.appConfig || {});
        
        spotifyServiceProvider.setDelay(config.delay);
    }
})(novatrox || (novatrox = {}));
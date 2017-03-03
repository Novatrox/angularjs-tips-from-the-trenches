System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SpotifyService, SpotifyServiceProvider;
    return {
        setters: [],
        execute: function () {
            SpotifyService = (function () {
                function SpotifyService($http, $q, $timeout, delay) {
                    this.$http = $http;
                    this.$q = $q;
                    this.$timeout = $timeout;
                    this.delay = delay;
                }
                SpotifyService.prototype.searchArtists = function (query) {
                    var _this = this;
                    return this.$q(function (resolve, reject) {
                        _this.$timeout(function () {
                            _this.$http.get("https://api.spotify.com/v1/search?q=" + encodeURI(query) + "&type=artist")
                                .then(function (response) {
                                resolve(response.data['artists'].items);
                            });
                        }, _this.delay);
                    });
                };
                return SpotifyService;
            }());
            exports_1("SpotifyService", SpotifyService);
            SpotifyServiceProvider = (function () {
                function SpotifyServiceProvider() {
                    this.delay = 0;
                    this.setDelay = function (ms) {
                        this.delay = ms;
                    };
                }
                SpotifyServiceProvider.prototype.$get = function ($http, $q, $timeout) {
                    return new SpotifyService($http, $q, $timeout, this.delay);
                };
                return SpotifyServiceProvider;
            }());
            exports_1("SpotifyServiceProvider", SpotifyServiceProvider);
        }
    };
});
//# sourceMappingURL=spotify.service.js.map
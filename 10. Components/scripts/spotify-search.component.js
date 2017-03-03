System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SpotifySearchComponent;
    return {
        setters: [],
        execute: function () {
            SpotifySearchComponent = (function () {
                function SpotifySearchComponent(spotifyService) {
                    this.spotifyService = spotifyService;
                }
                SpotifySearchComponent.prototype.$onInit = function () {
                    console.log("SpotifySearchComponent initialized");
                };
                SpotifySearchComponent.prototype.$onDestroy = function () {
                    console.log("SpotifySearchComponent destroyed");
                };
                SpotifySearchComponent.prototype.selectItem = function (item) {
                    this.selectedItem = item;
                };
                SpotifySearchComponent.prototype.onQueryChanged = function (query) {
                    var _this = this;
                    delete this.items;
                    if (query.length < 3)
                        return;
                    this.isLoading = true;
                    this.spotifyService.searchArtists(query)
                        .then(function (artists) {
                        _this.items = artists;
                        _this.isLoading = false;
                    });
                };
                Object.defineProperty(SpotifySearchComponent.prototype, "query", {
                    get: function () {
                        return this._query;
                    },
                    set: function (value) {
                        this._query = value;
                        this.onQueryChanged(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                return SpotifySearchComponent;
            }());
            exports_1("SpotifySearchComponent", SpotifySearchComponent);
        }
    };
});
//# sourceMappingURL=spotify-search.component.js.map
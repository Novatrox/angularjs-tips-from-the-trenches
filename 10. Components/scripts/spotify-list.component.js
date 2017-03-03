System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SpotifyListComponent;
    return {
        setters: [],
        execute: function () {
            SpotifyListComponent = (function () {
                function SpotifyListComponent() {
                }
                SpotifyListComponent.prototype.selectItem = function (item) {
                    this.onItemSelected({ item: item });
                };
                return SpotifyListComponent;
            }());
            exports_1("SpotifyListComponent", SpotifyListComponent);
        }
    };
});
//# sourceMappingURL=spotify-list.component.js.map
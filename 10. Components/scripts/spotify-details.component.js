System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SpotifyDetailsComponent;
    return {
        setters: [],
        execute: function () {
            SpotifyDetailsComponent = (function () {
                function SpotifyDetailsComponent() {
                }
                SpotifyDetailsComponent.prototype.onItemSelected = function (item) {
                    if (!item)
                        return;
                    if (item.images && item.images.length > 0) {
                        this.imageUrl = item.images[0].url;
                    }
                    else {
                        this.imageUrl = null;
                    }
                };
                Object.defineProperty(SpotifyDetailsComponent.prototype, "item", {
                    get: function () {
                        return this._item;
                    },
                    set: function (value) {
                        this._item = value;
                        this.onItemSelected(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                return SpotifyDetailsComponent;
            }());
            exports_1("SpotifyDetailsComponent", SpotifyDetailsComponent);
        }
    };
});
//# sourceMappingURL=spotify-details.component.js.map
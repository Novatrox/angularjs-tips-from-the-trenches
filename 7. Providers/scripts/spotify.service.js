var novatrox;
(function(ns) {
    function SpotifyService($http, $q, $timeout, delay) {
        this.searchArtists = function(query) {
            return $q(function(resolve, reject) {
                $timeout(function() {
                    $http.get("https://api.spotify.com/v1/search?q=" + encodeURI(query) + "&type=artist")
                        .then(function(response) {
                            resolve(response.data.artists.items);
                        })
                }, delay);
            });
        }
    }

    ns.spotifyServiceProvider = function() {
        var delay = 0;

        this.setDelay = function(ms) {
            delay = ms;
        }

        this.$get = function($http, $q, $timeout) {
            return new SpotifyService($http, $q, $timeout, delay);
        }
    }
})(novatrox || (novatrox = {}));
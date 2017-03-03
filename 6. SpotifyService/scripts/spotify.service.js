var novatrox;
(function(ns) {
    ns.SpotifyService = function($http) {
        this.searchArtists = function(query) {
            return $http.get("https://api.spotify.com/v1/search?q=" + encodeURI(query) + "&type=artist")
                .then(function(response) {
                    return response.data.artists.items;
                })
        }
    }
})(novatrox || (novatrox = {}));
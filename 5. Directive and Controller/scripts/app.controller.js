var novatrox;
(function(ns) {
    ns.AppController = function($http, messagingService) {
        var self = this;
        self.title = "Spotify";

        self.onQueryChanged = function(query) {
            delete self.items;

            if (query.length < 3) return;
            
            self.isLoading = true;
            $http.get("https://api.spotify.com/v1/search?q=" + encodeURI(query) + "&type=artist")
                .then(function(response) {
                    self.items = response.data.artists.items;
                    self.isLoading = false;
                })
        }
        
        self.selectItem = function(item) {
            messagingService.publish("itemSelected", item);
        }
    }
})(novatrox || (novatrox = {}));
var novatrox;
(function(ns) {
    ns.AppController = function(messagingService, spotifyService) {
        var self = this;
        self.title = "Spotify";

        self.onQueryChanged = function(query) {
            delete self.items;

            if (query.length < 3) return;
            
            self.isLoading = true;
            spotifyService.searchArtists(query)
                .then(function(artists) {
                    self.items = artists;
                    self.isLoading = false;
                })
        }
        
        self.selectItem = function(item) {
            messagingService.publish("itemSelected", item);
        }
    }
})(novatrox || (novatrox = {}));
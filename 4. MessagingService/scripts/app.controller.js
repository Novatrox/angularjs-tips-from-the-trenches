var novatrox;
(function(ns) {
    ns.AppController = function($scope, $http, messagingService) {
        var self = this;
        self.title = "Spotify";

        var watch = $scope.$watch(function() { return self.query; }, function(newVal, oldVal) {
            if (newVal === oldVal) return;
            
            delete self.items;

            if (newVal.length < 3) return;
            
            self.isLoading = true;
            $http.get("https://api.spotify.com/v1/search?q=" + encodeURI(newVal) + "&type=artist")
                .then(function(response) {
                    self.items = response.data.artists.items;
                    self.isLoading = false;
                })
        });
        $scope.$on("$destroy", function() {
            watch();
        });
        
        self.selectItem = function(item) {
            messagingService.publish("itemSelected", item);
        }
    }
})(novatrox || (novatrox = {}));
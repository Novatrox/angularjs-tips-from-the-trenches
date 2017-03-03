var novatrox;
(function(ns) {
    ns.DetailsController = function($scope, messagingService) {
        var self = this;
        self.hasDetails = false;

        var subscription = messagingService.subscribe("itemSelected", function(item) {
            self.hasDetails = true;
            self.name = item.name;

            if (item.images && item.images.length > 0) {
                self.imageUrl = item.images[0].url;
            } else {
                delete self.imageUrl;
            }
        })
        $scope.$on("$destroy", function() {
            subscription.unsubscribe();
        });
    }
})(novatrox || (novatrox = {}));
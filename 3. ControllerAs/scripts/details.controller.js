var novatrox;
(function(ns) {
    ns.DetailsController = function($scope) {
        var self = this;
        self.hasDetails = false;

        $scope.$on("itemSelected", function(name, args) {
            self.hasDetails = true;
            self.name = args.name;

            if (args.images && args.images.length > 0) {
                self.imageUrl = args.images[0].url;
            } else {
                delete self.imageUrl;
            }
        });
    }
})(novatrox || (novatrox = {}));
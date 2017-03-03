var novatrox;
(function(ns) {
    ns.DetailsController = function($scope) {
        $scope.hasDetails = false;

        $scope.$on("itemSelected", function(name, args) {
            $scope.hasDetails = true;
            $scope.name = args.name;

            if (args.images && args.images.length > 0) {
                $scope.imageUrl = args.images[0].url;
            } else {
                delete $scope.imageUrl;
            }
        });
    }
})(novatrox || (novatrox = {}));
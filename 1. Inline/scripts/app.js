angular.module("novatrox.ng", [])
    .controller("appCtrl", function($scope, $http) {
        $scope.title = "Spotify";

        var watch = $scope.$watch("query", function(newVal, oldVal) {
            if (newVal === oldVal) return;
            
            delete $scope.items;

            if (newVal.length < 3) return;
            
            $scope.isLoading = true;
            $http.get("https://api.spotify.com/v1/search?q=" + encodeURI(newVal) + "&type=artist")
                .then(function(response) {
                    $scope.items = response.data.artists.items;
                    $scope.isLoading = false;
                })
        });
        $scope.$on("$destroy", function() {
            watch();
        });
        
        $scope.selectItem = function(item) {
            $scope.$broadcast("itemSelected", item);
        }
    })
    .controller("detailsCtrl", function($scope) {
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
    });